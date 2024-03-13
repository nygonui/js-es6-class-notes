// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
console.log(img.attributes);
console.log(img.getBoundingClientRect().top); // img.offsetTop também seria um opção eu acho

// Retorne a soma da largura de todas as imagens
const allImgs = document.querySelectorAll('img');
let somaDasLarguras = 0
allImgs.forEach((img) => {
    console.log(img.offsetWidth);
    somaDasLarguras += img.offsetWidth;
});
console.log(somaDasLarguras);
// OBS: no meu caso, por algum motivo que eu não sei ainda, funcinou, mas na correção do exercício 
// aconteceu de retornar a largura de apenas duas imagens e das restantes retornar 0
// isso acontece porque o JS carrega antes de algumas coisas do HTML, a solução usadad foi usar 
// window.onload
function somaImagens() {
    const imagens = document.querySelectorAll('img');
    let larguraTotal = 0;
    imagens.forEach((img) => {
        console.log(img.offsetWidth);
        larguraTotal += img.offsetWidth;
    });
    console.log(larguraTotal);
}

window.onload = function () {
    somaImagens();
}



// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const allLinks = document.querySelectorAll('a');
allLinks.forEach((link) => {
    if (link.offsetHeight >= 48 && link.offsetWidth >= 48) {
        console.log(`O link "${link.href}" tem a largura e altura mínima recomenda`);
    }
    else {
        console.log(`O link "${link.href}" não possui a largura e altura mínima recomemdada`);
        console.log(link.offsetHeight, link.offsetWidth);
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
if (window.matchMedia('(max-width: 720px)').matches) {
    menu.classList.add('menu-mobile');
} else {
    menu.classList.remove('menu-mobile');
}
console.log(window.innerWidth); 
