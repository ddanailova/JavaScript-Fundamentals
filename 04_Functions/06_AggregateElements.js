function solution(input) {

    let sum = (a, b) => a + b;
    let sumInver =(a, b)=> a+1/b;
    aggregate(input, 0, sum);
    aggregate(input, 0, sumInver);
    aggregate(input, "", sum);
    function aggregate(arr, initialValue, func) {
        for (let i = 0; i < arr.length; i++) {
            initialValue = func(initialValue, arr[i]);
        }
        console.log(initialValue);
    }
}

solution([10, 20, 30]);