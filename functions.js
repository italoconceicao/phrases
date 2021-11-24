// transformei em array mas provavelmente será um objeto.
var frases = ["Primeira frase","Segunda frase","Terceira frase"];


var fraseExibida = document.getElementById("frase");
var proximaFrase = document.getElementById("proximo");

proximaFrase.addEventListener("click", mudarFrase);

function mudarFrase(){
    fraseExibida.innerHTML = frases[0];
}
