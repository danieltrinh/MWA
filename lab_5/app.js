var express = require('express');
var app = express();
var port = 3000;


app.set('port', process.env.PORT || port);

app.listen(port, () => {
    console.log("Server running on port " + port);
});

// SETTING
app.set('trust proxy', true);
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('x-powered-by', false);

// ROUTING
app.get('/', (req, res) => {
    res.status(200);
    res.set('Content-Type', 'text/html');
    res.end('Hi');
});

    // using Promise
app.get('/users', (req, res) => {
    res.status(200);
    res.set('Content-Type', 'text/html');
    res.set('Cache-Control', 'private, max-age=86400');


    let id = req.query.id;
    let params = {};
    if (id) {
        params = {result: id};
    } else {
        let page = req.query.page ? req.query.page : 1;
        res.header('link', `</?page=${parseInt(req.query.page) +1}>; rel='next'`);
        params = {
            results: 20,
            page: page
        };
    }
    require('axios')
        .get('https://randomuser.me/api/', {
            params: params
        })
        .then(
            (resp) => res.end(JSON.stringify(resp.data))
        )
        .catch(
            (err) => console.log(err)
        );
});

//using Async Await
app.get('/usersAsyncAwait', (req,res) => {
    res.status(200);
    res.set('Content-Type', 'text/html');
    res.set('Cache-Control', 'private, max-age=86400');

    let id = req.query.id;
    let params = {};
    if (id) {
        params = {result: id};
    } else {
        let page = req.query.page ? req.query.page : 1;
        params = {
            results: 20,
            page: page
        };
    }

    const getPromise = (params) => {
        return require('axios')
            .get('https://randomuser.me/api/', {
                params: params
            });
    };

    const asyncAwait = async (params)=>{
        try{
            let result = await getPromise(params);
            res.end(JSON.stringify(result.data));
        }
        catch(e)
        {
            console.log(e);
        }
    };
    asyncAwait(params);
});

    //using Observable
app.get('/usersObservable', (req,res) => {
    res.status(200);
    res.set('Content-Type', 'text/html');
    res.set('Cache-Control', 'private, max-age=86400');

    let id = req.query.id;
    let params = {};
    if (id) {
        params = {result: id};
    } else {
        let page = req.query.page ? req.query.page : 1;
        params = {
            results: 20,
            page: page
        };
    }

    const {from} = require('rxjs');

    const getPromise = (params) => {
        return require('axios')
            .get('https://randomuser.me/api/', {
                params: params
            });
    };

    from(getPromise(params)).subscribe(
        (resp) => res.end(JSON.stringify(resp.data))
    );
});