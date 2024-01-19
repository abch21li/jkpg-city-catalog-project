const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`<h1>IS THIS WORKING?</h1>`)
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});