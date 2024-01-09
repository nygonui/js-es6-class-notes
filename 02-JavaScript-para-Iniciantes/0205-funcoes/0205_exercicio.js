// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
    return !!value;
};

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
};

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function retornaNomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
};

// Crie uma função que verifica se um número é par
function ehPar(numero) {
    return +numero % 2 == 0;
};


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
    return typeof dado;
}
console.log(tipoDeDado(ehPar));

console.log(isTruthy(tipoDeDado));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', () => {
    console.log('Nicolas de Souza');
});

// Corrija o erro abaixo
var totalPaises = 193; // corrigido
function precisoVisitar(paisesVisitados) {
    // var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
