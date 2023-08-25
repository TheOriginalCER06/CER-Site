// set the time in format hh:mm:ss in the span with id="clock" every second 
var clock = document.getElementById('clock');
var timer = setInterval(function() {
    clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);