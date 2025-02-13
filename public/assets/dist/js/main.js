 // Capturar el botón
 const btnTop = document.getElementById("btnTop");

 // Mostrar u ocultar el botón según el scroll
 window.addEventListener("scroll", function() {
     if (window.scrollY > 300) {
         btnTop.style.display = "block";
     } else {
         btnTop.style.display = "none";
     }
 });

 // Volver al inicio con animación suave
 btnTop.addEventListener("click", function() {
     window.scrollTo({
         top: 0,
         behavior: "smooth"
     });
 });