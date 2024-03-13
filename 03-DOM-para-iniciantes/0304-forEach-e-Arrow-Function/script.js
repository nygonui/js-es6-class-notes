// forEach
// Muitas vezes vamos pegar vários elementos da página (usando o querySelectorAll, por exemplo)
// Como já vimos, o forEach é um método de Array, e do NodeList (que é unm array-like retornado pelo querySelectorAll)
// Ele recebe uma função de callback como parâmetro e roda todo o array.

// Parâmetros do forEach
// O primeiro parâmetro é a função de callback, esta pode receber 3 parâmetros: valor atual, index e array
const imgs = document.querySelectorAll('img');

imgs.forEach(function (valorAtual, index, array) {
    console.log('#');
    console.log('Valor atual: ', valorAtual);
    console.log('Index: ', index);
    console.log('Array: ', array);
    console.log('----------');
});

// Arrow Function
// Uma maneira de simplificar a expressão da função
const sections = document.querySelectorAll('section');

sections.forEach((section, index, array) => {
    console.log('#');
    console.log('Section: ', section);
    console.log('Index: ', index);
    console.log('Array: ', array);
    console.log('----------');
})