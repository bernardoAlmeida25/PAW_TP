const mongoModule = require('../myModules/mongoModule')

class funcionario {
	constructor(nome, password, codigo, departamento) {
		this._nome = nome;
		this._codigo = codigo;
		this._password = password;
		this._departamento = departamento;
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

	get departamento(){
		return this._departamento;
	}

	static addFuncionario(funcionario, callback){
        mongoModule.addDocument(funcionario, 'funcionario', (err)=>{
            callback(err);
        });
    }

    static checkLogin(callback){
        mongoModule.findSomething('funcionario', this.codigo, (err, res) =>{
           callback(err,res);
        });
    }

    static getDepartamentoByFuncionario(){

    }

}


module.exports = funcionario;