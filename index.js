var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
 
if(minute < 10) {
   minute = '0' + minute;
};
 
if(second < 10){
  second = '0' + second;
};
 
var time = hour + ':' + minute + ':' + second;
 
document.write("<h1>" + time + "</h1>");
