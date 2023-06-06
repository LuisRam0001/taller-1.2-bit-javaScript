//Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.
let nombreDeAlumno = prompt('Digita el nombre del alumno');

let numeroDeMaterias = prompt('ingrese numero de materias a calificar');
let objetoMaterias;
const arrayMaterias = [];
for(let i = 0; i < numeroDeMaterias; i++){
    let  sumaNotas = 0;
    objetoMaterias ={
        Materia:'',
        notas:[],
        promedio:0,
        resultado:'',

    }
    let nombreMateria = prompt('Digita el nombre de la materia');  
    objetoMaterias.nombre = nombreMateria.trim();
    let notas = Number(prompt('Digita cuantas notas desea ingresar'));
    for( let n = 0; n < notas; n++){
        let valorNota = Number(prompt('Digite la nota'));
        objetoMaterias.notas.push(valorNota);
        sumaNotas = sumaNotas + valorNota
    }
    sumaNotas = sumaNotas / notas;
    objetoMaterias.promedio = sumaNotas
    if(sumaNotas <= 3.4 ){
        objetoMaterias.resultado = ('NO aprobaste');
    }
    else if(sumaNotas >= 3.5){
        objetoMaterias.resultado = ('Aprobaste');
    }

    arrayMaterias.push(objetoMaterias);

}
    console.log(arrayMaterias)


//
//const promedioNotas= Array[];

