function verificar() {
    let resultado = document.getElementById("info");
    let xmlhttp;
    if (window.XMLHttpRequest) {/*Cuando es los nagevadores modernos(google chrome)*/

        xmlhttp = new XMLHttpRequest();

    } else {/*Si son navegadores antiguos explore 5*/

        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
    ///////////////////////////////////////////
    let secreto = Math.round(Math.random() * 10);
    let input = document.getElementById('texto1').value;
    /////////////////////////////////////////////

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (parseInt(input) === secreto) {
                resultado.innerHTML += 'Usted acerto</br>';
            }
            else {
                resultado.innerHTML += 'Usted se equiboco</br>';
            }
        }
    };

    input.value = '';
    xmlhttp.open("GET", "", true);
    xmlhttp.send();
}
