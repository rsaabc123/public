let bubble_count = 15;

const container_el = document.getElementsByClassName('container')[0];
const bowl_el = document.getElementsByClassName('bowl')[0];

for (let i=0;i<bubble_count;i++){
    const bubble = document.createElement('div');
    bubble.classList.add('bubble')
    bubble.style.top = Math.random()*80+20+'%';
    bubble.style.left = Math.random()*80+10+'%';
    bubble.style.width = Math.random()*8+2+'px';
    bubble.style.height = bubble.style.width;
    bubble.style.animationDelay = Math.random()*3+'s';
    bowl_el.appendChild(bubble);
}
