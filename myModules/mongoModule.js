const client = require('mongodb').MongoClient;
const database_obj = {
	mongo_url:'mongodb://localhost:27017',
    dbName:'MedCare'
}

function addDoente(doente){
	client.connect(database_obj.mongo_url, function(err, db){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection('doente');

			collection.insertOne(doente, (err, r) => {
				if(!err){
					console.log("Doente adicionado com sucesso");
				}
			});
			db.close();
		}
	});
}

function addFuncionario(funcionario){
	client.connect(database_obj.mongo_url, function(err, db){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection('funcionario');

			collection.insertOne(funcionario, (err, r) => {
				if(!err){
					console.log("Funcionario adicionado com sucesso");
				}
			});
			db.close();
		}
	});
}



exports.addFuncionario = addFuncionario;
exports.addDoente = addDoente;