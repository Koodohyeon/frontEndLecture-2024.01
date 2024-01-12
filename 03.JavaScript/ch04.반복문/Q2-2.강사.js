for (let i = 2; i <= 10000; i++) {
    let divSum = 0;
    for (let k = 1; k < i; k++) {       // 1에서부터 자기자신 전까지
        if (i % k == 0)                 // 약수의 합 구하기
            divSum += k;
    }
    if ( i == divSum)       // 자기 자신을 제외한 약수의 합과 자기자신이 같으면
        console.log(i);
}


for (let a = 1; a <= 1000; a++) {
    for (let b = a + 1; b <= 1000; b++) {
        c = 1000 - a -b;
        if (a*a + b*b == c*c) {
            console.log(a, b, c);
            process.exit(0) ;
        }

    }
}