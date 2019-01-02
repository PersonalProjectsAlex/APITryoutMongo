// Global instances

var express = require('express');
var router = express.Router();
const multer = require('multer');

let request = multer();

//Calling .env
var assert = require('assert');
var env = require('node-env-file');

// Load any undefined ENV variables form a specified file.
//env(__dirname + '../.env');

// Require the controllers WHICH WE DID NOT CREATE YET!!
var english_controller = require('../controllers/english');

//Getting values from env
//var createStudent = process.env.createStudent;


//Routes
//router.post(createStudent, english_controller.createStudent);
router.post('/createStudent',request.fields([]), english_controller.createStudent);
router.post('/createWord',request.fields([]), english_controller.createWord);

router.get('/words', english_controller.words);

//router.put('/:id/update', english_controller.product_update);

//router.delete('/:id/delete', english_controller.product_delete);


module.exports = router;