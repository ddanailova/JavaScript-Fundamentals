function calc([movie,day]) {
    if(movie.toLowerCase() === "the godfather"){
        switch (day.toLowerCase()) {
            case "monday":
                console.log(12);
                break;
            case "tuesday":
                console.log(10);
                break;
            case "wednesday":
                console.log(15);
                break;
            case "thursday":
                console.log(12.5);
                break;
            case "friday":
                console.log(15);
                break;
            case "saturday":
                console.log(25);
                break;
            case "sunday":
                console.log(30);
                break;
            default:
                console.log("error");break;
        }
    }else if(movie.toLowerCase() === "schindler's list"){
        switch (day.toLowerCase()) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                console.log(8.5);
                break;
            case "saturday":
            case "sunday":
                console.log(15);
                break;
            default:
                console.log("error");break;
        }
    }else if(movie.toLowerCase()==="casablanca"){
        switch (day.toLowerCase()) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                console.log(8);
                break;
            case "saturday":
            case "sunday":
                console.log(10);
                break;
            default:
                console.log("error");break;
        }

    }else if (movie.toLowerCase() ==="the wizard of oz"){
        switch (day.toLowerCase()) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                console.log(10);
                break;
            case "saturday":
            case "sunday":
                console.log(15);
                break;
            default:
                console.log("error");break;
        }
    }else{
        console.log("error");}

}

calc(["The Godfather", "Friday"]);