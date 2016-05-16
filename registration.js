function comparador() {
  document.getElementById('mensajeError').style.display = "none";
  var element1 = "";
  var element2 = "";
  element1 = document.getElementById('first_school').value;
  element2 = document.getElementById('second_school').value;
  if (element1 == element2) {
    document.getElementById('mensajeError').style.display = "block";
    return false;
  }
}
