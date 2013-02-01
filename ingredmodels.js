var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/burgers');

var ingredSchema = mongoose.Schema({
	name: String,
	cost: Number
});

var Ingredient = mongoose.model('Food', ingredSchema);
module.exports = Ingredient;