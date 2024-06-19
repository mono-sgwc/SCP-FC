const canvas = document.getElementById('place-canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color-select');
const saveButton = document.getElementById('save-button');
const loadButton = document.getElementById('load-button');
let selectedColor = colorPicker.value;
const gridSize = 10;

colorPicker.addEventListener('input', (event) => {
    selectedColor = event.target.value;
});

canvas.addEventListener('click', (event) => {
    const x = Math.floor(event.offsetX / gridSize) * gridSize;
    const y = Math.floor(event.offsetY / gridSize) * gridSize;
    if (confirm(`Place color ${selectedColor} at (${x}, ${y})?`)) {
        ctx.fillStyle = selectedColor;
        ctx.fillRect(x, y, gridSize, gridSize);
        saveCanvasData();
    }
});

function saveCanvasData() {
    const data = [];
    for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
            const pixel = ctx.getImageData(x, y, gridSize, gridSize).data;
            if (pixel[3] !== 0) {
                data.push({ x, y, color: `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3] / 255})` });
            }
        }
    }
    fetch('/canvas-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

saveButton.addEventListener('click', () => {
    fetch('/save', {
        method: 'POST'
    }).then(response => response.text())
      .then(data => alert(data));
});

loadButton.addEventListener('click', () => {
    fetch('/load')
        .then(response => response.json())
        .then(data => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            data.forEach(pixel => {
                ctx.fillStyle = pixel.color;
                ctx.fillRect(pixel.x, pixel.y, gridSize, gridSize);
            });
        });
});

// Load initial canvas data
fetch('/canvas-data')
    .then(response => response.json())
    .then(data => {
        data.forEach(pixel => {
            ctx.fillStyle = pixel.color;
            ctx.fillRect(pixel.x, pixel.y, gridSize, gridSize);
        });
    });
