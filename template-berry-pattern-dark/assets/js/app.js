$(document).ready(function(){
	var t = $('.article-title'); 
	t.height( t.children().height() * 0.86 );
  
	// Smooth Scrolling
	$('.footnote').smoothScroll();
	$('.scroll').smoothScroll();

	$('.article-body').fitVids();	
});

// Enables :active link styling in Mobile Safari
document.addEventListener("touchstart", function(){}, true);