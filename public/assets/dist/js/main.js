// Capturar el botón
const btnTop = document.getElementById("btnTop");
const imgHistology = document.getElementById("imgHistology");

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

window.addEventListener("resize", function () {
  console.log('Cambiando imagen:', window.innerWidth < 990 ? 'mobile' : 'desktop');
  if(window.innerWidth < 990){
    imgHistology.src="./assets/images/CallToActionMobile.png";
    //imgHistology.style.width = "100%";
  }else{
    imgHistology.src="./assets/images/iPhone02.png";
    //imgHistology.style.width = "70%";
  }
   
});

window.onload = function () {
  window.scrollTo(0, 0);
 
};
