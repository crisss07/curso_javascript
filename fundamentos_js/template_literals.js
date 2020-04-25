
const producto1 = 'Pizza',
	  precio1 = 30,
	  producto2 = 'Hamburgueza',
	  precio2 = 40;
// FORMA ANTIGUA
let html;
	html = '<ul>' +
		   '<li>Orden 1: ' + producto1 + '</li>' +
		   '<li>Precio 1: ' + precio1 + '</li>' +
		   '<li>Orden 2: ' + producto2 + '</li>' +
		   '<li>Precio 2: ' + precio2 + '</li>' +
		   '<li>TOTAL: ' + (precio1 + precio2) + '</li>' +
		   '</ul>';
// FORMA NUEVA
let html1;
	html1 = `<ul>
				<li>Orden 1: ${producto1}</li>
				<li>Precio 1: ${precio1}</li>
				<li>Orden 2: ${producto2}</li>
				<li>Precio 2: ${precio2}</li>
				<li>Total: ${total(precio1, precio2)}</li>
			</ul>`;
	function total(precio1, precio2){
		return precio1 + precio2;
	}


	document.getElementById('app').innerHTML = html;
	document.getElementById('app1').innerHTML = html1;

