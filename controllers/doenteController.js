const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const doenteModel = require('../models/doente');

function addDoente(req){
	//Validar dados do pedido



	// (err) => {if(err){return 'Erro ' + err; else return true;}}
}



exports.addDoente = addDoente;