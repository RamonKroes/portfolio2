$(document).ready(function(){
	
	$(document).on('click', '.home', function(){
		alert('gelukt nigg');
		$.ajax({
			url:"home.php"
		}).done(function(response){
			$('#content').html(response);
		});
	});

	$(document).on('click', '.portfolio', function(){
		$.ajax({
			url:"portfolio.php"
		}).done(function(response){
			$('#content').html(response);
		});
	});





});