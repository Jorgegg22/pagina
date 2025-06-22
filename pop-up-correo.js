
const correcto = document.getElementById("pop-up");
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('enviado') === 'true') {
    correcto.style.display = "block";
    
    setTimeout(() => {
      correcto.style.display = "none"; // Envía el formulario después de 1 segundo
    }, 3000); // 1000 milisegundos = 1 segundo

}

    
 