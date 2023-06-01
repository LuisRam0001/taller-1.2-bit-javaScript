//Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota //mínima para pasar).


let  Nota1= Number(prompt('Digita nota 1 '));
let  Nota2= Number(prompt('Digita nota 2 '));
let  Nota3= Number(prompt('Digita nota 3 '));

let promedio = (Nota1 + Nota2 + Nota3) / 3;
if(promedio <= 3.4 ){
    console.log('NO aprobaste');
}
else if(promedio >= 3.5){
    console.log('Aprobaste');
}
