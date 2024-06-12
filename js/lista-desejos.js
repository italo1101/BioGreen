document.querySelectorAll(".btn-remover").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const produto = e.target.closest(".produto");
        if (produto) {
            produto.remove();
        }
    });
});

document.querySelectorAll(".btn-adiciona").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const produto = e.target.closest(".produto");
        if (produto) {
            const mensagem = produto.querySelector(".mensagem");
            mensagem.style.display = "block";
            setTimeout(() => {
                mensagem.style.display = "none";
                produto.remove();
            }, 2000);
        }
    });
});
