let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

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
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        let btnRemover = document.createElement("button");
        btnRemover.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>`;
        btnRemover.onclick = function () {
            removerAmigo(index);
        };

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    let tempoAnimacao = 3000; 
    let intervalo = 200; 
    let contador = 0;

    const animacao = setInterval(() => {
        let nomeAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `<li>O amigo secreto é: <strong>${nomeAleatorio}</strong></li>`;
        contador += intervalo;
        if (contador >= tempoAnimacao) {
            clearInterval(animacao);
        }
    }, intervalo);
}

document.addEventListener("keydown", function(event) {
    const input = document.getElementById("amigo");

    if (event.key === "Enter") {
        if (document.activeElement === input) {
            adicionarAmigo();
        }
    } else if (event.key === " " || event.key === "Spacebar") {
        event.preventDefault();
        sortearAmigo();
    }
});
