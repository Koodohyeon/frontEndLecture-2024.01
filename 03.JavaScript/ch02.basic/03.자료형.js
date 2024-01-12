// 자바스크립트의 자료형
// 1.Number
console.log(5 + 2, 5 - 2, 5 * 2, 5 / 2); // +. -, *, /
console.log(5 % 2);            // modulo, 나머지
console.log(2 ** 10);          // 2의 10제곱, 1024(1k)
console.log(1.3e-8);            // 1.3 x 10 ** -8

//-------------------------------------------------------------------------------------------

// 2. 문자열(string)
console.log('He said "I love you."'); //console.log("He said \"I love you.\""); // escaping
console.log(" I'll be back.");
console.log('Back slash(\\) 기호를 사용할 때에는 \\ 두개를 사용하면 됩니다.') ;

let hello = '안녕하세요?' ;
console.log(hello[2], hello[5]);  // 숫자는 0부터 시작이라  (0 = 안) 2 = 하, 5 = ?

// template literal
let a = 2, b = 3;
console.log(a, '더하기', b, '은', a + b, '입니다');
console.log(`${a} 더하기 ${b} 은 ${a+b} 입니다.`)
console.log(`올해는 ${new Date().getFullYear()}년 입니다.`)

/* 
    full year
        fullYear : camel case  --> Getter method --> getFullYear
        full_year : snake case
*/

//-------------------------------------------------------------------------------------------

// 3. 논리형(voolean) 참 , 거짓
console.log(typeof(true), typeof(false)) ;
console.log( 2 == 2.0, 5>=4, !('가나다' > '마바사')) ; // !은 not 이다. / 관계 연산자

let x = 10;
console.log(x > 8 || x < -3);  // 논리 연산자 ||은 (or의 의미) , x > 8 또는 x < -3
console.log(x > 8 && x < 12);  // && (and의 의미), 8 < x < 12 
console.log(true > 10) ;