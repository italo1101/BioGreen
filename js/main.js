let indexAtual = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function mostraProxItem() {
    items[indexAtual].classList.remove("active");
    indexAtual = (indexAtual + 1) % totalItems;
    items[indexAtual].classList.add("active");
}

setInterval(mostraProxItem, 5000);
