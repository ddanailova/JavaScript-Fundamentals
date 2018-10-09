function solution(inputObj, actionArr) {
    let outputObj = JSON.parse(JSON.stringify(inputObj));

    let performAction =
        {
            "Open": (obj, site) => {
                obj["Open Tabs"].push(site);
                obj["Browser Logs"].push(`Open ${site}`);
                return obj;
            },
            "Close": (obj, site) => {

                if (obj["Open Tabs"].includes(site)) {
                    let removeIndex = obj["Open Tabs"].indexOf(site);
                    obj["Open Tabs"].splice(removeIndex, 1);
                    obj["Recently Closed"].push(site);
                    obj["Browser Logs"].push(`Close ${site}`);
                }
                return obj;
            }
        };

    function clearHistory(obj) {
        obj["Open Tabs"] = [];
        obj["Recently Closed"] = [];
        obj["Browser Logs"] = [];
        return obj;
    }

    actionArr.forEach((line) => {
        if (line.toLowerCase() === "clear history and cache") {
            clearHistory(outputObj);
        } else {
            let [action, site] = line.split(/\s+/);
            performAction[action](outputObj, site);
        }
    });

    console.log(outputObj["Browser Name"]);
    console.log(`Open Tabs: ${outputObj["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${outputObj["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${outputObj["Browser Logs"].join(", ")}`);
}

solution({
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    [
        'Close Facebook',
        'Open StackOverFlow',
        'Open Google',
        'Open YouTube',
        'Close YouTube'
    ]);

// solution({
//         "Browser Name":"Mozilla Firefox",
//         "Open Tabs":["YouTube"],
//         "Recently Closed":['Gmail', 'Dropbox'],
//         "Browser Logs":['Open Gmail', 'Close Gmail', 'Open Dropbox', 'Open YouTube', 'Close Dropbox']
//     },
//     [
//         'Open Wikipedia',
//         'Clear History and Cache',
//         'Open Twitter'
//     ]);