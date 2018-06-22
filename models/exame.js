const mongoModule = require('../myModules/mongoModule')

class exame {
    constructor(nome, descricao){
        this._nome = nome;
        this._descricao = descricao;
    }

    get nome(){
        return this._nome;
    }

    get descricao(){
        return this._descricao;
    }

    static addExame(exame, callback){
        mongoModule.addDocument('exames', exame, (err) => {
           callback(err);
        });
    }
}