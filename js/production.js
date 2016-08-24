$(document).ready(function() {

	// Nav Hover Function
	function navHover() {
		$('nav.navbar-custom').hover(function() {
			$(this).stop().toggleClass('hovered');
		});
		$('ul.nav li').hover(function() {
			$(this).children('.subNav').stop().toggleClass('hovered');
		});	
		$('ul.nav li').hover(function() {
			subNavVal = $(this).children('.subNav').length;
			// console.log(subNavVal);
			if ((subNavVal) > 0) {
				$(this).toggleClass('darrowed');
			}
		});		
	};

	// $( window ).resize(function() {

		// console.log("window resized");

	 //    if ( $(window).width() >= 992) {
	   



		// }; // End MQ Responsive JS @ 768

	// }); // End MQ Responsive WindowResize Event





    ///// Window Width Responsive

    var $window = $(window);

	function checkWidth() {
		var windowsize = $window.width();
		if (windowsize > 992) {
			navHover();
		}
	}
   // Execute on load
   	checkWidth();
   // Bind event listener
   	$(window).resize(checkWidth);



$(window).resize(function() {
   console.log($window.width());
 });












}); // End DocReady