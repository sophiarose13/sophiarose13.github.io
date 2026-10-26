
let linesOfCode = 0;

// Manual upgrades
let clickPower = 1;
let upgradeCost = 50;

let powerKeyboardCost = 200;

// Automatic upgrades
let interns = 0;
let internCost = 100;

let octopusInterns = 0;
let octopusInternCost = 800;


// Write code
function writeCode() {
    linesOfCode += clickPower;
    updateScreen();
}


// Buy a mechanical keyboard
function buyKeyboard() {
    if (linesOfCode >= upgradeCost) {
        linesOfCode -= upgradeCost;

        clickPower += 1;

        // Only increase mechanical keyboard cost
        upgradeCost = Math.ceil(upgradeCost * 1.5);

        updateScreen();
    }
}


// Buy a power keyboard
function buyPower() {
    if (linesOfCode >= powerKeyboardCost) {
        linesOfCode -= powerKeyboardCost;

        clickPower += 5;

        // Only increase power keyboard cost
        powerKeyboardCost = Math.ceil(powerKeyboardCost * 1.5);

        updateScreen();
    }
}


// Hire a regular intern
function buyIntern() {
    if (linesOfCode >= internCost) {
        linesOfCode -= internCost;
        
        interns += 1;

        // Only increase regular intern cost
        internCost = Math.ceil(internCost * 1.5);

        updateScreen();
    }
}


// Hire an octopus intern
function buyOctopusIntern() {
    if (linesOfCode >= octopusInternCost) {
        linesOfCode -= octopusInternCost;
        octopusInterns += 1;

        // Only increase octopus intern cost
        octopusInternCost = Math.ceil(octopusInternCost * 1.5);

        updateScreen();
    }
}


// Generate code automatically every second
setInterval(function () {
    const codePerSecond = interns + octopusInterns * 8;

    if (codePerSecond > 0) {
        linesOfCode += codePerSecond;
        updateScreen();
    }
}, 1000);


// Update all displayed values
function updateScreen() {
    document.getElementById("score-display").innerText =
        linesOfCode + " lines of code";

    document.getElementById("power-display").innerText =
        clickPower;

    document.getElementById("cost-display").innerText =
        upgradeCost;

    document.getElementById("cost-power-display").innerText =
        powerKeyboardCost;

    document.getElementById("intern-display").innerText =
        interns + octopusInterns;

    document.getElementById("cost-intern-display").innerText =
        internCost;

    document.getElementById("cost-octopus-intern").innerText =
        octopusInternCost;
}


// Initialize the screen
updateScreen();
