// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const campoNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];

function agregarAmigo() {
    const nombre = campoNombre.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    amigos.push(nombre);
    campoNombre.value = "";
    actualizarLista();
}

function actualizarLista() {
    listaAmigos.innerHTML = amigos.map(nombre => `<li>${nombre}</li>`).join("");
}

function sortearAmigo() {
    if (!amigos.length === 0) {
        alert("No hay nombres en la lista. Agrega al menos uno.");
        return;
    }
    resultado.innerHTML = `<li>¡¡ El amigo secreto es: <strong>${amigos[Math.floor(Math.random() * amigos.length)]}</strong> !!!</li>`;
}

document.querySelector(".button-add").addEventListener("click", agregarAmigo);
document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
campoNombre.addEventListener("keypress", e => { if (e.key === "Enter") agregarAmigo(); });