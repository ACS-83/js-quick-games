// Empezado el 27-03-2021

var pollos = [document.getElementById('pollo1'), document.getElementById('pollo2'), document.getElementById('pollo3'), document.getElementById('pollo4'), document.getElementById('pollo5'), document.getElementById('pollo6'), document.getElementById('pollo7'), document.getElementById('pollo8')];

var pos = [0, 0, 0, 0, 0, 0, 0, 0];
var campeon = false


function generarMovimiento() {
    // Comprobamos si alguno ha llegado al final
    for (let j = 0; j < pos.length; j++) {
        // Alguno es mayor/igual de 1200?
        if (pos[j] >= 1200) {
            campeon=true;
        }
    }
    // Si ninguno ha llegado al final, recalculamos las posiciones
    if (campeon == false) {
        for (let i = 0; i < pos.length; i++) {
            pos[i] += Math.trunc(Math.random() * 5 / 2);
            //forzar que nunca se pase de 1200
            if (pos[i] > 1200) {
                pos[i] = 1200;
            }
            pollos[i].style.marginLeft = pos[i] + "px";
        }
    //Si no, paramos y mostramos el resultado
    }else {
        // console.log(pos[0], pos[1], pos[2], pos[3], pos[4], pos[5], pos[6], pos[7])
        clearInterval(carrera); //detenemos setInterval pasando carrera por parámetro
        let resultadoFinal = arrayMaxIndex(pos); //Recogemos la función arrayMaxIndex con parámetro POS en una variable
        // console.log("El ganador es el pollo número " + resultadoFinal);
        document.getElementById('ganador').style.display = 'block';
        document.getElementById('ganador').innerHTML = "<h1>Ha ganado el pollo número " + resultadoFinal + "</h1>";
    }
}

var arrayMaxIndex = function(array) { //Función que devuelve el índice del elemento con valor más alto y suma 1
    return array.indexOf(Math.max.apply(null, array)) + 1;
};

// Generamos variable que recoja la función generarMovimiento mediante setInterval para poder detenerla
var carrera = setInterval(() => {
    generarMovimiento();    
}, 5);    

    // if (pos1 >= 1200 || pos2 >= 1200 || pos3 >= 1200 || pos4 >= 1200 || pos5 >= 1200 || pos6 >= 1200 || pos7 >= 1200 || pos8 >= 1200) {
    //     clearInterval();
    // } else {
    // pos1 += Math.trunc(Math.random() * 5 / 2);
    // pollaco1.style.marginLeft = pos1 + "px";
    
    // pos2 += Math.trunc(Math.random() * 5 / 2);
    // pollaco2.style.marginLeft = pos2 + "px";

    // pos3 += Math.trunc(Math.random() * 5 / 2);
    // pollaco3.style.marginLeft = pos3 + "px";

    // pos4 += Math.trunc(Math.random() * 5 / 2);
    // pollaco4.style.marginLeft = pos4 + "px";

    // pos5 += Math.trunc(Math.random() * 5 / 2);
    // pollaco5.style.marginLeft = pos5 + "px";

    // pos6 += Math.trunc(Math.random() * 5 / 2);
    // pollaco6.style.marginLeft = pos6 + "px";

    // pos7 += Math.trunc(Math.random() * 5 / 2);
    // pollaco7.style.marginLeft = pos7 + "px";

    // pos8 += Math.trunc(Math.random() * 5 / 2);
    // pollaco8.style.marginLeft = pos8 + "px";
    // }


