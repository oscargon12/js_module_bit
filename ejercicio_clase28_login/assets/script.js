console.log('Traer a Morty');


// Primera función: recibe el API, con un for defino hasta cuentos muestra, retorna data del api
const showCards = () =>{
  
  // Traigo el valor del input como la variable numChar
  let numchar = parseInt(document.querySelector('#charNumber').value)
  console.log(`Se muestran ${numchar} personajes`);

  document.querySelector('#cardContainer').innerHTML = '' // resetea las tarjetaspara que no se sumen


  for(let i = 1; i <= numchar; i++){
      let url = `https://rickandmortyapi.com/api/character/${i}`;
  
      // Fetch
      fetch(url)
          .then((res) => res.json()) // Recibe un json y retorna 
          .then((data) => print(data)) // Recibe la data de la petición
          .catch((err) => console.log(err));
  }
}



const print = (data) => {
  // let card = '';

    let card = `
    <div class="col-12 col-sm-6 col-md-4">
        <div class="card m-1 p-0">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <h6 class="card-title">ID: ${data.id}</h6>
              <p class="card-text"><b>Especie: </b>${data.species}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    `;

  document.querySelector('#cardContainer').innerHTML += card
}




 // == Ocultando tarjetas ==
 const hideCards = () => {
   document.querySelector('#cardContainer').innerHTML = ``
 }

// == Mostrando uno solo ==

const showOne = () => {

  // Traigo el valor del input como la variable numChar
  let charId = parseInt(document.querySelector('#charId').value);
  console.log(charId);

  document.querySelector('#oneContainer').innerHTML = ''

  let url = `https://rickandmortyapi.com/api/character/${charId}`;
    
        // Fetch
        fetch(url)
            .then((res) => res.json()) // Recibe un json y retorna un valor que recibe el siguiente .then
            .then((data) => print(data)) // Recibe la data de la petición
            .catch((err) => console.log(err));

            if(charId === 0){
              console.log('No hay nada que mostrar');
      
              card = `
              <div class="alert alert-danger" role="alert">
                  No hay nada que mostrar
              </div>
              `;
            document.querySelector('#oneContainer').innerHTML = card
          }
          
          const print = (data) => {


        console.log(data);
        card = `
        <div class="col-12">
            <div class="card m-2 p-0">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  <h6 class="card-title">ID: ${data.id}</h6>
                  <p class="card-text"><b>Especie: </b>${data.species}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        `;
      
      
    
      document.querySelector('#oneContainer').innerHTML += card
    }

}

 // == Ocultando tarjetas ==
 const hideOne = () => {
  document.querySelector('#oneContainer').innerHTML = ``
}