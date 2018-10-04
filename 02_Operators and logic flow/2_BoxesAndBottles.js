function calcBoxes(bottles, capacity) {
    let boxes = Math.ceil(Number(bottles)/Number(capacity));
    console.log(boxes);
}

calcBoxes(15,7);