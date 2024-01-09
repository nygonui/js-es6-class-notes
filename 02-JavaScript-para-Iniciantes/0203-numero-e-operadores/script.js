var inteiro = 23;
var decimal = 2.23;
var notacaoCientifica = 2e10;

console.log(inteiro, decimal, notacaoCientifica);

// Operadores aritméticos 
console.log('---------------------');
console.log('Operadores Aritméticos');

var soma = 2 + 2; // 4
var subtracao = 10 - 4; // 6
var multiplicacao = 3 * 4; // 12
var divisao = 10 / 2; // 5
var expoente = 2 ** 2; // 4
var modulo = 14 % 5; // 4

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(expoente);
console.log(modulo);


// Operadores aritméticos (string)
console.log("---------------------");
console.log('Operadores Aritméticos (String');

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao1 = '100' / '2'; // 50
var divisao2 = 'Comprei 100' / 2; //NaN (Not a Number)

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao1);
console.log(divisao2);

/*
    as variáveis subtracao, multiplicacao e divisao1 meio que convertem a string para number
    conseguindo resolver a conta. 
    no caso da variável divisao2 não é possível por conta do conjunto de caracteres que está junto
    do número na string e o resultado é um NaN, not a number. O js possui uma função para verificar se 
    a variável é um NaN ou não ... isNaN()
*/

// NaN
console.log("---------------------");
console.log('NaN');

var testeNaN = isNaN('10' * 2);
console.log(testeNaN);


// Operadores Aritméticos Unários
console.log("---------------------");
console.log('Operadores Aritméticos Unários');

var x = 3;
console.log(x++);
console.log(x);

var a = 10;
console.log(++a);
console.log(a);

console.log(a--);
console.log(a);

console.log(--x);
console.log(x);

// Os operadores unários tentam transformar uma string em número tammbém
var frase = 'testando testando';
+frase; // NaN
-frase; // NaN

var idade = '21';
+idade; // 21
-idade; // -21
console.log(+idade, +idade + 3);

var ehBrasileiro = true;
+ehBrasileiro; // 1
console.log(+ehBrasileiro);  