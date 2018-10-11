function solution(inputArr) {

    let inventory = inputArr.shift().split(" ");

    loop:
        for (let inputLine of inputArr) {
            let [command, item] = inputLine.split(" ");
            let upgrade;
            if (command === "Upgrade") {
                upgrade = item.split("-")[1];
                item = item.split("-")[0];
            }

            switch (command) {
                case "Buy":
                    addItem(inventory, item);
                    break;
                case "Trash":
                    removeItem(inventory, item);
                    break;
                case "Repair": {
                    removeItem(inventory, item);
                    addItem(inventory, item)
                }
                    break;
                case "Upgrade": {
                    if (inventory.includes(item)) {
                        let index = inventory.indexOf(item);
                        inventory.splice(index + 1, 0, item + ":" + upgrade);
                    }
                }
                    break;
                case "Fight!":
                    console.log(inventory.join(" "));
                    break loop;
            }

        }

    function addItem(inventory, item) {
        if (!inventory.includes(item)) {
            inventory.push(item);
        }
        return inventory;
    }

    function removeItem(inventory, item) {
        if (inventory.includes(item)) {
            let index = inventory.indexOf(item);
            inventory.splice(index, 1);
        }
        return inventory;
    }
}

solution([
    "SWORD Shield Spear",
    "Buy Bag",
    "Trash Shield",
    "Repair Spear",
    "Upgrade SWORD-Steel",
    "Fight!"
]);

solution([
    "SWORD Shield Spear",
    "Trash Bow",
    "Repair Shield",
    "Upgrade Helmet-V",
    "Fight!",
])