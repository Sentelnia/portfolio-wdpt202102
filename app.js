//require
const express = require('express');
const hbs = require('hbs');

//créer le serveur
const app = express();

//static
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

//route
app.get('/', (req, res, next) => {
    res.render('index')
  })
app.get('/projets', (req, res, next) => {
  res.render('projets')
})

//ecouter sur le port 3000
app.listen(3000, () => console.log('Project running on port 3000 🎧'));