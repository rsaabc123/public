const switchBtn = document.querySelector('.switch');
const colorSelect = document.getElementById('colors');
const bulb = document.querySelector('.bulb');
const lampHead = document.querySelector('.lamp-head');
const switchSound = new Audio('light-switch.wav');

let isLampOn = true;
let currentColor = '#fff';

function updateLampDisplay() {
    if (isLampOn) {
        switchBtn.textContent = 'On';
        bulb.style.opacity = '1';
        bulb.style.backgroundColor = currentColor;
        bulb.style.boxShadow = `0 0 20px 5px ${currentColor}`;
        lampHead.style.boxShadow = `0 0 20px 20px ${currentColor}`;
        lampHead.style.opacity = '0.1';
    }
    
    else {       
        switchBtn.textContent = 'Off';
        bulb.style.opacity = '0.1';
        bulb.style.backgroundColor = '#fff';
        bulb.style.boxShadow = 'none';
        lampHead.style.boxShadow = 'none';
    }
}

switchBtn.addEventListener('click', () => {
  isLampOn = !isLampOn;
  switchSound.currentTime = 0;
  switchSound.play().catch(() => {});
  updateLampDisplay();
});

colorSelect.addEventListener('change', () => {
  currentColor = colorSelect.value;
  if (isLampOn) updateLampDisplay();
});

updateLampDisplay();