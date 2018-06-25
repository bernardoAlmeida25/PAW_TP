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

function getFuncByCodigo(req, callback) {
    let codigo = req.sanitize(req.body.codigo);
    funcionarioModel.getFuncByCod(codigo, (err)=>{
       callback(err);
    });
}

function getDepartamentoByUser(req, callback){
    let codigoSan = req.sanitize(req.body.codigo);
    if(codigoSan){
        funcionarioModel.getDepartamentoByFuncionario(codigoSan, (err) =>{
            callback(err);
        });
    }else{
        callback(false);
    }

}

function checkData(req, callback){
    let codigoSan = req.body.codigo;
    let passwordSan = req.body.password;
    if(codigoSan && passwordSan){
        funcionarioModel.checkData(passwordSan, codigoSan, (err) =>{
            callback(err);
        });
    }
}

exports.adicionarFuncionario = adicionarFuncionario;
exports.getDepartamentoByUser = getDepartamentoByUser;
exports.checkData = checkData;
exports.getFuncByCodigo = getFuncByCodigo;