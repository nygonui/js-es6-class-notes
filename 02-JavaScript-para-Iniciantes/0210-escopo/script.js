// Escopo
// Escopo evita o conflito entre nomes
// Variáveis declaradas dentro de funções não são acessadas fora da função onde foi criada


// Variável Global (erro)
// Quando não usamos as palavras reservadas para criar uma variável ela se torna uma variável
// gloval, o que é um erro até então

function mostrarCarro() {
    carro = 'Fusca';
    console.log(carro);
}

mostrarCarro();
console.log(carro);

// para evitarmos isso podemos escrever na primeira linha do nosso arquivo
// 'use strict', que vai impedir que isso seja permitido

// var, let e const
/*
    a declaração de variável usando o var ela foge do escopo, ou seja, conseguimos acessar a variável
    fora do seu escopo de criação
    a declaração com let e const não acontece isso, elas não fogem do escopo
*/