document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("cambiarTexto");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", function () {
    mensaje.textContent = "Haz cambiado el mensaje con JavaScript 🚀";
    document.body.style.backgroundColor = "#dcedc8";
    // Ciclos
    for (let i = 1; i <= 10; i++) {
      console.log("5 * " + i + " = " + 5 * i);
    }

    // Hola soy un comentario

    /* Comentario para bloque de codigo
    mensaje.textContent = "Haz cambiado el mensaje con JavaScript 🚀";
    document.body.style.backgroundColor = "#dcedc8";
    */
    const respuesta = prompt("¿Como te llamas?");
    console.log(respuesta);
    if (respuesta == 0) {
      alert("Hola " + respuesta + " Bienvenido al mundo del desarrollo web");
    } else if (respuesta > 4) {
      alert("mejor ven otro día");
    } else {
      alert("mejor ven el lunes ");
    }
  });
});
