//OBJETO LITERAL 
const cliente = {
	nombre: 'Cristian',
	saldo: 200,
	tipoCliente: function(){
		let tipo;

		if (this.saldo>1000) {
			tipo = 'Gold';
		} else {
			tipo = 'Normal';
		}

		return tipo;
	}
}

// console.log(cliente.tipoCliente());

function Cliente(nombre, saldo){
	this.nombre = nombre;
	this.saldo = saldo;
	this.tipoCliente = function(){
		let tipo;
		if (this.saldo > 1000) {
			tipo = 'Gold';
		} else {
			tipo = 'Normal';
		}
		return tipo;
	}
}

const persona = new Cliente('Cristian', 5000);
const persona1 = new Cliente('Ximena', 5000);

console.log(persona);
console.log(persona1.tipoCliente());