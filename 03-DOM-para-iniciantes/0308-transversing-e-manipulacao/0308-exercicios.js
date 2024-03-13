// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copiaMenu = menu.cloneNode(true);
const copy = document.querySelector('.copy');
copy.appendChild(copiaMenu);

// Selecione o primeiro DT da dl de Faq
const dlFaq = document.querySelector('.faq dl');
console.log(dlFaq.firstElementChild.innerText);

// Selecione o DD referente ao primeiro DT
console.log(dlFaq.firstElementChild.nextSibling.innerText);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');
// const body = document.querySelector('body');
// body.replaceChild(animais, faq);
// ou
faq.innerHTML = animais.innerHTML;