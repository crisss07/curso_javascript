//********************* VIDEO 54 evento LISTENER click al buscador

document.querySelector('#submit-buscador').addEventListener('click', function(e){
	e.preventDefault();//se detiene el accion que tiene ese formulario
	// alert('buscando cursos');
}) ;

// OTRA FORMA
document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton) ;

function ejecutarBoton(e){
	e.preventDefault();//se detiene el accion que tiene ese formulario
	// alert('buscando cursos');
	let elemento;
	elemento = e;
	elemento = e.target;
	elemento = e.target.id;
	elemento = e.target.className;
	// console.log(elemento);
}


//******************* VIDEO 55 OTROS EVENTOS CON EL MOUSE
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

// boton.addEventListener('click', obtenerEvento);//solo con un click

// boton.addEventListener('dblclick', obtenerEvento);//doble click

// boton.addEventListener('mouseenter', obtenerEvento);//cuando se pasa por encima el mouse

// boton.addEventListener('mouseleave', obtenerEvento);//cuando el mouse sale del boton

// boton.addEventListener('mouseover', obtenerEvento);//se ejecuta cada vez q mueves el mouse dentro del boton

// boton.addEventListener('mousedown', obtenerEvento);//cuando se preciona en el boton

// boton.addEventListener('mouseup', obtenerEvento);//despues de aver precionado, se ejecuta cuando suelta el click del mouse

encabezado.addEventListener('mousemove', obtenerEvento);//todo el elemento 


function obtenerEvento(e){

	console.log(e.type);//muetra el tipo de evento
}
