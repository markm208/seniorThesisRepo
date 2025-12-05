'use strict' 
 
const express = require('express'); 
const morgan = require('morgan'); 
const bodyParser = require("body-parser"); 
const DBAbstraction = require('./DBAbstraction'); 
 
const db = new DBAbstraction('ProductDatabase.db'); 
 
const app = express(); 
const handlebars = require('express-handlebars').create({defaultLayout: 'main'}); 
 
app.engine('handlebars', handlebars.engine); 
app.set('view engine', 'handlebars');
app.use(express.static('public'));
 
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

db.init() 
    .then(() => { 
        app.listen(8080, () => console.log('The server is up and running...')); 
    }) 
    .catch(err => { 
        console.log('Problem setting up the database'); 
        console.log(err); 
    });

app.get('/', async (req, res) => {
    try{
        const products = await db.getProducts();
        if(products) {
            res.render('ProductView', {products: products})
        } else {
            res.json({"results" : "none"});
        }
    } catch (err) {
        res.json({"results" : "none"});
    }
});

app.use((req, res) => { 
    res.status(404).send(`<h2>Uh Oh!</h2><p>Sorry ${req.url} cannot be found here</p>`); 
}); 

