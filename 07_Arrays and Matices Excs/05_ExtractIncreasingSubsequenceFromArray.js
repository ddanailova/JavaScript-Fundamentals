function extractSequance(arr) {
   let result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= result[result.length-1]){
            continue;
        }
        result.push(arr[i]);
    }

    console.log(result.join(' '));
}

extractSequance([1]);
extractSequance([1,3,8,4,10,12,3,2,24]);
extractSequance([1,2,3,4]);
extractSequance([20,3,2,15,6,1]);

function extractSubsequence(arr) {
    arr = arr.map(Number);

    let result = arr.filter((x, i) => x >= Math.max(...arr.slice(0, i + 1))).join('\n');

    console.log(result);
}

extractSubsequence(['20', '3', '2', '15', '6', '1']);

function getMaxInSeq(arr) {
    arr.map(e=>Number(e));
    console.log(Math.max(...arr.slice(0, arr.length-1)))
}

getMaxInSeq(['3', '2', '15', '6', '1'])