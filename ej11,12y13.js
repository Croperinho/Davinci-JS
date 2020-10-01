/*
Ejercicio 11, 12 y 13
*/

class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

  presentarse(){

    return console.log("Hola, yo soy " + this.nombre + " y tengo " + this.edad + " años.");
   }

}

class Estudiante extends Persona{
    constructor(nombre,edad,profesor){
        super(nombre,edad);
        this.profesor=profesor;
     }


     estudiando(){
        return console.log("Estudiando con " + this.profesor);
    }

     setProfesor(profesor)
    {
        this.profesor = profesor;
    }

    

}

class Profesor extends Persona{

    constructor(nombre,edad)
    {
        super(nombre,edad);
        this.estudiantes = []
    }

    enseñando(){
        console.log("Mis alumnos son: ")
        this.estudiantes.forEach(element => {
            console.log(element);
        }); 
    }

    addEstudiante(Estudiante){
    this.estudiantes.push(Estudiante);
    Estudiante.setProfesor(this.nombre);
    }
}


var e1 = new Estudiante("Lucas Paladino",19);
var e2 = new Estudiante("Tomas Carullo",21)
var p1 = new Profesor("David", 40);

e1.presentarse();

p1.addEstudiante(e1);
p1.addEstudiante(e2);

p1.enseñando();
e1.estudiando();
