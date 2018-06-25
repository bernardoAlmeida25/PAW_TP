const mongoModule = require('../myModules/mongoModule');

class doente {
    constructor(nome, idade, genero, morada, dataEntrada, nProcesso) {
        this._nome = nome;
        this._idade = idade;
        this._genero = genero;
        this._morada = morada;
        this._dataEntrada = dataEntrada;
        this._nProcesso = nProcesso;
    }

    get nome() {
        return this._nome;
    }

    get idade() {
        return this._idade;
    }

    get genero() {
        return this._genero;
    }

    get morada() {
        return this._morada;
    }

    get dataEntrada() {
        return this._dataEntrada;
    }

    get nProcesso() {
        return this._nProcesso;
    }

    //FAZER CRUD AQUI!!!!
    //MODELO É QUE INTERAJE COM A BD!!

    static addDoente(doente, callback) {
        mongoModule.addDocument('doente', doente, (err) => {
            callback(err);
        });
    }

    static getDoenteByNprocesso(nprocesso, callback) {
        mongoModule.findSomething('doente', nprocesso, (err) => {
            callback(err);
        });
    }


    static deleteDoenteByNprocesso(nprocesso, callback) {
        mongoModule.deleteDocument('doente', nprocesso, (err) =>{
            callback(err);
        });
    }

}

module.exports = doente;