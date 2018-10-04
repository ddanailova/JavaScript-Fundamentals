function extractLinks(input) {
    let pattern = /www\.[a-zA-Z0-9\-]+(\.[a-z]+)+/g;
    let links ;
    for (let sentence of input) {
        while(links = pattern.exec(sentence)){
            console.log(links[0]);
        }
    }
}
extractLinks([
    'Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko' ]);