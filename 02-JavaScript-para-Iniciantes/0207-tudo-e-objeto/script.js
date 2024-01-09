// Tudo é Objeto
// String, Números, Booleans, Objetos e outros tipos de dados 
// possuem propriedades e métodos, por isso todos são objetos

var nome = 'José';
console.log(nome.length); // 4
console.log(nome.charAt(0)); // J
console.log(nome.replace('é', 'éfina')); // Joséfina

// Números
var altura = 1.8;
console.log(altura.toString()); // '1.8'
console.log(altura.toFixed());// 2
/*
    Por um breve momento o número é envolvido por um objeto (coerção), pois se testarmos o
    typeof altura ele retornará Number e não Objetcm, tendo acesso assim as suas propriedades
    e métodos
*/

// Funções 
function areaQuadrado(lado) {
    return lado * lado;
}
console.log(areaQuadrado.toString()); // retorna o código da função em texto
console.log(areaQuadrado.length); // 1 (é a quantidade de argumentos que a função leva)

// Elementos DOM
var btn = document.querySelector('.btn');
btn.classList.add('azul'); // adiciona a classe azul
console.log(btn.classList);
console.log(btn.innerText); // Clique
btn.addEventListener('click', () => {
    console.log('Clicou');
})
