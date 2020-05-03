// SELECCIONAR UNA SERIE DE CLASES QUE TENGAN EL MISMO NOMBRE, CLASE, ATRIBUTO (VIDEO 47)

let enlaces = document.getElementsByClassName('enlace');//retorna una collection
	enlaces = enlaces[3];//retorna el 4 enlace 

// console.log(enlaces);

//mezclar las funciones
let enlaces1 = document.querySelector('#principal').getElementsByClassName('enlace');//retorna una collection
	// enlaces1 = enlaces[3];//retorna el 4 enlace 

// console.log(enlaces1);


// querySelectorAll (VIDEO 48) diferencia a querySelector es que querySelectorAll te trae toda una collecion y querySelector, solo te regresa el primer elemento

let enlaces2 = document.querySelectorAll('#principal .enlace');

console.log(enlaces2);

