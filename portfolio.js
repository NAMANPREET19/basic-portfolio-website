document.getElementById("changeColorButton").addEventListener("click", function() {
    const colors = ['#f4f4f4', '#e0f7fa', '#fce4ec', '#c8e6c9', '#ffeb3b'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

document.getElementById("neonButton").addEventListener("click", function() {
    this.style.backgroundColor = '#00FFFF'; // Neon blue color
    this.style.color = '#000000'; // Text color becomes black for contrast
});

document.getElementById("changeColorButton").addEventListener("click", function() {
    const colors = ['#f4f4f4', '#e0f7fa', '#fce4ec', '#c8e6c9', '#ffeb3b'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

let clickCount = 0;

document.getElementById("neonButton").addEventListener("click", function() {
    clickCount++;

    switch(clickCount) {
        case 1:
            this.style.backgroundColor = '#00FFFF'; // Neon Blue
            break;
        case 2:
            this.style.backgroundColor = '#39FF14'; // Neon Green
            break;
        case 3:
            this.style.backgroundColor = '#FF10F0'; // Neon Pink
            break;
        case 4:
            this.style.backgroundColor = '#FFFF00'; // Neon Yellow
            break;
        default:
            clickCount = 0; // Reset click count after 4th click
            this.style.backgroundColor = '#333'; // Reset to default color
            break;
    }

    // Keep text color black for contrast
    this.style.color = '#000000';
});
