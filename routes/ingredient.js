/*
 * GET users listing.
 */
var models = require('../ingredmodels');
var Ingredient = models.Ingredient;


exports.new = function(req, res){
	res.render('ingredjade', {title: 'Ingredient'});
};

exports.create = function(req, res){
	var samich = new Ingredient({name:req.body.name, cost:req.body.cost});
	samich.save(function (err) {
	if (err)
		return console.log("error we couldn't save the new cat");
		// redirect to the list of cats
	res.redirect('/orders');
	});
};

exports.order = function(req, res){
	res.render('neworder', {title: 'Order'});
};

exports.list = function(req, res){
	var orderlist = Ingredient.exec(function (err, docs) {
		res.render('orders', {orderlist: docs, title: 'All Orders'});
	});
}