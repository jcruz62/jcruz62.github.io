// ============================================================
// filter.js  —  the filter buttons on projects.html
// Each button has data-show="..." and each card has
// data-category="...". Clicking a button hides cards that
// don't match.
// ============================================================

const filterButtons = document.querySelectorAll("[data-show]");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const wanted = button.dataset.show;   // e.g. "stats"

    // Show or hide each card.
    cards.forEach(function (card) {
      const matches = wanted === "all" || card.dataset.category === wanted;
      card.style.display = matches ? "" : "none";
    });

    // Highlight the button that was clicked.
    filterButtons.forEach(function (b) {
      b.classList.toggle("active", b === button);
    });
  });
});
