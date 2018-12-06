const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

client.connect((err) => {
    const db = client.db('mydb');
    const col = db.collection('zipcodes');

    // 1/ Find all the zip codes in Iowa state
    // col.aggregate([
    //         {$match: {'state' : 'IA'}},
    //         {$group: {_id: '$_id'}}
    //     ]
    //  ).toArray((err, docs)=>{
    //      console.log(docs);
    //  });

    // 2/ Find zipcodes where population > 1000
    // col.aggregate([
    //         {$group: {_id: {'zipcodes':'$_id', 'population': '$pop'}}},
    //         {$match: {'_id.population': {$lt:1000}}}
    //     ]
    // ).toArray((err, docs) => {
    //     console.log(docs);
    // });

    // 3/ Find all cities > 1 zip codes, sort results based on state and city name
    // col.aggregate([
    //     {$group: {_id: '$city', numOfZipCodes:{$sum:1}}},
    //     {$match: {'numOfZipCodes': {$gt:1}}},
    //     {$sort: {'state' :1 , '_id.city':1}}
    // ]).toArray((err, docs) => {
    //     console.log(docs);
    // });

    // 4/ Display the least populated city in each state
    col.aggregate([
        {$group:
                {
                    _id:{'state': '$state', 'city': '$city'},
                    'population': {$sum: '$pop'}
                }
        },
        {$sort: {'_id.state' : 1, 'population': 1}},
        {$group:
                {
                    _id: '$_id.state',
                    'city': {$first: '$_id.city'},
                    'population': {$first: '$population'},
                }
        }

    ]).toArray((err, docs) => {
        console.log(docs);
    });
});



