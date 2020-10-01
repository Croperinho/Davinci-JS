/*
Ejercicio 9
Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen
*/


function rechazar(cond,array){

return array.filter(num => cond(num))
    }

    var even=(element) => element %2 !=0;

console.log(rechazar(even,[7,9,25,42]));