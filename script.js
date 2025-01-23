window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0)
})

const elemento = document.getElementById('miElemento');
const boton = document.getElementById('toggleButton');

boton.addEventListener('click', () => {
  elemento.classList.toggle('activo'); 
});
