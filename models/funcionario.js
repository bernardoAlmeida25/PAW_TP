class Funcionario {
	constructor(nome, password, codigo) {
		this._nome = nome;
		this._codigo = codigo;
		this._password = password;
	}

	get nome(){
		return this._nome;
	}

	get codigo(){
		return this._codigo;
	}

	get password(){
		return this._password;
	}

	
}
	module.exports = {
		Funcionario : Funcionario
	}