/* for (let i = 0; i <= 100; i++){
    console.log(`Numero ${i}`);
}

let pato = 0;
while (pato <= 100){
    console.log(`Numero ${pato}`);
    pato+=2;
} */

let num = "";
let num2 = "";
for (let i = 0; i < 99; i++){
    if(i < 10){
        num += `0${i}, `
    }  else {
        num += `${i}, `
    }

    num2 = i + 1;

}
console.log(`${num}${num2}`);
