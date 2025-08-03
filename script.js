let participantes = [];

function adicionarParticipante() {
    let nome = document.getElementById("nome").value.trim();
    if (nome === "") return alert("Por favor digite um nome!");
    participantes.push(nome);
    document.getElementById("nome").value = "";
    atualizarLista();
}

function atualizarLista() {
    document.getElementById("lista").innerHTML =
        "<strong>Participantes:</strong> " + participantes.join(", ");
}

function sortear() {
    if (participantes.length === 0) {
        alert("Nenhum participante na lista!");
        return;
    }
    let indice = Math.floor(Math.random() * participantes.length);
    let amigo = participantes[indice];
    participantes.splice(indice, 1); 
    atualizarLista();
    document.getElementById("resultado").innerText = "Sorteado: " + amigo;
}