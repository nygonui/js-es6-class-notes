// addEventListener
// é um método que adiciona uma função a um elemento e executa a função quando certo evento ocorre.
// essa função, que é um argumento do addEventListener, é chamada de callback
// const img = document.querySelector('img');
//elemento.addEventListener(event, callback, options)
// img.addEventListener('click', function () {
//     console.log('cliquei');
// })
// o terceiro parametro é opcional


// Callback
// por boa prática é recomendado criar/escrever a função de callback fora do addEventListener
// e depois passamos como parametro, sem chamar a função, vamos ver alguns exemplos
// function callback() {
//     console.log('CLICADO');
// }
// img.addEventListener('click', callback); // certo
// img.addEventListener('click', callback()); // errado, aqui estamos chamando a função, ou seja, passando o que a função retorna como parametro
// img.addEventListener('click', function () {
//     console.log('Olá'); // como tinhamos feito antes
// })
// img.addEventListener('click', () => {
//     console.log('Hello'); // outro jeito válido
// })


// Event
// o primeiro parametro do callback é referente ao evento que ocorreu
const h1 = document.querySelector('h1');
function callback2(event) {
    console.log(event);
}
h1.addEventListener('click', callback2);
// dependendo do evento event terá diferentes propriedades e métodos


// Propriedades do Event
const animiasLista = document.querySelector('.animais-lista');
function executaCallback(event) {
    const currentTarget = event.currentTarget; // this
    const target = event.target; // onde o clique ocorreu
    const type = event.type; // tipo do evento
    const path = event.path;
    console.log(currentTarget, target, type, path);
};

animiasLista.addEventListener('click', executaCallback);

// event.preventDefault()
// Previne o coportamento padrão do elemento no browser, se estamos "ouvindo" o clique em um link
// que leva para uma página externa do nosso site, e queremos fazer algo antes que o usuário vá para fora
// podemos usar esse método
const linkExterno = document.querySelector('a[href^="http"]');
function clickNoLink(event) {
    event.preventDefault();
    console.log(event.currentTarget.href);
};

linkExterno.addEventListener('click', clickNoLink);


// this
// uma palavra reservada do JS, que pode fazer referência a diferentes objetos dependedo do contexto
// No caso de eventos ele fará ao elemento em que o addEventListener foi adicionado

const img = document.querySelector('img');
function handleImg(event) {
    console.log(this); // retorna a imagem
    console.log(this.getAttribute('src'));
};
img.addEventListener('click', handleImg);

// Diferentes Eventos
// click, scroll, resize, keydown, keyup, mouseenter...
// evento podem ser adicionados a diferentes elementos, como o window e document também
h1.addEventListener('mouseenter', callback2);
window.addEventListener('scroll', (event) => {
    console.log(event);
});

// keyboard
// podemos adicionar atalhos para facilitar a navegação do seu site usando eventos através das teclas

function handleKeyboard(event) {
    if (event.key === 'a')
        document.body.classList.toggle('azul');
    else if (event.key == 'v')
        document.body.classList.toggle('vermelho');
}
window.addEventListener('keydown', handleKeyboard);

// forEach e addEventListener
// até agora estava adicionando um evento em apenas um elemento
// para adicionarmos o mesmo evento em vários elementos podemos usar o forEach
const imagens = document.querySelectorAll('img');
function handleImagem(event) {
    console.log(event.currentTarget.getAttribute('src'));
}
imagens.forEach((imagem) => {
    imagem.addEventListener('click', handleImagem);
})
