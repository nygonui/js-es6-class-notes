// Funções
/*
    Blocos de código que podem ser executados e reutilizados.
    Valores podem ser passados por uma função e a mesma retorna outro valor 
*/

function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));
console.log(areaQuadrado(7));
console.log(areaQuadrado(10));

function pi() {
    return 3.14;
}

console.log(2 * pi());

// Parâmetros e argumentos
// quando criamos a função, chamamos de parâmetros
// quando usamos a função, chamamos de argumentos
function imc(parametro1, parametro2) {
    // parametro1 = peso
    // parametro2 = altura
    const imc = parametro1 / (parametro2 ** 2);
    return imc;
};

var argumento1 = 80;
var argumento2 = 1.80;
console.log(imc(argumento1, argumento2));
console.log(imc(90, 1.70));

// Podemos criar uma função que aceita um argumento mas que tabém executa caso o argumento não seja
// passado
function corFavorita(cor) {
    if (cor) {
        console.log('Sua cor favorita é: ' + cor);
    }
    else {
        console.log('Você não tem cor favorita');
    }
}


function geraValorAleatorioParaRGB() {
    return parseInt((Math.random() * 100) * 2.55);
}

// Também podemos passar funções como parametros
const botao = document.querySelector('.botao');
botao.addEventListener('click', function () {
    var body = document.querySelector('body');
    var red = geraValorAleatorioParaRGB();
    var green = geraValorAleatorioParaRGB();
    var blue = geraValorAleatorioParaRGB();

    console.log(`rgb(${red}, ${green}, ${blue})`);

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})

// Usamos uma função anônima como segundo argumento da função addEventListener
// funções anônimas não possuem nome e são executadas assim que são lidas ou nesse caso
// como callbacks, uma função que é executada quando algo acontece, nesse caso novamente, um clique
// no botão
// function () {} ----- () => {}
// doi exemplos de funções anônimas, a segunda se chama arrow funciont


// Uma função pode ou não retornar um valor
// Quando usamos a palavra return ela retorna o valor que definimos
// quando não usamos o return ela retornará undefined, geralmente não usamos
// quando função faz tudo o que precisamos dentro dela mesma

// Uma função pode retorna diferentes valores, quando usamos condicionais dentro da função por ex
function ehMaiorDeIdade(idade) {
    if (idade < 18) {
        return 'Menor de Idade';
    }
    else if (idade == 18) {
        return 'Parabéns pelos 18 anos';
    }
    else {
        return 'Maior de idade';
    }
}

// Escopo
// Variaveis criadas dentro de uma função não ficam visiveis fora dela