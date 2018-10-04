function rotate(arr) {
    let rotations = Number(arr.pop());
    rotations%=arr.length;
    for (let i = 0; i < rotations; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(' '));
}

rotate(['1', '2', '3', '4', '2']);
rotate(["Banana","Orange", "Coconut", "Apple","15"]);