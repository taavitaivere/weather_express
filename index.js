const express = require('express')
const app = express()
const path = require('path')

app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    res.render('index');
});
app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});