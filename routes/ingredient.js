/*
 * GET users listing.
 */
var Mods = require('../models/ingred_model');
var Ingredient = Mods[0];
var Order = Mods[1];

//FORM new Ingredient
exports.new = function(req, res){
	res.render('ingredjade', {title: 'Ingredient'});
};

//CREATE new ingredient
exports.create = function(req, res){
	var samich = new Ingredient({name: req.body.name, cost: req.body.cost});
	samich.save(function (err) {
	if (err)
		return console.log("Error: We couldn't save the new Ingredient");
	res.redirect('/order/new');
	});
};

//FORM display ingredient list from which user can make order
exports.neworder = function(req, res){
	var inglist = Ingredient.find({}).sort('name').exec(function (err, docs) {
		if (err)
			return console.log("Error in new order list");
		res.render('neworder', {inglist: docs, title: 'All Orders'});
	});
};

//Process the submission of the new order
exports.submitorder = function(req, res){
	var customer = req.body.cname
		, ing = req.body.ingredient;
	console.log(customer,ing);
	var neworder = new Order({customerName: customer, _ingredients: ing});
	neworder.save(function(err){
	if (err)
		return console.log("Error: We couldn't save the new Order");
	});
};

//List of ORDERS
exports.list = function(req, res){

	var orderlist = Order.find({}).sort('customerName').exec(function (err, docs) {
		if (err)
			return console.log("Error in Order list");
		
		res.render('orders', {orderlist: docs, title: 'All Orders'});
	});
};

//Removes an order
exports.endorder = function(req, res){
	//console.log(req.body.id);
	Order.find({_id: req.body.id}).exec(function (err, docs){
		docs[0].remove();
		if (err)
			return console.log("Unable to complete Order");
	});
}