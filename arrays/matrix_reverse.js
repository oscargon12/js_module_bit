
let matrix = [
    ["KTM", "Yamaha", "Apache", "Ducati"],
    ["Chevrolet", "Hyundai", "Volvo", "Mercedez", "Dodge"],
    ["Uknown", "Cinelli", "Campagnolo", "bianchi", "Skream" ],
    ["Maria", "Pedro", "Julian", "Angello", "Ryan"],
  ];
//se debe imprimir la matriz y los elementos de ella en reversa

console.log(`Accediendo a 2,1: ${matrix[2][1]}`);

// Siempre para recorrer un array al revés 👇🏻 
  for (let i = matrix.length - 1; i >= 0; i--){
      console.log(matrix[i]);
      
      for (let j = matrix[i].length - 1; j >= 0; j--){
        console.log(matrix[i][j]);
      }
  }
