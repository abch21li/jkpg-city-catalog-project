const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res, next) => {
    console.log('Time:', Date.now());
    next();
}, 
(req, res) => {
    console.log('User send command');
    res.send(`<html><h1>Hey!<h1></html>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost: ${port}`);
});