//********************* VIDEO 59 Local Storage
//guardar a local storage
localStorage.setItem('nombre', 'Cristian');
//guardar a session storage
sessionStorage.setItem('nombre', 'Cristian');
//eliminar de local storage
// localStorage.removeItem('nombre');

const nombre = localStorage.getItem('nombre');

localStorage.clear();//limpiar todo el local storage

console.log(nombre);



