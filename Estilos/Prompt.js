function mostrarPromocion() {
  var palabraClave = prompt("Ingresa la palabra Digitalia y recibe un 15% de descuento en todos nuestros servicios:");

  if (palabraClave === "Digitalia") {
    var promocion = prompt("¡Felicidades! Has ingresado la palabra clave correcta. Ingresa tu dirección de correo electrónico para recibir tu código de descuento:");

    alert("Tu código de descuento ha sido enviado a " + promocion + ". ¡Disfruta de tu promoción!");
  } else {
    alert("La palabra clave ingresada es incorrecta. Inténtalo nuevamente.");
  }
}
