// NUMEROS EN JAVASCRIPT

const numero1 = 30;
const numero2 = 20;
const numero3 = 20.20;
const numero4 = .1020;
const numero5 = -3;

let resultado;

// SUMA
resultado = numero1 + numero2;
// RESTA
resultado = numero1 - numero2;
// MULTIPLICACION
resultado = numero1 * numero2;
// DIVISION
resultado = numero1 / numero2;
// MODULO	EL RESIDUO DE LA DIVISION
resultado = numero1 % numero2;
// FUNCIONES MATEMATICAS
// PI
resultado = Math.PI;
// REDONDEDO
resultado = Math.round(numero3);
// REDONDEDO MAYOR
resultado = Math.ceil(numero3);
// REDONDEDO BAJO
resultado = Math.floor(numero3);
// RAIZ CUADRADA
resultado = Math.sqrt(numero1);
// VALOR ABSOLUTO
resultado = Math.abs(numero5);
// POTENCIA
resultado = Math.pow(8, 3);
// MINIMO
resultado = Math.min(7,8,9,4,5,6,1,2);
// MAXIMO
resultado = Math.max(3,2,16,5,4,9,78);
// ALEATORIO
resultado = Math.random();

// ORDEN DE LAS OPERACIONES MATEMATICAS
resultado = 5 + 7 - 2;  //10

resultado = 5 + 7 * 2;  //19

resultado = 20 + 20 + 20 + 20 + 20 * .20;	//84

resultado = (20 + 20 + 20 + 20 + 20) * .20;	//20

resultado++;	//INCREMENTA EN UNA UNIDAD EL VALOR

resultado+= 3;	//INCREMENTA EN 3 UNIDADES EL VALOR

resultado--;	//DECREMENTA EN UNA UNIDAD EL VALOR



console.log(resultado);