// carousel

let indexAtual = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function mostraProxItem() {
    items[indexAtual].classList.remove("active");
    indexAtual = (indexAtual + 1) % totalItems;
    items[indexAtual].classList.add("active");
}

setInterval(mostraProxItem, 5000);

// card button

document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll(".buy-button");
  buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Produto adicionado ao carrinho!");
    });
  });
});

// hamburger menu

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  hamburgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });
});