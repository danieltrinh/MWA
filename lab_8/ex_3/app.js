const express = require('express');
const app = express();
const port = 3000;

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

//LISTEN
app.set('port', process.env.PORT || port);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

let db;
app.use((res, req, next) => {
    if (!db) {
        client.connect((err) => {
            db = client.db('mydb');
            const collection = db.collection('FairfieldLocation');
            collection.createIndex({location: '2d'});
            next();
        })
    } else {
        next();
    }
});

app.post('/location_insert', (req, res, next) => {
    res.status(200);
    res.set('Content-Type', 'application/json');
    const collection = db.collection('FairfieldLocation');
    let insertData = {
        name: req.query.name,
        category: req.query.category,
        location: [parseFloat(req.query.long), parseFloat(req.query.lat)]
    };
    collection.insert(insertData);

    collection.find({}).toArray((err,docs) => {
        console.log(docs);
    });
    console.dir('Done');

    res.end(JSON.stringify('Thank you for adding location'));
});

app.get('/show_near_location', (req, res) => {
    res.status(200);
    res.set('Content-Type', 'application/json');
    let currentCoord = [41.017653, -91.9665342];
    let searchData = {
        name: req.query.name ? req.query.name : '',
        category: req.query.category,
        location: currentCoord
    };

    const collection = db.collection('FairfieldLocation');
    collection.find(
        {
            location: {$near: searchData.location},
            category: searchData.category
        })
        .limit(3)
        .toArray((err, docs) => {
            console.log(docs);
            res.end(JSON.stringify(docs));
        });

});