document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", validarFormulario); 
  });

var validarFormulario = function(e){
    validarNombre(e);
    validarEmail(e);
    validarAsunto(e);
    validarMensaje(e);
}

function validarNombre(e){
    if (document.getElementById("nombre").value == 0){
        alert("Completa el campo nombre");
        e.preventDefault();
    }
}

function validarEmail(e){
    if (document.getElementById("usuario").value == 0){
        alert("Completa el campo email");
        //swal("ERROR", "Completa el campo email", "error");
        e.preventDefault();
    }
}

function validarAsunto(e){
    if (document.getElementById("asunto").value == 0){
        alert("Completa el campo asunto");
        e.preventDefault();
    }
}

function validarMensaje(e){
    if (document.getElementById("msg").value == 0){
        alert("Completa el campo mensaje");
        e.preventDefault();
    }
}


  
