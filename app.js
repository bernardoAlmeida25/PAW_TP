const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
var expressSanitizer = require('express-sanitizer');
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(expressSanitizer());
const session = require('express-session');
const routes = require('./routes/funcionarioRoutes');




app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));






var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/MedCare';
// Use connect method to connect to the Server
MongoClient.connect(url,  { useNewUrlParser: true },function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db.close();
});


app.use('/', routes);

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/pagina_inicial.html');
});



app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});


//adicionar/editar/remover funcionario
//adicionar doente
//adicionar exame

