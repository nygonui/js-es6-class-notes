// propriedades 
// são as "variaveis" de um objeto
var pessoa = {
    nome: 'Nicolas',
    idade: 21,
    possuiFaculdade: true
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

// meteodos
// são as "funções" de um objeto
var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    // outra forma de criar um método
    perimetro(lado) {
        return this.lados * lado;
        // a palavra (reservada) this faz referência ao próprio objeto
    },
};
console.log(quadrado);
console.log(quadrado.area(12));
console.log(quadrado.perimetro(12));

