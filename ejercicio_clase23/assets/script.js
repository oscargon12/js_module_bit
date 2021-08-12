/* Un bar de la ciudad necesita entregarle a la persona un carnet que certifique que la persona pago el cover para
entrar al bar, todo esto se hará a través de una aplicacion web que funcionará de la siguiente manera:


El dueño del bar deberá ingresar la siguiente información en un formulario html

Nombres, apellidos, edad, tipo de sangre, RH, telefono

y el javaScript debera capturar esta informacion y mostrarla en pantalla con un mensaje que diga, carnet generado


Avanzado(el estudiante debera guardar en tarjetas la personas que han ingresado al bar sin borrarlas) */

// ======== Inicio ejercicio =========

// Esta función valida que ambos campos estén llenos
function isFull(name, lastName, age, blood, rh, phone) {
    if (name === "" || lastName === "" || age === "" || blood === "" || rh === "" || phone === "") {
        return false;
    } else {
        return true;
    }
}


// Capturando los datos del form
const getData = () => {

    // Guardando los datos en variables
    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let age = document.querySelector('#age').value;
    let blood = document.querySelector('#blood').value;
    let rh = document.querySelector('#rh').value;
    let phone = document.querySelector('#phone').value;

    // Validando la primera función (Que tds los campos estén llenos)
    let verify = isFull(name, lastName, age, blood, rh, phone);
    if (verify === true) {

        // Si tds los campos están llenos imprima esto
        document.querySelector('#resultado').innerHTML = `
        <div class="alert alert-success" role="alert">
            <h4>Carnet generado</h4>
            <hr class="dropdown-divider">
            <h5>Nombre: ${name}</h5>
            <h5>Apellido: ${lastName}</h5>
            <h5>Edad: ${age}</h5>
            <h5>Tipo de sangre: ${blood}</h5>
            <h5>RH: ${rh}</h5>
            <h5>Teléfono: ${phone}</h5>
        </div>`

        // == Creando las tarjetas (test) ==
        document.querySelector('#cardContainer').innerHTML += `
        <div class="col-12 col-md-4">
            <div class="card text-white bg-dark mb-3">
                <div class="card-header">${name} ${lastName}</div>
                <div class="card-body">
                    <h5 class="card-title">${age} años</h5>
                    <p class="card-text">Sangre: ${blood} ${rh}</p>
                    <p class="card-text">Telefono: ${phone}</p>
                </div>
            </div>
        </div>
        `

    }
    else { // Si no, imprima la alerta
        document.querySelector('#resultado').innerHTML = `
        <div class="alert alert-danger" role="alert">
            <h3>Atención</h3>
            <hr class="dropdown-divider">
            <h4>Debes ingresar todos los datos</h4>
        </div>`
    }
}



