const btnTop = document.getElementById("btn-top");

//Evento de "click" (lleva al usuario al comienzo de la página)
btnTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    
    console.log("El usuario volvió al inicio");
});