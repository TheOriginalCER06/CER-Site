// Desc: Main javascript file for the website

//local ip addresse, kjekt for å koble opp til server senere
let ip_pos = document.getElementById('ip');
if (ip_pos != null) {
    ip_pos.innerHTML = window.location.hostname;
}

//Klokken
let clock_pos = document.getElementById('clock');
if (clock_pos != null) {
    var timer = setInterval(function() {
        clock_pos.innerHTML = new Date().toLocaleTimeString();
    }, 1000);
}