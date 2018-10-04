function calc(input) {
        let point = {x:input[0],y:input[1]};
        let bottom = {x:input[2],y:input[4]};
        let top ={x:input[3], y:input[5]};

        if(point.x >= bottom.x && point.y >= bottom.y && point.x <= top.x && point.y <= top.y){

            console.log("inside");
        } else{
            console.log("outside");
        }
}

calc([8 ,-1, 2, 12 ,-3,3]);
calc([12.5 ,-1, 2, 12.5 ,-3,3]);
calc([12.5 ,-1, 2, 12 ,-3,3]);