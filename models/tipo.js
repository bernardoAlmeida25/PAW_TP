class Tipo{
	constructor(tipo, descricao){
		this._tipo = tipo;
		this._descricao = descricao;
	}

	get tipo(){
		return this._tipo;
	}

	get descricao(){
		return this._descricao;
	}

}

module.exports = {
	Tipo : Tipo;
}