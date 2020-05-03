document.getElementById('app').innerHTML = 'Hola Mundo';

//muestra en pantalla una especie de formulario
let nombre = prompt('Cual es tu Nombre?');
let edad = prompt('Cual es tu Edad?');

//mostramos el resultado de las 2 variables
document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`;


//+++++++++++++++MANEJO DE LA CONSOLA+++++++++++++++++
console.log('aqui estoy');

document.querySelector('h1');

console.log(2 + 2);

console.log('ID:', 2);

var hola = 'hola mundo';
console.log(hola);

console.log([1,2,3]);
console.table([1,2,3]);

console.time('INICIO');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd('FIN');
