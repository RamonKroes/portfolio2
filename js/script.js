function callNewPage(page){
	animation();
		$.ajax({
			url:page
		}).done(function(response){
			$('#content').html(response);
		});
}

function animation(){
	$("#content").html("fadeInUp");
            $("#content").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
         	  $(this).removeClass("fadeInUp");
    		}).addClass("fadeInUp");
	}

$(document).ready(function(){
	$(document).on('click', '.home', function(){
		callNewPage("home.php");
	});

	$(document).on('click', '.portfolio', function(){
		callNewPage("portfolio.php");
	});

	$(document).on('click', '.resume', function(){
		callNewPage("resume.php");
	});

	$(document).on('click', '.contact', function(){
		callNewPage("contact.php");
	});

});

