function randomRollDice(rolls) {
    // We want the dice to roll between 1 and 6, thats why we add + 1 or we can use Math.ceil()
    let randomRoll = Math.floor(Math.random() * rolls + 1);
    if (randomRoll === 0) {
        return randomRollDice(rolls);
    }

    return randomRoll;
}

export default randomRollDice;

// Another solution (not mine)
// This way we don't need constants
// function randomRollDice(){
//     return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6))
// }
