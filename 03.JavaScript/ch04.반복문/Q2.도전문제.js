// 1. 완전수 (Perfect number)
// 자기 자신을 제외한 약수의 합과 자기 자신이 같은 수. Ex) 6, 24

let result = [];
let sum = 0;
for (let i=3; i<10000; i++){
    for (let k = 1; k < i; k++){
        if(i % k == 0){
            if (i==k)
                break;
            sum+=k;
        }
    }
    if (sum == i)
        result.push(sum);
    sum = 0;
}
console.log(result);


// 2. a+b+c = 1000 을 만족하는 피타고라스 수 (단, a<b<c)
let answer =[];
for(let a=1; a<1000; a++){
    for(let b=1; b<1000; b++){
        for(let c=1; c<1000; c++){
            re=a+b+c;
            if (re == 1000){
                if(a*a+b*b==c*c&&a<b){
                    answer.push(a);
                    answer.push(b);
                    answer.push(c);
                }
            }
        }
    }
}
console.log(answer);


let answer2 =[];
for(let a=1; a<1000; a++){
    for(let b=1; b<1000; b++){
let c = 1000 - (a + b)
            re=a+b+c;
            if (re == 1000){
                if(a*a+b*b==c*c&&a<b){
                    answer2.push(a);
                    answer2.push(b);
                    answer2.push(c);
                }
            }
        }
    }
console.log(answer2);