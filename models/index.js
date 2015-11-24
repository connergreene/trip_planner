var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/seedjs');

var placeSchema = new Schema({
	address: {type: String},
	city: {type: String},
	state: {type: String},
	phone: {type: String},
	location: {type: Array}  //lat, lon number arra
});


var hotelSchema = new Schema({
	name: {type: String},
	place: [placeSchema], //array of place schema
	num_stars: {type: Number},
	amenities: {type: String}, //comma delimited string list
});


var activitySchema = new Schema({
	name: {type: String},
	place: [placeSchema],
	age_range: {type: String}
});


var restaurantSchema = new Schema({
	name: {type: String},
	place: [placeSchema],
	cuisines: {type: String},   //comma delimited string list
	price: {type: Number} //integer from 1-5 for how many dollar signs
});


var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant
}