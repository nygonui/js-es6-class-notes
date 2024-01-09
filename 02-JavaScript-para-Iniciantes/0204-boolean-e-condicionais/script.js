var possuiGraduacao = true;
var possuiDoutorado = true;

if (possuiDoutorado) {
    console.log('Possui gradruação e doutorado');
} else if (possuiGraduacao) {
    console.log('Possui graduação mas não possui doutorado');
} else {
    console.log('Não possui nada');
}

// Truthy e Falsy
// Existem valores que são interpretados como verdadeiros e outros como falsos
// mesmo não sendo 'true' e 'false' realmente

// Falsy
if (false) { }
if (0) { }
if (NaN) { }
if (null) { }
if (undefined) { }
if ('') { } // ou "" ``

// Todo o resto é Truthy

// Operador de negação !
var operadorDeNegacao = !true; // false

// também podemos utiliar !! para verificar se um valor é truthy ou falsy
var verificandoVariavel = !!'';
// funciona porque o primeiro ! transforma o valor em boolean ... no nosso caso irá transformar para
// true e o segundo ! vai dar o real valor dele que é false 

console.log('-----------------');

// Operadores de comparação
console.log('Operadores de comparação');
console.log('5 > 2: ', 5 > 2); // true
console.log('2 < 5: ', 2 < 5); // true
console.log('10 <= 10: ', 10 <= 10); // true
console.log('13 >= 34: ', 13 >= 34); // false


// Operadores de comparação
// == ou ===
console.log('10 == 10: ', 10 == 10); // true
console.log('10 == "10": ', 10 == '10'); // true
console.log('10 === "10": ', 10 === '10'); // false
console.log('10 === 10: ', 10 === 10); // true
// a diferença do operador == para o === é que o segundo além de comparar o valor,  compara também
// o tipo de dado, se chama comparação estrita

// Operadores lógicos
// &&
console.log('true && true: ', true && true);
console.log('"Gato" && "Cão": ', 'Gato' && 'Cão');
console.log('true && false: ', true && false);
// Se os dois valores forem true ele retorna o último valor
// Se algum valor for false ele irá retorna-lo sem varificar os outros valores

// ||
console.log('true || true: ', true || true);
console.log('"Gato" || "Cão": ', 'Gato' || 'Cão');
console.log('true || false: ', true || false);
// o OU - || - retorna o primeiro valor verdadeiro

// Switch

var corFavorita = 'Azul';
switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu');
        break;
    case 'Vermelho':
        console.log('Olhe para as rosas');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol');
        break;
    default:
        console.log('Feche os olhos');
}