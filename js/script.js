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
		callNewPage("sub-sites/home.php");
	});

	$(document).on('click', '.portfolio', function(){
		callNewPage("sub-sites/portfolio.php");
	});

	$(document).on('click', '.resume', function(){
		callNewPage("sub-sites/resume.php");
	});

	$(document).on('click', '.contact', function(){
		callNewPage("sub-sites/contact.php");
	});

});

