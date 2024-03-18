const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./route');

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello from Stock App Web server!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
