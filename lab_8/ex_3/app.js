const express =  require('express');
const app = express();
const port = 3000;

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

//LISTEN
app.set('port', process.env.PORT || port);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

app.post('/location_insert',(req, res, next) => {
    res.status(200);
    res.set('Content-Type', 'application/json');

    console.log(req.query);
    client.connect((err) => {
       const db = client.db('mydb');
       const collection = db.collection('FaifieldLocation');
       let insertData = {
           name: req.query.name,
           category: req.query.category,
           location: [req.query.long,req.query.lat]
       };
       collection.insert(insertData);
       // db.collection.createIndex({location: '2d'});

       collection.findOne({},(err,docs) => {
           console.log(docs);
           client.close();
       });
       console.dir('Done');
    });

    res.end('Thank you for adding location');
});