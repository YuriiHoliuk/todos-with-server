const express = require('express');
const cors = require('cors');
const todos = require('./todos.json');

const port = process.env.PORT || 8080;

const app = express();

app.use('*', cors());

app.get('/todos', (req, res) => {
  res.json({ data: todos });
  // res.sendStatus(404);
  // res.send('[]]');
});

app.post('/todos', (req, res) => {
  console.log('POST');
  res.json({ data: todos });
  // res.sendStatus(404);
  // res.send('[]]');
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
