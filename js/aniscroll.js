 $(document).ready(function(){
 	
 	  $(document).ready(function(){
    	loadedIscrollo();
 
    });

  
	
	var myScroll;
	
	function loadedIscrollo () {
		myScroll = new IScroll('#wrapper', {
			scrollbars: false,
			mouseWheel: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'scale',
			fadeScrollbars: false
		});
	}
	
	
	
 	
 });



 