$(function () {
	$("#orderform").submit(function(){
		$.post("/ingredient/submit", $("#orderform").serialize()).unbind();
		return false;
	});

	$('#completeorder').submit(function(){
		return false;
	});
})