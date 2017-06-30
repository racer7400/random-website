//This is for the small side show in the begining of the web page
var myImage = document.getElementById("travelimage");

var imageArray = ["/pictures/IMG_1029.jpg", "/pictures/IMG_0988.jpg", "/pictures/IMG_0839.jpg",
                  "/pictures/IMG_0802.jpg", "/pictures/IMG_0723.jpg", "/pictures/IMG_0716.jpg" ];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}
var intervalHandle = setInterval(changeImage,2000);
myImage.onclick =  function() {
	clearInterval(intervalHandle);
};
//this is for the clock on top above the slide show.
var c = document.getElementById("current-time");    
setInterval(updateTime, 1000);

function updateTime(){
    var d = new Date();
    
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var ampm = "AM";
        
    if (hours >= 12) {
        hours -= 12;
        ampm = "PM";
    }
    if (hours === 0) {
			hours = 12;
		}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
    if (seconds < 10) {
		seconds = "0" + seconds;
	}

    var sep = ":";
    if (d.getSeconds() % 2 === 1) sep = " ";

    c.innerHTML =  hours + sep + minutes + sep + seconds + " " + ampm;
}   
      //handle the form submit event
function prepareEventHandlers() {
	document.getElementById("userinfo").onsubmit = function() {
		// prevent a form from submitting if no email.
		if (document.getElementById("email").value === "") {
			document.getElementById("errorMessage").innerHTML = "Please provide at least an email address!";
			// to STOP the form from submitting
			return false;
		} else {
			// reset and allow the form to submit
			document.getElementById("errorMessage").innerHTML = "";
			return true;
		}
	};
}
    // this is for the map on the very bottom of the web page.
function initMap() {
    var homelocation = {lat: 40.1055699, lng: -74.2025937};
    var worklocation = {lat: 40.0937636, lng: -74.2206787};
    var map;
    map = new google.maps.Map(document.getElementById("mymap"), {
          center: {lat: 40.100118, lng: -74.213397},
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          //draggable: false,
          scrollwheel: false
    });

    var popupcontent1 = "Raccah Family<br/>";
        popupcontent1 += "2 Eden Court<br/>";
        popupcontent1 += "Lakewood NJ 08701<br/>";
    
    var infowindow1 = new google.maps.InfoWindow({
        content: popupcontent1
   });

    var marker1 = new google.maps.Marker({
        position: homelocation,
        map: map,
        title: "My House!"
        });
    marker1.addListener("click", function(){
        infowindow1.open(map, marker1);
    });

    var popupcontent2 = "Shay Work<br/>";
        popupcontent2 += "400 Private Way<br/>";
        popupcontent2 += "Lakewood NJ 08701<br/>";
    
    var infowindow2 = new google.maps.InfoWindow({
        content: popupcontent2
   });
    var marker2 = new google.maps.Marker({
        position: worklocation,
        map: map,
        title: "Shay Work!"
        });
    marker2.addListener("click", function(){
        infowindow2.open(map, marker2);
});
}
    // show and hide vehicle form
function preparePage() {
	document.getElementById("clicktoopen").onclick = function() {
		if (document.getElementById("clicktoopen").checked) {
			// use CSS style to show it
			document.getElementById("checkboxform").style.display = "block";
		} else {
			// hide the div
			document.getElementById("checkboxform").style.display = "none";
		}
	};
	// now hide it on the initial page load.
	document.getElementById("checkboxform").style.display = "none";
}

/*var picture = document.getElementById("danielrandom");
picture.style.position = "absolute";
var leftPosition = 0;
var goRight = true;

function setPosition(left) {
    leftPosition += left;
    picture.style.left = leftPosition + "px";
}
function animate() {
    if (leftPosition > 1100) {
        goRight = false;
    }
    if(leftPosition <= 0) {
        goRight = true;
    }
    return goRight ? setPosition(2) : setPosition(-2);
}
var starting = setInterval(animate, 10);
picture.onclick = function(){
    clearInterval(starting);
};
*/
//Animate an image
/*var picture = document.getElementById("danielrandom");
 picture.style.position = "fixed";
var currentPosTop = 0;
var currentPosDown = 0;
var intervalHandle;

function beginAnimate() {
	picture.style.left = "0px";
    picture.style.top = "100px";
    // cause the animateBox function to be called
    intervalHandle = setInterval(animateBox,25);
}
function animateBox() {
    // set new position
    currentPosTop+=2;
    picture.style.left = currentPosTop + "px";
    currentPosDown+=1;
    picture.style.top = currentPosDown + "px";
    // set new position
    if ( currentPosTop > 1100) {
        // clear interval
        clearInterval(intervalHandle);
        // reset custom inline styles
        picture.style.left = "";
        picture.style.top = "";
    }
}*/
//simon allderice way of making a picture scroll ONCE!
//Animate an image
/*var picture = document.getElementById("danielrandom");
var currentPosTop = 0;
var currentPosDown = 0;
var intervalHandle;

function beginAnimate() {
    picture.style.position = "fixed";
	picture.style.left = "0px";
    picture.style.top = "100px";
    // cause the animateBox function to be called
    intervalHandle = setInterval(animateBox,25);
}
function animateBox() {
    // set new position
     currentPosTop+=2;
    picture.style.left = currentPosTop + "px";
    currentPosDown+=1;
    picture.style.top = currentPosDown + "px";
    // set new position
    if ( currentPosTop > 1100) {
        // clear interval
        clearInterval(intervalHandle);
        // reset custom inline styles
        picture.style.position = "";
        picture.style.left = "";
        picture.style.top = "";
    }
}*/
//for countdown
var countdowndiv = document.getElementById("countdown"); 
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var cont = document.getElementById("continue");
var reset = document.getElementById("reset");
var timeDisplay  = document.getElementById("time");
var minutes = document.getElementById("minutes");
var pausestartdiv = document.getElementById("pausestart");
var intervalHandle2;
var secondsleft;
var display;
var min;
var sec;

