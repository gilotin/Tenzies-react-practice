import "../Table/Table.css";
import Die from "../Die/Die";
import { useState } from "react";

function Table(props) {
    const [arrOfDices, setArrOfDices] = useState(props.startingArr);

    const dices = arrOfDices.map((dice, index) => {
        return <Die key={index} dieNumber={dice.roll} />;
    });

    function handleRollButton() {
        console.log("hello");
    }

    return (
        <section className="table-wrapper">
            <div className="table">
                <h1 className="table__header">Tenzies</h1>
                <p className="table__description">
                    Roll until all dice are the same. Click each dice to freeze ot at its current
                    value between the rolls.
                </p>
                <div className="table__dices">{dices}</div>
                <button onClick={handleRollButton} className="table__button">
                    Roll
                </button>
            </div>
        </section>
    );
}

export default Table;
