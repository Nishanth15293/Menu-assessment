/**
 * Created by Nishanth on 2/2/2016.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var mongodb = require('mongodb');
//var mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost:27017/menuat");
var path = require('path');

var low = require('lowdb');
var _ = require('lodash');
const storage = require('lowdb/file-async');
const db = low('menu.json', {storage:storage});
//low.path='../data/users.json';



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static((path.resolve('../client'))));
app.use(express.static((path.resolve('../client/bower_components'))));


app.get('/',function(req,res){
    res.sendFile(path.resolve('../Client/index.html'));
});
//abcd
app.get('/data',function(req,res){
    //var menu = db('categories').find({categoryName: "Featured Drinks"});
    var menu = db.object;
    //console.log(menu);
    res.send(menu.categories);
});

app.listen(8080);
console.log("Party at Menuat - 8080!");