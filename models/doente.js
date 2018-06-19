const mongoModule = require('../myModule/mongoModule');

class Doente {
    constructor(nome, idade, genero, morada, dataEntrada, nProcesso) {
        this._nome = nome;
        this._idade = idade;
        this._genero = genero;
        this._morada = morada,
                this._dataEntrada = dataEntrada;
        this.nProcesso = nProcesso;
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
        mongoModule.addDocumento('doente', doente, (err) => {
            callback(err);
        });
    }

    static getDoenteByNprocesso(nprocesso, callback) {
        mongoModule.findSomething('doente', nprocesso, (err) => {
            callback(err);
        });
    }


    static deleteDoenteByNprocesso(nprocesso) {
        mongoModule.deleteDocument('doente', nprocesso);
    }

}

module.exports = Doente;