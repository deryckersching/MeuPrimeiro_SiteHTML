// EXERCÍCIOS - DERYCK ERSCHING ZEZUINO

// O que sua atividade precisa ter
// Marque cada item conforme for aplicando no seu site:

 
// 1. Seletores de elementos
// Use querySelector / querySelectorAll (ou getElementById, se 
// preferir) para capturar pelo menos 3 elementos diferentes do 
// seu site que serão manipulados pelo JS.

 
// 2. Modificadores de conteúdo
// Use textContent ou innerHTML para alterar o conteúdo de 
// algum elemento dinamicamente.

// Sem onde aplicar? Ideias: um contador de cliques, uma saudação 
// que muda conforme o horário do dia, um preço que atualiza ao 
// escolher uma opção, uma mensagem de confirmação que aparece 
// após o envio do formulário de contato.

const forms = document.querySelector("#form-contato");
const feedbacks = document.querySelector("#feedback-form");
forms.addEventListener("submit", (evento) => {
        evento.preventDefault();
    feedbacks.textContent = "Mensagem enviada com sucesso!";
    feedbacks.classList.add("sucesso");
    

    essa 2 eu não terminei

});
 
// 3. Modificadores de estilo
// Use classList (add, remove, toggle) para alterar a aparência 
// de algum elemento.

// Sem onde aplicar? Ideias: botão de modo escuro/claro, menu que 
// abre/fecha (hambúrguer), destacar um produto ao passar o mouse, 
// botão "favoritar" que muda de cor.

const botao = document.querySelector("#btn-tema"); // Procura o botão de modo escuro
const body = document.querySelector("body"); // Procura o body da página
if (botao) { // Só executa o modo escuro se o botão existir
    botao.addEventListener("click", () => {
        body.classList.toggle("ativo");
    });
}

// 4. Eventos
// Use pelo menos 2 tipos diferentes de evento (ex: click + submit, 
// ou click + input, etc.) associados a elementos do seu site.

// O formulário de contato é um bom lugar pra usar submit — lembre 
// de usar preventDefault() pra não recarregar a página.

// PRIMEIRO EVENTO - (CLICK + SUBMIT)
const formulario = document.querySelector("#form-contato"); // Procura o formulário de contato
const feedback = document.querySelector("#feedback-form"); // Procura o lugar onde aparecerá a mensagem
if (formulario) { // Só executa o formulário se ele existir
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();  // Impede a página de recarregar
        feedback.textContent = "E-mail enviado!"; // Mostra a mensagem
        feedback.classList.add("sucesso"); // Adiciona a classe sucesso

    });
}

// SEGUNDO EVENTO - (CLICK + CHANGE)

const form = document.querySelector("#form-contato"); // Seleciona o formulário
const feedBack = document.querySelector("#feedback-form"); // Seleciona o local onde aparecerá a mensagem
if (form) { // Verifica se o formulário existe
    form.addEventListener("change", (evento) => { // Detecta quando algum campo do formulário muda
        feedback.textContent = "Por favor, preencha todos os campos obrigatórios.";  // Mostra a mensagem
        feedback.classList.add("preencher") // Adiciona a classe para estilizar a mensagem
    });
}