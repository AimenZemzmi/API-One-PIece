const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const crewModel = require('./schemas/Crew');
const bodyParser = require('body-parser');
const categoryModel = require('./schemas/category');
const { apiKey } = require('./package.json');
const jwtLib = require('jsonwebtoken');
let db;

try {
  db = mongoose.connect(
    'mongodb+srv://coucou:coucou@cluster0.lc16o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  );
} catch (e) {
  throw new Error('Database error');
}
const { jwtSecret } = require('./package.json');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Bienvenue Chez les pirates</h1>');
});

app.get('/crew', async function (req, res) {
  const datas = await crewModel.find({});

  res.status(200).json(datas);
});

app.get('/crew/:id', function (req, res) {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end('Wrong id format');
    return null;
  }
  let selectCrew = crews.filter((crew) => crew.id === parseInt(id));

  if (selectCrew.length === 0) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('No user found');
    return null;
  }

  res.status(200).json(selectCrew[0]);
});

app.post('/crew', async function (req, res) {
  const { name, ship, picture } = req.body;

  const datas = await crewModel.create({
    name,
    ship,
    picture,
  });
  res.status(201).json({ id: datas['_id'] });
});

app.put('/crew/:id', async function (req, res) {
  // La modification d'un utilisateur
  const { _id, name } = req.params;

  const datas = await crewModel.findOneAndUpdate({ _id }, { name });
  res.status(201).json(datas);
});

app.delete('/user/:id', async function (req, res) {
  // La suppression
});

module.exports = app;
