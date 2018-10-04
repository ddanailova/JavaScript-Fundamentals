function validityChecker([x1, y1, x2, y2]) {
    let firstpoint = {x: x1, y: y1};
    let secondpoint = {x: x2, y: y2};
    let center = {x: 0, y: 0};


    function checkInt(point1, point2) {
        let distance = Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y)**2);
        if (Number.isInteger(distance)) {
            console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is valid`);
        }else{
            console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is invalid`);
        }
    }

    checkInt(firstpoint, center);
    checkInt(secondpoint,center);
    checkInt(firstpoint, secondpoint);
}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);