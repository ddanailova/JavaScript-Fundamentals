function solve(n,k) {
    let result= [1];
    for (let i = 1; i < n ; i++) {
        let sum = result.slice(Math.max(0,i-k),i).reduce((a,b)=>a+b);
        result.push(sum);
    }
    console.log(result.join(" "));
}

solve(6, 3);
solve(8, 2);
