function solution(lostCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = parseInt(lostCount / 2) * helmetPrice
        + parseInt(lostCount / 3) * swordPrice
        + parseInt(lostCount / 6) * shieldPrice
        + parseInt(lostCount / 12) * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solution(23, 12.5, 21.5, 40, 200);