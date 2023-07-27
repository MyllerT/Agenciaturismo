
let contador = 1;

setInterval(function() {
    document.getElementById('slide' + contador).checked = true;
    contador = (contador % 5) + 1; // 5 is the total number of slides, adjust if you have a different number

}, 3000);
