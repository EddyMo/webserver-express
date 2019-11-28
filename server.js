const express = require('express')
const app = express()
const hbs = require('hbs');
// Helpers
require('./hbs/helpers');
// Identificación del puerto asignado por Heroku
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



//Renderización de la páginas
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'edwin molina',
        anio: new Date().getFullYear()
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});
/*
app.get('/', function(req, res) {
    //res.send('Hola Mundo!')
    let salida = {
        nombre: 'Edwin',
        edad: 23,
        url: req.url
    }
    res.send(salida);
})

app.get('/data', function(req, res) {
    res.send('Hola Mundo!')

})
*/
app.listen(port, () => {
    console.log(`Escuclando peticiones en el puerto ${port}`);
});