
// Ya que la carga de la base de datos y la captura de datos del formulario ocurren en el mismo bloque de código, se ejecutarán secuencialmente.

// let baseDatos = require("./baseDatos.json");

// let jsonDatabase = JSON.stringify(baseDatos);

// let jsonConvertido2 = JSON.parse(jsonDatabase);

const fs = require("fs");

// Cargaremos el contenido del archivo baseDatos.json
let baseDatosRaw = fs.readFileSync("./baseDatos.json");
let baseDatos = JSON.parse(baseDatosRaw);

function generarNuevoId() {
  // Obtenenemos el último ID existente
  let ultimoId = baseDatos.servicios[baseDatos.servicios.length - 1].id;

  // Incrementamos el último ID y devolvemos el nuevo ID
  return ultimoId + 1;
}

 let nuevaData = {
  id: generarNuevoId(),
  "nombre": "Nuevo servicio agregado",
  "descripcion": "Descripción del nuevo servicio agregado",
  "costo": 100,
  "duracion": "2 semanas"
 };

baseDatos.servicios.push(nuevaData);

let jsonDatabase2 = JSON.stringify(baseDatos);

console.log(jsonDatabase2);


// captura datos página Formulario Digitalia:



function captura() {
 
  let nomForm = document.getElementById ("nombre").value.trim();
  let emailForm = document.getElementById ("email").value;
  let nacioForm = document.getElementById ("Nacionalidad").value;
  let edadForm = document.querySelector ('input[name=edad]:checked').value;
  let interesForm = document.getElementById ("interes").value;
  let ocupaForm = document.getElementById ("Ocupacion").value;

  
  localStorage.setItem ("recuperarInfo", nomForm + " " + emailForm + " " + nacioForm + " " + edadForm + " " + interesForm + " " + ocupaForm);

  alert("¡Gracias por suscribirte" + nomForm + "!");
}


let formulario = localStorage.getItem ("recuperarInfo");

console.log(formulario);

