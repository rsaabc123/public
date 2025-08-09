let count = 0;

const counter_el = document.getElementById('counter');
const increase_el = document.getElementById('increase');
const reset_el = document.getElementById('reset');
const decrease_el = document.getElementById('decrease');

increase_el.addEventListener('click', () => {
    count++;
    counter_el.textContent = count;
})

reset_el.addEventListener('click', () => {
    count = 0;
    counter_el.textContent = count;
})

decrease_el.addEventListener('click', () => {
    count--;
    counter_el.textContent = count;
})
