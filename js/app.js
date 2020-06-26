// Instanciar ambas clases
const eventbrite = new Eventbrite();
const ui = new Interfaz();

// Listener al buscador
document.getElementById('buscarBtn').addEventListener('click', (e) => {
  e.preventDefault();
  
  // Leer el texto del input buscar
  const textoBuscador = document.getElementById('evento').value;

  // leer el select
  const categorias = document.getElementById('listado-categorias');
  const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

  console.log(textoBuscador)
  console.log(categoriaSeleccionada)

  // revisar que haya algo escrito en el buscador
  if(textoBuscador !== ''){
    console.log('Buscando...')
  }else{
    // mostrar mensaje para que imprima algo
    ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
  }
})