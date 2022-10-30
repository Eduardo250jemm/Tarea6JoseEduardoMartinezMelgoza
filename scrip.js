function validar() {
	
  // Get the value of the input field with id="numControl"
  let x1 = document.getElementById("numControl").value;
  const ERnumControl = /^[m|c]?[0-9]{2}(120|121)[0-9]{3}$/i;

  if (ERnumControl.test(x1)) {	
    text="Numero de control Valido";
  }
  else {
    text="Numero de control NO Valido";
  }

  document.getElementById("valida_numeroControl").innerHTML = text;

  // Get the value of the input field with id="RFC"
  let x2 = document.getElementById("RFC").value;
  const ERrfc = /^[A-ZÑ&]{3,4}\d{6}(?:[A-Z\d]{3})?$/i;

  if (ERrfc.test(x2)) {
    text="RFC valido";
  }
  else {
    text="RFC invalido";
  }

  document.getElementById("valida_RFC").innerHTML = text;


  // Get the value of the input field with id="numTelefono"
  let x3 = document.getElementById("numTelefono").value;
  const ERnumTelefono = /^443[0-9]{7}$/i;

  if (ERnumTelefono.test(x3)) {
    text="Numero telefonico valido";
  }
  else {
    text="Numero telefonico no valido";
  }

  document.getElementById("valida_numeroTelefonico").innerHTML = text;
  
  // Get the value of the input field with id="correo"
  let x4 = document.getElementById("correo").value;
  const ERcorreo = /^[m|c]?[0-9]{2}(120|121)[0-9]{3}@morelia.tecnm.mx$/i;

  if (ERcorreo.test(x4)) {
    text="Correo valido";
  }
  else {
    text="Correo no valido";
  }

  document.getElementById("valida_Correo").innerHTML = text;

}