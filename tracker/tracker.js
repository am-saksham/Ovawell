document.getElementById('trackerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const startDate = new Date(document.getElementById('startDate').value);
    const cycleLength = parseInt(document.getElementById('cycleLength').value);
    const periodLength = parseInt(document.getElementById('periodLength').value);

    // Calculate next period dates
    const nextPeriodStart = new Date(startDate);
    nextPeriodStart.setDate(startDate.getDate() + cycleLength);

    const nextPeriodEnd = new Date(nextPeriodStart);
    nextPeriodEnd.setDate(nextPeriodStart.getDate() + periodLength);

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Next period starts on: ${nextPeriodStart.toDateString()}</p>
        <p>Next period ends on: ${nextPeriodEnd.toDateString()}</p>
    `;
    resultDiv.style.display = 'block';
});
document.addEventListener("DOMContentLoaded", function () {
    var animation = lottie.loadAnimation({
        container: document.getElementById("lottie-animation"), // Target element
        renderer: "svg", // "canvas" or "html" also available
        loop: true, // Keep looping the animation
        autoplay: true, // Auto start the animation
        animationData: {"v":"4.8.0","meta":{"g":"LottieFiles AE ","a":"","k":"","d":"","tc":""},"fr":24,"ip":0,"op":48,"w":2000,"h":2000,"nm":"Flowy Hair Woman-Lottie Final","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":0,"nm":"4","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2930,273,0],"ix":2},"a":{"a":0,"k":[1750.5,1750.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":21,"nm":"Fill","np":9,"mn":"ADBE Fill","ix":1,"en":1,"ef":[{"ty":10,"nm":"Fill Mask","mn":"ADBE Fill-0001","ix":1,"v":{"a":0,"k":0,"ix":1}},{"ty":7,"nm":"All Masks","mn":"ADBE Fill-0007","ix":2,"v":{"a":0,"k":0,"ix":2}},{"ty":2,"nm":"Color","mn":"ADBE Fill-0002","ix":3,"v":{"a":0,"k":[0.690196096897,0.003921568859,0.290196090937,1],"ix":3}},{"ty":7,"nm":"Invert","mn":"ADBE Fill-0006","ix":4,"v":{"a":0,"k":0,"ix":4}},{"ty":0,"nm":"Horizontal Feather","mn":"ADBE Fill-0003","ix":5,"v":{"a":0,"k":0,"ix":5}},{"ty":0,"nm":"Vertical Feather","mn":"ADBE Fill-0004","ix":6,"v":{"a":0,"k":0,"ix":6}},{"ty":0,"nm":"Opacity","mn":"ADBE Fill-0005","ix":7,"v":{"a":0,"k":1,"ix":7}}]}],"w":3501,"h":3501,"ip":0,"op":48,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"3","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2630,273,0],"ix":2},"a":{"a":0,"k":[1750.5,1750.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":21,"nm":"Fill","np":9,"mn":"ADBE Fill","ix":1,"en":1,"ef":[{"ty":10,"nm":"Fill Mask","mn":"ADBE Fill-0001","ix":1,"v":{"a":0,"k":0,"ix":1}},{"ty":7,"nm":"All Masks","mn":"ADBE Fill-0007","ix":2,"v":{"a":0,"k":0,"ix":2}},{"ty":2,"nm":"Color","mn":"ADBE Fill-0002","ix":3,"v":{"a":0,"k":[0.8784314394,0,0,1],"ix":3}},{"ty":7,"nm":"Invert","mn":"ADBE Fill-0006","ix":4,"v":{"a":0,"k":0,"ix":4}},{"ty":0,"nm":"Horizontal Feather","mn":"ADBE Fill-0003","ix":5,"v":{"a":0,"k":0,"ix":5}},{"ty":0,"nm":"Vertical Feather","mn":"ADBE Fill-0004","ix":6,"v":{"a":0,"k":0,"ix":6}},{"ty":0,"nm":"Opacity","mn":"ADBE Fill-0005","ix":7,"v":{"a":0,"k":1,"ix":7}}]}],"w":3501,"h":3501,"ip":0,"op":48,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"2","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2330,273,0],"ix":2},"a":{"a":0,"k":[1750.5,1750.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":21,"nm":"Fill","np":9,"mn":"ADBE Fill","ix":1,"en":1,"ef":[{"ty":10,"nm":"Fill Mask","mn":"ADBE Fill-0001","ix":1,"v":{"a":0,"k":0,"ix":1}},{"ty":7,"nm":"All Masks","mn":"ADBE Fill-0007","ix":2,"v":{"a":0,"k":0,"ix":2}},{"ty":2,"nm":"Color","mn":"ADBE Fill-0002","ix":3,"v":{"a":0,"k":[0.937254965305,0.286274522543,0.015686275437,1],"ix":3}},{"ty":7,"nm":"Invert","mn":"ADBE Fill-0006","ix":4,"v":{"a":0,"k":0,"ix":4}},{"ty":0,"nm":"Horizontal Feather","mn":"ADBE Fill-0003","ix":5,"v":{"a":0,"k":0,"ix":5}},{"ty":0,"nm":"Vertical Feather","mn":"ADBE Fill-0004","ix":6,"v":{"a":0,"k":0,"ix":6}},{"ty":0,"nm":"Opacity","mn":"ADBE Fill-0005","ix":7,"v":{"a":0,"k":1,"ix":7}}]}],"w":3501,"h":3501,"ip":0,"op":48,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"1","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2030,273,0],"ix":2},"a":{"a":0,"k":[1750.5,1750.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":21,"nm":"Fill","np":9,"mn":"ADBE Fill","ix":1,"en":1,"ef":[{"ty":10,"nm":"Fill Mask","mn":"ADBE Fill-0001","ix":1,"v":{"a":0,"k":0,"ix":1}},{"ty":7,"nm":"All Masks","mn":"ADBE Fill-0007","ix":2,"v":{"a":0,"k":0,"ix":2}},{"ty":2,"nm":"Color","mn":"ADBE Fill-0002","ix":3,"v":{"a":0,"k":[0.964705944061,0.474509835243,0.015686275437,1],"ix":3}},{"ty":7,"nm":"Invert","mn":"ADBE Fill-0006","ix":4,"v":{"a":0,"k":0,"ix":4}},{"ty":0,"nm":"Horizontal Feather","mn":"ADBE Fill-0003","ix":5,"v":{"a":0,"k":0,"ix":5}},{"ty":0,"nm":"Vertical Feather","mn":"ADBE Fill-0004","ix":6,"v":{"a":0,"k":0,"ix":6}},{"ty":0,"nm":"Opacity","mn":"ADBE Fill-0005","ix":7,"v":{"a":0,"k":1,"ix":7}}]}],"w":3501,"h":3501,"ip":0,"op":48,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Face","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[885,885,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1188,8],[85,-83],[-33,-10.001],[0.961,-23.067],[2,-34],[-17,-25],[-5,-7],[12.748,-29.419],[0,-10],[-248,-8],[0,0],[0,0]],"o":[[0,0],[-72,560],[-85,83],[33,10],[-1,24.001],[-4,36],[-47,15],[5,7],[-13,30],[0,10],[248,8],[0,0],[0,0]],"v":[[843,-910],[-393,-906],[-712,-75],[-695,48],[-649,109],[-671,164],[-633,233],[-657,293],[-646,346],[-681,424],[-472,560],[120,944],[860,944]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":48,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Red BG","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[881.812,646.109,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[1777.25,1777.25],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.878431432387,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.188,238.891],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":48,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Bg","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[885,885,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[2121.453,2111.203],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.727,23.602],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":48,"st":0,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Flowy Hair Shape Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":48,"s":[-30]}],"ix":10},"p":{"a":0,"k":[1750.5,1750.5,0],"ix":2},"a":{"a":0,"k":[1750.5,1750.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-147.056],[36.25,-135.627],[71.087,-122.867],[101.149,-101.149],[124.636,-72.11],[140.334,-37.508],[147.056,0],[135.627,36.25],[122.867,71.087],[101.15,101.149],[72.11,124.636],[37.508,140.334],[0,147.056],[-36.25,135.627],[-71.087,122.867],[-101.149,101.149],[-124.636,72.11],[-140.334,37.509],[-147.056,0],[-135.627,-36.251],[-122.867,-71.087],[-101.149,-101.15],[-72.111,-124.635],[-37.508,-140.334]],"o":[[0,147.057],[-37.509,140.334],[-72.11,124.636],[-101.15,101.149],[-122.867,71.088],[-135.627,36.25],[-147.056,0],[-140.334,-37.509],[-124.635,-72.11],[-101.149,-101.15],[-71.088,-122.867],[-36.25,-135.627],[0,-147.056],[37.509,-140.334],[72.11,-124.635],[101.15,-101.149],[122.867,-71.088],[135.627,-36.25],[147.057,0],[140.334,37.508],[124.635,72.111],[101.149,101.149],[71.087,122.867],[36.25,135.627]],"v":[[1677.5,0],[1553.111,416.189],[1452.995,838.886],[1136.674,1136.675],[838.885,1452.995],[416.188,1553.111],[0,1677.5],[-416.189,1553.111],[-838.886,1452.995],[-1136.675,1136.674],[-1452.995,838.885],[-1553.111,416.188],[-1677.5,0],[-1553.111,-416.189],[-1452.995,-838.886],[-1136.674,-1136.675],[-838.885,-1452.995],[-416.188,-1553.111],[0,-1677.5],[416.189,-1553.11],[838.886,-1452.995],[1136.675,-1136.673],[1452.996,-838.885],[1553.111,-416.188]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.415686304429,0.796078491211,0.882353001015,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1750.062,1750.058],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":48,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Flowy Hair Woman-Lottie","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1000,1000,0],"ix":2},"a":{"a":0,"k":[885,885,0],"ix":1},"s":{"a":0,"k":[114,114,100],"ix":6}},"ao":0,"w":1770,"h":1770,"ip":0,"op":48,"st":0,"bm":0}],"markers":[]}, // Replace this with the JSON object
    });

    // Hide the loader after 3 seconds (or when content is ready)
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3000);
});
// Function to save email
function saveEmail() {
    let email = document.getElementById("userEmail").value.trim();
    
    // Email validation regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    localStorage.setItem("userEmail", email);
    alert("Email saved successfully!");

    // Enable the "I Agree" button
    let agreeBtn = document.getElementById("agreeBtn");
    agreeBtn.disabled = false;
    agreeBtn.classList.add("enabled");
}

function acceptPrivacy() {
    if (!localStorage.getItem("userEmail")) {
        alert("Please enter and send your email first.");
        return;
    }

    localStorage.setItem("privacyConsent", "accepted");
    document.getElementById("privacyPage").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}

// Function to decline privacy policy
function declinePrivacy() {
    alert("You must accept the privacy policy to use the Period Tracker.");

    // Show the video after consent
    let video = document.getElementById("welcomeVideo");
    video.style.display = "block"; 
    video.play();

    // When the video ends, hide it and show the Period Tracker
    video.onended = function() {
        video.style.display = "none"; // Hide the video
        document.getElementById("mainContent").style.display = "block"; // Show Period Tracker
    };
}
// Function to render the calendar
function renderCalendar(startDate, cycleLength, periodLength) {
    const calendarGrid = document.getElementById("calendarGrid");

    // Clear the calendar
    calendarGrid.innerHTML = '';

    const start = new Date(startDate);
    const daysInMonth = new Date(start.getFullYear(), start.getMonth() + 1, 0).getDate();

    // Generate calendar days
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("calendar-day");
        dayDiv.innerText = i;

        // Determine the status of the day (Period, Ovulation, Fertile Window)
        let dayClass = '';

        // Calculate Period Days
        if (i >= start.getDate() && i < start.getDate() + periodLength) {
            dayClass = 'period';
        }
        
        // Calculate Expected Period
        if (i === start.getDate() + cycleLength) {
            dayClass = 'expected-period';
        }

        // Calculate Ovulation and Fertile Window
        if (i === start.getDate() + cycleLength - 14) {
            dayClass = 'ovulation';
        } else if (i > start.getDate() + cycleLength - 14 && i < start.getDate() + cycleLength - 7) {
            dayClass = 'fertile-window';
        }

        dayDiv.classList.add(dayClass);
        calendarGrid.appendChild(dayDiv);
    }
}

// Example usage
document.getElementById("trackerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const startDate = document.getElementById("startDate").value;
    const cycleLength = parseInt(document.getElementById("cycleLength").value);
    const periodLength = parseInt(document.getElementById("periodLength").value);

    // Show Calendar and Render
    document.getElementById("calendar").style.display = "block";
    renderCalendar(startDate, cycleLength, periodLength);
});
function acceptPrivacy() {
    localStorage.setItem("privacyConsent", "accepted");
    
    // Hide privacy page
    document.getElementById("privacyPage").style.display = "none";
    
    // Show video
    let welcomeVideo = document.getElementById("welcomeVideo");
    welcomeVideo.style.display = "block";
    welcomeVideo.play();

    // Redirect to period.html after video ends
    welcomeVideo.onended = function () {
        window.location.href = "period.html";
    };
}

