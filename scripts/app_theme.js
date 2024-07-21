/*
  * Archivo para manejar el cambio de tema en la aplicación
*/


const outputText2 = document.querySelector('#textView'); // Área para mostrar la salida
const toggleTheme = document.querySelector('.header_theme-toggle'); // Botón que alterna el tema

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});