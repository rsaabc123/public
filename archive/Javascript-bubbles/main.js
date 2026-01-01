const container = document.querySelector('.container');

const getRandomColor = () => {
    const hue = Math.random()*360;
    const saturation = Math.random()*20+60;
    const lightness = Math.random()*20+80;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const createBubble = (count=1) => {
    for (let i=0;i<count;i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const size = Math.random()*4+1;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        bubble.style.left = `${Math.random() * (window.innerWidth - size)}px`;
        bubble.style.bottom = `0px`;
        bubble.style.background = getRandomColor();

        const duration = Math.random()*5+5;
        const delay = Math.random()*2;
        bubble.style.animation = `float ${duration}s linear ${delay}s forwards`;

        bubble.style.opacity = '0';

        container.appendChild(bubble);

        setTimeout(() => bubble.remove(), (duration + delay)*1000);
    }
}

const bubbleLoop = () => {
    createBubble(10);
    setTimeout(bubbleLoop, 200);
}

bubbleLoop();
