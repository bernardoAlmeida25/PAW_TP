const mongoModule = require('../myModules/mongoModule')

class entrada{
    constructor(data, departamento, doente){
        this._data = data;
        this._departamento = departamento;
        this._doente = doente;
    }

    get data(){
        return this._data;
    }

    get departamento(){
        return this._departamento;
    }

    get doente(){
        return this._doente;
    }
}