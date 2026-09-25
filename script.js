//  trata da seleção e inicialização das variáveis do carrossel/slider do site

// Aqui está o resumo do que a parte de script faz:

// 1. Seleção de Elementos do DOM
// O script mapeia os elementos da página que sofrerão interação:

// Botões de navegação: Seleciona os botões "Anterior" (prevButton) e "Próximo" (nextButton) pelo ID (getElementById).

// Elementos da interface: Seleciona as listas de itens do slider (.item), os indicadores/pontos de navegação (.dot), o indicador numérico (.numbers) e o container principal da lista (.list) usando querySelectorAll e querySelector.

// 2. Controle do Estado do Slider
// let active = 0;: Define qual item/slide está ativo no momento (iniciando no índice 0).

// const total = items.length;: Armazena a quantidade total de itens para controlar os limites ao avançar ou voltar os slides.

// let timer;: Declara uma variável reservada para gerenciar o temporizador da transição automática (autoplay) das animações.

// Em resumo, essa etapa inicial do código configura a lógica do carrossel para que as funções seguintes possam alterar os slides ativos, atualizar a numeração/pontos na tela e rodar as animações automaticamente ao clicar nos botões. 

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = items.length;
let timer;

function update(direction) {

     document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

 if (direction > 0) {

        active = active + 1;

        if (active === total) {
            active = 0;
        }
    }
    else if (direction < 0) {
        active = active - 1;

        if (active < 0) {
            active = total - 1;
        }
    }

    items[active].classList.add('active');
    dots[active].classList.add('active');

    numberIndicator.innerHTML = String(active + 1).padStart(2, '0');
    // adicionar 1 caracter no inicio
}

clearInterval(timer);
timer = setInterval(() => {
    update(1);
}, 5000);

prevButton.addEventListener('click', () => {
    update(-1)
});

nextButton.addEventListener('click', ()=> {
    update(1)
});
