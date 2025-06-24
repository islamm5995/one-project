const colorExample = document.getElementById("color-example");
const hexCode = document.querySelector(".hex");
const rgbCode = document.querySelector(".rgb");
const refreshBtn = document.getElementById("refresh-color");

function generateRandomNum(max) {
    return Math.floor(Math.random() * (max + 1));
}

function generateRgbColor() {
    const r = generateRandomNum(255);
    const g = generateRandomNum(255);
    const b = generateRandomNum(255);
    return [r, g, b];
}

function rgbToHex(rgb) {
    return "#" + rgb.map(color => color.toString(16)).join("").padStart(6, 0);
}

function setColor() {
    const [r, g, b] = generateRgbColor();
    const hexColor = rgbToHex([r, g, b]);
    colorExample.style.backgroundColor = hexColor;
    rgbCode.textContent = `rgb(${r}, ${g}, ${b})`;
    hexCode.textContent = hexColor;
}

function copyToClipBoard() {
    const text = this.textContent;
    navigator.clipboard.writeText(text)
        .then(() => {
            this.textContent = "Copied !!!";
            setTimeout(() => this.textContent = text, 1500);
        })
        .catch(() => alert("Can't copy this code :("));
}

hexCode.addEventListener("click", copyToClipBoard);
rgbCode.addEventListener("click", copyToClipBoard);

setColor();
refreshBtn.addEventListener("click", setColor);

