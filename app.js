const express = require('express')
const ModelClass = require('./model.js');
const storeJson = require('./stores.json');
const app = express();
let Model = null;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/setup', async (req, res) => {
  await Model.setup(storeJson);
  res.json({success: true});
});

app.get('/', async (req, res) => {
  const stores = await Model.getAllStores();
  res.json(stores);
})

app.get('/stores/all', async (req, res) => {
  const stores = await Model.getAllStores();
  res.json(stores);
});

const startServer = async () => {
  Model = new ModelClass();
  await Model.init();
  await Model.setup(storeJson); // Initialize the model before starting the server
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
}

startServer();

