$(document).ready(function(){
  
  // Smooth Scrolling
  $('.footnote').smoothScroll();
  $('.scroll').smoothScroll();

  $('.article-body').fitVids();

});

// Enables :active link styling in Mobile Safari
document.addEventListener("touchstart", function(){}, true);