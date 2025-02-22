// Capturar el botón
const btnTop = document.getElementById("btnTop");
const imgHistology = document.getElementById("imgHistology");
const imgAprende = document.getElementById("imgAprende");

// Mostrar u ocultar el botón según el scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
    btnTop.style.transition =
      "transform 1s ease-in-out, visibility 1s ease-in-out";
    // transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  } else {
    btnTop.style.display = "none";
  }
});

// Volver al inicio con animación suave
btnTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("resize", imgResize);

window.onload = function () {
  window.scrollTo(0, 0);
  imgResize();
};

function imgResize() {
  if (window.innerWidth < 992) {
    imgHistology.src = "./assets/images/CallToActionMobile.png";
    imgHistology.style.width = "100%";
    imgAprende.src = "./assets/images/ipad.png";
    //imgAprende.style.width = "100%";
  } else {
    imgHistology.src = "./assets/images/iPhone02.png";
    imgAprende.src = "./assets/images/iPhone03.png";
  }
}

(() => {
  "use strict";
  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", () => {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const mensaje = document.getElementById("mensaje").value;
  const mailtoLink = `mailto:info@histologyplus.com?subject=Quiero%20informaci%C3%B3n&body=${encodeURIComponent(
    mensaje
  )}`;
  window.location.href = mailtoLink;
});
