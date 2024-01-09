// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// R: 35
console.log(total);

// Crie duas expressões que retornem NaN
var expressao1 = 'Ola tudo bem? ' + 21;
var expressao2 = 'Quantos gramas tem ' + 21 + 'kg?';
console.log(+expressao1, +expressao2);

// Somar a string '200' com o número 50 e retornar 250
var resultado = +'200' + 50;
console.log(resultado);

// Incremente o número 5 e retorne o seu valor incrementado
var cinco = 5;
console.log(++cinco);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
peso = +peso.replace(/[^0-9]/g, '');
var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log(pesoPorDois);