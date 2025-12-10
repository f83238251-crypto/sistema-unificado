// Solo función para abrir enlaces externos en nueva pestaña
window.openLink = function(url) {
  if (url === "#") {
    alert("Enlace no disponible.");
    return;
  }
  window.open(url, '_blank');
};
