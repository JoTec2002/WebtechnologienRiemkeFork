const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const notes = ["eine Notiz", "zweite Notiz"];

app.get('/', function (req, res) {
    res.render('index', { title: 'Riemkes toller Titel', notes });

});
app.post('/', function (req, res) {
    console.log(req.body.note);
    notes.push(req.body.note)
    res.redirect('/');
});

app.get('/demo', function (req, res) {
    const notes = ["eine Notiz", "zweite Notiz"];
    res.render('index', { title: 'Riemkes toller Titel', message: 'hallo alle!', pageTitle: 'der Seitentitel', notes: notes });
})

app.listen(3001);


