let lastScroll = 0;
const topBar = document.querySelector(".top-bar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // rolando para baixo → esconder
    topBar.classList.add("hidden");
  } else {
    // rolando para cima → mostrar
    topBar.classList.remove("hidden");
  }

  lastScroll = currentScroll;
});
