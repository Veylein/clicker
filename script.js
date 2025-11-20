let snowflakes = 0;
let snowPerClick = 1;

// Upgrade
let shovelLevel = 0;
let shovelCost = 50;
let snowPerSecond = 0;

const snowflakesEl = document.getElementById('snowflakes');
const clicker = document.getElementById('clicker');
const upgrade1 = document.getElementById('upgrade1');
const upgrade1CostEl = document.getElementById('upgrade1Cost');

// Load saved progress
if(localStorage.getItem('snowflakes')) {
    snowflakes = parseInt(localStorage.getItem('snowflakes'));
}
if(localStorage.getItem('shovelLevel')) {
    shovelLevel = parseInt(localStorage.getItem('shovelLevel'));
    snowPerSecond = shovelLevel;
    shovelCost = 50 * (shovelLevel + 1);
}

updateDisplay();

// Clicking snowflake
clicker.addEventListener('click', () => {
    snowflakes += snowPerClick;
    updateDisplay();
    saveGame();
});

// Buying upgrade
upgrade1.addEventListener('click', () => {
    if(snowflakes >= shovelCost) {
        snowflakes -= shovelCost;
        shovelLevel++;
        snowPerSecond = shovelLevel;
        shovelCost = 50 * (shovelLevel + 1);
        updateDisplay();
        saveGame();
    }
});

// Auto snow collection
setInterval(() => {
    snowflakes += snowPerSecond;
    updateDisplay();
    saveGame();
}, 1000);

function updateDisplay() {
    snowflakesEl.textContent = snowflakes;
    upgrade1CostEl.textContent = shovelCost;
}

function saveGame() {
    localStorage.setItem('snowflakes', snowflakes);
    localStorage.setItem('shovelLevel', shovelLevel);
}
