//----mobile menu //


// -- menu disapear -//

$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }//if-else
  });//win func.
});//ready func.


// --display year--//

$(function() {
    var d = new Date();
    var n = d.getFullYear();    
  $("#year").html(n);
  });


// ----- Button Typing ----- 

$(function() {
  $(".p2").typed({
    strings: ["Designer", "Developer", "Maker", "Tester"],
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 2000,
    showCursor: false,
    loop: true
  });
}); 


$(function() {
  $(".p1").typed({
    strings: ["Software", "Web",],
    typeSpeed: 20,
    backSpeed: 10,
    backDelay: 2000,
    showCursor: false,
    loop: true
});
});

// ----- Scroll to Top ----- 

$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 100px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 900);
});

// ----- Fading menu ----- 
/*
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {      // If page is scrolled more than 50px
        $('#fadein_menu').fadeIn("slow");    // Fade in the menu
    } else {
        $('#fadein_menu').fadeOut("linear");   // Else fade out the menu
    }
});
*/


//-----clock counter------

var nhours;
var nmins;
var nsec;
var today;

function initialiseClock() {
	//Sets the two dates
	var startdate =new Date(2015, 0, 1); //Month is 0-11 in JavaScript
	today=new Date();
	
	// time in seconds bewteen today and start
	var secondsToDate = (Math.ceil((today.getTime()/1000)-(startdate.getTime()/1000)));
	
	// assume that 220 days per year spent working with 7.5 hours per day
	var secondsPerYear = 220*7.5*3600;
	var secondsInYear = 365*24*3600;
	var workPercentage = Math.ceil((secondsPerYear/secondsInYear)*100);
	var secondsSpentWorking = secondsToDate * (workPercentage/100);
	
	nhours=Math.floor(secondsSpentWorking/3600); 
	nmins=Math.floor(secondsSpentWorking/60)-(nhours*60); 
	nsec=Math.ceil(secondsSpentWorking-(nhours*3600)-(nmins*60));
	
  
	nmins = nmins + "";
	nsec = nsec + "";
	
	if(nmins.length == 1) { nmins = "0"+nmins; }
	if(nsec.length == 1) { nsec = "0"+nsec; }
	
	$("span#time").html(nhours+":"+nmins+":"+nsec);
	clockTick();
}


function clockTick() {

	// Don't tick when I'm not working!
	currentDay = today.getDay();
	currentHour = today.getHours();
	if(((currentDay == 0) || (currentDay == 6)) || ((currentHour < 9) || (currentHour > 18))) {
		return 0;
	}
	
	nsec = parseInt(nsec);
	nmins = parseInt(nmins);
	nhours = parseInt(nhours);
	
	nsec++;
  	
	if(nsec == 60) {
		nsec = 0; 
		nmins++;
	if(nmins == 60) {
			nhours++;
			nmins = 0;
	}
    }
	
	nmins = nmins + "";
	nsec = nsec + "";

	if(nmins.length == 1) { nmins = "0"+nmins; }
	if(nsec.length == 1) { nsec = "0"+nsec; }
	
	$("span#time").html(nhours+":"+nmins+":"+nsec);
	setTimeout("clockTick()", 1000);
}
	
$(document).ready(function() {
	initialiseClock();
});
  

/*---responsive menu---

$('a').click(function(){
  $('a').removeClass('selected');
  $(this).addClass('selected');
});
*/
  
