const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let message = 'sweet world'; // Initial message

app.get('/badge', (req, res) => {
    res.json({
        schemaVersion: 1,
        label: 'hello',
        message: message,
        color: 'orange',
    });
});

app.get('/toggle', (req, res) => {
    message = message === 'sweet world' ? 'beautiful world' : 'sweet world'; // Toggle the message
    res.send('Message toggled!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
