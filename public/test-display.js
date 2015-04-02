"use strict";
/* global connectRTC */

var rtcService = null;

var menuOpen = false

$(document).ready(function(){

//set menu button to pulse 

$('.testButton img').addClass('button-pulse');

//function to toggle the thumbnail navigation bar up and down

  $('.testButton img').on('click',function(){
    $('.ms-thumb-list').slideToggle(500);
    
    if (menuOpen === false){
    menuOpen = true; 
    $('.testButton').animate({bottom:'20vh'},500);
    $(this).removeClass('button-pulse');
    $('.QRcode').fadeOut();
  } else {
    menuOpen = false;
    $('.testButton').animate({bottom:'2vh'},500);
    $(this).addClass('button-pulse');
    $('.QRcode').fadeIn();

  }
  })

  $('.ms-thumb').on('click',function(){
    var mainImage = $(this).data('full');
    $('.display-holder').attr('src','').attr('src',mainImage);
  })

//autoplay for displaying websites

  var websites = [
    "http://rise-vision.github.io/content-templates/events/events.html",

    "http://swbloom.github.io/hotel/",

    "http://rise-vision.github.io/content-templates/restaurant-menuboard/restaurant-menuboard.html",

    "http://rise-vision.github.io/content-restaurant-promotion/index.html",

    "http://rise-vision.github.io/content-retail-qrcode/",

    "http://rise-vision.github.io/content-templates/school-calendar/school-calendar.html",

    "http://rise-vision.github.io/content-templates/teacher-profile/teacher-profile.html",
    
    "http://pcsandford.github.io/",

    "http://rise-vision.github.io/content-hospital/",

    "http://commondatastorage.googleapis.com/risemedialibrary-395c64e5-2930-460b-881e-009aabb157df/content-templates/school-lunch/school-lunch.html",

    "http://swbloom.github.io/",

    "http://rise-vision.github.io/cafe-template/src/index.html",

    "http://rise-vision.github.io/content-templates/retail/retail.html",

    "http://www.cameroncodes.com/webcomponents/"
  ];


  var restartAutoPlay;
  var clearAutoPlay;
  var autoPlay;
  var restartTimer;

  var currentWebsite = 1;
  var length = websites.length;
  var isRunning = true


  function autoPlayer(){
    $('.display-holder').attr('src',websites[currentWebsite]);
    currentWebsite++;
    


    //show the loader image and remove on page load
    // $('.display--main .holder--loader').css('opacity','1');

    // $('iframe').load(function(){
    //  $('.display--main .holder--loader').css('opacity','0');
    // });

    //when the loop reaches the end of the array, reset it to the start

    if (currentWebsite > length){
      currentWebsite = 0;
    } 



  }; //autoplay function

  var autoPlayControl = setInterval(autoPlayer, 12000);



  //reset the autoplay function each time a thumbnail is clicked

  
  function resetAutoplay(){

    clearInterval(autoPlayControl);
    autoPlayControl = setInterval(autoPlayer, 12000);

  }

  $('.ms-slide .ms-thumb').on('click',function(){
    resetAutoplay();
  });

  $('#images .images').on('click',function(){
    resetAutoplay();
  });


  // Connects to Node.js as server (client = false)
  rtcService = connectRTC(false);

  rtcService.onClientSessionStarted = function() {

    //bind event to menu button
    rtcService.bind("#button--navigation--mobile", "click", function(e) {
      if (menuOpen === true){
      menuOpen = false;  
      $('.ms-thumb-list').slideToggle(500);
      $('.QRcode').fadeIn;
      $('.testButton').animate({bottom:'2vh'},500);
      }
    
    });
    //bind event to button 1
    rtcService.bind("#button1", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://rise-vision.github.io/content-templates/events/events.html";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
    //bind event to button 2
    rtcService.bind("#button2", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
     resetAutoplay()
      var dataUrl = "http://swbloom.github.io/hotel/";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
    //bind event to button 3
    rtcService.bind("#button3", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://rise-vision.github.io/content-templates/restaurant-menuboard/restaurant-menuboard.html";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
    //bind event to button 4
    rtcService.bind("#button4", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://rise-vision.github.io/content-templates/restaurant-promotion/restaurant-promotion";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
    //bind event to button 5
    rtcService.bind("#button5", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://rise-vision.github.io/content-retail-qrcode/";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
    //bind event to button 6
    rtcService.bind("#button6", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://rise-vision.github.io/content-templates/school-calendar/school-calendar.html";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
    //bind event to button 7
    rtcService.bind("#button7", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://rise-vision.github.io/content-templates/teacher-profile/teacher-profile.html";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
    //bind event to button 8
    rtcService.bind("#button8", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://rise-vision.github.io/Retail-In-Store-Display/src/index.html";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });

    //bind event to button 9
    rtcService.bind("#button9", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://pcsandford.github.io/";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
    
    //bind event to button 10
    rtcService.bind("#button10", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://rise-vision.github.io/content-hospital/";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
    //bind event to button 11
    rtcService.bind("#button11", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://commondatastorage.googleapis.com/risemedialibrary-395c64e5-2930-460b-881e-009aabb157df/content-templates/school-lunch/school-lunch.html";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
    //bind event to button 12
    rtcService.bind("#button12", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://swbloom.github.io/";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
     //bind event to button 13
    rtcService.bind("#button13", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://rise-vision.github.io/cafe-template/src/index.html";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
     //bind event to button 14
    rtcService.bind("#button14", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://rise-vision.github.io/content-templates/retail/retail.html";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
     //bind event to button 15
    rtcService.bind("#button15", "click", function(e) {
      // console.log("A button has been pressed on the client", e);
    resetAutoplay()
      var dataUrl = "http://www.cameroncodes.com/webcomponents/";
      var url = dataUrl;
      $("#test-display-iframe").attr("src", url);
    });
  };


});
