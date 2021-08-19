let user = 'rick_sanchez@wubba.com';
let pass = 'dubdub01';

function isFull(user, pass){
    if (user === "" || pass === ""){
        return false;
    } else{
        return true;
    }
}

const validateUser = () => {
    let inputUser = document.querySelector('#inputEmail').value;
    let inputPass = document.querySelector('#inputPassword').value;

    let verify = isFull(inputUser, inputPass); // defino la función como variable
    
    let cardContent = ``;

    // If padre valida que tds los campos estén llenos
    if (verify === true){ // Valida la primera función (Que ambos campos estén llenos)
        
        console.log(inputUser);

        // If hijo valida las credenciales
        if( inputUser === user && inputPass === pass ){
            console.log('Si es el usuario');
            window.location.href = 'cards.html'
        } else {
            document.querySelector('#statusMessage').innerHTML = `
            <div class="alert alert-danger mt-4" role="alert">
                Usuario o contraseña no son correctos
            </div>
            `;
        }

    } else {
        document.querySelector('#statusMessage').innerHTML = `
        <div class="alert alert-warning border mt-4" role="alert">
            Debes llenar todos los campos
        </div>
        `;
    }

    
}