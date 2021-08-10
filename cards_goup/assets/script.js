const leerDatos = () => {
    let numTarjetas = document.querySelector('#numCards').value;

    let resultado = varificador(numTarjetas);

    if (isNaN(resultado)) {
        alert (resultado);
    } else {
        generarTarjetas(resultado);
    }
    
}

const verificador = (numTarjetas) => {
    if(numTarjetas === ""){
        return 'Debes ingresar un numero';
    }

    return isNaN(numTarjetas) ? 'Esto no es un numero' : parseInt(numtarjetas);
}


const generarTarjetas = (num) => {
    const card = `<div class="card text-white bg-info m-3" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
      <h5 class="card-title">Info card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>`;

  let contenidoAlDiv = "";

  for(let i = 1; i <= num; i++) {
      contenidoAlDiv += card;
  }

  document.querySelector('#cardContainer').html += card
}