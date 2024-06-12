document.addEventListener("DOMContentLoaded", function() {
    const excluirButtons = document.querySelectorAll(".remove");
    const mensagem = document.querySelector(".mensagem-vazio");
    const produtoSelecionados = document.querySelector("tbody");
    const subTotal = document.querySelector("#sub-total");
    const total = document.querySelector("#total-preco");

    function atualizarTotal() {
        let totalPreco = 0;
        const produtos = document.querySelectorAll(".produto");
        produtos.forEach((produto) => {
            const preco = parseFloat(produto.getAttribute("data-preco"));
            const quantidade = parseInt(produto.querySelector('input[type="number"]').value);
            const precoTotalProduto = preco * quantidade;
            totalPreco += precoTotalProduto;
            produto.querySelector('.total-preco-produto').textContent = `R$ ${precoTotalProduto.toFixed(2)}`;
        });
        subTotal.textContent = `R$ ${totalPreco.toFixed(2)}`;
        total.textContent = `R$ ${totalPreco.toFixed(2)}`;
    }

    excluirButtons.forEach((button) => {
        button.addEventListener("click", () => {
            var produto = button.closest(".produto");

            if (produto) {
                produto.remove();
            }

            if (produtoSelecionados.children.length === 0) {
                mensagem.style.display = "block";
                subTotal.innerHTML = "R$ 0,00";
                total.innerHTML = "R$ 0,00";
            } else {
                atualizarTotal();
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
                atualizarTotal();
            }
        });

        plusButton.addEventListener("click", () => {
            let currentValue = parseInt(inputField.value);
            if (currentValue < parseInt(inputField.max)) {
                inputField.value = currentValue + 1;
                atualizarTotal();
            }
        });

        inputField.addEventListener("change", () => {
            if (inputField.value < 1) {
                inputField.value = 1;
            }
            atualizarTotal();
        });
    });

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    atualizarTotal();
});
