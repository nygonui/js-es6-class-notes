// Adicione a classe ativo a todos os itens do menu
// linha que eu fiz: const itensMenu = document.querySelector('.menu').querySelectorAll('li');
// linha do professor:
const itensMenu = document.querySelectorAll('.menu a'); // poderia ser .menu li tbm
itensMenu.forEach((item) => {
    item.classList.add('ativo');
    console.log(item.className);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item, index) => {
    if (index != 0) {
        item.classList.remove('ativo');
    }
})

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((i) => {
    if (i.hasAttribute('alt')) {
        console.log(i.getAttribute('src'), 'tem o atributo src');
    }
    else {
        console.log(i.getAttribute('src'), 'não tem o atributo src');
    }
})

// Modifique o href do link externo no menu
const linkExternoMenu = document.querySelector('.menu a[href^="https"]'); //querySelector('.menu').querySelector('a[href^="https"]');
linkExternoMenu.setAttribute('href', 'https://www.google.com');
