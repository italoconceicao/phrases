// transformei em array mas provavelmente será um objeto.
var frases = [
"“Os capitalistas chamam 'liberdade' a dos ricos de enriquecer e a dos operários para morrer de fome. Os capitalistas chamam liberdade de imprensa a compra dela pelos ricos, servindo-se da riqueza para fabricar e falsificar a opinião pública.” LENIN",
"“É verdade que a liberdade é preciosa - tão preciosa que precisa ser racionalizada.” LENIN",
"“As revoluções são as festas dos oprimidos e explorados.” LENIN"
];


var fraseExibida = document.getElementById("frase");
var proximaFrase = document.getElementById("proximafrase");

proximaFrase.addEventListener("click", mudarFrase);

function mudarFrase(){
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    fraseExibida.innerHTML = fraseAleatoria;
}
