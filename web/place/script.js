const canvas = document.getElementById('place-canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color-select');
let selectedColor = colorPicker.value;

colorPicker.addEventListener('input', (event) => {
    selectedColor = event.target.value;
});

canvas.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (confirm(`Place color ${selectedColor} at (${x}, ${y})?`)) {
        ctx.fillStyle = selectedColor;
        ctx.fillRect(x, y, 10, 10);
    }
});
