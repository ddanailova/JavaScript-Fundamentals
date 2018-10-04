function findTreasure(input) {
    let tonga = {bottX: 0, bottY: 8, topX: 2, topY: 6, name: "Tonga"};
    let cook = {bottX: 4, bottY: 8, topX: 9, topY: 7, name: "Cook"};
    let samoa = {bottX:5, bottY:6, topX:7, topY:3, name:"Samoa"};
    let tuvalu = {bottX:1, bottY:3, topX:3, topY:1, name:"Tuvalu"};
    let tokelau = {bottX:8, bottY:1, topX:9, topY:0, name:"Tokelau"};

    let islands = [tonga,cook,samoa,tuvalu,tokelau];

    function isInsideIsland(point, island){
        let location = "";
        if(point.x >= island.bottX && point.x <= island.topX && point.y <= island.bottY && point.y >= island.topY){
            location = island.name;
        }else{
            location = "On the bottom of the ocean"
        }
        return location;
    }

    for (let i = 0; i < input.length; i += 2) {
        let point = {x: input[i], y: input[i+1]};
        let location = "On the bottom of the ocean";
        for (let island of islands) {
            location = isInsideIsland(point,island);
            if (location !== "On the bottom of the ocean") {
                console.log(location); break;
            }
        }
        if(location === "On the bottom of the ocean")
            console.log(location);
    }
}

findTreasure([4, 2, 1.5, 6.5, 1, 3,6,4]);