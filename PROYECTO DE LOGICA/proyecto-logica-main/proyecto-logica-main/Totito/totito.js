var bandera = false; // Indica si el juego inició
var turno = 0; // Determinar el turno x/o
var tab = new Array(); // Arreglo o lista de datos
var jugador1, jugador2;
var scoreX = 0;
var scoreO = 0;

window.onload = function() {
    var iniciar = document.getElementById("iniciar");
    var resetear = document.getElementById("resetear");
    iniciar.addEventListener("click", comenzar);
    resetear.addEventListener("click", resetearJuego);
}

function comenzar() {
    bandera = true;
    jugador1 = document.getElementById("jugador1");
    jugador2 = document.getElementById("jugador2");

    if (jugador1.value === "") {
        alert("Falta el nombre del jugador uno");
        jugador1.focus();
    } else {
        if (jugador2.value === "") {
            alert("Falta el nombre del jugador dos");
            jugador2.focus();
        } else {
            tab[0] = document.getElementById("b0");
            tab[1] = document.getElementById("b1");
            tab[2] = document.getElementById("b2");
            tab[3] = document.getElementById("b3");
            tab[4] = document.getElementById("b4");
            tab[5] = document.getElementById("b5");
            tab[6] = document.getElementById("b6");
            tab[7] = document.getElementById("b7");
            tab[8] = document.getElementById("b8");

            for (var i = 0; i < 9; i++) {
                tab[i].className = "botonInicial";
                tab[i].value = "?";
            }

            turno = 1;
            document.getElementById("turnoJugador").innerHTML = `Turno del Jugador ${jugador1.value}`;
        }
    }
}

function colocar(boton) {
    if (bandera === true) {
        if (turno === 1 && boton.value === "?") {
            turno = 2;
            document.getElementById("turnoJugador").innerHTML = `Turno del Jugador ${jugador2.value}`;
            boton.value = "X";
            boton.className = "botonJugador1";
        } else {
            if (turno === 2 && boton.value === "?") {
                turno = 1;
                document.getElementById("turnoJugador").innerHTML = `Turno del Jugador ${jugador1.value}`;
                boton.value = "O";
                boton.className = "botonJugador2";
            }
        }
    }
    revisar();
}

function revisar() {
    if (
        (tab[0].value === "X" && tab[1].value === "X" && tab[2].value === "X") ||
        (tab[3].value === "X" && tab[4].value === "X" && tab[5].value === "X") ||
        (tab[6].value === "X" && tab[7].value === "X" && tab[8].value === "X") ||
        (tab[0].value === "X" && tab[3].value === "X" && tab[6].value === "X") ||
        (tab[1].value === "X" && tab[4].value === "X" && tab[7].value === "X") ||
        (tab[2].value === "X" && tab[5].value === "X" && tab[8].value === "X") ||
        (tab[0].value === "X" && tab[4].value === "X" && tab[8].value === "X") ||
        (tab[6].value === "X" && tab[4].value === "X" && tab[2].value === "X")
    ) {
        alert(`Felicidades ganaste Jugador ${jugador1.value}`);
        scoreX++;
        document.getElementById("scoreX").textContent = scoreX;
        bandera = false;
    }

    if (
        (tab[0].value === "O" && tab[1].value === "O" && tab[2].value === "O") ||
        (tab[3].value === "O" && tab[4].value === "O" && tab[5].value === "O") ||
        (tab[6].value === "O" && tab[7].value === "O" && tab[8].value === "O") ||
        (tab[0].value === "O" && tab[3].value === "O" && tab[6].value === "O") ||
        (tab[1].value === "O" && tab[4].value === "O" && tab[7].value === "O") ||
        (tab[2].value === "O" && tab[5].value === "O" && tab[8].value === "O") ||
        (tab[0].value === "O" && tab[4].value === "O" && tab[8].value === "O") ||
        (tab[6].value === "O" && tab[4].value === "O" && tab[2].value === "O")
    ) {
        alert(`Felicidades ganaste Jugador ${jugador2.value}`);
        scoreO++;
        document.getElementById("scoreO").textContent = scoreO;
        bandera = false;
    }
}

function resetearJuego() {
    bandera = false;
    scoreX = 0;
    scoreO = 0;
    document.getElementById("scoreX").textContent = scoreX;
    document.getElementById("scoreO").textContent = scoreO;
    document.getElementById("jugador1").value = "";
    document.getElementById("jugador2").value = "";
    document.getElementById("turnoJugador").innerHTML = "";

    for (var i = 0; i < 9; i++) {
        tab[i].className = "botonInicial";
        tab[i].value = "?";
    }
}
