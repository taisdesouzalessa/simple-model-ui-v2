$(function(){
  
  $(".dropdown-menu li a").click(function(){
    
    //$(".btn:first-child").text($(this).text());
     //$(".btn:first-child").val($(this).text());
     $(".dropdown-menu li a").css('color', '#000');
     $(this).css('color', '#ccc');

  });

});