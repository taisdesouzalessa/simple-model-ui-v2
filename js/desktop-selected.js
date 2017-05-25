$(function(){
	$("a.about-proj").css('border-bottom', 'solid 5px #FFED00');
  
  $(".desktop-menu li a").click(function(){
  	$(".desktop-menu li h2 a").css('border-bottom', 'solid 0px white');
     $(this).css('border-bottom', 'solid 5px #FFED00');

  });

});