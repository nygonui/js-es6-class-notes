// classList
// Retorna uma lista com as classes do elemento.
// Permite adicionar, remover e verificar se contém
const menu = document.querySelector('.menu');
console.log(menu.className); // string
console.log(menu.classList); // lista com as classes
menu.classList.add('ativo'); // adiciona a classe ativo
menu.classList.add('ativo', 'mobile'); // adicionar duas ou mais classes separados por vírgula
menu.classList.remove('ativo'); // remove a classe passado como argumento
menu.classList.toggle('ativo'); // adiciona/remove a classe
console.log(menu.classList.contains('ativo')); // true ou false
menu.classList.replace('ativo', 'inativo');

// attributes
const animais = document.querySelector('.animais');
console.log(animais.attributes);
// é retornado um objeto (e um objeto é um array like, então conseguimos acessar por indice)
console.log(animais.attributes[0]);
// ou também podemos acessar pelo nome do atributo
console.log(animais.attributes.id);
// no caso do atributo conter um caracter que não podemos usar no js 
console.log(animais.attributes['data-text']);

// getAttribute e setAttribute
// métodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img');
console.log(img.getAttribute('src'));
img.setAttribute('alt', 'Raposa'); // define um atributo, ou altera o valor se o atributo já existe
console.log(img.hasAttribute('id')); // true ou false
img.removeAttribute('alt');
console.log(img.hasAttributes()); // true ou false para ver se exister algum atributo

