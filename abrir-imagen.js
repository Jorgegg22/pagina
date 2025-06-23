const modal = document.getElementById("modalImagen");
const imgProductoHome = document.getElementById("imgProductoHome");


imgProductoHome.onclick = function() {
  modal.style.display = "block";
  imgGrande.src = this.src;
  imgGrande.alt = this.alt;
}

cerrarModal.onclick = function() {
  modal.style.display = "none";
}

// Cerrar modal si haces clic fuera de la imagen
modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}