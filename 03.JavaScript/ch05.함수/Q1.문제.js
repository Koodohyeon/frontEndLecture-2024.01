// 배열에 대한 함수 만들어보기
// 1. 배열을 인수로 받아서, 합을 반환하는 함수
let sampleArray = [43, 17, 25, 36, 98, 73];
function sumArray(arr) {
    let num = 0;
    for (let num2 of arr) {
         num += num2
}   
    return(num);
}

/* for (let i = 0; i < arr.length; i++) {
    num += arr[i];
    return num;
    
} */
console.log(sumArray(sampleArray));


// 2. 배열에서 최대값을 찾아서 반환해주는 함수
function maxArray(arr) {
    let max = 0 ;                        // let max =arr[0];
    for (let number of sampleArray ) {       
        if (number > max)
            max = number;
    }
    return(max)
}
console.log(maxArray(sampleArray));

// 평균
console.log(sumArray(sampleArray) / sampleArray.length);

// 3. 배열 원소의 제곱의 합
function sumOfSquare(arr) {
    let num = 0;
    for ( i = 0; i < arr.length; i++ ) {
        num += arr[i] *= arr[i]
    }
    return num;
}
console.log(sumOfSquare(sampleArray))

