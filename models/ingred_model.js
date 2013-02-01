var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/burgers');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // Somehow worked
});

var ingredSchema = mongoose.Schema({
	name: String,
	cost: Number
});

var orderSchema = mongoose.Schema({
	customerName: String,
	ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}]
});

var Ingredient = mongoose.model('Ingredient', ingredSchema);
module.exports = Ingredient;