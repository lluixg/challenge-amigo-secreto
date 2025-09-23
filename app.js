// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // remove espaços extras

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        input.value = "";
        return;
    }

    amigos.push(nome);

    // Atualiza lista de amigos na tela
    atualizarLista();

    // Limpa o campo
    input.value = "";
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa lista antes de atualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}
