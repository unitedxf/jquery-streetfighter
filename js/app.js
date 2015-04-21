$(document).ready(function() {
    $('.ryu').mouseenter(function(){
    	$('.ryu-still').hide();
		$('.ryu-ready').show();

		})	

	    .mouseleave(function(){	
		$('.ryu-ready').hide();	
		$('.ryu-still').show();
		
		})

			.mousedown(function() {
		  playHadouken();
		  $('.ryu-ready').hide();
		  $('.ryu-throwing').show();
		  $('.hadouken').finish().show()
		  .animate(
		    {'left': '1020px'},
		    500,
		    function() {
		      $(this).hide();
		      $(this).css('left', '520px');
		    }
		  );
		})
	// show hadouken and animate it to the right of the screen
		

		.mouseup( function(){
	
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();	

      })

		    // show tyu cool pose
      
        $("body").keydown(function(e){
        	if	(e.keyCode == 88){
       	$('.ryu-all').hide();		
 		$('.ryu-cool').show();
}
 	

      })

       .keyup(function(){
        $('.ryu-cool').hide();
 		$('.ryu-ready').show();	
 	

	})

     

      
   });



function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}





