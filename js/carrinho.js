const excluirButtons = document.querySelectorAll(".btn-excluir");
const mensagem = document.querySelector(".mensagem-vazio");
const produtoSelecionados = document.querySelector(".produtos-selecionados");
const total = document.querySelector(".produto-total span");

excluirButtons.forEach((button) => {
    button.addEventListener("click", () => {
        var produto = button.closest(".produto");

        if (produto) {
            produto.remove();
        }

        if (produtoSelecionados.children.length === 0) {
            mensagem.style.display = "block";
            total.innerHTML = "R$ 0,00";
        }
    });
});

const produtos = document.querySelectorAll(".produto");

produtos.forEach((produto) => {
    const minusButton = produto.querySelector(".fa-minus");
    const plusButton = produto.querySelector(".fa-plus");
    const inputField = produto.querySelector('input[type="number"]');

    minusButton.addEventListener("click", () => {
        let currentValue = parseInt(inputField.value);
        if (currentValue > parseInt(inputField.min)) {
            inputField.value = currentValue - 1;
        }
    });

    plusButton.addEventListener("click", () => {
        let currentValue = parseInt(inputField.value);
        if (currentValue < parseInt(inputField.max)) {
            inputField.value = currentValue + 1;
        }
    });
});
