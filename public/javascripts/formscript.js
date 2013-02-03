$(function () {
	$("#orderform").submit(function(){
		$.post("/ingredient/submit", $("#orderform").serialize());
		return false;
	});

	$('#completeorder').submit(function(){
		return false;
	});
})