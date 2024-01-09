// Array
// É um grupo de valores geralmente relacionados
// Serve para guardamos vário valores em uma única variável 
var videoGames = ['Switch', 'PS4', 'Xbox'];
// console.log(videoGames[0]);
// Conseguimos acessar algum elemento do array passando o nome da variável seguido de [n]
// onde [n] é o endereço do dado que você quer, considerando que vai de 0 até o tamanho do array-1

// Métodos e propriedades de um Array
// var ultimoItem = videoGames.pop(); // Remove o último item do array
videoGames.push('PS2'); // Adiciona no final do array
console.log(videoGames.length); // Mostra o tamanho do array, quantos item tem no array

// For Loop
// Laço de repetição
console.log('For loop');
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
// O for loop possui três partes:
// início, condição e incremento
// na maioria das vezes a condição e o incremento são realizados na mesma variável do início
// do jeito que está no exemplo a cima

// While Loop
console.log('While Loop');
var n = 2;
while (n <= 20) {
    console.log(n);
    n += 2;
}

// Loops e Array
for (item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    // break - para o loop
    if (videoGames[item] === 'PS4') {
        break;
    }
}

// ForEach()
// método que executa uma função para cada item do Array.
// é uma outra forma de executarmos um lanço para rodar o Array
// funciona em Arrays e arrays-like (estruturas que parecem um Array,
// mas não possuem todos os métodos e propriedades)

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];
frutas.forEach(function (item) {
    console.log(item);
});
// podemos passar os seguintes parâmetros: item, index, array
console.log('-------');
frutas.forEach(function (item, index, array) {
    console.log(item, index, array);
});
// dentro da função podemos fazer o que quisermos