

const express = require ('express');
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use(express.static(__dirname,'/dist'));

const port = process.env.PORT || 8080;
app.get(/.*/, function (req, res){

    res.sendfile(__dirname + "/dist/index.html");
});

app.listen(port);

console.log("server started")
