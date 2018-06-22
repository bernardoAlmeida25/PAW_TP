const client = require('mongodb').MongoClient;
const database_obj = {
	mongo_url:'mongodb://localhost:27017',
    dbName:'MedCare'
}

function addDocument(collectionName, document, callback){
	client.connect(database_obj.mongo_url, function(err, db){
		if(err){
			throw err;
		}else{
			const dbName = db.db(database_obj.dbName);
			const collection = dbName.collection(collectionName);
			collection.insertOne(document, (err, res) =>{
				callback(err);
				db.close();
			});
		}
	});
}

function findSomething(collectionName, query, callback){
	client.connect(database_obj.mongo_url, function(err, db){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const dbName = db.db(database_obj.dbName);
			const collection = dbName.collection(collectionName);
			let DBquery = query;
			collection.find(DBquery, (err, r) => {
				callback(err);
			});
			db.close();
		}
	});
}

function updateSomething(collectionName, query, newValues, callback){
	client.connect(database_obj.mongo_url, function(err, db){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection(collectionName);
			let queryDB = query; 
			collection.updateOne(queryDB, newValues, (err, res) =>{
				callback(err);
                db.close();
			});
		}
	});
}

function deleteDocument(collectionName, query, callback){
	client.connect(database_obj.mongo_url, function(err, db){
		if(err){
			throw err;
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection(collectionName);
			let queryDB = query;
			collection.deleteOne(queryDB, (err, res) =>{
				callback(err);
                db.close();
			});
		}
	});
}


exports.deleteDocument=deleteDocument;
exports.updateSomething=updateSomething;
exports.findSomething=findSomething;
exports.addDocument=addDocument;