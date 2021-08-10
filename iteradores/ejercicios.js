let cuadrado = ''; // Declaro la variable cuadrado, vacía
let long = 8; // declaro la cantidad de * (medida del contorno)

for (let i = 0; i <= long; i++){ // Primer for (Imprime las filas, hace el salto de linea)
// Imprime ******** arriba y abajo, porque hasta que no se acaba el segundo ciclo
// i sigue valiendo 0

    for (let j = 0; j <= long; j++){ // Segundo for (Imprime las columnas)

        // los i imprimen ****** y los j imprimen *    *
        if (i === 0 || i === long || j === 0 || j === long){
            cuadrado = cuadrado + '*'
        } else {
            cuadrado += ' ' // Dejo el string con espacio, para que se sumen los espacios
        }
    }

    cuadrado += '\n'; // Haciendo el salto de lína por cada i (fila)
}

console.log(cuadrado);