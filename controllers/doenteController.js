const { check, validationResult } = require('express-validator/check');
const doente = require('../models/doente');

function adicionarDoente(req, callback){
    let nomeSan = req.sanitize(req.body.nome);
    let idadeSan = req.sanitize(req.body.idade);
    let generoSan = req.sanitize(req.body.genero);
    let moradaSan = req.sanitize(req.body.morada);
    let dataSan = req.sanitize(req.body.dataEntrada);
    let nProcessoSan = req.sanitize(req.body.nprocesso);

    if(nomeSan && idadeSan && generoSan && moradaSan && dataSan && nProcessoSan){
        let doenteSan = new doente(nomeSan, idadeSan, generoSan, moradaSan, dataSan, nProcessoSan);
        doente.addDoente(doenteSan, (err) =>{
           callback(err);
        });
    }else{
        callback(false);
    }
}



exports.adicionarDoente = adicionarDoente;