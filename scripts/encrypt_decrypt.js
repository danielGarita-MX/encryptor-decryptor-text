/*
  * Archivo con las funciones de encriptado y desencriptado
*/

const btnEncrypt = document.querySelector('#encrypt'); // Botón para encriptar
const btnDecrypt = document.querySelector('#decrypt'); // Botón para desencriptar
const btnCopy = document.querySelector('#copy'); // Botón para copiar la salida

const outputText = document.querySelector('#textView'); // Área para mostrar la salida

/* Expresión regular para validar que la entrada del usuario solo contenga números y letras mayúsculas y/0 minúsculas; Sin acentos ni carácteres especiales */
const verifyEntry = /^[a-zA-Z0-9]+(?:\s*[a-zA-Z0-9]+)*$/;

/*
  * Cambia los estilos de algúnos componentes cuando se realiza una operación
*/
function stylesForOperation() {
  const msgNoOutput = document.querySelector('#msg_no_output'); // Mensaje que indica "Ningún texto fue encontrado"

  /* Si el elemento ésta presente, se elimina; Caso contrario, no ocurre nada */
  msgNoOutput && msgNoOutput.remove()

  outputText.classList.add("focus-output"); // Destaque del área de salida y eliminación de la imagen de fondo sin alterar los estilos del componente

  btnCopy.style.display="list-item"; // Listado del botón de copiar
}

/* 
  * Función de encriptado 
*/
function encrypt(text){
  let result = "";

  /* Busqueda de los carácteres a encriptar a través de patrones con modificadores:
     g: Busca todas las coincidencias (no solo la primera).
     m: Busqueda multilinea. */
  result = text.replace(/e/gm,"enter")
               .replace(/i/gm,"imes")
               .replace(/a/gm,"ai")
               .replace(/o/gm,"ober")
               .replace(/u/gm,"ufat");

  return result;
}

/*
  * Función de desencriptado
*/
function Decrypt(input){
  let result = "";

  /* Busqueda de las subcadenas a desencriptar a través de patrones con modificadores:
     g: Busca todas las coincidencias (no solo la primera).
     m: Busqueda multilinea para saltos de linea */
  result = input.replace(/imes/gm,"i")
                .replace(/enter/gm,"e")
                .replace(/ai/gm,"a")
                .replace(/ober/gm,"o")
                .replace(/ufat/gm,"u");

  return result;
}

/* 
  * Función que modifica el árbol DOM, añadiendo texto a un elemento
*/
function replaceText(elemento, texto) {
  elemento.innerHTML = texto;
  return;
}

btnEncrypt.addEventListener("click", () => {
  const textInput = document.querySelector('#textRead').value.toLowerCase();; // Entrada del usuario transformada en letras minúsculas

  if(verifyEntry.test(textInput)){ // Validación de la entrada del usuario
    replaceText(outputText, encrypt(textInput)); // Salida generada con respecto a la entrada del usuario

    stylesForOperation();
  }else{
    /*
      TODO: Indicar que carácteres no cumplen la condición
    */
    alert("Hay carácteres no validos");
  }
});

btnDecrypt.addEventListener("click", () => {
  let inputText = document.querySelector('#textRead').value.toLowerCase(); // Entrada del usuario transformada en letras minúsculas

  if(verifyEntry.test(inputText)){ // Validación de la entrada del usuario
    replaceText(outputText, Decrypt(inputText)); // Salida generada con respecto a la entrada del usuario

    stylesForOperation();
  }else{
    /*
      TODO: Indicar que carácteres no cumplen la condición
    */
    alert("Hay carácteres no validos");
  }
});

/* 
  * Función que permite copiar el texto generado
*/
btnCopy.addEventListener("click", () => {
  let copyText = outputText.value;

  navigator.clipboard.writeText(copyText)
    .then(() => {
      /* Se indica mediante estilos, que se realizo la acción con éxito */
      btnCopy.classList.add("button-copy-success");
      btnCopy.textContent="Copiado";

      /* Despúes de 1.5s, el botón vuelve a su estado normal */
      setTimeout(() => {
        btnCopy.classList.remove("button-copy-success");
        btnCopy.textContent="Copiar";
      }, 1500)
    })
    .catch (() => {
      alert('Error al copiar');
    });
});
