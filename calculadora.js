let numero1 = 2;
let numero2 = 10;

let signoAritmetico = "%";

if (signoAritmetico === "+") {
    suma = numero1 + numero2;
    alert("el resultado de la suma es: " + suma);
    console.log("el resultado de la suma es: ", suma);
}
else if (signoAritmetico === "-") {
    resta = numero1 - numero2;
    alert("el resultado de la resta es: " + resta);
    console.log("el resultado de la resta es: ", resta);
}
else if (signoAritmetico === "*") {
  multiplicacion = numero1 * numero2;
    alert("el resultado de la multiplicacion es: ", multiplicacion);
    console.log("el resultado de la multiplicacion es: ", multiplicacion);

}else if (signoAritmetico === "/") {
    division = numero2 / numero1;
    if (numero1 === 0) {
        alert("la division por cero no existe");
        console.log("la division por cero no existe");
    }
    else {
     alert("el resultado de la division es: "+  division);
     console.log("el resultado de la division es: " + division);
    }
   
}else if (signoAritmetico === "%") {
    
    if (numero1 === 0) {
        alert("el resto por cero no existe ");
        console.log("el resto por cero no existe");
    }
    else {
        resto = numero2 % numero1;
        alert("el resultado del resto es : " +  resto);
        console.log("el resultado del resto es : " + resto);
       
    }
  
}
else if (signoAritmetico === "**") {
    potenciacion = numero1 ** numero2;
    alert("el resultado de la potenciacion es: ", potenciacion);
    console.log("el resultado de la potenciacion es: ", potenciacion);
}
else {
    alert("no hay resultados posibles, perdon");
}