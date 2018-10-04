function crystalFactory(arr) {
    //TODO Judge - 83%
    let targetThickness = Number(arr[0]);
    let crystalSizes = arr.slice(1).map(c => Number(c));

    let cut = (size) => size / 4;
    let lap = (size) => 0.8 * size;
    let grid = (size) => size - 20;
    let etch = (size) => size - 2;
    let xray = (size) => size + 1;
    let washing = (size) => {
        console.log("Transporting and washing");
        return Math.floor(size)
    };

    for (let crystal of crystalSizes) {
        console.log(`Processing chunk ${crystal} microns`);
        //Cutting
        let cutCounter = 0;
        crystal = cut(crystal);
        while (crystal >= targetThickness) {
            cutCounter++;
            crystal = cut(crystal);
        }
        crystal = crystal * 4;
        if (cutCounter !== 0) {
            console.log(`Cut x${cutCounter}`);
            crystal = washing(crystal);
        }
        if (crystal > targetThickness) {
            if (targetThickness > 25) {
                //Lapping
                let lapCount = 0;
                crystal = lap(crystal);
                while (crystal >= targetThickness) {
                    lapCount++;
                    crystal = lap(crystal);
                }
                crystal = crystal / 0.8;
                if (lapCount !== 0) {
                    console.log(`Lap x${lapCount}`);
                    crystal = washing(crystal);
                }
                if (crystal > targetThickness) {
                    // Grinding
                    let gridCount = 0;
                    crystal = grid(crystal);
                    while (crystal >= targetThickness) {
                        gridCount++;
                        crystal = grid(crystal);
                    }
                    crystal += 20;
                    if (gridCount !== 0) {
                        console.log(`Grind x${gridCount}`);
                        crystal = washing(crystal);
                    }
                }
                if (crystal > targetThickness) {
                    //Etching
                    let etchCount = 0;
                    let xrayCount = 0;
                    crystal = etch(crystal);
                    while (crystal >= targetThickness) {
                        if ((crystal % 2 === 0 && targetThickness % 2 === 0) || (crystal % 2 !== 0 && targetThickness % 2 !== 0)) {
                            etchCount++;
                            crystal = etch(crystal);
                        } else {
                            xrayCount++;
                            crystal = xray(crystal);
                        }
                    }
                    crystal += 2;

                    if (etchCount !== 0) {
                        console.log(`Etch x${etchCount}`);
                        crystal = washing(crystal);
                    }
                    if (xrayCount !== 0) {
                        console.log(`X-ray x${xrayCount}`);
                        if (crystal !== targetThickness) {
                            crystal = washing(crystal);
                        }
                    }
                }
            } else if (targetThickness > 2.5) {

                // Grinding
                let gridCount = 0;
                crystal = grid(crystal);
                while (crystal >= targetThickness) {
                    gridCount++;
                    crystal = grid(crystal);
                }
                crystal += 20;
                if (gridCount !== 0) {
                    console.log(`Grind x${gridCount}`);
                    crystal = washing(crystal);
                }

                if (crystal > targetThickness) {
                //Lapping
                    let lapCount = 0;
                    crystal = lap(crystal);
                    while (crystal >= targetThickness) {
                        lapCount++;
                        crystal = lap(crystal);
                    }
                    crystal = crystal / 0.8;
                    if (lapCount !== 0) {
                        console.log(`Lap x${lapCount}`);
                        crystal = washing(crystal);
                    }
                }
                if (crystal > targetThickness) {
                    //Etching
                    let etchCount = 0;
                    let xrayCount = 0;
                    crystal = etch(crystal);
                    while (crystal >= targetThickness) {
                        if ((crystal % 2 === 0 && targetThickness % 2 === 0) || (crystal % 2 !== 0 && targetThickness % 2 !== 0)) {
                            etchCount++;
                            crystal = etch(crystal);
                        } else {
                            xrayCount++;
                            crystal = xray(crystal);
                        }
                    }
                    crystal += 2;

                    if (etchCount !== 0) {
                        console.log(`Etch x${etchCount}`);
                        crystal = washing(crystal);
                    }
                    if (xrayCount !== 0) {
                        console.log(`X-ray x${xrayCount}`);
                        if (crystal !== targetThickness) {
                            crystal = washing(crystal);
                        }
                    }
                }

            } else {
                                // Grinding
                let gridCount = 0;
                crystal = grid(crystal);
                while (crystal >= targetThickness) {
                    gridCount++;
                    crystal = grid(crystal);
                }
                crystal += 20;
                if (gridCount !== 0) {
                    console.log(`Grind x${gridCount}`);
                    crystal = washing(crystal);
                }

                if (crystal > targetThickness) {
                    //Etching
                    let etchCount = 0;
                    let xrayCount = 0;
                    crystal = etch(crystal);
                    while (crystal >= targetThickness) {
                        if ((crystal % 2 === 0 && targetThickness % 2 === 0) || (crystal % 2 !== 0 && targetThickness % 2 !== 0)) {
                            etchCount++;
                            crystal = etch(crystal);
                        } else {
                            xrayCount++;
                            crystal = xray(crystal);
                        }
                    }
                    crystal += 2;

                    if (etchCount !== 0) {
                        console.log(`Etch x${etchCount}`);
                        crystal = washing(crystal);
                    }
                    if (xrayCount !== 0) {
                        console.log(`X-ray x${xrayCount}`);
                        if (crystal !== targetThickness) {
                            crystal = washing(crystal);
                        }
                    }
                }
                if (crystal > targetThickness) {
                    //Lapping
                    let lapCount = 0;
                    crystal = lap(crystal);
                    while (crystal >= targetThickness) {
                        lapCount++;
                        crystal = lap(crystal);
                    }
                    crystal = crystal / 0.8;
                    if (lapCount !== 0) {
                        console.log(`Lap x${lapCount}`);
                        crystal = washing(crystal);
                    }
                }
            }
        }
        console.log(`Finished crystal ${targetThickness} microns`);
    }
}

crystalFactory([1000,4000, 8100]);
crystalFactory([1375, 50000])