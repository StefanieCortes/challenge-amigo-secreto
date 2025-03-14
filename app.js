// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const campoNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];

function agregarAmigo() {
    const nombre = campoNombre.value.trim();
    if (!nombre) return alert("Por favor, ingresa un nombre válido.");
    amigos.push(nombre);
    campoNombre.value = "";
    actualizarLista();
}

function actualizarLista() {
    listaAmigos.innerHTML = amigos.map(nombre => `<li>${nombre}</li>`).join("");
}