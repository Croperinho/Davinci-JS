/*
Ejercicio 10
Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento
*/

function contiene(numero,array){

    var cond = num => numero === num;
    return array.some(cond);

}

console.log(contiene(8,[7,8,9]));