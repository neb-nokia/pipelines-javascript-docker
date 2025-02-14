'use strict';

const express = require('express');

const PORT = 8088;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world on port 8088\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
