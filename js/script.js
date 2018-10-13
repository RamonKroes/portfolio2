$(document).ready(function(){
	
	



	$(document).on('click', '.home', function(){
		animation();
		$.ajax({
			url:"home.php"
		}).done(function(response){
			$('#content').html(response);
		});
	});

	$(document).on('click', '.portfolio', function(){
		animation();
		$.ajax({
			url:"portfolio.php"
		}).done(function(response){
			$('#content').html(response);
		});
	});





});

function animation(){
	$("#content").html("fadeInUp");
            $("#content").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
         	  $(this).removeClass("fadeInUp");
    		}).addClass("fadeInUp");
	}