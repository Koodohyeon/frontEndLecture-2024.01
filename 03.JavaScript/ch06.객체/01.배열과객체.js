//  배열과 객체의 차이
// 1. 배열(Array)
//객체의 특수한 형태
let fruitArray = ['감', '사과', '밤'];
console.log(typeof fruitArray);

let fruitObject = {0:'감', 1:'사과', 2:'밤'}
console.log(fruitObject[0], fruitObject[1]);

// 2. 객체(Object)  - 자료구조형 객체 / 자료구조로서 객체는 파이썬의 딕셔너리, 자바의 맵과 유사함
// key -(와) value 쌍
let personArray = ['James', 27, '남자', '프로그래머', 175.3] ;
let personInfo = {name:'James', age:27, gender:'남자', job:'프로그래머', height:175.3} ;
console.log(personInfo);
let car = {manufacturer: '현대자동차', model:'casper', color:'카키색'} ; //key를 문자열로 써도 무방
console.log(car);

// 객체에 대한 접근
console.log(car['model']);    // 이러게 잘 안씀
console.log(personInfo.name);       // 대부분 이렇게 사용

let key = 'job';
console.log(personInfo[key]);       // key 값을 변수로 사용하는 경우
