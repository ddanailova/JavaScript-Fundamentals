function solve(input) {
    let point1 = {x: input[0], y: input[1]};
    let point2 = {x: input[2], y: input[3]};
    let point3 = {x: input[4], y: input[5]};

    let pointDistance = (firstPoint, secondPoint) => Math.sqrt((firstPoint.x - secondPoint.x) ** 2 + (firstPoint.y - secondPoint.y) ** 2);

    let dist12 = {start: 1, end: 2, dist: pointDistance(point1, point2)};
    let dist23 = {start: 2, end: 3, dist: pointDistance(point2, point3)};
    let dist13 = {start: 1, end: 3, dist: pointDistance(point1, point3)};

    let maxDist = Math.max(dist12.dist, dist23.dist, dist13.dist);

    if (maxDist === dist13.dist) {
        console.log(`1->2->3: ${dist12.dist + dist23.dist}`);
    } else if (maxDist === dist23.dist) {
        console.log(`2->1->3: ${dist12.dist + dist13.dist}`);
    } else if (maxDist === dist12.dist) {
        console.log(`1->3->2: ${dist13.dist + dist23.dist}`);
    }
}

solve([0, 3, 1, 0, -1, 0]);