// VALORES DE DATOS
	let valor;
	
	valor = 'Cristian';
	valor = 20;
	valor = true;
	valor = null;
	valor = undefined;
	valor = {
		nombre: 'Cristian'
	};


	console.log(typeof(valor));

// OPERADORES DE COMPARACION

	const numero1 = 20;
	const numero2 = 40;
	const numero3 = '20';
	// COMPARA SI numero1 ES MAYOR A numero2 (EL RESULTADO SIEMPRE ES TRUE O FALSE)
	console.log(numero1 > numero2);
	// COMPARA SI numero1 ES MENOR A numero2
	console.log(numero1 < numero2);
	// COMPARA SI numero1 ES IGUAL A numero3
	console.log(numero1 == numero3); //EN ESTE CASO EL RESULTADO ES TRUE, YA QUE SOLO COMPARA EN VALOR DEL DATO 
	// COMPARA SI numero1 ES IGUAL A numero3
	console.log(numero1 === numero3);//EN ESTE CASO EL RESULTADO ES FALSE, YA QUE SOLO COMPARA EN VALOR DEL DATO Y EL TIPO DE DATO
	// COMPARA SI numero1 ES DIFERENTE A numero2
	console.log(numero1 != numero2);

// CONVERTIR DE STRING A NUMEROS

	const numeroA = '50';
	const numeroB = 10;
	const numeroC = 'tres';
	//Number convertir un String a Numero
	console.log(Number(numeroA) + numeroB); 

	//parseInt convertir un String a Numero
	console.log(parseInt(numeroA) + numeroB); 

	//Verifica el tipo de dato
	console.log(typeof(numeroC));

