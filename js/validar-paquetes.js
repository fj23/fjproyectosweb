function validar() {
  var nombre, correo, empresa, telefono, mensaje, expresion, expresion2;
  nombre = document.getElementById("nombre").value;
  correo = document.getElementById("correo").value;
  empresa  = document.getElementById("empresa").value;
  telefono = document.getElementById("telefono").value;
  mensaje = document.getElementById("mensaje").value;  
  expresion = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  
  function vacio(q) {
    for ( i = 0; i < q.length; i++ ) {
      if ( q.charAt(i) != " " ) {
        return true
      }
    }
    return false;
  }
  
  if(nombre == "" || correo == "" || telefono == "" || empresa == "" || mensaje == ""){
    alert("Todos los campos son obligatorios");
    return false;
  }
  else if (vacio(nombre) == false || vacio(empresa) == false || vacio(mensaje) == false ||  vacio(telefono) == false){
    alert("No inserte espacios en blanco");
    return false;
  }
  else if (!expresion.test(correo)){
    alert("El correo no es vÃ¡lido. Ejm: nombre@hotmail.com");
    return false;
  }

  else if (isNaN(telefono)){
    alert("El telÃ©fono debe ser un nÃºmero");
    return false;
  }
}