// Call Back 함수
function callFiveTimes(callback) {
    for (let i =0; i < 5; i++)
        callback();
}

const cb = function() {
    console.log('함수가 호출되었습니다.');
}

callFiveTimes(cb);

// 함수를 호출할때 익명함수를 만들어 주는것이 일반적
callFiveTimes(function() {
    console.log('함수가 호출되었습니다.');
});

// 익명함수로 화살표 함수를 사용하는것이 더 보편적이다.
callFiveTimes(() => {                   // 이게 가장 많이 쓰임 =>
    console.log('함수가 호출되었습니다.');
});