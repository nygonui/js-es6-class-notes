var nome = 'Nicolas';
var idade = 21;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var quantidadeComprada = 5;
var totalPreco = preco * quantidadeComprada;

console.log(totalPreco);


// declarando variáveis usando um var e virgula
var sobrenome = 'Souza',
    cidade = 'São Paulo';


// declarando uma variável sem atribuir valor a ela
// o valor default é undefined
var semDefinir;


/*
    HOSTING: quando o js está sendo interpretado ele vai jogar todas as declarações de variáveis
    para cima do código. Exempo

    console.log(a)
    var a = 2

    O console.log(a) irá retornar undefined, mas não retornará um erro (se a variável não tivesse sido
    declarada), retorna undefined porque o HOSTING só joga a declaração pro início do código e não a 
    atribuição, a atribuição irá acontecer apenas na linha que você está atribuindo valor a vairável
*/

/*
    É possível alterar o valor de uma variável já declarada usando var e let, já usando const não é
    possível

    quando usamos let não conseguimos redeclarar a variável, conseguimos atribuir diferentes valores
    mas redeclarar apenas var 

    let a = 2
    a = 3
    [OK]

    let a = 2
    let a = 3
    [NOT OK]

    var v = 2
    v = 4
    var v = 3
    [OK]

    const n = 2
    n = 5
    [NOT OK]
*/