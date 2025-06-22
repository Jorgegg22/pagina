const modal = document.getElementById("modalImagen");
const imgProducto = document.getElementById("imgProducto");
const imgGrande = document.getElementById("imgGrande");
const cerrarModal = document.getElementById("cerrarModal");

imgProducto.onclick = function() {
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