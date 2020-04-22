// USO DE VARIABLES "var"

var nombre;
	nombre = 'Cristian';
console.log(nombre);

//NOTA: EL NOMBRE DE UNA VARIABLE NO PUEDE INICIAR CON UN NUMERO O CARACTER

var primerNombre = 'Cristian';	//camelcase *** RECOMENDADO
var primer_nombre = 'Cristian';	//undercase
var PrimerNombre = 'Cristian';	//pascalcase
var primernombre = 'Cristian';	//No recomendado


// USO DE VARIABLES "let"
let nombres ='Cristian';

console.log(nombres);


// USO DE VARIABLES "const"

const primerNombre1 = 'Cristian';

// DIFERENCIA ENTRE "VAR" Y "LET" Y "CONST"
// 1ra: var de deja declarar varias veces una misma variable
// 	    let no deja declarar 2 veces una misma variable
//      const siempre hay que inicializar la variable

let mensaje = 'Aprendiendo JavaScript, CSS, HTML para ser Frontend'


console.log(mensaje.length);
// FUNCIONES O METODOS PARA LAS CADENAS
// length
// concat(' ', 'Es Genial') Concatena cadenas
// toUpperCase()			MAYUSCULAS
// toLowerCase()			MINUSCULAS
// indexOf('JavaScript')	INDICA EN QUE POSICION SE ENCUENTRA LA PALABRA
// substring(0,11)			MUESTRA DESDE LA POSICION "0" HASTA LA "11"
// slice(0, -3)				EL MENOS TRES HACE Q EMPIECE DESDE ATRAS
// split(' ');				BUSCA EL CARACTER Y SEPARA EL MENSAJE
// replace('CSS', 'PHP')	REEMPLAZA EL STRING POR EL NUEVO
// includes('CSS')			BUSCA UN VALOR EN UNA CADENA DE TEXTO, DEVUELVE "TRUE" O "FALSE"
// repeat(10)				REPITE 10 VECES EL MENSAJE DE TEXTO
