// Navegação por tabs

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    const activeClass = 'ativo';
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass);

        function activeTab(index) {
            tabContent.forEach((item) => {
                item.classList.remove(activeClass);
            })
            tabContent[index].classList.add(activeClass);
        }

        tabMenu.forEach((section, index) => {
            section.addEventListener('click', function () {
                activeTab(index);
            })
        })
    }
}

initTabNav();

// Accordion List                                                   ^
// // minha versão. Aproveitando o que aprendi com a navegação por tab |

// const questions = document.querySelectorAll('.js-faq-lista dt');
// const answers = document.querySelectorAll('.js-faq-lista dd');
// console.log(questions);
// console.log(answers);

// function showAnswer(index) {
//     answers[index].classList.toggle('ativo');
//     console.log(answers[index]);
// }

// questions.forEach((item, index) => {
//     item.addEventListener('click', function () {
//         showAnswer(index);
//     })
// })

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-faq-lista dt');
    const activeClass = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

initAccordion();
