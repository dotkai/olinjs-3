$(function () {
	$(document).ready(function(){
		$("#orderform").submit(function(){
			$.post("/ingredient/submit", $("#orderform").serialize());
			return false;
		});

		$(".com_button").click(function(){
			var idOrder = this.id;
			var orderString = "." + idOrder;
			$(orderString).remove();
			$.post("/order/complete", {id: idOrder});
			return false;
		});
	});
})