var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var models = require('../models/index');

var Hotel = models.Hotel;
var Place = models.Place;
var Activity = models.Activity;
var Restaurant = models.Restaurant;

router.get('/', function(req, res, next){
	Hotel.find({}).exec().then(function(hotels){
		Restaurant.find({}).exec().then(function(restaurants){
			Activity.find({}).exec().then(function(activities){
				res.render('index', {
					hotels: hotels,
					restaurants: restaurants,
					activities: activities
				})
		}).then(null, console.log);
		}).then(null, console.log);
		}).then(null, console.log);
	});


module.exports = router;