function solution(input) {
    let firstPoint = {x:input[0], y:input[1], z:input[2]};
    let secondPoint = {x:input[3], y:input[4], z:input[5]};

    let distance=Math.sqrt((firstPoint.x-secondPoint.x)**2 + (firstPoint.y-secondPoint.y)**2 + (firstPoint.z-secondPoint.z)**2);
    console.log(distance);
}

solution([3.5, 0, 1, 0, 2, -1]);