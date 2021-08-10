// Esta función valida que ambos campos estén llenos
function isFull(num1, num2){
    if (num1 === "" || num2 === ""){
        return false;
    } else{
        return true;
    }
}

const sumar = () =>{
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    let num1Convert = parseInt(num1);
    let num2Convert = parseInt(num2);

    let verify = isFull(num1, num2);

    if (verify === true){ // Valida la primera función (Que ambos campos estén llenos)
        
        let resultado = num1Convert + num2Convert
        document.querySelector('#resultado').innerHTML = `<h4>Resultado</h4> <h3>${resultado}</h3>`
    } else {
        alert('Por favor llena todos los campos')
    }
}

const restar = () =>{
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    let num1Convert = parseInt(num1);
    let num2Convert = parseInt(num2);

    let verify = isFull(num1, num2); // Valida la primera función (Que ambos campos estén llenos)

    if (verify === true){
        let resultado = num1Convert - num2Convert
        document.querySelector('#resultado').innerHTML = `<h4>Resultado</h4> <h3>${resultado}</h3>`
    } else {
        alert('Por favor llena todos los campos')
    }
}

const multi = () => {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    let num1Convert = parseInt(num1);
    let num2Convert = parseInt(num2);

    let verify = isFull(num1, num2);

    if (verify === true){
        let resultado = num1Convert * num2Convert;
        document.querySelector('#resultado').innerHTML = ` <h4>Resultado</h4> <h3>${resultado}</h3>`
    } else{
        alert('Para multiplicar, completa todos los campos')
    }
}

const divi = () =>{
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    let num1Convert = parseInt(num1);
    let num2Convert = parseInt(num2);

    let verify = isFull(num1, num2);

    if (num2Convert === 0){
        alert('No se puede dividir entre 0')
    } else if(verify === true){
        let resultado = num1Convert / num2Convert;
        document.querySelector('#resultado').innerHTML = `<h4>Resultado</h4> <h3>${resultado}</h3>`
    } else {
        alert('Para dividir, completa todos los campos')
    }
}

const par = () =>{
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    let num1Convert = parseInt(num1);
    let num2Convert = parseInt(num2);

    let verify = isFull(num1, num2);

    if (num1Convert % 2 === 0){
        document.querySelector('#resultado').innerHTML = `<h4>Número 1</h4> <h3>${num1Convert} Es par</h3>`
    } else {
        document.querySelector('#resultado').innerHTML = `<h4>Número 1</h4> <h3>${num1Convert} Es Impar</h3>`
    }
}