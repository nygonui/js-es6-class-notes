// Todos são primitivos exceto os objetos
var nome = 'Nicolas'; // String
var idade = 21; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var símbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

// typeof usado para verificar o tipo de dado
console.log(typeof nome);

// String
// Podemos somar string com string, concatenando-o-as 
var sobrenome = 'de Souza';
var nomeCompleto = nome + ' ' + sobrenome; // Nicolas de Souza
console.log(nomeCompleto);

// Podemos somar string com número
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase);

// Para usarmos aspas simples ou duplas dentro de uma string podemos fazer das seguintes formas
console.log('Exemplos com "aspas duplas"');
console.log("Exemplo com 'aspas simples'");
console.log("Outro exemplo com \"aspas duplas\"");
console.log('Outro exemplo com \'aspas simples\'');

// Tamplate string
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`;
console.log(frase1);
console.log(frase2);
