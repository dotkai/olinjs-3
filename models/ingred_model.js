var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	// Somehow worked
});

var ingredSchema = mongoose.Schema({
	name: String,
	cost: String
});

var orderSchema = mongoose.Schema({
	customerName: String,
	_ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}]
});

var Ingredient = mongoose.model('Ingredient', ingredSchema);
var Order = mongoose.model('Order', orderSchema);
module.exports = [Ingredient, Order];