$(document).ready(function(){
  new MenuController();
})


function MenuController(){
	var me = this;
	links = $('.main-menu a');	
	$('article').fadeOut();
	links.each(function(){			
		$(this).bind('click', { link : $(this)}, function(e){
			e.preventDefault();
			$('.loadstate').removeClass('loadstate');
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

}