// Global instances
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

//Intance for model

const english = require('../models/english');
const words = require('../models/words');


app.use(bodyParser.urlencoded({
        extended: false
}));
app.use(bodyParser.json());

exports.createStudent = function (req, res, next) {
    var englishRequets = new english(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            branch: req.body.branch,
            comments: req.body.comments
        }
    );
	let formData = req.body;
    console.log('form data', formData);
    englishRequets.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(formData);
        // res.send('Product Created successfully')
    })
};


//Words
exports.createWord = function (req, res, next) {
    var wordRequets = new words(
        {
            word: req.body.word,
            meaning: req.body.meaning,
            sentence: req.body.sentence
        }
    );
    let formData = req.body;
    console.log('form data', formData);
    wordRequets.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(formData);
        
    })
};


exports.words = function (req, res, next) {
    words.find({}, function (err, wordResult) {
        if (err) return next(err);
        res.send(wordResult);
    })
};
