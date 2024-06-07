function toAbsoluteURL(url) {
    const a = document.createElement("a");
    a.href = url;
    return a.href;
}

const paginaAtual = toAbsoluteURL(window.location.pathname);

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    if (toAbsoluteURL(link.getAttribute("href")) === paginaAtual) {
        link.classList.add("active");
    }
});
