class Interfaz{
  constructor(){
    // Inicializa la app al instanciar
    this.init();
    //Leer el resultado
    this.listado = document.getElementById('resultado-eventos');
  }

  // Método para cuando inicialice la app
  init(){
    //llamar a imprimirCategorias de la REST API
    this.imprimirCategorias();
  }

  // Imprimir categorias
  imprimirCategorias(){
    const listaCategorias = eventbrite.obtenerCategorias()
    .then(categorias => {
      const cats = categorias.categorias.categories;

      //seleccionar el select de categorias
      const selectCategoria = document.getElementById('listado-categorias');

      //recorremos el arreglo e imprimimos los <option>
      cats.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat.id;
        option.appendChild(document.createTextNode(cat.name_localized));
        selectCategoria.appendChild(option);
      })
    })
  }

  //metodo para imprimir mensajes: 2 parametros, mensaje y clases
  mostrarMensaje(mensaje, clases){
    const div = document.createElement('div');
    div.classList = clases;
    // agregar texto
    div.appendChild(document.createTextNode(mensaje));
    //buscar un padre
    const buscadorDiv = document.querySelector('#buscador');
    buscadorDiv.appendChild(div);
    // quitar el alert despues de 3 segundos
    setTimeout(() => {
      this.limpiarMensaje();
    }, 3000);
  }
  // desaparece el mensaje en caso de que exista
  limpiarMensaje(){
    const alert = document.querySelector('.alert');
    if(alert){
      alert.remove();
    }
  }

}