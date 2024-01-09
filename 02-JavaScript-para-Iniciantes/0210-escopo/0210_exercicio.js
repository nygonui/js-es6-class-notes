// // Por qual motivo o código abaixo retorna com erros?
// {
//     var cor = 'preto';
//     const marca = 'Fiat';
//     let portas = 4;
// }
// console.log(var, marca, portas);
// // R: var não é uma variavel e sim uma palavra chave e 
// // marca e portas estão sendo usadas fora do escopo delas

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
    // const dois = 2; // subir essa linha para fora da função
    return x + dois;
}
function dividirDois(x) {
    return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
// R: alterar no laço, var numero = 0 para let numero = 0
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);
