$(document).ready(function(){
  new MenuController();
  $('[href="#portfolio"]').bind('click', getGithubFeed);

})


function MenuController(){
	var me = this;
	links = $('.main-menu a');	
	$('article').fadeOut();
	links.each(function(){			
		$(this).bind('click', { link : $(this)}, function(e){
			e.preventDefault();
			$('.loadstate').removeClass('loadstate');
			$('.poster-card-wrapper').hide();
			if ($(this).parent().hasClass('active')){

			}else{
				$('.active').removeClass('active');
				$('article').fadeOut();
				e.data.link.parent().addClass('active');
				var id = e.data.link.attr('href');
				$(id).fadeIn();
			}
		});
			
	})

	$('.toggler').bind('click', function(){
		$(this).toggleClass('active');
	})

	$('.job-description').bind('click', function(){
		$(this).addClass('loadstate');
		$('article').fadeOut();
		$('.active').removeClass('active');
		$('.poster-card-wrapper').show();
	})
}

function getGithubFeed(){
	if($('#github-feed').html() != "Loading..."){
		return false;
	}

	$("#github-feed").html('');
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/mrsunshyne/repos",
        dataType: "json",
        success: function(result) {
            for( i in result ) {
                $("#github-feed").append(
                    "<li><h2><a href='" + result[i].html_url + "' target='_blank'>" + result[i].name + "</a></h2><p>" + result[i].description + "</p></li>"
                );
                console.log("i: " + i);
            }
            console.log(result);
            $("#github-feed").append("<h2>Total Repos: " + result.length+ "</h2>");
        }
    });

}