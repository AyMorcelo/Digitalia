
// comentamos la primera parte de la base de datos para que no interfiera con la captura de datos del formulario

// let baseDatos = require("./baseDatos.json");

// let jsonDatabase = JSON.stringify(baseDatos);

// let jsonConvertido2 = JSON.parse(jsonDatabase);

function generarNuevoId() {
  // Obtener el último ID existente
  let ultimoId = baseDatos.servicios[baseDatos.servicios.length - 1].id;

  // Incrementar el último ID y devolver el nuevo ID
  return ultimoId + 1;
}

// let nuevaData = {
//     id: generarNuevoId(),
//     "nombre": "Nuevo servicio agregado",
//     "descripcion": "Descripción del nuevo servicio agregado",
//     "costo": 100,
//     "duracion": "2 semanas"}


// jsonConvertido2.servicios.push (nuevaData);


// let jsonDatabase2 = JSON.stringify(jsonConvertido2);


// console.log(jsonDatabase2);


// captura datos página Formulario Digitalia:



function captura() {

  let nomForm = document.getElementById ("nombre").value;
  let emailForm = document.getElementById ("email").value;
  let nacioForm = document.getElementById ("Nacionalidad").value;
  let edadForm = document.querySelector ('input[name=edad]:checked').value;
  let interesForm = document.getElementById ("interes").value;
  let ocupaForm = document.getElementById ("Ocupacion").value;

  
  localStorage.setItem ("recuperarInfo", nomForm + " " + emailForm + " " + nacioForm + " " + edadForm + " " + interesForm + " " + ocupaForm);

  
}


let formulario = localStorage.getItem ("recuperarInfo");

console.log(formulario);

