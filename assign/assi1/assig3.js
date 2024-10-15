const A = 12;
const B = 20;

let res;

if (A % 10 === 0 && B % 10 === 0) {
    res = true; 
} else if (A % 10 !== 0 && B % 10 !== 0) {
    res = false;  
} else if (A % 10 === 0 || B % 10 === 0) {
    res = true;  
}

console.log(res); 
