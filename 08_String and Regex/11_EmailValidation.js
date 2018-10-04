function emailValidation(email) {
    let pattern = /^([a-zA-Z0-9]+)@([a-zA-Z]+).([a-zA-Z]+)$/;
    if(pattern.test(email)){
        console.log("Valid");
    }else{
        console.log("Invalid");
    }
}

emailValidation('valid@email.bg');
emailValidation('invalid@emai1.bg');