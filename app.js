const express = require('express');
const bodyParser = require('body-parser');
var expressSanitizer = require('express-sanitizer');
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(expressSanitizer());
const session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

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

