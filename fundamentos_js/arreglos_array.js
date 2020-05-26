// ARREGLOS EN JAVASCRIPT (VIDEO 22)
	
	// const numeros = [10,20,30,40,50,60];
	// console.log(numeros);

	// ARREGLOS DE STRINGS
	const meses = new Array('Enero','Abril','Mayo');
	console.log(meses);

	meses.splice(1,0,'Febrero', 'Noviembre');
	console.log(meses);

	meses.splice(2,1,'Marzo');
	console.log(meses);
	
	// ARREGLOS MEZCALDOS
	const mezclado = ['Hola', 20, true, null, false, undefined];
	console.log(mezclado);

	//VERIFICAR SI TENEMOS UN ARREGLO
	console.log(Array.isArray(meses));

	//ACCEDER A LA POSICION 1 DEL ARREGLO
	console.log(meses[1]);

	//INSERTAR UN DATO AL ARREGLO
	meses.push('Abril'); //al final del arreglo
	meses[4]='Mayo'; // en la posicion 4
	meses.unshift('Mes 0');//al comienzo del arreglo
	console.log(meses);

	//ELIMINAR UN DATO AL ARREGLO
	meses.pop(); //al final del arreglo
	meses.splice(2,1); // (2 = posicion, 2 = cantidad de elementos)
	meses.shift();//al comienzo del arreglo
	meses.reverse();//revertir meses
	console.log(meses);

	//ENCONTRAR UN ELEMENTO EN EL ARREGLO
	console.log(meses.indexOf('Marzo'));

	//UNIR DOS ARREGLAS
	console.log(numeros.concat(meses));

	//ORDENAR UN ARREGLO DE FORMA ALFABETICA (STRING)
	const frutas = ['Platano','Manzana','Lima'];
	frutas.sort();
	console.log(frutas);

	//ORDENAR UN ARREGLO DE FORMA ALFABETICA (STRING)
	const num = [9,8,5,47,1,2,5,4,7];
	num.sort(function(a, b) {
		return a - b;
	}); //de menor a mayor
	console.log(num);
	num.sort(function(a, b) {
		return b - a;
	}); //de mayor a menor
	console.log(num);
