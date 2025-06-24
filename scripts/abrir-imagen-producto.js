const modal = document.getElementById("modalImagen");
const imgProducto = document.getElementById("imgProducto");
const imgProducto1 = document.getElementById("imgProducto1");
const imgProducto2 = document.getElementById("imgProducto2");
const imgProducto3 = document.getElementById("imgProducto3");
const imgGrande = document.getElementById("imgGrande");
const cerrarModal = document.getElementById("cerrarModal");

imgProducto.onclick = function() {
  modal.style.display = "block";
  imgGrande.src = this.src;
  imgGrande.alt = this.alt;
}

imgProducto1.onclick = function() {
  modal.style.display = "block";
  imgGrande.src = this.src;
  imgGrande.alt = this.alt;
}

imgProducto2.onclick = function() {
  modal.style.display = "block";
  imgGrande.src = this.src;
  imgGrande.alt = this.alt;
}

imgProducto3.onclick = function() {
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