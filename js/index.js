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

// Alert all'invio del form
const contForm = document.getElementById("contactForm");
contForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(
    "Il tuo messaggio è stato inviato con successo. Ti risponderemo non appena possibile!"
  );
  contForm.reset();
});
