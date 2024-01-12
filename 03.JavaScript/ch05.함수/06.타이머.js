// 타이머 내장함수

setTimeout(function() {         // setTimeout은 x000을 주면 그 시간이 지나면 한번만 작동한다.
    console.log('3초경과');
}, 3000);

setInterval(function() {        // setInterval은 한번 끝내는게 아니라 , x000을 주면 그 시간마다 반복한다.
    console.log(new Date());
}, 1000);

setTimeout(() => {
    console.log('5초경과후 시계 정지');
    clearInterval(End);
}, 5000);