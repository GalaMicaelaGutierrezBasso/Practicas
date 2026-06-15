let confirmar = confirm('¿Desea personalizar su bienvenida?');
if (confirmar) {
    let nombre = prompt('¿Cuál es tu nombre?');
    document.querySelector('h1').textContent = 'Bienvenidx, ' + nombre;
} else {
    document.querySelector('h1').textContent = 'Bienvenidx!!!';
}
confirmar = confirm('¿Desea cambiar el modo de visualización de la página?');
if (confirmar) {
    document.querySelector('body').style.backgroundColor = 'black';
} else {
    document.querySelector('body').style.backgroundColor = 'white';
}
let hora = new Date().getHours();
let saludo = 'h1';
if (hora < 12) {
    saludo = 'Buenos días';
} else if (hora < 18) {
    saludo = 'Buenas tardes';
} else {
    saludo = 'Buenas noches';
}
if (nombre) {
    document.querySelector('h1').textContent = saludo + ', ' + nombre;
} else {
    document.querySelector('h1').textContent = saludo + '!!!';
}