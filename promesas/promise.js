/* const exponenciaPromise = (value) =>{
    if(typeof value !== "number"){
        return Promise.reject('Error, ${value} no es un número')
    }

    return new Promise((resolve, reject) => {

    }
    )
} */


/* Una persona necesita saber atravez de una promesa si un numero es primo o no es primo

En caso de resolverse la promesa debera responder con un objeto {message: "Es primo", numero: <numero enviado>}
En caso de rechazar la promesa debera responder con un objeto {message: "No es primo", numero: <numero enviado>} */


// Numero primo (solo es divisible por sí mismo y 1)
const primeNum = (num) => {

    return new Promise((resolve, reject) => {

    // Si el número es divisible entre alguna de las iteraciones (i), iniciando en i = 2 no es primo
    for(let i = 2; i < num; i++ ){
        
        if(num % i !== 0){ // Si el residuo de numero / i (iniciando en 2) es diferente de 0, Entonces...
        return resolve({message: "Es primo", numero: num});
        } else {
            return reject({message: "No es primo", numero: num})
        }
    }
    });
};

// Recibiendo la promesa...
primeNum(2)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));