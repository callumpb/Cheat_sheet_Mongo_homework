const express = require('express');
const parser = require('body-parser');
const MongoClinet = require('mongodb').MongoClient;
const server = express();

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}))
