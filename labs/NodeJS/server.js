const express = require('express');
const app = express();

const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("TestDatabase");
    const query = {Type: "Musiikki"};
    dbo.collection("test").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        castResult(result);
        db.close();
    });
});

function castResult(result){
    app.get('/', function (req, res) {
        res.send(result);
    })
}