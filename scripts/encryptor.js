/* Botones de acción */
const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const btnCopy = document.querySelector('#copy');

/* Área para mostrar el texto */
const outputText = document.querySelector('#textView');

/* Expresión regular para validar el texto solo se encuentre
   en minúsculas y con a lo sumo 1 espacio entre palabra.
   Además de no incluir carácteres especiales y no ser
   una cadena vacia. */
const verifyEntry = /^[a-z]+(?:\s[a-z]+)*$/;

/* Diccionario de datos para encriptar el texto */
const replaceChar = {
  "a" : "ai",
  "e" : "enter",
  "i" : "imes",
  "o" : "ober",
  "u" : "ufat"
};

/* Validación y encriptación de la entrada */
btnEncrypt.addEventListener("click", () => {
  let encryptText = document.querySelector('#textRead').value;

  if(verifyEntry.test(encryptText)){ /* Si la cadena cumple, procedemos a operar */
    replaceText(outputText, encrypt(encryptText));
  }else{
    /* Si la cadena no cumple */
    alert("Introduce una cadena valida");
  }
});

/* Encriptación de la cadena de texto */
function encrypt(input){
  let result = "";
  let singleWord = input.split(' ');

  /* Recorrido de la cadena y busqueda de ocurrencias
     con el diccionario de datos. */
  for(let i in singleWord){
    alert(singleWord[i]);
    result = result + ' ' + singleWord[i];
  }
  
  

  return result;
}

// Modifica el árbol DOM, añadiendo texto a un elemento
function replaceText(elemento, texto) {
  elemento.innerHTML = texto;
  return; // La función no retorna nada, pero es una buena práctica
}
