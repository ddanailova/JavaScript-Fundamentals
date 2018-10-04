function clac(arr) {
    //km/h
    let v1 = arr[0];
    let v2 = arr[1];
    //secunds
    let t =arr[2]/3600;
     let distance = Math.abs(v1*t - v2*t);

    //output in meters
    console.log(distance*1000);
}

clac([11, 10, 120]);