var time = '0:00:00';
var real = true;

function Time() {
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var period = 'AM';

  if(real) {
    DisplayTime(hour, minute, second, period);
    setTimeout(Time, 1000);
  };
}

function DisplayTime(disHour, disMin, disSec, disPeriod) {

  if(disHour >= 12) {
    if(disHour > 12){
      disHour -= 12;
    }
    disPeriod = 'PM';
  }
   
  if(disMin < 10) {
     disMin = '0' + disMin;
  };
   
  if(disSec < 10){
    disSec = '0' + disSec;
  };
   
  time = disHour + ':' + disMin + ':' + disSec + ' ' + disPeriod;
   
  document.getElementById('realTime').innerHTML = time;
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

  real = false;
}