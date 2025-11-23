let count = 0;

const counter_el = document.querySelector('#counter');
const increase_el = document.querySelector('#increase');
const reset_el = document.querySelector('#reset');
const decrease_el = document.querySelector('#decrease');

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
