import { MAX_ROLL, PRELOAD_DATA } from "../../constants";
import populateTable from "../../utils/populateTable";

function Result(props) {
    function OnClickReset() {
        props.setArrOfDices((prevState) => populateTable(PRELOAD_DATA, MAX_ROLL));
        props.setRollCounter((prevState) => 0);
    }

    return (
        <section className="result__table">
            <div className="hidden" aria-live="polite">
                Congratulation! You won the game with {props.rollCounter} rolls! Press NEW GAME
                button to start a new game!{" "}
            </div>
            <h2 className="result__header">Congratulation!!!</h2>
            <p className="result__description">
                You won the game with only <span>{props.rollCounter}</span> rolls!!!
            </p>
            <button onClick={OnClickReset} className="restart-button">
                NEW GAME
            </button>
        </section>
    );
}

export default Result;
