function myDigitalClock() {
  var d1 = new Date();
  var hours = d1.getHours(); // 0-23
  var minutes = d1.getMinutes(); // 0-59
  var seconds = d1.getSeconds(); // 0-59
  var zone = "AM";

  // MY CODE
  // at the beginning current time code has been given
  //"if" part is for controlling the time is AM or PM. If it's PM change our zone variable to "PM" == means setting time 12 hours format
  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
    zone = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var time = hours + ":" + minutes + ":" + seconds + " " + zone; //displaying format

  //displaying part
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(myDigitalClock, 1000); // special code for JS to start function at every 1000ms
}

myDigitalClock();

/*calling JS code at HTML
  <div id="MyDigitalClockDisplay" class="clock" 
  onload="myDigitalClock()"></div>
  
  We also need CSS coding for displaying clock on the web page. I used for that
  body {
    background: yellow;
}

.clock {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #421AE1;
    font-size: 60px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 7px;
   


}
  
  */
