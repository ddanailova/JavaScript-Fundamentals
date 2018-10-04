function solve(arr) {
    let size = arr[0];
    console.log(arr.slice(1, size+1));
    console.log(arr.slice(arr.length-size));
}

solve([2,
    7, 8, 9]);
solve([3,
6, 7, 8, 9]);