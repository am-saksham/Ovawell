class Tamagotchi {
    constructor(name) {
        this.hungerLevel = 100;
        this.sleepinessLevel = 100;
        this.boredomLevel = 100;
        this.age = 0;
        this.name = name;
    }

    // Update the levels and check for death condition
    updateLevels() {
        this.decreaseHunger();
        this.decreaseSleepiness();
        this.decreaseBoredom();
        if (this.isDead()) {
            this.die();
        }
    }

    decreaseHunger() {
        this.hungerLevel -= 10;
        document.getElementById("hungerlevel").style.width = this.hungerLevel + "%";
        this.updateBarColor("hungerlevel", this.hungerLevel);
    }

    decreaseSleepiness() {
        this.sleepinessLevel -= 5;
        document.getElementById("sleepinesslevel").style.width = this.sleepinessLevel + "%";
        this.updateBarColor("sleepinesslevel", this.sleepinessLevel);
    }

    decreaseBoredom() {
        this.boredomLevel -= 5;
        document.getElementById("boredomlevel").style.width = this.boredomLevel + "%";
        this.updateBarColor("boredomlevel", this.boredomLevel);
    }

    updateBarColor(barId, level) {
        const bar = document.getElementById(barId);
        if (level > 50) {
            bar.style.backgroundColor = "#2BC253";
        } else if (level >= 30) {
            bar.style.backgroundColor = "orange";
        } else {
            bar.style.backgroundColor = "red";
        }
    }

    isDead() {
        return this.hungerLevel === 0 || this.sleepinessLevel === 0 || this.boredomLevel === 0;
    }

    die() {
        pic.src = "assets/opps.png";
        document.body.style.backgroundColor = "maroon";
        gameOverAudio.play();
        this.removeGameElements();
    }

    removeGameElements() {
        hunger.remove();
        boredom.remove();
        sleepiness.remove();
        boredomBarNames.remove();
        sleepinessBarNames.remove();
        hungerBarNames.remove();
        playButton.remove();
        eatButton.remove();
        sleepButton.remove();
        ageShow.remove();
        nameShow.remove();
        diedBaby.style.display = "block";
        byebye.style.display = "block";
    }

    ageUp() {
        this.age += 1;
        document.getElementById("age").innerHTML = this.age;
    }

    increaseHunger() {
        if (this.hungerLevel < 100) {
            this.hungerLevel += 2;
            document.getElementById("hungerlevel").style.width = this.hungerLevel + "%";
            this.updateBarColor("hungerlevel", this.hungerLevel);
        }
    }

    increaseSleepiness() {
        if (this.sleepinessLevel < 100) {
            this.sleepinessLevel += 10;
            document.getElementById("sleepinesslevel").style.width = this.sleepinessLevel + "%";
            this.updateBarColor("sleepinesslevel", this.sleepinessLevel);
        }
    }

    increaseBoredom() {
        if (this.boredomLevel < 100) {
            this.boredomLevel += 10;
            document.getElementById("boredomlevel").style.width = this.boredomLevel + "%";
            this.updateBarColor("boredomlevel", this.boredomLevel);
        }
    }
}

let newMonster = new Tamagotchi("Bestie");

const button1 = document.querySelector('.start');
const button2 = document.querySelector('.htp');
const pic = document.getElementById('greeting');
const hunger = document.querySelector('.hungerbar');
const sleepiness = document.querySelector('.sleepinessbar');
const boredom = document.querySelector('.boredombar');
const hungerBarNames = document.querySelector('.hungerbarname');
const sleepinessBarNames = document.querySelector('.sleepinessbarname');
const boredomBarNames = document.querySelector('.boredombarname');
const sleepButton = document.querySelector('.sleep');
const eatButton = document.querySelector('.eat');
const playButton = document.querySelector('.play');
const ageShow = document.querySelector(".ageclass");
const nameShow = document.querySelector(".nameclass");
const diedBaby = document.querySelector(".babyDie");
const byebye = document.querySelector(".bye");
const myAudio = document.querySelector('#audio');
const gameOverAudio = document.querySelector('#audio2');

button1.addEventListener("click", (e) => {
    e.preventDefault();
    button1.remove();
    button2.remove();
    hunger.style.display = "block";
    sleepiness.style.display = "block";
    boredom.style.display = "block";
    hungerBarNames.style.display = "block";
    sleepinessBarNames.style.display = "block";
    boredomBarNames.style.display = "block";
    sleepButton.style.display = "inline";
    eatButton.style.display = "inline";
    playButton.style.display = "inline";
    ageShow.style.display = "block";

    // Adding the event listeners for the buttons immediately after the start
    sleepButton.addEventListener("click", (e) => {
        e.preventDefault();
        newMonster.increaseSleepiness();
        pic.src = "assets/sleeping.png";
        document.body.style.backgroundColor = "gray";
    });

    eatButton.addEventListener("click", (e) => {
        e.preventDefault();
        newMonster.increaseHunger();
        pic.src = "assets/hamburger.png";
        document.body.style.backgroundColor = "#F5F5DC";
    });

    playButton.addEventListener("click", (e) => {
        e.preventDefault();
        newMonster.increaseBoredom();
        pic.src = "assets/meditation.png";
        document.body.style.backgroundColor = "#98FF98";
    });

    setInterval(() => {
        newMonster.ageUp();
        newMonster.updateLevels();
    }, 5000);  // Update every 5 seconds

    // Explanation dialog box
    setTimeout(() => {
        pic.src = "assets/girl.png";
        document.getElementById("gameExplanation").style.display = "block";

        const closeButton = document.getElementById("closeExplanation");
        closeButton.addEventListener("click", () => {
            document.getElementById("gameExplanation").style.display = "none";
        });

        setTimeout(() => {
            document.getElementById("gameExplanation").style.display = "none";
        }, 10000);
    }, 4000);

    let nameMonster = prompt("Name your friend:", `${newMonster.name}`);
    nameShow.innerHTML = `${nameMonster}'s World!`;
    die();
    animation();
});

button2.addEventListener("click", (e) => {
    e.preventDefault();
    alert("You are now the caretaker of a genuine Tamagotchi. Tamagotchi is a cyber creature who has traveled millions of miles from its home planet to learn what life is like on Earth.");
    alert("All you need to do is look after your baby, feed, put to sleep, and make them happy. If you forget any of them, your baby could die. Don't forget, your little monster needs you!");
});
