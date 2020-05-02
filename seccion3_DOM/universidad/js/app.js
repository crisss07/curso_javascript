// Eliminar de Local Storage
localStorage.clear();


//SELECCIONAR ELEMENTOS DEL DOM
let elemento;
	elemento = document.all;
	elemento = document.all[10];
	elemento = document.head;
	elemento = document.domain;
	elemento = document.forms;
	elemento = document.forms[0].id;
	elemento = document.forms[0].className;

	elemento = document.images;

	let imagenes = document.images;
	let imagenesArr = Array.from(imagenes);

	imagenesArr.forEach(function(imagen){
		// console.log(imagen);
	});

// console.log(imagenesArr);

// SELECCIONAR ELEMENTOS ESPECIFICOS DEL DOM (VIDEO 45) getElementById

	let elemento1;

	elemento1 = document.getElementById('encabezado').id;//retorna el id del encabezado
	elemento1 = document.getElementById('encabezado').className;//retorna el nombre de la clase
	elemento1 = document.getElementById('encabezado').textContent;//retorna el texto que tiene el encabezado
	elemento1 = document.getElementById('encabezado').innerText;//retorna el texto que tiene el encabezado
	elemento1 = document.getElementById('encabezado');

	// elemento1.style.background = '#333';
	// elemento1.style.color = '#fff';
	// elemento1.style.padding = '20px';

	// elemento1.innerText = 'Los mejores Cursos';
	// console.log(elemento1);

// SELECCIONAR ELEMENTOS ESPECIFICOS DEL DOM (VIDEO 46) querySelector
	
	//POR ID('#encabezado')
	const encabezado2 = document.querySelector('#encabezado');
	encabezado2.style.background = '#333';
	encabezado2.style.color = '#fff';
	encabezado2.style.padding = '20px';

	encabezado2.innerText = 'Los mejores Cursos';

	//POR CLASE ('.encabezado'), solo selecciona la primera clase
	const encabezado3 = document.querySelector('.encabezado');
	encabezado3.style.background = '#333';
	encabezado3.style.color = '#fff';
	encabezado3.style.padding = '20px';

	encabezado3.innerText = 'Los mejores Cursos';

	//POR ETIQUETA ('.encabezado'), solo selecciona la primera clase
	const encabezado4 = document.querySelector('h1');
	encabezado4.style.background = '#333';
	encabezado4.style.color = '#fff';
	encabezado4.style.padding = '20px';

	encabezado4.innerText = 'Los mejores Cursos';


	// console.log(encabezado2);
	
	let enlace;

	enlace = document.querySelector('#principal a:first-child');//primer a
	enlace = document.querySelector('#principal a:last-child');//ultimo a
	enlace = document.querySelector('#principal a:nth-child(3)');//el de la posicion 3

	console.log(enlace); 
	