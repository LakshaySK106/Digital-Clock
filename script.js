function checkTime(value) {
   if (value < 10) {
      value = "0" + value;
   }
   return value;
}
function formatTime(theTime) {
   let [theHour, theMinute, theSecond] = theTime.split(':');
   theHour = parseInt(theHour);
   let status = '';
   if (theHour > 12) {
      theHour -= 12;
      theHour = "0" + theHour;
      status = 'PM';
   }
   else {
      status = 'AM';
   }
   if (theHour == 0) {
      theHour += 12;
   }
   return ([theHour, theMinute, theSecond].join(':') + " " + status);
}
function time() {
   const today = new Date();
   let theHour = today.getHours();
   let theMinute = today.getMinutes();
   let theSecond = today.getSeconds();
   theMinute = checkTime(theMinute);
   theSecond = checkTime(theSecond);
   let currentTime = theHour + ":" + theMinute + ":" + theSecond;
   document.getElementById('theTime').innerText = formatTime(currentTime);
   setTimeout(time, 1000);
}