function sumAll(arr) {

let x = Math.max(arr[0], arr[1]);
let y = Math.min(arr[0], arr[1]);
console.log(x);
console.log(y);
const n = Math.abs(x - y) + 1 ;
let sum = ((x+y) * n) / 2;
return sum;
}

sumAll([5, 10]);
