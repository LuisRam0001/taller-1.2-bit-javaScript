//Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia (3.5 es la nota mínima para pasar).

let nota = Number( prompt('Ingrese Nota'));


if(nota < 3.5 ){
console.log('NO aprobaste');
}
else{ nota >= 3.5 
    console.log('Aprobaste');

}

