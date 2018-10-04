function capitalizeWord(text) {
    console.log(text.split(' ').map(e => e.toLowerCase()).map(e => e[0].toUpperCase()+e.substr(1)).join(' '));
}

capitalizeWord('Was that Easy? tRY thIs onE for SiZe!')