const texts = ["Coming Soon", "LOADING...", "Made by ZeDarkSide", "LOADING..."];
let index = 0;
let charIndex = 0;
let direction = 1;
let currentText = "";

function typeText() {
    if (direction === 1) {
        currentText = texts[index].slice(0, charIndex);
        charIndex++;
        if (charIndex > texts[index].length) {
            direction = -1;
            setTimeout(typeText, 6000);
        }
    } else {
        currentText = texts[index].slice(0, charIndex);
        charIndex--;
        if (charIndex === 0) {
            direction = 1;
            index = (index + 1) % texts.length;
        }
    }
    document.getElementById('typing').textContent = currentText;
}

setInterval(typeText, 200);
