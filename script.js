window.addEventListener("resize", () => {
  const infoFlex = document.querySelector(".info-flex");
  if (infoFlex) {
    infoFlex.scrollLeft = 0;
  }
});
