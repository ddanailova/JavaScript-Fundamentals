function solve(arr) {
    let result=[];
 arr.map(n=>n<0?result.unshift(n):result.push(n));
 return result;
}

console.log(solve([3, -2, 0, -1]));;