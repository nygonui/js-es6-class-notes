// outerHTML, innerHTML e innerText
// Propriedades que retornam html ou texto do elemento que buscamos
// Usando elas podemos mudar a estrutura do html
// const h1 = document.querySelector('h1');
// console.log(h1.outerHTML);
// console.log(h1.innerHTML);
// console.log(h1.innerText);

// h1.outerHTML = '<p>Novo Texto</p>';
// h1.innerHTML = '<p>Texto Novo</p>';
// h1.innerText = 'Fantastic Animals';

// o outerHTML pega toda a estrutura do elemento, então quando alteramos seu valor estamos substituindo
// o elemento inteiro

// o innerHTML pega todo o HTML dentro do elemento, quando alteramos seu valor devemos passar as tags HTML
// (não é uma regra, vai depender do que você quer fazer) e irá substituir tudo o que tiver dentro dele

// o innerText pega apenas o texto que está dentro do elemento, quando alteramos ele podemos passar apenas
// texto, sem as tags HTML

// Transversing
// Navegando pela DOM, usando JS, ou seja, usando propriedades e métodos
// const lista = document.querySelector('.animais-lista');
// console.log('pai:', lista.parentElement, 'pai do pai:', lista.parentElement.parentElement);
// console.log('elemento acima:', lista.previousElementSibling);
// console.log('elemento abaixo:', lista.nextElementSibling);

// console.log('HTMLCollection com os filhos:', lista.children);
// console.log('primeiro filho:', lista.children[0]);
// console.log('último filho:', lista.children[lista.children.length - 1]);

// console.log('todas lis:', lista.querySelectorAll('li'));
// console.log('útilmo filho:', lista.querySelector('li:last-child')); // outra forma de buscar pelo ultimo filho


// Element VS Node
// Elements representam um elemento (uma tag) no nosso código
// Os Nodes representam tudo do nosso código, como tags, texto, comentários
// quebra de linha e mais
// console.log('------- Element vs Node -------');
// console.log(lista.previousElementSibling); // elemento de cima
// console.log(lista.previousSibling); // Node de cima

// console.log(lista.firstChild); // o primeiro node filho
// console.log(lista.childNodes); // todos os nodes filhos

// Comentário do prof: geralmente estamos querendo os elementos e não os nodes


// Manipulando Elementos
// Podemos manipular os elementos usando métodos do Node
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const img = contato.querySelector('img');

// contato.appendChild(lista); // move a lista para o final do contato
// contato.insertBefore(lista, titulo); // insere a lista antes do titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(img, titulo) // troca o titulo pela img

// Novos Elementos
// createElement(), método que cria um elemento e atribui a uma variável
const animais = document.querySelector('.animais');
const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

// Para colocar o novo elemento na tela:
animais.appendChild(novoH1);

console.log(novoH1);
console.log('-----------------');

// Clonar Elementos
// Quando selecionamos um elemento e atribuímos ele a n variáveis, é o mesmo elemento em todas elas
// se alterarmos ele em qualquer uma das variáveis esteremos alterando em todas e no próprio HTML
const t = document.querySelector('h1');
const t1 = document.querySelector('h1');
console.log(t, t1); // são o mesmo
const t2 = t1;
t2.classList.add('azul');
console.log(t, t1, t2); // É a mesma coisa que os anteriores
// Para clonarmos e ser possível fazer a alteração em um sem fazer no outo devemos usar cloneNode
const cloneTitulo = t.cloneNode(true); // o true indica para incluir os filhos
const c = document.querySelector('.contato');
c.appendChild(cloneTitulo);