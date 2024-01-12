let sampleArray = [24, 67, 45, 97, 43];
/* function sumArray(arr) {
    let num1 = 0;
    let num2 = 0;
    for (let num3 of arr) {
        num1 += num3 
    }

    for ( i = 0; i < arr.length; i++ ) {
        num2 += arr[i] *= arr[i]
    }
    
    return (num1**2) - (num2)
}   
console.log(`두 값의 차이는 ${sumArray(sampleArray)}입니다.`); */

function sumB(ya) {
    let num = 0;
    for(let i = 0; i < ya.length; i++) {   // i는 0이다. / i가 ya.length보다 크기 전까지 반복하겠다. / 출력한 다음 1씩 증가
        num += ya[i];
    }
    return num**2 ;
}
console.log(`합의 제곱은 ${sumB(sampleArray)} 입니다.`)

function sumC(ya2) {
    let num2 = 0;
    for(let i = 0; i < ya2.length; i++) {
        num2 += ya2[i] **2;
    }
    return num2;
}
console.log(`제곱의 합은 ${sumC(sampleArray)} 입니다.`)

console.log("합의 제곱 - 제곱의 합은" , sumB(sampleArray) - sumC(sampleArray) , "입니다." )






