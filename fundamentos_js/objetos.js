//OBJETOS (VIDEO 25-26)
	
	const personas = {
		nombre: 'Cristian',
		apellido: 'Chamby',
		profesion: 'Lic. Informatica',
		email: 'r@gmail.com',
		edad: 27,
		musica: ['Regueton', 'Clasicos', 'Hip Hop'],
		hogar: {
			pais: 'Bolivia',
			ciudad: 'La Paz',
			zona: 'Chacaltaya'
		},
		nacimiento: function(){
			return new Date().getFullYear() - this.edad;
		}
	}

	personas.musica.push('Alternativas');
	console.log(personas.nacimiento());
