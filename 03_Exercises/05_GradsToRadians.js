function solution(grads) {
    let degrees = (grads * 0.90) % 360;
     let result = degrees >= 0
        ? degrees
        : 360 + degrees;
    console.log(result);
}

solution(100);