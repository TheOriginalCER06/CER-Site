// this will calculate the chosen fuction of the two numbers, with id "tall1" and "tall2", and give the result to output with id "output".
// the function is chosen by the user by pressing the buttons, pluss, minus, gange, dele, potens and kvadratrot.
// the chosen button will be highlighted with a red color
// first we need to gather inputs from the user
let tall1 = document.getElementById('tall1');
let tall2 = document.getElementById('tall2');
let output = document.getElementById('output');
// then we need to gather the buttons
let pluss = document.getElementById('pluss');
let minus = document.getElementById('minus');
let gange = document.getElementById('gange');
let dele = document.getElementById('dele');
let potens = document.getElementById('potens');
let kvadratrot = document.getElementById('rot');

// we should calculate the result when the user presses a button
function calculate() {
    // first we need to check if the user has entered numbers
    if (isNaN(tall1.value) || isNaN(tall2.value)) {
        output.innerHTML = "Du må skrive inn to tall";
    }
    else if (tall1.value == "" && tall2.value != ""){
        tall1.value = tall2.value;
        calculate();
    }
    else {
        // then we need to check which button the user has pressed
        if (pluss.style.backgroundColor == "red") {
            output.innerHTML = Number(tall1.value) + Number(tall2.value);
            pluss.style.backgroundColor = "#4CAF50";
        }
        else if (minus.style.backgroundColor == "red") {
            output.innerHTML = Number(tall1.value) - Number(tall2.value);
            minus.style.backgroundColor = "#4CAF50";
        }
        else if (gange.style.backgroundColor == "red") {
            output.innerHTML = Number(tall1.value) * Number(tall2.value);
            gange.style.backgroundColor = "#4CAF50";
        }
        else if (dele.style.backgroundColor == "red") {
            output.innerHTML = Number(tall1.value) / Number(tall2.value);
            dele.style.backgroundColor = "#4CAF50";
        }
        else if (potens.style.backgroundColor == "red") {
            output.innerHTML = Math.pow(Number(tall1.value), Number(tall2.value));
            potens.style.backgroundColor = "#4CAF50";
        }
        else if (kvadratrot.style.backgroundColor == "red") {
            output.innerHTML = Math.sqrt(Number(tall1.value));
            kvadratrot.style.backgroundColor = "#4CAF50";
        }
        else {
            output.innerHTML = "Du må velge en funksjon";
        }
    }
}

// then we need to add eventlisteners to the buttons
pluss.addEventListener('click', function () {
    pluss.style.backgroundColor = "red";
    minus.style.backgroundColor = "#4CAF50";
    gange.style.backgroundColor = "#4CAF50";
    dele.style.backgroundColor = "#4CAF50";
    potens.style.backgroundColor = "#4CAF50";
    kvadratrot.style.backgroundColor = "#4CAF50";
});
minus.addEventListener('click', function () {
    minus.style.backgroundColor = "red";
    pluss.style.backgroundColor = "#4CAF50";
    gange.style.backgroundColor = "#4CAF50";
    dele.style.backgroundColor = "#4CAF50";
    potens.style.backgroundColor = "#4CAF50";
    kvadratrot.style.backgroundColor = "#4CAF50";
});
gange.addEventListener('click', function () {
    gange.style.backgroundColor = "red";
    pluss.style.backgroundColor = "#4CAF50";
    minus.style.backgroundColor = "#4CAF50";
    dele.style.backgroundColor = "#4CAF50";
    potens.style.backgroundColor = "#4CAF50";
    kvadratrot.style.backgroundColor = "#4CAF50";
});
dele.addEventListener('click', function () {
    dele.style.backgroundColor = "red";
    pluss.style.backgroundColor = "#4CAF50";
    minus.style.backgroundColor = "#4CAF50";
    gange.style.backgroundColor = "#4CAF50";
    potens.style.backgroundColor = "#4CAF50";
    kvadratrot.style.backgroundColor = "#4CAF50";
});
potens.addEventListener('click', function () {
    potens.style.backgroundColor = "red";
    pluss.style.backgroundColor = "#4CAF50";
    minus.style.backgroundColor = "#4CAF50";
    gange.style.backgroundColor = "#4CAF50";
    dele.style.backgroundColor = "#4CAF50";
    kvadratrot.style.backgroundColor = "#4CAF50";
});
kvadratrot.addEventListener('click', function () {
    kvadratrot.style.backgroundColor = "red";
    pluss.style.backgroundColor = "#4CAF50";
    minus.style.backgroundColor = "#4CAF50";
    gange.style.backgroundColor = "#4CAF50";
    dele.style.backgroundColor = "#4CAF50";
    potens.style.backgroundColor = "#4CAF50";
});

// and we need to add an eventlistener to the calculate button
let calculate_button = document.getElementById('calc');
calculate_button.addEventListener('click', calculate);