function solution(comandsArr) {
   let subscribtionMap = new Map();

    for (let comand of comandsArr) {
        let [firstName, secondName] =comand.split("-");
        if (!secondName){
            if(!subscribtionMap.has(firstName)){
                subscribtionMap.set(firstName, [0]);
            }
        }else {
            if(subscribtionMap.has(firstName) && subscribtionMap.has(secondName)){
              if(!subscribtionMap.get(secondName).includes(firstName) && firstName!== secondName){
                    subscribtionMap.get(secondName).push(firstName);
                    subscribtionMap.get(firstName)[0]++;
              }
            }
        }
    }

    let sorttedSubscribers =Array.from(subscribtionMap.keys())
        .sort((sub1, sub2)=>
        {
            if(subscribtionMap.get(sub1).length !== subscribtionMap.get(sub2).length){
                return subscribtionMap.get(sub2).length-subscribtionMap.get(sub1).length;
            }else{
                return subscribtionMap.get(sub2)[0]-subscribtionMap.get(sub1)[0];
            }
        });

    let winner =sorttedSubscribers[0];

    console.log(winner);
    for (let i = 1; i < subscribtionMap.get(winner).length; i++) {
        console.log(`${i}. ${subscribtionMap.get(winner)[i]}`);

    }
}

solution([
    'A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A',
]);

solution([
    'J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J',
])