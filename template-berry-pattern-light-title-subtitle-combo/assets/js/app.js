var getTitlesHeight = function($titles){
	var $children = $titles.children(), 
		sum = 0, 
		max = $children.length, 
		i = 0;

	$children.each(function(){
		sum += $(this).outerHeight(true);
	});
	return sum;
}

$(document).ready(function(){

	var $titles = $('.article-titles'); 
	$titles.height(getTitlesHeight($titles));
  
	// Smooth Scrolling
	$('.footnote').smoothScroll();
	$('.scroll').smoothScroll();

	$('.article-body').fitVids();

});

// Enables :active link styling in Mobile Safari
document.addEventListener("touchstart", function(){}, true);