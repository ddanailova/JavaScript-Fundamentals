function captureNumbers(input) {
    let pattern = /\d+/g;

    console.log(input.join(" ").match(pattern).join(' '));
}

captureNumbers(["123a456", "789b987", "654c321","0"]);