class Eventbrite {
  constructor(){
    this.token_auth = 'JDRDQDIL46UTEDABRCGB';
    this.ordenar = 'date';
  }

  //Obtiene las categorias en init()
  async obtenerCategorias(){
    //Consultar las categotrias a la REST API de event brite
    const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`)

    // Esperar la respuesta de las categorias y devolver un json
    const categorias = await respuestaCategorias.json();

    //devolvemos el resultado
    return{
      categorias
    }
  }

}