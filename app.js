let listaDeAmigos = ["Analice", "Kessin", "Carlos", "Carlano", "Cinthia"];
let amigoSecreto = sortearAmigo();
let Tentativas = 3;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Amigo Secreto ');
    exibirTextoNaTela('p', 'Tente adivinhar quem é o amigo secreto!');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value.trim();

    if (chute.toLowerCase() === amigoSecreto.toLowerCase()) {
        exibirTextoNaTela('h1', 'Acertou 🎉');
        let palavraTentativa = Tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você descobriu o amigo secreto (${amigoSecreto}) em ${Tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        exibirTextoNaTela('p', `Não é ${chute}... tente novamente!`);
        Tentativas++;
        limparCampo();
    }
}

function sortearAmigo() {
    let indice = Math.floor(Math.random() * listaDeAmigos.length);
    return listaDeAmigos[indice];
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    amigoSecreto = sortearAmigo();
    Tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute('disabled', true);

}
document.querySelector("button.chutar").addEventListener("click", verificarChute);
document.getElementById("reiniciar").addEventListener("click", reiniciarJogo);