var express = require('express');
var app = express();
var port = 3000;

var morgan = require('morgan');
var cors = require('cors');


// LISTEN
app.set('port', process.env.PORT || port);

app.listen(port, () => {
    console.log("Server running on port " + port);
});

// SETTING
app.set('trust proxy', true);
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('x-powered-by', false);

const data = [{
    id: 1,
    name: "Assad Saad",
    course: "CS572",
    grade: 95
}];

// EXTERNAL MIDDLEWARE
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

const { check, validationResult } = require('express-validator/check');

// ROUTING

app.all('/api/', (req, res, next) => {
    res.status(200);
    res.set('Content-Type', 'application/json');
    res.set('Cache-Control', 'private, max-age=86400');

    next();
});

app.get('/api/', cors() ,  function (req, res, next) {
    res.send(JSON.stringify(data));
    next();
});

app.post('/api/', [
        check('name').isLength({ max: 10 }),
        check('course').isLength({ min: 2 })
    ],function (req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    let id = data.length + 1;
    console.log(req.query);
    let newGrade = {
        id: id,
        name: req.query.name,
        course: req.query.course,
        grade: req.query.grade
    };
    data.push(newGrade);
    res.send(JSON.stringify(newGrade));
    next();
});

app.delete('/api/', function (req, res, next) {
    let elementIndex = data.findIndex((e) => e.id == req.query.id);
    console.log(elementIndex);
    if (elementIndex > -1)
        data.splice(elementIndex, 1);
    else
        throw new Error("Can not find element to delete");
    res.send(JSON.stringify(data));
    next();
});

app.put('/api/',[
    check('name').isLength({ max: 10 }),
    check('course').isLength({ min: 2 })
    ], function (req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    let elementIndex = data.findIndex((e) => e.id == req.query.id);
    if(elementIndex > -1)
    {
        let element = data[elementIndex];
        let newElement = {
            id: element.id,
            name: req.query.name,
            course: req.query.course,
            grade: req.query.grade
        };
        data[elementIndex] = newElement;
        res.send(JSON.stringify(data[elementIndex]));
    }
    else
        throw new Error("Can not find element to replace");

    next();
});

app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500).end('Something went wrong');
});

