const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const publicPath = path.join(__dirname, '../client', 'public');
const port = process.env.PORT || 80;

const en_us = require('./languages/en_us.json');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/en_us', (req, res) => {
   res.send(en_us);
 });

app.listen(port, () => {
   console.log('Server is up!');
});