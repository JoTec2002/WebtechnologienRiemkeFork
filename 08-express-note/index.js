const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

let notes = ["eine Notiz", "zweite Notiz"];

app.get('/', function (req, res) {
    let noteHtml = '';
    for (note in notes) {
        noteHtml += '<div class="note">' + notes[note] + '</div>';
    }
    const response = `
        <html>
            <head>
            </head>
            <style>
                .note{
                    width: 200px;
                    height: 200px;
                    background-color: yellow;
                    margin: 10px;
                    padding: 5px;
                }
            </style>

            <body>
            <h1>Notizen</h1>
            ${noteHtml}
            <form action="/" method="post">
                    <input type="text" name="note">
            <input type="submit">
            </form>
            </body>
        </html>
    `;
    res.send(response);
});
app.post('/', function (req, res) {
    console.log(req.body.note);
    notes.push(req.body.note)
    res.redirect('/');
});

app.get('/demo', function (req, res) {
    res.render('index', { title: 'Riemkes toller Titel', message: 'hallo alle!', friends: 1, pageTitle: 'der Seitentitel', notes, authenticated: false });
})

app.listen(3000);


