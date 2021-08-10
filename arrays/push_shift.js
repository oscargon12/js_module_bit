/* let hamburguesa = ['Pan'];
hamburguesa.push('carne');
console.log(hamburguesa); */

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(nums);

let pares = []
let imPares = []

for (let i = 0; i <= nums.length; i++){
    if (nums[i] % 2 === 0){
        pares.push(nums[i])
    } else {
        imPares.push(nums[i])
    }
}

console.log(`Impares: ${imPares}`);
console.log(`Pares: ${pares}`);