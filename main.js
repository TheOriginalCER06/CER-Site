// Desc: Main javascript file for the website

//local ip addresse, kjekt for å koble opp til server senere
var ip_pos = document.getElementById('ip');
ip_pos.innerHTML = window.location.hostname;

//get navbar from navbar.html and place into div with navbar class in every page where this div is
$(function(){
    $("#navbar").load("nav.html");
  });

//Klokken
var clock_pos = document.getElementById('clock');
var timer = setInterval(function() {
    clock_pos.innerHTML = new Date().toLocaleTimeString();
}, 1000);