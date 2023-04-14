function licencia() {
    function saltarLinea() {
        document.write("<br>");
    }

    function imprimir(frase) {
        document.write(frase);
        saltarLinea();
    }

    let edad = parseInt(prompt("¿Cuál es tu edad?"));
    let tieneLicencia = prompt("¿Tienes licencia? Responde S o N");


    if (edad >= 18) {
        if (tieneLicencia === 'S') {
            imprimir('Puedes conducir');
        }
        else{
            imprimir('No puedes conducir, Porque no has sacado tu licencia webon');
        }
    }

    else if(edad < 18){
        imprimir('No puedes conducir');
    }
}
