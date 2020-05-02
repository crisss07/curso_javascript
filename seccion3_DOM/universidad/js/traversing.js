//***************** VIDEO 50
// 1 = Elementos HTML
// 2 = Atributos
// 3 = text Node
// 8 = Comentarios
// 9 = documentos
// 10 = doctype 

// IR DEL PADRE AL HIJO
const navegacion = document.querySelector('#principal');

console.log(navegacion.children[0].nodeType);

// IR DEL HIJO AL PADRE
const enlaces = document.querySelectorAll('.enlace');

console.log(enlaces[0].parentElement);//puedes ir lo mas arriba que tu quieras

// IR DEL HIJO AL PADRE Y OTRA VEZ AL HIJO
const enlaces1 = document.querySelectorAll('.enlace');

console.log(enlaces1[0].parentElement.children[1].textContent = 'hola');//puedes ir lo mas arriba que tu quieras

// IR DEL HIJO AL PADRE Y OTRA VEZ AL HIJO
const enlaces2 = document.querySelectorAll('.enlace');

console.log(enlaces2[4].previousElementSibling.previousElementSibling);//un elemento atras

const enlaces3 = document.querySelectorAll('.enlace');

console.log(enlaces3[0].nextElementSibling.nextElementSibling);//un elemento atras

//*********************** VIDEO 51, CREAR UN ENLACE

const enlaces4 = document.createElement('a');
//agregamos una clase
enlaces4.className = 'enlace';//creamos una clase 
enlaces4.id = 'nuevo-id';//creamos un id
enlaces4.setAttribute('href', '#');//creamos un href
enlaces4.textContent = 'Nuevo Enlace';//creamos el texto

document.querySelector('#secundaria').appendChild(enlaces4);

console.log(enlaces4);



