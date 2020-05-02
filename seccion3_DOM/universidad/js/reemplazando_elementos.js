// ******************** VIDEO 52 REEMPLAZANDO ELEMENTOS CON JS
const nuevoEncabezado = document.createElement('h2');

nuevoEncabezado.id = 'encabezado';//creando un id
nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));//agregar nuevo texto
const anterior = document.querySelector('#encabezado');//elemento que sera reemplazado

const elPadre = document.querySelector('#lista-cursos');

elPadre.replaceChild(nuevoEncabezado, anterior);

// console.log(nuevoEncabezado); 


//******************** VIDEO 53ELIMINANDO Y QUITANDO ELEMENTOS DE JS
const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');
// enlaces[0].remove();//eliminar el elemento "0"
// navegacion.removeChild(enlaces[0]);//elimina desde el padre

// console.log(enlaces);

// ELIMINAR CLASES ADICIONAR CLASES
 const primerLi = document.querySelector('.enlace');

 let elemento;
 	elemento = primerLi.className;
 	elemento = primerLi.classList.add('nueva-clase');//adicionar una nueva clase
 	elemento = primerLi.classList.remove('nueva-clase');//eliminar una nueva clase
 	elemento = primerLi.classList;

 	elemento = primerLi.getAttribute('href');//obtiene el valor
 	primerLi.setAttribute('href', 'http://facebook.com');//modifica o añade en caso no existe
 	primerLi.setAttribute('data-id', 20);//
 	elemento = primerLi.hasAttribute('data-id');//verifica si exista ese atributo

 console.log(elemento); 


