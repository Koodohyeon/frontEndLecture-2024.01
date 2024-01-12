// 메소드 method
// 사물을 속성:속성값 들로 객체화 , 사물을 동작시킨다(method),객체 안에서 사용되는 함수

let obj = {
    // 속성(attribute)
    name: '사과' ,
    price: 1000,
    
    // 메소드(method)
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`)  // 왜 꼭 this가 들어가야 하는가?
    }
}
console.log(obj.name, obj.price);
obj.print();        // 위 log랑 같은 의미