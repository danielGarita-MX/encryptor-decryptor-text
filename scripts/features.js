/* Botones de acción */
const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const btnCopy = document.querySelector('#copy');

/* Texto que acompaña al recuadro de salida */
const messageDisplay = document.querySelector('#display');

/* Área para mostrar el texto */
const outputText = document.querySelector('#textView');

/* Expresión regular para validar el texto solo se encuentre
   en minúsculas y con a lo sumo 1 espacio entre palabra.
   Además de no incluir carácteres especiales y no ser
   una cadena vacia. */
const verifyEntry = /^[a-z]+(?:\s[a-z]+)*$/;

/* Validación y encriptación de la entrada */
btnEncrypt.addEventListener("click", () => {
  let encryptText = document.querySelector('#textRead').value;

  if(verifyEntry.test(encryptText)){ /* Si la cadena cumple, procedemos a operar */
    replaceText(outputText, encrypt(encryptText));
    messageDisplay.style.opacity='0';
    outputText.style.background='linear-gradient(#3a506b 80%, #1c2541)';
    outputText.style.border='0.5px solid red';
    btnCopy.style.display="list-item";
  }else{
    /* Si la cadena no cumple */
    alert("Introduce una cadena valida");
  }
});

/* Función de encriptación de la cadena de texto */
function encrypt(input){
  let result = "";

  /* Busqueda de los carácteres a encriptar a través de patrones con modificadores:
     g: Busca todas las coincidencias (no solo la primera).
     m: Busqueda multilinea para saltos de linea */
  result = input.replace(/e/gm,"enter")
                .replace(/i/gm,"imes")
                .replace(/a/gm,"ai")
                .replace(/o/gm,"ober")
                .replace(/u/gm,"ufat");

  return result;
}

/* Validación y desencriptación de la entrada */
btnDecrypt.addEventListener("click", () => {
  let DecryptText = document.querySelector('#textRead').value;

  if(verifyEntry.test(DecryptText)){ /* Si la cadena cumple, procedemos a operar */
    replaceText(outputText, Decrypt(DecryptText));
    messageDisplay.style.opacity='0';
    outputText.style.background='linear-gradient(#3a506b 80%, #1c2541)';
    outputText.style.border='0.5px solid red';
    btnCopy.style.display="list-item";
  }else{
    /* Si la cadena no cumple */
    alert("Introduce una cadena valida");
  }
});

/* Función de desencriptación de la cadena de texto */
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

/* Función que permite copiar el texto generado */
btnCopy.addEventListener("click", () => {
  let copyText = outputText.value;

  navigator.clipboard.writeText(copyText)
    .then(() => {
      alert('Contenido copiado al portapapeles');
    },() => {
      alert('Error al copiar');
  });
});

// Modifica el árbol DOM, añadiendo texto a un elemento
function replaceText(elemento, texto) {
  elemento.innerHTML = texto;
  return;
}
