function solution(inputArr) {
    let result =[];
    for (let i = 0; i < inputArr.length; i++) {
        let currentRow = JSON.parse(inputArr[i])
            .map(Number)
            .sort((a,b) => b-a);
        if(!result.find(array =>JSON.stringify(array)=== JSON.stringify(currentRow))){
            result.push(currentRow)
        }
    }
    result.sort((a,b)=> a.length-b.length).forEach(arr=>console.log(`[${arr.join(', ')}]`))
}


solution([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]',
]);