start.onclick = function () {
        beginTimer();
    };
    //reset the number box
function resetpage() {
    countdowndiv.style.display = "block";
    cont.style.display = "block";
    reset.style.display = "block";
    pausestartdiv.style.display = "none";
}
function tick() {
    // turn seconds into mm:ss
    min = Math.floor(secondsleft / 60);
    sec = secondsleft - (min * 60);
    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
       sec = "0" + sec;
    }
    // concatenate with colon
    display = min + ":" + sec;
    // now change the display
   timeDisplay.innerHTML = display;
   //change color to red if under 30 sec
   if (secondsleft < 30 ) {
        timeDisplay.style.color = "#FF0000";
    }
    // stop if down to zero
    if (secondsleft===0) {
        alert ("Done!");
        timeDisplay.style.color = "#000000";
        clearInterval(intervalHandle2);
        resetpage();
    }
    // subtract from seconds remaining
    secondsleft--;
}

function beginTimer() {
    secondsleft = minutes.value * 60;
    intervalHandle2 = setInterval(tick, 1000);
    countdowndiv.style.display = "none";
    pausestartdiv.style.display = "block";
    cont.style.display = "none";
    reset.style.display = "none";
}

pause.onclick = function() {
     clearInterval(intervalHandle2);
     cont.style.display = "inline";
    reset.style.display = "inline";
};
cont.onclick = function () {
        intervalHandle2 = setInterval(tick, 1000);
        cont.style.display = "none";
        reset.style.display = "none";
};
reset.onclick = function() {
       clearInterval(intervalHandle2);
       minutes.value = "";
       resetpage();
       min = 0;
       sec = 0;
       if (sec < 10) {
       sec = "0" + sec;
    }
     timeDisplay.style.color = "#000000";
       display = min + ":" + sec;
       timeDisplay.innerHTML = display;
};
//var countdowndiv = document.getElementById("countdown"); 
////var minutes = document.getElementById("minutes").value;
//var start = document.getElementById("start");
//var secondsleft;
//var intervalHandle2;
//
//start.onclick = function () {
//        beginTimer();
//    };
//function resetpage() {
//    countdowndiv.style.display = "block";
//}
//function tick() {
//    // grab the h1
//    var timeDisplay = document.getElementById("time");
//    // turn seconds into mm:ss
//    var min = Math.floor(secondsleft / 60);
//    var sec = secondsleft - (min * 60);
//    // add a leading zero (as a string value) if seconds less than 10
//    if (sec < 10) {
//       sec = "0" + sec;
//    }
//    // concatenate with colon
//    var display = min + ":" + sec;
//    // now change the display
//    timeDisplay.innerHTML = display;
//    // stop if down to zero
//    if (secondsleft===0) {
//        alert ("Done!");
//        clearInterval(intervalHandle2);
//        resetpage(); 
//    }
//    // subtract from seconds remaining
//    secondsleft--;
//}
//
//function beginTimer() {
//    var minutes = document.getElementById("minutes").value;
//    secondsleft = minutes * 60;
//    intervalHandle2 = setInterval(tick, 1000);
//    countdowndiv.style.display = "none";
//}

function myFunction (x,y){
    var myVar = x * y;
    //console.log (myVar);
    return myVar;
}
myFunction(2,5);

//weather
(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?zip=08701,us";
	var apiKey = "942db4a80fea85470ce9e3d268335a4c"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
    var httpRequest;
	makeRequest();
	
	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open("GET", url + "&appid=" + apiKey);
		httpRequest.send();
	}
	function responseMethod() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				updateUISuccess(httpRequest.responseText);
			} else {
				updateUIError();
			}
			console.log(httpRequest.responseText);
		}
	}
	// handle XHR success
	function updateUISuccess (responseText) {
		var response = JSON.parse(responseText);
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		var weatherBox = document.getElementById("weather");
		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F </p><p>" + condition + "</p>";
	}
	
	function updateUIError() {
		var weatherBox = document.getElementById("weather");
		weatherBox.className = "hidden";
	}
	
})();


//you can only have ONE onload per javascript page!!
window.onload =  function() {
	//setTimeout(beginAnimate,1000);
    preparePage();
    prepareEventHandlers();
    pausestartdiv.style.display = "none";
};   