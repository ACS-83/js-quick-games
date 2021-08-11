let antirrepetidor; // variable para evitar que se repita el número nuevo a generar
let puntos = 0; // puntuación
let numero = 0;
let topote = 0;
let pillado = 0;
let cronometro = 2000;
let tiempo;
let audio = new Audio('sfx/hit.mp3'); // :D

inicio(); // Arranque (Public Static Void Main XDD)

function inicio() {
    cronometro = cronometro - 100 // Con cada inicio, se reduce el tiempo y aumenta la dificultad en la próxima ronda
    acum(); // Genera cadena para seleccionar aleatoriamente un div de topillo
    pillado = document.querySelector(topote); // Asignamos ese div a una variable
    pillado.addEventListener('click', topilloGolpeado, {once: true})
    // console.log("Ha salido " + topote) << para propósitos de debugging
    empieza(); 
}

function empieza() { // función que desarolla el juego en sí
    cuentaTras(topilloSale, topilloEsconde)
    // Opción ONCE para addEventListener: funciona una sola vez y luego se elimina :)
}

function acum() { // Función que genera número aleatorio entre 1 y 9 y lo añade al final de una cadena
    numero = Math.trunc(Math.random() * 9) + 1; //Asigna número aleatorio entre 1 y 9 quedándonos solo con la parte entera
    if (numero == antirrepetidor) { // si el número generado se repite con respecto a la vez anterior...
        console.log("se repite") // ... Nos avisa...
        return acum(); // ... Y volvemos a generar uno nuevo por recursividad
    }
    antirrepetidor = numero // Se asigna el resultado a una variable acumulable para comparar la próxima vez
    return topote = '.topillo' + numero.toString() + ''; // asignamos el resultado a la variable TOPILLO
}

function topilloEsconde() {
    document.querySelector(topote).style.background = "url('gfx/topillos.png') no-repeat -21px -28px";
}

function topilloGolpeado() {
    clearTimeout(tiempo);
    audio.play(); // Qué guay :D
    document.querySelector(topote).style.background = "url('gfx/topillos.png') no-repeat -21px -28px";
    console.log("Le has dao")
    puntos++
    document.querySelector(topote).removeEventListener('click', topilloEsconde)
    document.querySelector('h2').innerHTML = `Topos golpeados: ${puntos}`
    inicio();
}

function topilloSale() {
        document.querySelector(topote).style.background = "url('gfx/topillos.png') no-repeat -248px -28px";
}

function fin() {
    document.querySelector('h2').innerHTML = `Topos golpeados: ${puntos}`
    document.querySelector('.divmadreacabado').style.display = 'block'
    document.querySelector(topote).style.background = "url('gfx/topillos.png') no-repeat -21px -28px";
    pillado.removeEventListener('click', topilloGolpeado, {once: true})
}

function cuentaTras(primera, segunda) {
    tiempo = setTimeout(() => {
        primera()
        tiempo = setTimeout(() => {
           segunda()
           fin();
        }, cronometro);
    }, cronometro)
}