"use strict";
function userNames(input) {
    let users=[];
    for (let userName of input) {
        let[name, domain] = userName.split("@");
        users.push(name+"."+domain.split(".").map(e=>e[0]).join(""));
    }
    console.log(users.join(", "));
}

userNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
