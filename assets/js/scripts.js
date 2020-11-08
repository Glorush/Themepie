$(document).ready(function(){


	// nav-active
	$('body').scrollspy({ target: '#nav-bar-active' })

	// team-carousel
	$('.team-carousel').owlCarousel({
		items:3,
		loop:true,
		dot:false,
		margin:30,
		nav:false,
	    responsive:{
	        0:{
	            items:1,
	            dots:false
	        },
	        600:{
	            items:2,
	            dots:false
	        },
	        992:{
	            items:3,
	        },
	        1400:{
	            items:4,
	        }
	    }

	});



	// mixitup
	var mixer = mixitup('.portfolio-mixitup');


	// barfiller
	$('#bar1').barfiller({barColor: "#F8F8F8", duration: 1000});
	$('#bar2').barfiller({barColor: "#F8F8F8", duration: 1000});
	$('#bar3').barfiller({barColor: "#F8F8F8", duration: 1000});



	// customer-carousel

	$('.customer-image').owlCarousel({
		items:4,
		loop:true,
		dots:false,
		nav:true,
		navText: ["<img src='assets/images/cust-rev/left-arrow.png'>","<img src='assets/images/cust-rev/right-arrow.png'>"]
	})
	$('.customer-carousel').owlCarousel({
		items:1,
		loop:true,
		dots:false,
		nav:false,
		center:true
	})

	// twitter carousel
	$('.twitter-carousel').owlCarousel({
		items:1,
		loop:true,
		dots:true,
		nav:false,
	});


	// video popup
	$('.video-popup').magnificPopup({
  		type: 'iframe'
	});


	// animate html body
	$('.menu ul li a').click(function(){  
		$('html,body').animate({    
			scrollTop:$($(this).attr('href')).offset().top  
		},1000);
		return false;
	});

	// search toggle
	$('.search-click').click(function(){
		$('.search-container').slideToggle(500);
		return false;
	});
	// searchtoggle
	$('.md-screen-n').click(function(){
		$('.menu ul').slideToggle(1000);
		return false;
	});

	// back-to-top
	$('.back-to-top').click(function(){
		$('html,body').animate({
			scrollTop:0
		},1000);
		return false;
	});


});


$(window).scroll(function(){
	var scrollvalue = $(this).scrollTop();

	if(scrollvalue>150){
		$('header').addClass('sticky');
	}else{
		$('header').removeClass('sticky');

		return false;
	}

	// back-to-top
	if(scrollvalue>500){
        $('.back-to-top').fadeIn();
    }else{
        $('.back-to-top').fadeOut();
    }
   	return false;
});