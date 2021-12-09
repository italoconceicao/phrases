// transformei em array mas provavelmente será um objeto.
var frases = [

"“Os capitalistas chamam 'liberdade' a dos ricos de enriquecer e a dos operários para morrer de fome. Os capitalistas chamam liberdade de imprensa a compra dela pelos ricos, servindo-se da riqueza para fabricar e falsificar a opinião pública.”" + "<br><br>" + "LENIN",
"“É verdade que a liberdade é preciosa - tão preciosa que precisa ser racionalizada.”" + "<br><br>" + "LENIN",
"“As revoluções são as festas dos oprimidos e explorados.”" + "<br><br>" + "LENIN",
"“A propriedade do Estado não é a de 'todo povo', mas que na medida em que desaparecem os privilégios e as distinções sociais e em que, em consequência, o Estado perde sua razão de ser. Dito de outra maneira: a propriedade do Estado se faz socialista a medida que deixa de ser propriedade do Estado.”" + "<br><br>" + "TROTSKY",
"“Num país em que o único empregador é o Estado, oposição significa morte lenta por inanição. O velho princípio 'quem não trabalha não come' foi substituído por outro: quem não obedece não come.”" + "<br><br>" + "TROTSKY",
"“Ela virá, a revolução conquistará a todos o direito não somente ao pão mas, também, à poesia.”" + "<br><br>" + "TROTSKY",
"“A morte de uma pessoa é uma tragédia; a de milhões, uma estatística.”" + "<br><br>" + "STALIN",

];


var fraseExibida = document.getElementById("frase");
var proximaFrase = document.getElementById("proximafrase");

const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    fraseExibida.innerHTML = fraseAleatoria;

proximaFrase.addEventListener("click", mudarFrase);

function mudarFrase(){
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    fraseExibida.innerHTML = fraseAleatoria;
}
