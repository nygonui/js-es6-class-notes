// Height e Width
// São propriedades e métodos dos objetos Element e HTMLElement, e a maioria são read only
// ou seja, não conseguimos setar/configurar seus valores através do JS

const animaisLista = document.querySelector('.animais-lista');
console.log(animaisLista.clientHeight); // height + padding
console.log(animaisLista.offsetHeight); // height + padding + border
console.log(animaisLista.scrollHeight); // height total, contando com scroll (os outros contam só com o que está aparecendo na tela naquele momento)
// Mesma coisa para o Width, clientWidth ...

// OffsetTop e OffsetLeft
// distância entre o elemento e o topo da página, e entre o elemento e lado esquerdo da página
console.log(animaisLista.offsetTop);
console.log(animaisLista.offsetLeft);

// getBoundingClientRect();
// método que retorna um objeto com valores de altura, largura, distâncias do element e mais
const section = document.querySelector('.animais');
const rect = section.getBoundingClientRect();
console.log(rect.height);
console.log(rect.width);
console.log(rect.top); // distância entre o topo do elemento e o scroll

// window
console.log(window.innerWidth); // largura da janela 
console.log(window.outerWidth); // janela + dev tools
console.log(window.innerHeight); // altura da janela
console.log(window.outerHeight); // barra de endereço + janela

console.log(window.pageYOffset); // distância total do scroll vertical
console.log(window.pageXOffset); // distância total do scroll horizontal

// matchMedia()
// podemos usar media query (igual no css) para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');
console.log(small);

if (small.matches) {
    console.log('tela menor ou igual a 600px');
}
else {
    console.log('tela maior que 600px');
}