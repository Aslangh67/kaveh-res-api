var express = require('express');
require("dotenv").config();

var app = express();
var PORT = process.env.PORT || 8080;
const cors = require('cors')
var allRoutes = require('./controllers');


var db = require('./models');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(cors({
    origin:["https://augfishtank.herokuapp.com"]
}))


// app.use(cors())

app.use('/',allRoutes);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});