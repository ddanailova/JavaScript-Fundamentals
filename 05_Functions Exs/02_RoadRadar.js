function speedChecker([speed, area]) {

    if (speed > speedLimit(area) + 40) {
        console.log("reckless driving");
    } else if (speed > speedLimit(area) + 20) {
        console.log("excessive speeding");
    } else if (speed > speedLimit(area)) {
        console.log("speeding");
    }

    function speedLimit(area) {
        switch (area) {
            case "residential":
                return 20;
            case "city":
                return 50;
            case "interstate":
                return 90;
            case "motorway":
                return 130;
        }
        return speedLimit;
    }
}


speedChecker([40, "city"]);
speedChecker([21, "residential"]);
speedChecker([120, "interstate"]);
speedChecker([200, "motorway"]);