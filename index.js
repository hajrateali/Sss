const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
app.use(express.json({limit: "500mb"}));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'HOME.HTML'))});






app.get('/0001', (req, res) => {
  res.sendFile(path.join(__dirname, 'DATA/DATA.json'))
});
app.get('/0002', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.html'))
});
app.get('/0003', (req, res) => {
  res.sendFile(path.join(__dirname, '01data.html'))
});
app.get('/0004', (req, res) => {
  res.sendFile(path.join(__dirname, 'hhh.html'))
});


app.post('/01POST', (req, res) => {
  const nd = req.body;
  fs.readFile('DATA/DATA.json', 'utf8', (err, od) => {
    const ard = !err && od ? JSON.parse(od || '[]') :[];
    fs.writeFile('DATA/DATA.json', JSON.stringify([...ard, ...nd], null, 2), err => {
      if (err) return res.status(500).send("failed server data");
      res.send('SuccessFull server data')
    })
  });
});
app.post('/02POST', (req, res) => {});
app.post('/03POST', (req, res) => {});
app.post('/04POST', (req, res) => {});





app.listen(3000, () => {console.log("START SEREVER http://localhost:3000")});