let miLista = {"jugador1":100 ,"jugador2":96 ,"jugador3": 95 }
let puntajemayor=0
let puntaje;

if (miLista.jugador1 >= miLista.jugador2 && miLista.jugador1 >= miLista.jugador3) {
    puntajemayor= miLista.jugador1;
   puntaje= "jugador1 con 100 puntos.";
}
else if (miLista.jugador2 >= miLista.jugador1 && miLista.jugador2 >= miLista.jugador3) {
    puntajemayor = miLista.jugador2;
 puntaje= "jugador2 con 96 puntos.";} 

else {
    puntajemayor=miLista.jugador3;
    puntaje= "jugador3 con 95 puntos.";
}

document.write("el puntaje mayor de los tres jugadores es el : ", puntaje);