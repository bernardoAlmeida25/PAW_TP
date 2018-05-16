const client = require('mongodb').MongoClient;
const database_obj = {
	mongo_url:'mongodb://localhost:27017',
    dbName:'MedCare'
}

function addDocumento(collection, document){
	client.connect(database_obj.mongo_url, function(err, db){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection(collection);

			collection.insertOne(document, (err, r) => {
				if(!err){
					console.log("Doente adicionado com sucesso");
				}
			});
			db.close();
		}
	});
}

function findSomething(collection, query){
	client.connect(database_obj.mongo_url, function(err, db){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection(collection);
			let DBquery = query;
			collection.find(DBquery, (err, r) => {
				if(!err){
					console.log(r);
				}
			});
			db.close();
		}
	});
}

function updateSomething(collection, query, newValues){
	client.connect(database_obj.mongo_url, function(err, db){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection(collection);
			let queryDB = query; 
			collection.updateOne(query, newValues, function(err, res){
				if(!err){
					console.log(res);
				}
			});
			db.close();
		}
	});
}

function deleteDocument(collection, document, query){
	client.connect(database_obj.mongo_url, function(){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection(collection);
			let queryDB = query;
			collection.deleteOne(query, function(err, obj){
				if(!err){
					console.log(obj);
				}
			});
			db.close();
		}
	});
}


exports.deleteDocument = deleteDocument;
exports.updateSomething = updateSomething;
exports.findSomething = findSomething;
exports.addDocumento = addDocumento;