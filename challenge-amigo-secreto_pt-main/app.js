//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = ["Analice","Kessin","Carlos","Carlano","Cinthia"];

function adicionarAmigo() {
     const input = document.getElementById("nomeAmigo");
    const nome = input.value.trim();
    if (nome === "Analice") {
        alert("Por favor, insira um nome.");
        return;
    }
     amigos.push(nome);
     atualizarLista();
 input.value = "";
}
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
     lista.innerHTML = "";
for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
} 
function sortearAmigo() { 
    if (amigos.length === 0) {
        alert("Nenhum amigo para sortear.");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    alert(`O amigo sorteado é: ${amigoSorteado}`);
}
