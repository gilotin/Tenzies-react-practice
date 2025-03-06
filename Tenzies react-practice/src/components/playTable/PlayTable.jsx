import randomRollDice from "../../utils/randomRoll";
import { MAX_ROLL } from "../../constants";

function PlayTable(props) {
    function handleRollButton() {
        props.setArrOfDices((prevState) =>
            prevState.map((die) =>
                !die.isActive ? { ...die, roll: randomRollDice(MAX_ROLL) } : die
            )
        );

        props.setRollCounter((prevState) => prevState + 1);
    }

    return (
        <div className="table">
            <h1 className="table__header">Tenzies</h1>
            <p className="table__description">
                Roll until all dice are the same. Click each dice to freeze ot at its current value
                between the rolls.
            </p>
            <div className="table__dices">{props.dices}</div>
            <button onClick={handleRollButton} className="table__button">
                Roll
            </button>
        </div>
    );
}

export default PlayTable;
