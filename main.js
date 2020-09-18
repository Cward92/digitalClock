function currentTime() {
    var date = new Date(); //Date Object Creation//
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var month = date.getMonth();
    var year = date.getFullYear();
    var day = date.getDate();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    month = updateMonth(month);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; 
    document.getElementById("date-clock").innerText = month + " " + day + ", " + year;//Add Time values to div//
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

  function updateMonth(j) {
    var thisMonth;
    var calendarMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return thisMonth = calendarMonths[j];
  }
  
  currentTime(); // call time function to initiate //