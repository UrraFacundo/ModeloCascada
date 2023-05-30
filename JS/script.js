function encriptar() {
    var numero = document.getElementById("numero").value;

    if (numero.length !== 4) {
        alert("El número debe tener 4 dígitos.");
        return;
    }

    var digitos = numero.split("");

    for (var i = 0; i < digitos.length; i++) {
        var digito = parseInt(digitos[i]);
        var encriptado = (digito + 7) % 10;
        digitos[i] = encriptado.toString();
    }

    var temp = digitos[0];
    digitos[0] = digitos[2];
    digitos[2] = temp;

    temp = digitos[1];
    digitos[1] = digitos[3];
    digitos[3] = temp;

    var NumEncript = digitos.join("");

    document.getElementById("resultado").innerHTML = "Número encriptado: " + NumEncript;
}

function desencriptar() {
    var NumEncript = document.getElementById("NumEncript").value;

    if (NumEncript.length !== 4) {
        alert("El número encriptado debe tener 4 dígitos.");
        return;
    }

    var DigEncript = NumEncript.split("");

    var temp = DigEncript[0];
    DigEncript[0] = DigEncript[2];
    DigEncript[2] = temp;

    temp = DigEncript[1];
    DigEncript[1] = DigEncript[3];
    DigEncript[3] = temp;

    for (var i = 0; i < DigEncript.length; i++) {
        var digitoEncriptado = parseInt(DigEncript[i]);
        var desencriptado = (digitoEncriptado - 7 + 10) % 10;
        DigEncript[i] = desencriptado.toString();
    }

    var NumDesencript = DigEncript.join("");
    document.getElementById("resultado").innerHTML = "Número desencriptado: " + NumDesencript;
}