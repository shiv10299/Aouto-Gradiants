function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    const colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.textContent = `${color1} to ${color2}`;
}

document.getElementById('colorButton').addEventListener('click', setRandomGradient);