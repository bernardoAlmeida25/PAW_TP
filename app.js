const express = require('express');
const bodyParser = require('body-parser');
var expressSanitizer = require('express-sanitizer');
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(expressSanitizer());
const PORT = 3000;


//const doenteRoutes = require('routes/doenteRoutes');
//const funcionarioModel = require('models/funcionario');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});


//adicionar/editar/remover funcionario
//adicionar doente
//adicionar exame

