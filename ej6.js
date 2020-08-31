/*
Ejercicio 6
Define la función quienesAprobaron, que dada la información de un curso devuelve la información de los alumnos que aprobaron. Podés usar la función que hiciste en el ejercicio anterior.
*/

var notas = ([[4,6,5,7],[1,3,4,7],[8,10,6,7],[3,6,4,6]]);

function quienesAprobaron(notas){
    return notas >= 4;
}

console.log( notas.filter(quienesAprobaron) );