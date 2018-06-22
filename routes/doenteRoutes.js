const express = require('express');
const router = express.Router();

const doenteController = require('../controllers/doenteController');

router.post('/adicionar_doente', function(req, res){
    let data = doenteController.adicionarDoente(req, (err) => {
       if(err || err === false){
            res.end("Erro: " + err);
       }else{
           res.send("Sucesso");
       }
    });
});

module.exports = router;