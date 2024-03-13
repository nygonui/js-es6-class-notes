// Document Object Model (DOM)
// Interface que representa documentos HTML e XML através de objetos
// Com ela é possível manipular estrutua, estilos e conteúdo
console.log(window);
// window é o objeto global do browser 
console.log(window.innerHeight);


// window e document
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus 
// métodos e propriedades
window.alert('Uhuuuw');
alert('outro alerta');
// window é um objeto global, por isso não precisamos chamar ele 
// antes de chamarmos seus métodos e propriedades

document.querySelector('h1');
console.log(document.body);

// Node
// Toda tag html é representada pelo objeto Element, logo toda tag html
// herda os métodos e propriedades do objeto Element.
// E o objeto Element é um tipo de objeto Node 

const h1 = document.querySelector('h1');
console.log(h1.innerText); // Retorna o texto dentro da tag
console.log(h1.classList); // Retorna as classes 
console.log(h1.id); // retorna o id
console.log(h1.offsetHeight); // retorna a altura do elemento

function callback() {
    console.log('clicaram no título');
}

h1.addEventListener('click', callback);
// ativa a função callback ao clicarem no h1