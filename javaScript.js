




   
     
  
/*
$(document).ready(function(){
   $(".social li").hide();
  
  $("#inside").mouseover(function(){
   $(".social li").delay(3000).fadeIn("slow");
  });
  $("#inside").mouseout(function(){
   $(".social li").fadeOut();
  });
 });
 */
 
$(document).ready(function(){
   $(".social li").hide();
  
    $('h8').addClass('fixed');
   
    
 $("#inside").hover(function(){
    
    $(this).animate({
            width: "1250px"
        }, 900 );
   
    
    $("li.google").delay(300).fadeIn("slow");
    $("li.github").delay(400).fadeIn("slow");
    $("li.facebook").delay(500).fadeIn("slow");
    $("li.pinterest").delay(600).fadeIn("slow");
    $("li.linkedin").delay(700).fadeIn("slow");
    $("li.youtube").delay(800).fadeIn("slow");
    $("li.whatsapp").delay(900).fadeIn("slow");
    $("li.twitter").delay(1000).fadeIn("slow");

}, function() {
    
  //$(".social li").hide();
  
 // $("li.twitter, li.whatsapp, li.youtube, li.linkedin, li.pinterest, li.facebook, li.github, li.google").delay(0).fadeOut("fast");
    
    // $(this).delay(1500).animate({
      //      width: "500px"
       // }, 1000 );
    
    
    
    $("li.twitter").delay(0).fadeOut("fast");
    $("li.whatsapp").delay(150).fadeOut("fast");
    $("li.youtube").delay(300).fadeOut("fast");
    $("li.linkedin").delay(450).fadeOut("fast");
    $("li.pinterest").delay(600).fadeOut("fast");
    $("li.facebook").delay(750).fadeOut("fast");
    $("li.github").delay(900).fadeOut("fast");
    $("li.google").delay(1050).fadeOut("fast");
    
   $(this).delay(1100).animate({
            width: "500px"
        }, 1000 );

  
  });

});


$(window).scroll(function(){
      if ($(this).scrollTop() > 0) {
         $('h8').removeClass('fixed');
          
          
         document.getElementById('inside').style.pointerEvents = 'none'; 
      
      }
    
     else {
          $('h8').addClass('fixed');
      
          document.getElementById('inside').style.pointerEvents = 'auto'; 
      }
  
  });
