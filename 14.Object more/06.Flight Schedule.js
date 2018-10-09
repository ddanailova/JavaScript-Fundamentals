function solution([flightsArr, changesArr, flightStatus ]) {
    let changesObj = changesArr.reduce((acc, cur)=>{

        let[flight, status] = cur.split(/\s+/);

        acc[flight] = status;

        return acc;
    },{});

    let updatedFlights = flightsArr.reduce((acc,cur)=>{
        let flightNumber = cur.split(/\s+/).shift();
        let destination =  cur.split(/\s+/).slice(1).join(" ");

        if(Object.keys(changesObj).includes(flightNumber)){
            acc[destination] = changesObj[flightNumber];
        }else{
            acc[destination] = 'Ready to fly';
        }
        return acc;
    },{});

     Object.keys(updatedFlights)
         // .sort((a,b)=> a.localeCompare(b))
         .forEach((destination)=>{
             if(updatedFlights[destination] === flightStatus[0]){
                 console.log(`{ Destination: '${destination}', Status: '${flightStatus[0]}' }`);
             }
         });

}


solution(
    [
        [
            "WN269 Delaware",
            "FL2269 Oregon",
            "WN498 Las vegas",
            "WN3145 Ohio",
            "WN612 Alabama",
            "WN4010 New York",
            "WN1173 California",
            "DL2120 Texas",
            "KL5744 Illinois",
            "WN678 Pennsylvania"
        ],
        [
            "DL2120 Cancelled",
        "WN612 Cancelled",
        "WN1173 Cancelled",
            "SK330 Cancelled"
        ],
        [
            "Ready to fly"
        ]]);


// solution(
//     [
//         [
//             'WN269 Delaware',
//             'FL2269 Oregon',
//             'WN498 Las Vegas',
//             'WN3145 Ohio',
//             'WN612 Alabama',
//             'WN4010 New York',
//             'WN1173 California',
//             'DL2120 Texas',
//             'KL5744 Illinois',
//             'WN678 Pennsylvania'
//         ],
//         [
//             'DL2120 Cancelled',
//             'WN612 Cancelled',
//             'WN1173 Cancelled',
//             'SK430 Cancelled'
//         ],
//         [
//             'Cancelled'
//         ]
//     ]);