class Doente{
	constructor(nome, idade, genero, morada, dataEntrada, nProcesso){
		this._nome = nome;
		this._idade = idade;
		this._genero = genero;
		this._morada = morada,
		this._dataEntrada = dataEntrada;
		this.nProcesso = nProcesso;
	}

	get nome(){
		return this._nome;
	}

	get idade(){
		return this._idade;
	}

	get genero(){
		return this._genero;
	}

	get morada(){
		return this._morada;
	}

	get dataEntrada(){
		return this._dataEntrada;
	}

	get nProcesso(){
		return this._nProcesso;
	}
}