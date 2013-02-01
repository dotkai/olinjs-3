/*
 * GET users listing.
 */
var Ingredient = require('../models/ingred_model');


exports.new = function(req, res){
	res.render('ingredjade', {title: 'Ingredient'});
};

exports.create = function(req, res){
	var samich = new Ingredient({name:req.body.name, cost:req.body.cost});
	samich.save(function (err) {
	if (err)
		console.log("error we couldn't save the new Ingredient");
	console.log("Created!");
	res.redirect('/orders');
	});
};

exports.neworder = function(req, res){
	//Makes a new order
	res.render('neworder', {orderlist: docs, title: 'Order'});
	//Redirect to /orders
};

exports.list = function(req, res){
	Ingredient.find({}).exec(function (err, docs) {
		if (err)
			console.log("Error in list");
		res.render('orders', {orderlist: docs, title: 'All Orders'});
	});
};

exports.endorder = function(req, res){
	//Deletes an order when "completed" button is hit
}