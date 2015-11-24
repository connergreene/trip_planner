var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Place = new Schema({
	address: {type: String},
	city: {type: String},
	state: {type: String},
	phone: {type: String},
	location: {type: Array}  //lat, lon number arra
});



var Hotel = new Schema({
	name: {type: String},
	place: {type: Array}, //array of place schema
	num_stars: {type: Number},
	amenities: {type: String}, //comma delimited string list
});


var Activity = new Schema({
	name: {type: String},
	place: {type: Array}, //array of place schema
	age_range: {type: String}
});


var Restaurant = new Schema({
	name: {type: String},
	place: {type: Array}, //array of place schema
	cuisines: {type: String},   //comma delimited string list
	price: {type: Number} //integer from 1-5 for how many dollar signs
});