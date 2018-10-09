function solution(inputArr) {

    let catalogue = new Map();

    for (let inputLine of inputArr) {
        let[system, component, subComponent] = inputLine.split(/\s*\|\s*/);
        if (!catalogue.has(system)){
            catalogue.set(system, new Map());
            catalogue.get(system).set(component, []);
        }else{
            if(!catalogue.get(system).has(component)){
                catalogue.get(system).set(component, []);
            }
        }
        catalogue.get(system).get(component).push(subComponent);
    }
    let sortedSystems = Array.from(catalogue.keys()).sort().sort((k1, k2)=>{return Array.from(catalogue.get(k2).keys()).length - Array.from(catalogue.get(k1).keys()).length})

    for (let system of sortedSystems) {
        console.log(system);
        let sortedComponents = Array.from(catalogue.get(system).keys()).sort((k1, k2)=>{return Array.from(catalogue.get(system).get(k2).keys()).length-Array.from(catalogue.get(system).get(k1).keys()).length});
        for (const component of sortedComponents) {
            console.log(`|||${component}`);
            for (const subComp of catalogue.get(system).get(component)) {
                console.log(`||||||${subComp}`);
            }
        }
    }
}

solution([
    "SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security",
])