//arrays
//''
//{}
//``
// ${}
// [ ]
// </b> en negrita este es el cierre para cerrar
// <br>  salto de linea
// <b> negrita en inicio  de inicio


let pc3 = ["yonny", 3 , "azucar", "messi" ];
console.log(pc3[3]);

let pc1 = { 
   nombre : "el be",
   apellido : "sapitos",
   nacimiento : "5 de abril",
   fallecimiento : "1 de enero"
   };

let nombre = pc1["nombre"];
let apellido = pc1["apellido"];
let nacimiento = pc1["nacimiento"];
let fallecimiento = pc1["fallecimiento"];

let completo =   `el nombre de mi amigo es: <b>${nombre}</b> <br>
 su apellido es : <b>${apellido}</b> <br>
 su fecha de nacimiento es: <b>${nacimiento}</b> <br>
 su fallecimiento fue el: <b>${fallecimiento}</b> <br>`;


document.write(completo);


