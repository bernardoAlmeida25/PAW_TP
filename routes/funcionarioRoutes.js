const express = require('express');
const router = express.Router();
const funcController = require('../controllers/funcionarioController');
const doenteController = require('../controllers/doenteController')


router.get('/pagina_incial', function (req, res){
    res.render('pagina_inicial');
});



router.post('/pagina_inicial', function (req, res){
    if(funcController.getDepartamentoByUser(req) === "Administração"){
        res.send('menu_admin');
    }else{
        res.send("Não tem autorização");
    }
});


router.get('/adicionar_doente', function(req, res){
   res.render('adicionar_doente');
});

router.post('/adicionar_doente', function (req, res) {
    let data = doenteController.adicionarDoente(req, (err)=>{
        if(err || err === false){
            res.end("Erro: " + err);
        }else{
            res.send("Sucesso");

        }
    });
})




module.exports = router;