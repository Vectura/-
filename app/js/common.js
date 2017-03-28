$(function(){

    $(".toggle-mnu").click(function() {
      $(this).toggleClass("on");
      $(".hidden-mnu").slideToggle();
      return false;
  });
	
});