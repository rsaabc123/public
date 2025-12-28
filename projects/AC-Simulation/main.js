const acUnit = document.querySelector('.ac-unit');
const powerBtn = document.querySelector('.Powerbtn');
const degDisplay1 = document.querySelector('.degree-display1');
const degDisplay2 = document.querySelector('.temp-display2');
const tempBtns = document.querySelectorAll('.TempChangebtn');
const modeBtns = document.querySelectorAll('.Modebtn');
const fanSpeedBtns = document.querySelectorAll('.FanSpeedbtn');
const airflow = document.querySelector('.airflow');
const modeDisplay = document.querySelector('.mode-display');
const emojiDisplay = document.querySelector('.emoji-display');
const controls = document.querySelector('.controls');

let isOn = true;
let temperature = 72;
let mode = 'cool';
let fanSpeed = 1;
const max_temp = 80;
const min_temp = 60;

const updateTemperature = () => {
    degDisplay1.textContent = `${temperature}°F`;
    degDisplay2.textContent = `${temperature}°F`;
};

const updateMode = () => {
    modeDisplay.textContent = mode.toUpperCase();
    airflow.className = `airflow ${mode}`;
    if (mode === 'cool') {
        emojiDisplay.textContent = '☃️';
    } else if (mode === 'heat') {
        emojiDisplay.textContent = '🌺';
    } else {
        emojiDisplay.textContent = '🍃';
    }
};

const updateFanSpeed = () => {
    document.querySelectorAll('.blade').forEach(blade => {
        blade.style.animationDuration = `${0.6 - fanSpeed * 0.1}s`;
    });
};

powerBtn.addEventListener('click', () => {
    isOn = !isOn;
    acUnit.classList.toggle('is-off', !isOn);
    controls.classList.toggle('power-off', !isOn);
    
    if (isOn) {
        powerBtn.textContent = 'Power: ON';
    } else {
        powerBtn.textContent = 'Power: OFF';
    }
    
    if (isOn) {
        updateTemperature();
        updateMode();
        updateFanSpeed();
    } else {
        degDisplay1.textContent = '-';
        degDisplay2.textContent = '-';
        modeDisplay.textContent = '-';
        emojiDisplay.textContent = '-';
    }
    
    tempBtns.forEach(btn => btn.disabled = !isOn);
    modeBtns.forEach(btn => btn.disabled = !isOn);
    fanSpeedBtns.forEach(btn => btn.disabled = !isOn);
});

tempBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!isOn || btn.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        if (btn.textContent === '+') {
            if (temperature < max_temp) temperature++;
        }
        if (btn.textContent === '-') {
            if (temperature > min_temp) temperature--;
        }
        updateTemperature();
    });
});

modeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!isOn || btn.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        mode = btn.dataset.mode;
        updateMode();
    });
});

fanSpeedBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!isOn || btn.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        fanSpeed = parseInt(btn.dataset.speed);
        updateFanSpeed();
    });
});

updateTemperature();
updateMode();
updateFanSpeed();

tempBtns.forEach(btn => btn.disabled = !isOn);
modeBtns.forEach(btn => btn.disabled = !isOn);
fanSpeedBtns.forEach(btn => btn.disabled = !isOn);