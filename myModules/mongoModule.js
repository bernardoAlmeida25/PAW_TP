const client = require('mongodb').MongoClient;
const database_obj = {
	mongo_url:'mongodb://localhost:27017',
    dbName:'MedCare'
}

function addDocument(collectionName, document){
	client.connect(database_obj.mongo_url,{ useNewUrlParser: true }, function(err, db){
		if(err){
			throw err;
		}else{
			const dbName = db.db(database_obj.dbName);
			const collection = dbName.collection(collectionName);
			collection.insertOne(document);
            db.close();
		}
	});
}

function findSomething(collectionName, query){
	client.connect(database_obj.mongo_url,{ useNewUrlParser: true }, function(err, db){
		if(err){
			throw err;
		}else{
			const dbName = db.db(database_obj.dbName);
			const collection = dbName.collection(collectionName);
			let DBquery = query;
			collection.find(DBquery, function (err) {
				if(err) throw err;
                db.close();
            });
		}
	});
}

function findSomethingSpecific(collectionName, query, specification){
	client.connect(database_obj.mongo_url,{ useNewUrlParser: true }, function(err, db){
		if(err){
			throw err;
		}else{
			const dbName = db.db(database_obj.dbName);
			const collection = dbName.collection(collectionName);
			let DBquery = query;
			let spec = specification;
			collection.find(DBquery, spec, function (err) {
				if(err) throw err;
                db.close;
            });
		}
	});
}

function updateSomething(collectionName, query, newValues){
	client.connect(database_obj.mongo_url,{ useNewUrlParser: true }, function(err, db){
		if(err){
			console.log("Erro de Conexão");
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection(collectionName);
			let queryDB = query; 
			collection.updateOne(queryDB, newValues, function(err){
				if(err) throw err;
                db.close();
			});

		}
	});
}

function deleteDocument(collectionName, query){
	client.connect(database_obj.mongo_url,{ useNewUrlParser: true }, function(err, db){
		if(err){
			throw err;
		}else{
			const myDB = db.db(database_obj.dbName);
			const collection = myDB.collection(collectionName);
			let queryDB = query;
			collection.deleteOne(queryDB, function(err){
				if(err) throw err;
                db.close();
			});

		}
	});
}


exports.deleteDocument=deleteDocument;
exports.updateSomething=updateSomething;
exports.findSomething=findSomething;
exports.addDocument=addDocument;
exports.findSomethingSpecific = findSomethingSpecific;