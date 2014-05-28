console.log('\'Allo \'Allo!');

// SMOOTH PAGE SCROLL TO ANCHOR TAGS

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

// NAVBAR BACKGROUND COLOR APPEARS ON SCROLL DOWN

window.addEventListener("scroll",function() { 
   if(window.scrollY > 880) {
   	console.log('HELLLLLLSOSO');
      $('.navbar-fixed-top').addClass('active');
      console.log("TWOOOO");
   }
   else {
      $('.navbar').removeClass('active');
   }
},false);