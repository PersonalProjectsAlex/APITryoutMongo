// Global instances

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

//Getting an instance for route/s
var routes = require('./routes/english');
var app = express();

//Calling .env
var assert = require('assert');
var env = require('node-env-file');

// Load any undefined ENV variables form a specified file.
env(__dirname + '/.env');

//Getting values from env
var dev_db_url = process.env.DB_CONN;
const host = process.env.HOST
const port = process.env.PORT || 3000;

// Set up mongoose connection
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/students', routes);


app.listen(port, host, function() {
  console.log("Server started.......");
});
// app.listen(port, () => {
//     console.log('Server is up and running on port numner ' + port);
// });

// (async function() {
//   try {
// 	const client = await MongoClient.connect(mongoDB, { useNewUrlParser: true });

// 	//client.Promise = global.Promise;
// 	//var db = client.connection;
// 	//db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// 	console.log('Hola')
// 	app.use(bodyParser.json());
// 	app.use(bodyParser.urlencoded({extended: false}));
// 	app.use('/products', routes);
// 	var port = 1234;

// 	app.listen(port, () => {
//     	console.log('Server is up and running on port numner ' + port);
// 	});
// 	client.close();
	
//   }catch(e) {
//   	console.log(e)
//     console.error.bind(console, 'MongoDB connection error:');
//   }


// })()






