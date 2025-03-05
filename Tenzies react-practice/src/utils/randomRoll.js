function randomRollDice(rolls) {
    // We want the dice to roll between 1 and 6, thats why we add + 1
    let randomRoll = Math.floor(Math.random() * rolls + 1);
    if (randomRoll === 0) {
        return randomRollDice(rolls);
    }

    return randomRoll;
}

export default randomRollDice;
