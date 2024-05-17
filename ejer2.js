/**Determinar si una letra es una vocal o una consonante
Determinar si una letra es una vocal o una consonante
 */
let letra = 'a';
const vocales = ['a','e','i','o','u' ];

if (vocales.includes(letra.toLowerCase())) {
    console.log(letra + " es una vocal");
}
else{
    console.log(letra + " es una consonante");
    
}