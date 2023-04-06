const express = require('express');
const app = express();

const postit =['Hallo', 'Montag Eis essen']

const products = ["Hammer", "Schraubendreher"];

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }))


app.get('/', function (req, res) {
    res.send('hallo')
});

app.get('/user/:id', function (req, res) {
    res.send('user ' + req.params.id)
})
app.get('/product/:id', function (req, res) {
    res.send('product ' + products[req.params.id])
})

app.get('/riemke', function (req, res) {
    res.send('<html><head><title>Der titel</title></head><body>Hallo Riemke</body></html>');
});

app.post('/riemke', function (req, res) {
    res.send(req.body.name);

});

app.listen(3000);
