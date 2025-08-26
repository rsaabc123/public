let count = 200;

const screen_el = document.getElementById('screen')

for (let i=0;i<count;i++){
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random()*100+'%';
    star.style.left = Math.random()*100+'%';
    star.style.width = Math.random()*2+'px';
    star.style.height = Math.random()*2+'px';
    star.style.opacity = Math.random();
    screen_el.appendChild(star);
}
