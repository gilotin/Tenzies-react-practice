import randomRollDice from "./randomRoll";

function populateTable(data, rolls) {
    return data.map((x) => ({ ...x, roll: randomRollDice(rolls) }));
}

export default populateTable;
