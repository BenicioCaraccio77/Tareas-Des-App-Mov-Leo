
function validacion(){
    const usuario= document.getElementById("usuario").value;
    const contraseña = document.getElementById("Contraseña").value;
    const mensaje= document.getElementById("mensaje");
    const form = document.querySelector("form");
    const usuarioPermitido = "admin";
    const passwordPermitido="1234";
    const boton= document.addEventListener("submit");


    if (usuario == usuarioPermitido && contraseña == passwordPermitido) {
    mensaje.textContent ="Bienvenido!";
    }else {
    mensaje.textContent="Usuario o contraseña incorrectos. Probá otra vez!";
}
}
validacion();












