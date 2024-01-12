// 다중선택 - switch
let score = Math.ceil(Math.random() * 60) + 40; 
let grade = '';

switch(parseInt(score / 10)) {
    case 10:
    case 9:
        grade = 'A' ; break;            // break ; 가 작동하면 switch 문을 벗어남
    case 8:
        grade = 'B' ; break;
    case 7:
        grade = 'C' ; break;
    default: grade = 'F'
}
console.log(`점수: ${score}, 학점:${grade}`);