import "../Table/Table.css";
import Die from "../Die/Die";
import { useState } from "react";

function Table(props) {
    const [arrOfDices, setArrOfDices] = useState(props.startingArr);

    const dices = arrOfDices.map((dice) => {
        return <Die key={dice.id} onClickDice={onClickDice} dicesData={dice} />;
    });

    function handleRollButton() {
        console.log("handle button");
    }

    function onClickDice(e) {
        const buttonId = Number(e.target.id);
        setArrOfDices((prevState) =>
            prevState.map((die) => {
                return die.id === buttonId ? { ...die, isActive: !die.isActive } : die;
            })
        );
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
