/*
Ejercicio 7
Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo
*/

nums = ([2,-3,9])

function hayAlgunNegativo(num){
    return num < 0
}

console.log( nums.some(hayAlgunNegativo) );