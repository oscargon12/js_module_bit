/* 1. De la siguiente base de datos el estudiante debera devolver los elemntos por consola
     que cumplan con las siguientes caracteristicas

        1. La Moto que posee el mayor ciliondraje
        2. la moto con el menor cilindraje
        2. La moto mas cara
        3. la moto mas barata
        4. la moto con mayor disponibilidad

   2. (Avanzado) un elemnto dentro del codigo que agregue a la lista una nueva moto con los
      mismas llaves, si el objeto nuevo lleva una llave adicional, este no debe permitirle ingresar 
      el objeto dentro del array    

*/

let dataBase = {

    message: "Base de datos vehiculos",
    data: [
        {
            marca: "Apcahe 310RR",
            modelo: "2022",
            cilindraje: "312",
            precio: "22000000",
            disponibles: "8"
        },
        {
            marca: "YZR-F R6",
            modelo: "2021",
            cilindraje: "598",
            precio: "52568000",
            disponibles: "4"
        },
        {
            marca: "KTM DUKE 390 NG",
            modelo: "2020",
            cilindraje: "389",
            precio: "21000000",
            disponibles: "14"
        },
        {
            marca: "YZR-F R1M",
            modelo: "2017",
            cilindraje: "998",
            precio: "64000000",
            disponibles: "3"
        },
    ]
}

/* let test = dataBase.data[2].precio;
console.log(test); */

let dataArr = dataBase.data; // Creo una variable que apunte al array de motos dentro del objeto 'dataBase' 
// console.log(dataArr.length);

const ccHigh = () => {

    let motoArr = []; // Genero un arreglo de cilindrajes vacío
    for (let i = 0; i <= dataArr.length - 1; i++) {

        let bikesDat = dataBase.data[i].cilindraje; // Creo una variable que capture unicamente los datos (cilindrajes) de las motos dentro de los objetos moto

        motoArr.push(bikesDat); // Le agrego datos (cilindrajes) al array vacio, con los index de (dataBase.data[i].cilindraje)
    }
    // console.log(motoArr);

    //Función para ordenar de menor a mayor
    motoArr.sort((a, b) => a - b);

    console.log(motoArr);

    let highData = motoArr[motoArr.length - 1] // Variable que capture el dato más alto
    console.log(highData); // Imprimo el cilindraje más alto

    // Comparando el cilindraje más alto con los valores del array
    for (let j = 0; j <= dataArr.length - 1; j++) {

        if (dataBase.data[j].cilindraje === highData) { // Este for recorre el arreglo y compara cilindraje más alto
            console.log('La moto con el cilindraje más alto es ' + dataBase.data[j].marca + ' con ' + dataBase.data[j].cilindraje + '\n')
        }
    }
}

ccHigh();

// === Menor cilindraje ===
const ccLow = () => {

    let motoArr = [];
    for (let i = 0; i <= dataArr.length - 1; i++) {
        let bikesDat = dataBase.data[i].cilindraje;
        motoArr.push(bikesDat);
    }

    //Función para ordenar de menor a mayor
    motoArr.sort((a, b) => a - b);
    let lowData = motoArr[0]
    console.log(lowData)
    for (let j = 0; j <= dataArr.length - 1; j++) {
        if (dataBase.data[j].cilindraje === lowData) {
            console.log('La moto con el cilindraje más bajo es ' + dataBase.data[j].marca + ' con ' + dataBase.data[j].cilindraje + '\n')
        }
    }
}

ccLow();

// === Precio ===
const priceHigh = () => {

    let motoArr = [];
    for (let i = 0; i <= dataArr.length - 1; i++) {
        let bikesDat = dataBase.data[i].precio;
        motoArr.push(bikesDat);
    }

    //Función para ordenar de menor a mayor
    motoArr.sort((a, b) => a - b);
    let highData = motoArr[motoArr.length - 1]
    for (let j = 0; j <= dataArr.length - 1; j++) {
        if (dataBase.data[j].precio === highData) {
            console.log('La moto con el precio más alto es ' + dataBase.data[j].marca + ' con $' + dataBase.data[j].precio + '\n')
        }
    }
}

priceHigh();


// === Menor precio ===
const priceLow = () => {

    let motoArr = [];
    for (let i = 0; i <= dataArr.length - 1; i++) {
        let bikesDat = dataBase.data[i].precio;
        motoArr.push(bikesDat);
    }

    //Función para ordenar de menor a mayor
    motoArr.sort((a, b) => a - b);
    let lowData = motoArr[0]
    console.log(lowData)
    for (let j = 0; j <= dataArr.length - 1; j++) {
        if (dataBase.data[j].precio === lowData) {
            console.log('La moto más barata es ' + dataBase.data[j].marca + ' con $ ' + dataBase.data[j].precio + '\n')
        }
    }
}

priceLow();


// === disponibilidad ===
const availability = () => {

    let motoArr = [];
    for (let i = 0; i <= dataArr.length - 1; i++) {
        let bikesDat = dataBase.data[i].disponibles;
        motoArr.push(bikesDat);
    }

    //Función para ordenar de menor a mayor
    motoArr.sort((a, b) => a - b);
    let highData = motoArr[motoArr.length - 1]
    for (let j = 0; j <= dataArr.length - 1; j++) {
        if (dataBase.data[j].disponibles === highData) {
            console.log('La moto con más disponibilidad es ' + dataBase.data[j].marca + ' con ' + dataBase.data[j].disponibles + '\n')
        }
    }
}

availability();


/* 2.(Avanzado) un elemnto dentro del codigo que agregue a la lista una nueva moto con los
mismas llaves, si el objeto nuevo lleva una llave adicional, este no debe permitirle ingresar
el objeto dentro del array */

/*
console.log('Avanzado')
console.log(Object.keys(dataArr[0]));

dataArr.push({
    marca: "TEST",
    modelo: "2022",
    cilindraje: "500",
    precio: "5000000",
    disponibles: "1"
}) */