const express = require('express');
const app = express();
const port = 3000;

const crypto = require('crypto');

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

//LISTEN
app.set('port', process.env.PORT || port);

app.listen(port, () => {
   console.dir("Server is running on port " + port);
});

let collection;
app.use( (req,res,next) => {
    if(!collection)
    {
        client.connect((err)=>{
            collection=client.db('mydb').collection('homework7');
            req.collection = collection;
            next();
        })
    }
    else{
        next();
    }
});

app.all('/secret', (req, res, next)=>{
    res.status(200);
    res.set('Content-Type', 'application/json');
    res.set('Cache-Control', 'private, max-age=86400');

    req.collection.findOne({}, (err,doc) => {
        let decrypted = decrypt(doc.message);
        res.end(decrypted);
        client.close();
    });
    console.dir("Done");
});

function decrypt(message)
{
    const secret = 'asaadsaad';

    const decipher = crypto.createDecipher('aes256', secret);

    let decrypted = decipher.update(message, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
