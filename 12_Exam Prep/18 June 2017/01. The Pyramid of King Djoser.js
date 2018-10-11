'use strict';
function solution(baseSize, incrHeight) {
    let totalSteps = Math.ceil(baseSize / 2);
    let stoneCount = 0;
    let marbleCount = 0;
    let lapisCount = 0;
    let goldCount = 4 - 3 * (baseSize % 2);
    for (let i = 1; i < totalSteps; i++) {
        stoneCount += (baseSize - 2) ** 2;
        if (i % 5 === 0) {
            lapisCount += baseSize * 2 + (baseSize - 2) * 2;
        }else{
            marbleCount += baseSize * 2 + (baseSize - 2) * 2;
        }
        baseSize -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stoneCount*incrHeight)}`);
    console.log(`Marble required: ${Math.ceil(marbleCount*incrHeight)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisCount*incrHeight)}`);
    console.log(`Gold required: ${Math.ceil(goldCount*incrHeight)}`);
    console.log(`Final pyramid height: ${Math.floor(totalSteps * incrHeight)}`);
}

solution(11, 1);
solution(11, 0.75);
solution(12, 1);
solution(23, 0.5);