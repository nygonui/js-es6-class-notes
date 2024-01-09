// nomeie 3 propriedades ou métodos de strings
var frase = 'Hoje é um bom dia para correr';
console.log(frase.length);
console.log(frase.slice(frase.length / 2));
console.log(frase.split(' '));

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
window.onload = function () {
    var h1 = document.createElement('h1');
    h1.id = 'outbox';
    var text = document.createTextNode('Olá');
    h1.appendChild(text);
    document.body.appendChild(h1);
}
var heading = document.getElementsByTagName('h1');
console.log(heading)

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
// R: clipboard.js
