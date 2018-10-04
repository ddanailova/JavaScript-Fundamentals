function calc(arr) {
    for (let num of arr) {
        let result = Math.log2(num);
        console.log(result);
    }
}

calc([5, 10 , 15, 21]);