const express = require('express')
const app = express();
const ModelClass = require('./model.js');
const storeJson = require('./stores.json');
let Model = null;

// ------ CORS Middleware: Allows requests from http://127.0.0.1:5500 | Ref: https://expressjs.com/en/resources/middleware/cors.html
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// ----- Creates the endpoint for 'Setup'
app.get('/setup', async (req, res) => {
  await Model.setup(storeJson);
  res.json({success: true});
});

// ----- Creates the endpoint for 'All Stores' 
app.get('/', async (req, res) => {
  const stores = await Model.getAllStores();
  res.json(stores);
})

// ----- Creates an alternative endpoint for 'All Stores' 
app.get('/stores/all', async (req, res) => {
  const stores = await Model.getAllStores();
  res.json(stores);
});

// ----- Initializes the server 
const startServer = async () => {
  Model = new ModelClass();
  await Model.init();
  await Model.setup(storeJson); // Initialize the model before starting the server
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
}

startServer();