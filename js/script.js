
let numeroSecreto = Math.floor(Math.random() * 50) + 1;
let tentativas = 0;

const input = document.getElementById("senha");
const botao = document.getElementById("verificar");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");

const overview = document.getElementById("overview");
const resultado = document.getElementById("resultado");
const reiniciar = document.getElementById("reiniciar");

const imagemCofre = document.getElementById("imagemCofre");

botao.addEventListener("click", function() {

    let numero = Number(input.value);

    if (
        input.value === "" ||
        numero < 1 ||
        numero > 50 ||
        !Number.isInteger(numero)
    ) {
        mensagem.innerText = "Digite um número válido entre 1 e 50!";
        return;
    }

    tentativas++;

    contador.innerText = tentativas;

    if (numero === numeroSecreto) {

        mensagem.innerText = "Você acertou!";

        imagemCofre.src = "imagens/cofreaberto.png";

        overview.style.display = "flex";

        resultado.innerText =
            "Você conseguiu em " + tentativas + " tentativas!";

        botao.disabled = true;

    } else if (numeroSecreto > numero) {

        mensagem.innerText = "A senha é maior!";

    } else {

        mensagem.innerText = "A senha é menor!";

    }

    input.value = "";
    input.focus();

});

reiniciar.addEventListener("click", function() {

    numeroSecreto = Math.floor(Math.random() * 50) + 1;

    tentativas = 0;

    contador.innerText = "0";

    mensagem.innerText =
        "Boa sorte! Tente descobrir a senha.";

    input.value = "";

    imagemCofre.src = "imagens/cofrefechado.png";

    botao.disabled = false;

    overview.style.display = "none";

});
