function par() {

    function saltarLinea() {
        document.write("<br>");
    }

    function imprimir(frase) {
        document.write(frase);
        saltarLinea();
    }

    for (let index = 1; index <= 100; index++) {
        if (index % 2 == 0) {
            imprimir(index);
        }
    }
}