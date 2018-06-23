const {check, validationResult} = require('express-validator/check');
const funcionarioModel = require('../models/funcionario');

function adicionarFuncionario(req, callback) {
    let nomeSan = req.sanitize(req.body.nome);
    let codigoSan = req.sanitize(req.body.codigo);
    let passwordSan = req.sanitize(req.body.password);
    let departamentoSan = req.sanitize(req.body.departamento);

    if(nomeSan && codigoSan && passwordSan && departamentoSan ){
        let funcionario = new funcionarioModel(nomeSan, passwordSan, codigoSan, departamentoSan);
        funcionarioModel.addFuncionario(funcionario, (err) => {
           callback(err);
        });
    }else{
        callback(false);
    }
}

function getDepartamentoByuser(req, callback){
    return funcionarioModel.getDepartamentoByFuncionario()
}


exports.adicionarFuncionario = adicionarFuncionario;