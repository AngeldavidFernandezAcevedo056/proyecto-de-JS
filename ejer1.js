// Determinar la calificación según el puntaje:
//Dado un puntaje numérico (puntaje), determina la calificación según los siguientes criterios:
//90 o más: "A"
//Entre 80 y 89: "B"
//Entre 70 y 79: "C"
//Entre 60 y 69: "D"
//Menos de 60: "F"

let puntaje = 64;
if (puntaje>=90 && puntaje<=100) {
    calificacion= "tienes una A, Albert Einstein felicidades";
}
else if (puntaje>=80 && puntaje<=89) {
    calificacion = "tienes una B, eres exelente.";
}else if (puntaje>=70 && puntaje<=79) {
    calificacion = "tienes una c, eres regular.";
}else if (puntaje>=60 && puntaje<=69) {
    calificacion = "tienes una D, Reprobaste suerte en la proxima.";
}else if (puntaje<60) {
    calificacion = "tienes una F, estudia mas.";
}
console.log("tu calificacion es: ",puntaje, calificacion);