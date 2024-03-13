// ID
// getElementById seleciona e retorna elementos do DOM
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');
console.log(animaisSection);

// se selecionar um elemento que não existe ele retorna null
const naoExist = document.getElementById('tata');
console.log(naoExist);

// Class e Tag
// getElementsByClassName e getElementsByTagName
// selecionam e retornam uma lista de elementos do DOM
// A lista retornada está ao vivo, ou seja, se alguma elemento foi adicionado na página
// e que tenha a mesma classe ou tag que você buscou,
// a variável que buscou será atualizada assim que chama-lá de novo
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

const ul = document.getElementsByTagName('ul');

console.log(gridSection);
console.log(contato[0]);
console.log(ul[0]);

// Seletor geral único
// querySelector, usa seletores CSS para encontrar elementos do DOM
// retorna o primeiro que encontrar
const animais = document.querySelector('.animais');
const contato_ = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]')
const primeiroUl = document.querySelector('ul');

console.log(ultimoItem);
console.log(linkCSS);

// Busca apenas dentro do Ul
const navItem = primeiroUl.querySelector('li');


// Seletor Geral Lista
// querySelectorAll
// Retorna uma NodeList com todos elementos que encontrar
// Também usa seletor CSS
const gridSection_ = document.querySelectorAll('.grid-section');
console.log(gridSection_);
console.log(gridSection_[1]);

// HTMLCollection e NodeList
// A diferença está nos métodos e propriedades de cada um
// Além disso, o NodeList retornada pelo querySelectorAll é estática
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

// Array-Like
// HTMLCollection e NodeList são Array-Like, parecem com um Array, mas não são
// Ou seja, não tem todas as propriedades e métodos que um Array tem.
// Exemplo, o método forEach(), que usamos para percorrer um array, existe apenas no NodeList
gridSectionNode.forEach((gridItem, index, array) => {
    gridItem.classList.add('azul');
    console.log(gridItem);
    console.log(index);
    console.log(array);
});

// É possível transformar um Array-Like em um Array
// utilizando o método Array.from()
const gridSectionArray = Array.from(gridSectionHTML);
console.log(gridSectionArray);