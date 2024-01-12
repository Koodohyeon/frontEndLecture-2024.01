// for - 반복문
// 1에서 1000까지 합 구하기
let sum = 0;
for(let i = 1; i <= 1000; i+= 2) {
    sum += i;
} 
console.log(`1에서 1000까지 홀수 합은 ${sum}`);

let ssum = 0;
for(let i = 0; i <= 1000; i+= 2) {
    ssum += i;
} 
console.log(`1에서 1000까지 짝수 합은 ${ssum}`) ;

let product = 1;
for (let i = 1; i <= 10; i++)
    product *= i;
console.log(`1에서 10까지의 곱은 ${product}`)

// array의 요소 출력
// element1, element2, ...
let fruits = ['사과', '감', '귤', '배'];
let fruitStr = '';
for (let fruit of fruits) {
    fruitStr += fruit + ', ';
}
console.log(fruitStr);
