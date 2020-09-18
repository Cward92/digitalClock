function currentTime() {
    var date = new Date(); //Date Object Creation//
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getFullYear();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; 
    document.getElementById("date-clock").innerText = month + " / " + day + " / " + year;//Add Time values to div//
      var t = setInterval(function(){ currentTime() }, 1000); //Set update interval//
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); // call time function to initiate //