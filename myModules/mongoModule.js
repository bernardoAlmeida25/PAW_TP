const client = require('mongodb').MongoClient;
const database_obj = {
	mongo_url:'mongodb://localhost:27017',
    dbName:'MedCare'
}

function addDocumento(collectionName, document, callback){
	client.connect(database_obj.mongo_url, function(err, db){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection(collectionName);

			collection.insertOne(document, (err, r) => {
				callback(err);
			});
			db.close();
		}
	});
}

function findSomething(collectionName, query){
	client.connect(database_obj.mongo_url, function(err, db){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection(collectionName);
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

function updateSomething(collectionName, query, newValues){
	client.connect(database_obj.mongo_url, function(err, db){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection(collectionName);
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

function deleteDocument(collectionName, query){
	client.connect(database_obj.mongo_url, function(){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection(collectionName);
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