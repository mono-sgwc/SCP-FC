const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

let canvasData = [];

// Serve static files
app.use(express.static('public'));

// Parse JSON bodies
app.use(bodyParser.json());

// Endpoint to get canvas data
app.get('/canvas-data', (req, res) => {
    res.json(canvasData);
});

// Endpoint to update canvas data
app.post('/canvas-data', (req, res) => {
    canvasData = req.body;
    res.status(200).send('Canvas data updated');
});

// Save canvas data to file
app.post('/save', (req, res) => {
    fs.writeFile('canvasData.json', JSON.stringify(canvasData), (err) => {
        if (err) {
            res.status(500).send('Error saving data');
        } else {
            res.status(200).send('Data saved');
        }
    });
});

// Load canvas data from file
app.get('/load', (req, res) => {
    fs.readFile('canvasData.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error loading data');
        } else {
            canvasData = JSON.parse(data);
            res.json(canvasData);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
