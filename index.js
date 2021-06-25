const express = require('express');
require('dotenv').config()
const app = express();

const port = process.env.PORT || 3000;

const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planB',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))



app.get('/', (req, res, next) => {
    res.render('home', {layout: 'index', listExists: true})
});

app.listen(port, () => console.log(`App listening to port ${port}`));