/*
Ejercicio 4
Define una función que dado un array de números nos dice si alguno es par.
*/

var nums = ([1,2,3,4,5,6]);

function VerificarPar(num){
    return num%2 === 0;
}

console.log( nums.some(VerificarPar) );