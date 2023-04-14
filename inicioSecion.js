function inicio() {

    var inicioDeSesionRegistrado = "alura";
    var contrasenhaRegistrada = "alura321";

    let con = 0;
    while (con != 3) {
        var inicioDeSesionIngresado = prompt("Ingrese su usuario");
        var contrasenhaIngresada = prompt("Ingrese su contraseña");

        if (inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada) {
            alert("Bienvenido al sistema " + inicioDeSesionIngresado);
            con = 2;
        } else {
            alert("inicio de sesión inválido. Favor intente de nuevo");
        }
        con++;
    }
}
