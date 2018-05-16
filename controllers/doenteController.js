const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const doenteModel = require('../models/doente');

function addDoente(req){
	//Validar dados do pedido

	


}



exports.addDoente = addDoente;