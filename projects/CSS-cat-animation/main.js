let star_count = 200;

const container_el = document.getElementsByClassName('container')[0];

for (let i=0;i<star_count;i++){
    const star = document.createElement('div');
    star.classList.add('star')
    star.style.top = Math.random()*100+'%';
    star.style.left = Math.random()*100+'%';
    star.style.width = Math.random()*2+'px';
    star.style.height = Math.random()*2+'px';
    star.style.opacity = Math.random();
    container_el.appendChild(star);
}