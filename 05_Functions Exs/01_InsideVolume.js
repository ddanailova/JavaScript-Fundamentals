
function checkPoints(arr) {
    for (let i = 0; i < arr.length; i += 3) {
        console.log(insideOrOut(arr[i], arr[i + 1], arr[i + 2]));
    }
    //check if one point is inside 2D
    function insideOrOut(x, y, z) {
        let isInside = (point, borderBottom, borderTop) => (point >= borderBottom && point <= borderTop);
    //chcek if one point is inside 3D
        if (isInside(x, 10, 50) && isInside(y, 20, 80) && isInside(z, 15, 50)) {
            return "inside";
        } else {
            return "outside";
        }
    }
}
checkPoints([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]);