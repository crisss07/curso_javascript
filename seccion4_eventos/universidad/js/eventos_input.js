
const busqueda = document.querySelector('#buscador');

// busqueda.addEventListener('keydown', obtenerEvento);//cuando se preciona una tecla se va lanzando la funcion

// busqueda.addEventListener('keyup', obtenerEvento);//cuando dejas de preciona una tecla se va lanzando la funcion

// busqueda.addEventListener('keypress', obtenerEvento);//fusion de las 2 anteriores

// busqueda.addEventListener('focus', obtenerEvento);//cuando preciones encima del input

//------------------MUY UTILIZADO-------------------busqueda.addEventListener('blur', obtenerEvento);//cuando precionas fuera, una vez hallas precionado el input

// busqueda.addEventListener('cut', obtenerEvento);//cuando cortas lo q escribiste

// busqueda.addEventListener('copy', obtenerEvento);//cuando copias del input

// busqueda.addEventListener('paste', obtenerEvento);//cuando pegas en el input

// busqueda.addEventListener('input', obtenerEvento);//todos los anteriores

busqueda.addEventListener('change', obtenerEvento);//esta pendiente a cambios




function obtenerEvento(e){

	document.querySelector('#encabezado').innerText = busqueda.value;
	// console.log(busqueda.value);//muetra el tipo de evento
	console.log(e.type);
}