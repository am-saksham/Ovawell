document.getElementById("tracker-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page.

    const startDate = new Date(document.getElementById("start-date").value);
    const cycleLength = parseInt(document.getElementById("cycle-length").value);
    const periodLength = parseInt(document.getElementById("period-length").value);

    // Ensure all fields are filled correctly
    if (!isNaN(startDate) && !isNaN(cycleLength) && !isNaN(periodLength)) {
        // Log the cycle length to check if the value is being captured correctly
        console.log("Cycle Length:", cycleLength);

        // Calculate the next period start date
        const nextPeriodDate = new Date(startDate);
        nextPeriodDate.setDate(startDate.getDate() + cycleLength);

        // Display next period date
        document.getElementById("next-period-date").textContent = 
            `Your next period is expected on: ${nextPeriodDate.toDateString()}`;

        // Calculate ovulation date
        const ovulationDate = new Date(nextPeriodDate);
        ovulationDate.setDate(nextPeriodDate.getDate() - 14);
        document.getElementById("ovulation-date").textContent = 
            `Your ovulation day is expected on: ${ovulationDate.toDateString()}`;

        // Check for PCOD indicators and symptoms
        const symptoms = checkPCOD(cycleLength, periodLength);
        if (symptoms.length > 0) {
            document.getElementById("pcod-symptoms").innerHTML = ` 
                <h3>Potential PCOD Symptoms:</h3>
                <ul>${symptoms.map(symptom => `<li>${symptom}</li>`).join("")}</ul>
                <p>We recommend consulting a healthcare provider for further evaluation.</p>
            `;
        } else {
            document.getElementById("pcod-symptoms").textContent = "Your cycle data appears normal. No PCOD symptoms detected.";
        }

        // Update the calendar
        showCalendar(startDate.getMonth(), startDate.getFullYear(), startDate, nextPeriodDate, ovulationDate, periodLength);
    } else {
        alert("Please fill in all fields correctly!");
    }
});

function checkPCOD(cycleLength, periodLength) {
    const symptoms = [];

    // Check if cycle length is less than 21
    if (cycleLength < 21) {
        symptoms.push("Your cycle length is less than 21 days. We recommend doing exercises to help normalize your cycle. If the issue persists, please consult a healthcare provider.");
    }
    // Check for irregular cycle length (more than 35)
    if (cycleLength > 35) {
        symptoms.push("Irregular periods (cycle length over 35 days).");
    }
    // Check for abnormal period length (less than 2 or more than 7)
    if (periodLength < 2 || periodLength > 7) {
        symptoms.push("Abnormal period length (very short or very long periods).");
    }

    return symptoms;
}

function showCalendar(month, year, startDate, nextPeriodDate, ovulationDate, periodLength) {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = ""; // Clear the previous calendar

    // Create a grid for days of the week
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    daysOfWeek.forEach((day) => {
        const dayElement = document.createElement("div");
        dayElement.textContent = day;
        dayElement.style.fontWeight = "bold";
        dayElement.style.textAlign = "center";
        calendar.appendChild(dayElement);
    });

    // Get the first and last days of the month
    const firstDay = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0); // Last day of the month

    // Empty cells for the days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyCell = document.createElement("div");
        calendar.appendChild(emptyCell);
    }

    // Generate the days of the month
    for (let day = 1; day <= lastDate.getDate(); day++) {
        const dateCell = document.createElement("div");
        dateCell.textContent = day;

        // Highlight period days
        const cellDate = new Date(year, month, day);
        if (
            cellDate >= startDate &&
            cellDate < new Date(startDate.getTime() + periodLength * 24 * 60 * 60 * 1000)
        ) {
            dateCell.style.backgroundColor = "#ff9999"; // Light red for period days
        }

        // Highlight next period start date
        if (cellDate.toDateString() === nextPeriodDate.toDateString()) {
            dateCell.style.backgroundColor = "#ff4f5a"; // Red for next period
            dateCell.style.color = "white";
        }

        // Highlight ovulation date
        if (cellDate.toDateString() === ovulationDate.toDateString()) {
            dateCell.style.backgroundColor = "#ffd700"; // Yellow for ovulation
        }

        calendar.appendChild(dateCell);
    }
}