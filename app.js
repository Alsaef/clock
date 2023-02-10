var dayHour = new Date().getHours();
var time;
if (dayHour<10) {
    time ='Open';
    
}else if(dayHour<17){
    time = 'Open';
}
else{
    time = 'Close';
}
document.getElementById("time").innerHTML = time;