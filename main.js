// Desc: Main javascript file for the website

//local ip addresse, kjekt for å koble opp til server senere
var ip_pos = document.getElementById('ip');
//check if ip_pos is null
if (ip_pos != null) {
    ip_pos.innerHTML = window.location.hostname;
}

//Klokken
var clock_pos = document.getElementById('clock');
var timer = setInterval(function() {
    clock_pos.innerHTML = new Date().toLocaleTimeString();
}, 1000);