// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
    nome: 'Nicolas',
    sobrenome: 'Souza',
    cidade: 'São Paulo',
    idade: 90
}
console.log(pessoa);

// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}
console.log(pessoa.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
    raça: 'Labrador',
    idade: 10,
    latido(pessoa) {
        if (pessoa.toUpperCase() === 'HOMEM') {
            return 'Latir';
        } else {
            return 'de boa';
        }
    }
}
