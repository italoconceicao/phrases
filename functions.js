var frases = [

// 
"“Os capitalistas chamam 'liberdade' a dos ricos de enriquecer e a dos operários para morrer de fome. Os capitalistas chamam liberdade de imprensa a compra dela pelos ricos, servindo-se da riqueza para fabricar e falsificar a opinião pública.”" + "<br><br>" + "Vladimir LENIN",
"“É verdade que a liberdade é preciosa - tão preciosa que precisa ser racionalizada.”" + "<br><br>" + "Vladimir LENIN",
"“As revoluções são as festas dos oprimidos e explorados.”" + "<br><br>" + "Vladimir LENIN",
// 
"“A propriedade do Estado não é a de 'todo povo', mas que na medida em que desaparecem os privilégios e as distinções sociais e em que, em consequência, o Estado perde sua razão de ser. Dito de outra maneira: a propriedade do Estado se faz socialista a medida que deixa de ser propriedade do Estado.”" + "<br><br>" + "Leon TROTSKY",
"“Num país em que o único empregador é o Estado, oposição significa morte lenta por inanição. O velho princípio 'quem não trabalha não come' foi substituído por outro: quem não obedece não come.”" + "<br><br>" + "Leon TROTSKY",
"“Ela virá, a revolução conquistará a todos o direito não somente ao pão mas, também, à poesia.”" + "<br><br>" + "Leon TROTSKY",
//
"“A morte de uma pessoa é uma tragédia; a de milhões, uma estatística.”" + "<br><br>" + "Joseph STALIN",
"“Líderes vão e vem, mas o povo permanece. Apenas o povo é imortal.”" + "<br><br>" + "Joseph STALIN",
"“O povo deve ser educado com o mesmo cuidado e ternura com que um jardineiro cultiva uma árvore frutífera de estimação.”" + "<br><br>" + "Joseph STALIN",
"“O marxismo não é apenas a teoria do socialismo, é uma concepção integral do mundo, um sistema filosófico no qual decorre, logicamente, o socialismo proletário de Marx. Esse sistema filosófico se chama materialismo dialético.”" + "<br><br>" + "Joseph STALIN",
"“A revolução vitoriosa num país tem por tarefa desenvolver e sustentar a revolução nos outros países.”" + "<br><br>" + "Joseph STALIN",
"“Teríamos acabado sozinhos se governássemos apenas pelo medo. A classe operária jamais se submeteria a um governo que pretendesse impor-se pelo medo.”" + "<br><br>" + "Joseph STALIN",
"“O senhor parte da presunção de que todos os homens são bons. Eu, entretanto, não posso esquecer que há muitos homens perversos. Não creio na bondade da burguesia.”" + "<br><br>" + "Joseph STALIN",
//
"“Sonha e serás livre de espírito... luta e serás livre na vida.”" + "<br><br>" + "Ernesto CHE GUEVARA", 
"“Se você é capaz de tremer de indignação a cada vez que se comete uma injustiça no mundo, então somos companheiros.”" + "<br><br>" + "Ernesto CHE GUEVARA",
"“O conhecimento nos faz responsáveis.”" + "<br><br>" + "Ernesto CHE GUEVARA",
"“Acima de tudo procurem sentir no mais profundo de vocês qualquer injustiça cometida contra qualquer pessoa em qualquer parte do mundo. É a mais bela qualidade de um revolucionário.”" + "<br><br>" + "Ernesto CHE GUEVARA",
"“Os grandes só parecem grandes porque estamos ajoelhados.”" + "<br><br>" + "Ernesto CHE GUEVARA",
"“O importante não é justificar o erro, mas impedir que ele se repita.”" + "<br><br>" + "Ernesto CHE GUEVARA",
"“A farda modela o corpo e atrofia a mente.”" + "<br><br>" + "Ernesto CHE GUEVARA",
"“Deixe-me dizer-lhe, correndo o risco de parecer ridículo, que o verdadeiro revolucionário é guiado por grandes sentimentos de amor.”" + "<br><br>" + "Ernesto CHE GUEVARA",
"“Não nego a necessidade objetiva do estímulo material, mas sou contrário a utilizá-lo como alavanca impulsora fundamental. Porque então ela termina por impor sua própria força às relações entre os homens.”" + "<br><br>" + "Ernesto CHE GUEVARA",
"“A reforma agrária radical é a única que pode dar a terra ao camponês.”" + "<br><br>" + "Ernesto CHE GUEVARA",
"“Só existe um sentimento maior que o amor à liberdade: o ódio ao que a tira de você.”" + "<br><br>" + "Ernesto CHE GUEVARA",
"“É preciso lutar todos os dias para que esse amor à humanidade viva se transforme em fatos concretos, em atos que sirvam de exemplo de mobilização.”" + "<br><br>" + "Ernesto CHE GUEVARA",
//
"“Camaradas, não há verdadeira revolução social sem a libertação das mulheres. Que meus olhos nunca vejam e meus pés nunca me levem a uma sociedade onde metade das pessoas são mantidas em silêncio. Eu ouço o rugido do silêncio das mulheres. Sinto o estrondo da tempestade deles e sinto a fúria da revolta deles.”" + "<br><br>" + "Thomas SANKARA",
"“O imperialismo é um sistema de exploração que ocorre não só na forma brutal daqueles que vêm com armas para conquistar território. O imperialismo frequentemente ocorre em formas mais sutis, um empréstimo, ajuda alimentar, chantagem. Estamos lutando contra esse sistema que permite que um punhado de homens na Terra governe toda a humanidade.”" + "<br><br>" + "Thomas SANKARA",
"“Nossa revolução não é um torneio de falar em público. Nossa revolução não é uma batalha de frases finas. Nossa revolução não é apenas para divulgar slogans que não passam de sinais usados por manipuladores que tentam usá-los como palavras de ordem, como palavras de código, como uma película para sua própria exibição. Nossa revolução é, e deve continuar sendo, o esforço coletivo dos revolucionários para transformar a realidade, para melhorar a situação concreta das massas de nosso país.”" + "<br><br>" + "Thomas SANKARA",
//
"“A religião nasce das concepções restritas do homem.”" + "<br><br>" + "Friedrich ENGELS",
"“Os que no regime burguês trabalham não lucram e os que lucram não trabalham.”" + "<br><br>" + "Friedrich ENGELS",
"“Não pode ser livre um povo que oprime outros povos.”" + "<br><br>" + "Friedrich ENGELS",
//


];


var fraseExibida = document.getElementById("frase");
var proximaFrase = document.getElementById("proximafrase");

mudarFrase();

proximaFrase.addEventListener("click", mudarFrase);

function mudarFrase(){
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    fraseExibida.innerHTML = fraseAleatoria;
}
