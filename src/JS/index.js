const botoesCarrossel = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indici) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".selecionado");
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");

        const imagemAtiva = document.querySelector(".imagem.ativa");
        imagemAtiva.classList.remove("ativa");
        imagens[indici].classList.add("ativa");

        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");
        informacoes[indici].classList.add("ativa");
    });
});