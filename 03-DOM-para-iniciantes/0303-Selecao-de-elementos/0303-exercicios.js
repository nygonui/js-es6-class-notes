// Retorne no console todas as imagens do site
const allImgs = document.querySelectorAll('img');
allImgs.forEach((item) => {
    console.log(item);
})
console.log('--------------');
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="img/imagem"]');
imagens.forEach((item) => {
    console.log(item);
})

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);

/*
    os dois exercícios anteriores usam ATTRIBUTE SELECTOR para encontrar o elemento
*/

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector('.animais-descricao');
const h2 = animaisDescricao.querySelector('h2');
console.log(h2.innerText);

// Selecione o último p do site
const todosP = document.querySelectorAll('p');
const ultimoP = todosP[todosP.length - 1];
console.log(ultimoP.innerHTML);
