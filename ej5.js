/*
Ejercicio 5
Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó. Un alumno aprobó si todas sus notas son mayores o iguales a 4
*/

var notas = ([4,4,6,5,7]);

function Aprobar(notas){
    return notas>=4;
}

console.log( notas.every(Aprobar) );