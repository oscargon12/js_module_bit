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
            <h3>Carnet generado</h3>
            <hr class="dropdown-divider">
            <h4>Nombre: ${name}</h4>
            <h4>Apellido: ${lastName}</h4>
            <h4>Edad: ${age}</h4>
            <h4>Tipo de sangre: ${blood}</h4>
            <h4>RH: ${rh}</h4>
            <h4>Teléfono: ${phone}</h4>
        </div>`

        setData();
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

// == Creando las tarjetas (test) ==
const setData = () => {

    const cardArray = [];
    let userInfo = `
            <div class="col-12 col-md-4">
                <div class="card text-white bg-dark mb-3">
                    <div class="card-header">${name} ${lastName}</div>
                    <div class="card-body">
                        <h5 class="card-title">${age} años</h5>
                        <p class="card-text">Sangre: ${blood} ${rh}</p>
                        <p class="card-text">Telefono: ${phone}</p>
                    </div>
                </div>
            </div>`

        cardArray.push(userInfo);
        console.log(userInfo);
}

