// set the time in format hh:mm:ss in the span with id="clock" every second 
var clock_pos = document.getElementById('clock');
var timer = setInterval(function() {
    clock_pos.innerHTML = new Date().toLocaleTimeString();
}, 1000);
var ip_pos = document.getElementById('ip');
ip_pos.innerHTML = window.location.hostname;

//get navbar from navbar.html
var nav_pos = document.getElementsByClassName('navbar');
nav_pos.innerHTML = $("#navbar").load("navbar.html");