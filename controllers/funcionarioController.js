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
    let codigo = req.body.user_id;
    funcionarioModel.getFuncByCod(codigo, (err)=>{
       callback(err);
    });
}

function getDepartamentoByuser(codigo){
    return funcionarioModel.getDepartamentoByFuncionario(codigo);
}

function checkData(req){
    return funcionarioModel.checkData(req);
}

exports.adicionarFuncionario = adicionarFuncionario;
exports.getDepartamentoByuser = getDepartamentoByuser;
exports.checkData = checkData;
exports.getFuncByCodigo = getFuncByCodigo;