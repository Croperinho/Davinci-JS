/*
Ejercicio 8
Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen
*/

function cuantosCumplen(cond,array){
    var cont=0;
array.forEach(element => {
    if (cond(element)==true){
cont++;
    }
});
return cont;
}

    var even=(element) => element %2 ===0;

console.log(cuantosCumplen(even,[7,9,25,42]));