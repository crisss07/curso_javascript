class Cliente {
	constructor(nombre, saldo){
		this.nombre = nombre;
		this.saldo = saldo;
	}

	imprimirSaldo(){
		return `Hola ${this.nombre}, tu saldo es ${this.saldo}`;
	}

	static bienvenido(){
		return `Bienvenido al Cajero`;
	}

}

class Empresa extends Cliente {
	constructor(nombre, saldo, telefono, tipo){
		super(nombre, saldo);//va hacia el contructor padre
		this.telefono = telefono;
		this.tipo = tipo;
	}
	static bienvenido(){
		return `Bienvenido al Cajero de la Empresa`;
	}

}

const cliente = new Cliente('Cristian', 500);
console.log(cliente);
console.log(cliente.imprimirSaldo());
console.log(Cliente.bienvenido());

const empresa = new Empresa('X&C', 10000, 70176488, 'Tecnologia');
console.log(empresa);
console.log(empresa.imprimirSaldo());
console.log(Empresa.bienvenido());
