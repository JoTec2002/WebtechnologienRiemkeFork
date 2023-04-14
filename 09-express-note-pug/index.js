const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2/promise');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const notes = ["eine Notiz", "zweite Notiz"];

app.get('/delete/:id', async function (req, res) {
    try {
        const connection = await mysql.createConnection({ host: 'localhost', database: 'dhbw', user: 'root', password: '123', port: 3306 })
        await connection.execute('DELETE FROM notes WHERE id=?', [req.params.id]);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/');

});


app.get('/', async function (req, res) {

    try {
        const connection = await mysql.createConnection({ host: 'localhost', database: 'dhbw', user: 'root', password: '123', port: 3306 })

        const [rows, fields] = await connection.execute('SELECT * FROM notes');
        res.render('index', { title: 'Riemkes toller Titel', notes: rows });
    } catch (err) {
        console.log(err);
    }


});
app.post('/', async function (req, res) {
    console.log(req.body.note);
    try {
        const connection = await mysql.createConnection({ host: 'localhost', database: 'dhbw', user: 'root', password: '123', port: 3306 })
        await connection.execute('INSERT INTO notes (note) VALUES (?)', [req.body.note]);
    } catch (err) {
        console.log(err);
    }
    //notes.push(req.body.note)
    res.redirect('/');
});

app.get('/demo', async function (req, res) {
    // const notes = ["eine Notiz", "zweite Notiz"];

    res.render('index', { title: 'Riemkes toller Titel', message: 'hallo alle!', pageTitle: 'der Seitentitel', notes: notes });
})

app.listen(3001);


