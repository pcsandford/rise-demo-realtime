// var menuOpen = false

// $(document).ready(function(){

// //function to toggle the thumbnail navigation bar up and down

// 	$('.testButton').on('click',function(){
// 		$('.ms-thumb-list').slideToggle(500);
// 		$('.QRcode').slideToggle(500);
// 		if (menuOpen === false){
// 		menuOpen = true;	
// 		$(this).animate({bottom:'22vh'},500);
// 	} else {
// 		menuOpen = false;
// 		$(this).animate({bottom:'2vh'},500);

// 	}
// 	})

// 	$('.ms-thumb').on('click',function(){
// 		var mainImage = $(this).data('full');
// 		$('.display-holder').attr('src','').attr('src',mainImage);
// 	})


	// //autoplay for displaying websites

	// var websites = [
	// 	"http://rise-vision.github.io/content-templates/events/events.html",

	// 	"http://swbloom.github.io/hotel/",

	// 	"http://rise-vision.github.io/content-templates/restaurant-menuboard/restaurant-menuboard.html",

	// 	"http://rise-vision.github.io/content-templates/restaurant-promotion/restaurant-promotion",

	// 	"http://rise-vision.github.io/content-retail-qrcode/",

	// 	"http://rise-vision.github.io/content-templates/school-calendar/school-calendar.html",

	// 	"http://rise-vision.github.io/content-templates/teacher-profile/teacher-profile.html",
		
	// 	"http://pcsandford.github.io/",

	// 	"http://rise-vision.github.io/content-hospital/",

	// 	"http://commondatastorage.googleapis.com/risemedialibrary-395c64e5-2930-460b-881e-009aabb157df/content-templates/school-lunch/school-lunch.html",

	// 	"http://swbloom.github.io/",

	// 	"http://rise-vision.github.io/cafe-template/src/index.html",

	// 	"http://rise-vision.github.io/content-templates/retail/retail.html",

	// 	"http://www.cameroncodes.com/webcomponents/"
	// ];


	// var restartAutoPlay;
	// var clearAutoPlay;
	// var autoPlay;
	// var restartTimer;

	// var currentWebsite = 1;
	// var length = websites.length;
	// var isRunning = true


	// function autoPlayer(){
	// 	$('.display-holder').attr('src',websites[currentWebsite]);
	// 	currentWebsite++;
		


	// 	//show the loader image and remove on page load
	// 	// $('.display--main .holder--loader').css('opacity','1');

	// 	// $('iframe').load(function(){
	// 	// 	$('.display--main .holder--loader').css('opacity','0');
	// 	// });

	// 	//when the loop reaches the end of the array, reset it to the start

	// 	if (currentWebsite > length){
	// 		currentWebsite = 0;
	// 	} 



	// }; //autoplay function

	// var autoPlayControl = setInterval(autoPlayer, 12000);



	// //reset the autoplay function each time a thumbnail is clicked

	
	// function resetAutoplay(){

	// 	clearInterval(autoPlayControl);
	// 	autoPlayControl = setInterval(autoPlayer, 12000);

	// }

	// $('.ms-slide .ms-thumb').on('click',function(){
	// 	resetAutoplay();
	// });
// })