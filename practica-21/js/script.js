let confirmar = confirm ('personalizar bienvenida')
if (confirmar) {
    let nombre = prompt('¿Cuál es tu nombre?');
    document.querySelector('h1').textContent = 'Bienvenidx,' + ' ' + nombre;
}
else {
    document.querySelector('h1').textContent = 'Bienvenidx!!!';
}
