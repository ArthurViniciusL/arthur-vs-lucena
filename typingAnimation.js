const TEXTO = "Hello... contact me by <";
let caractere = 0;
let speed = 80;

function escrevaMensagem() {
    let spanMsg = document.querySelector(".mensagem");

    if (caractere < TEXTO.length) {
        spanMsg.innerHTML += `${TEXTO.charAt(caractere)}`;
        caractere++;
        setTimeout(escrevaMensagem, speed);
    }
}