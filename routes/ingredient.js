/*
 * GET users listing.
 */
var Mods = require('../models/ingred_model');
var Ingredient = Mods[0];
var Order = Mods[1];
var jquery = require('jquery');

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
			return console.log("Error in list");
		res.render('neworder', {inglist: docs, title: 'All Orders'});
	});
};

//Process the submission of the new order
exports.submitorder = function(req, res){
	//console.log(req.body.cname);
	//console.log(req.body.ing.name);
	//res.redirect('/order/new');
	var orderlist = new Order({name: req.body.cname, _order: req.body.ing._id});
	console.log(req.body);
};

//List of ORDERS (currently ingredients for nao)
exports.list = function(req, res){

	var orderlist = Order.find({}).sort('cname').exec(function (err, docs) {
		if (err)
			return console.log("Error in list");
		
		res.render('orders', {orderlist: docs, title: 'All Orders'});
	});
};






//Back up function to delete test ingredients from database
exports.del = function(req, res){
	//Deletes ingredient
	Ingredient.find({}).sort('name').exec(function(err,docs){
			docs[0].remove();
			res.redirect('/order/new');
	});
};