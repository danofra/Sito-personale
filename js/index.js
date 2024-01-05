// Anno sempre aggiornato
document.getElementById("year").innerText = new Date().getFullYear();

//Funzione che fa apparire il pulsante vai su
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
window.onscroll = function () {
  let scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

//Funzione che cambia classe alla foto me per allagarla
setTimeout(function () {
  document.getElementById("img").classList.add("opacity");
}, 0.1);

// Funzione per controllare quando gli elementi sono visibili nella finestra di visualizzazione
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Funzione per mostrare gli article del portfolio allo scroll
function showVisibleElements() {
  var portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach(function (item) {
    if (isElementInViewport(item)) {
      item.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", showVisibleElements);
document.addEventListener("DOMContentLoaded", showVisibleElements);

// Alert all'invio del form
const contForm = document.getElementById("contactForm");
contForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(
    "Il tuo messaggio è stato inviato con successo. Ti risponderemo non appena possibile!"
  );
  contForm.reset();
});
