const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;


const doenteRoutes = require('../routes/doenteRoutes');

app.use(bodyParser.urlencoded({extended : true}));

app.use('/', doenteRoutes);


app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});