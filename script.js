const btnNo = document.querySelector("#btn-random");

function moverAleatoriamente(btn) {
    btn.style.position = "absolute"; // Cambiado a "absolute" para permitir el movimiento libre
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%"; // Math.random() para generar el valor
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target);
});
