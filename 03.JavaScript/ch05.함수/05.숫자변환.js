// 숫자 변환 내장 (built-in) 함수

const a = '123.65', b = '0xff', c = '23';  // 0xff는 16진수( 0x가 16진수라는 뜻 두자리기 때문에)

console.log(Number(a), Number(b), Number(c));

// 정수(Integer), 실수(Floating point)
console.log(parseInt(a), parseFloat(a));
console.log(parseInt(b), parseFloat(b), parseFloat(c)); // 255, 0, 23 왜 0이 나왔을까 255인데?

console.log(parseInt('1401호'), Number('1401호'));      // 1401, NaN
console.log(parseInt('1,400원'), parseInt(`503동 1401호`));    //   1  ,  503


