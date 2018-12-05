const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

client.connect((err) => {
    const db = client.db('mydb');
    const collection = db.collection('homework_8_1');


    let result = collection.find({district: {$eq: 'Manhattan'}}).toArray(
        (error, docs) => {
            if(error) console.log(error);
            console
        }
    );
    console.dir('done');
});