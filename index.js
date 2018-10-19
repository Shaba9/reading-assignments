function Time() {
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var form = 'AM';

  if(hour > 12) {
    hour -= 12;
    form = 'PM';
  }
   
  if(minute < 10) {
     minute = '0' + minute;
  };
   
  if(second < 10){
    second = '0' + second;
  };
   
  var time = hour + ':' + minute + ':' + second + ' ' + form;
   
  document.getElementById('realTime').innerHTML = time;
  setTimeout(Time, 1000);
}

Time();