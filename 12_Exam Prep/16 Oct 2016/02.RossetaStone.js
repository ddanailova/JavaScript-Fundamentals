function solution(inputArr) {
    let sizeDecoder = Number(inputArr[0]);
    let decoderMatix = [];
    let massageMatrix =[];

    let code = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 1; i <= sizeDecoder; i++) {
        decoderMatix.push(inputArr[i].split(" ").map(Number));
    }
    for (let i = sizeDecoder+1 ; i < inputArr.length; i++) {
        massageMatrix.push(inputArr[i].split(" ").map(Number));
    }


    for (let row = 0; row < massageMatrix.length; row+=sizeDecoder) {
        for (let col = 0; col < massageMatrix[0].length; col+=decoderMatix[0].length) {
            for (let innerRow = 0; innerRow < decoderMatix.length; innerRow++) {
                for (let innerCol = 0; innerCol < decoderMatix[0].length; innerCol++) {
                    if(row+innerRow<=massageMatrix.length-1 && col+innerCol<=massageMatrix[0].length-1){
                        massageMatrix[row+innerRow][col+innerCol]+=decoderMatix[innerRow][innerCol];
                    }
                }
            }
        }
    }

    let decodedMatrix = massageMatrix.map(r=> r.map(c => {return code[c%27]}).join("")).join("");
    console.log(decodedMatrix);

}

solution([
    '1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
])

solution([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]);

solution([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]);