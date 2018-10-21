function Time() {
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var period = 'AM';
  var time = '0:00:00';

  if(hour >= 12) {
    if(hour > 12){
      hour -= 12;
    }
    period = 'PM';
  }
   
  if(minute < 10) {
     minute = '0' + minute;
  };
   
  if(second < 10){
    second = '0' + second;
  };
   
  time = hour + ':' + minute + ':' + second + ' ' + period;
   
  document.getElementById('realTime').innerHTML = time;
  setTimeout(Time, 1000);
}

Time();

function SetTime(event){
  var el = event.target.elements;
  var newHour = el.newHour.value;
  var newMinute = el.newMinute.value;
  var newSecond = el.newSecond.value;
  var newPeriod = el.newPeriod.value;
  var newTime;
  
  if(newMinute < 10) {
    newMinute = '0' + newMinute;
  };
    
  if(newSecond < 10){
    newSecond = '0' + newSecond;
  };

  newTime = newHour + ':' + newMinute + ':' + newSecond + ' ' + newPeriod;

  document.getElementById('realTime').innerHTML = newTime;
}