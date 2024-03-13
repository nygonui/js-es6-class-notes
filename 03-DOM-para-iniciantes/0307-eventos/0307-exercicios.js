// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');
function handleLinkInterno(event) {
    linksInternos.forEach((l) => {
        if (l.classList.contains('ativo'))
            l.classList.remove('ativo');
    })
    event.preventDefault();
    event.currentTarget.classList.add('ativo');
}
linksInternos.forEach((link) => {
    link.addEventListener('click', handleLinkInterno);
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
function handlePage(event) {
    console.log(event.target); // pega apenas o elemento especifico o click (evento)
    console.log(event.currentTarget); // pega todo elemento que recebeu o evento
}
document.addEventListener('click', handlePage);
//também dava para fazer da seguinte maneira, para pegar todos os elementos da pagina
const tudo = document.querySelector('body *'); // pegando todos os itens dentro de body



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElementFromPage(event) {
    event.target.remove();
}
document.addEventListener('click', removeElementFromPage);



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleFontSize(event) {
    if (event.key === 't') {
        //document.body.classList.add('biggerFontSize');
        document.documentElement.classList.toggle('biggerFontSize');
    }
}
window.addEventListener('keydown', handleFontSize);
