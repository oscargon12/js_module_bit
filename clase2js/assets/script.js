console.log('Hi');

/* let textData = prompt('')
console.log(textData);

let desc = confirm('Estás de acuerdo');
console.log(desc); */

/* const captura = () =>{
    let contenido = document.querySelector('#someText');
    let contenidoValue = contenido.value;

    console.log(contenidoValue);
} */

const captura = () =>{
    let nombre = document.querySelector('#firstName');
    let nombreValue = nombre.value;
    let apellido = document.querySelector('#lastName');
    let apellidoValue = apellido.value;
    
    let avisito = document.querySelector('#avisito');
    avisito.innerText = `Hola ${nombreValue} ${apellidoValue}`

    mostrar(nombreValue, apellidoValue)
}

function mostrar(nombre, apellido){
    alert(`Hola ${nombre} ${apellido}`)
}