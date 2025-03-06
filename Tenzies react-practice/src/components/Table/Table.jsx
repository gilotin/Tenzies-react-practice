import "../Table/Table.css";
import Die from "../Die/Die";
import { useState } from "react";
import randomRollDice from "../../utils/randomRoll";
import { MAX_ROLL } from "../../constants";
import checkRolls from "../../utils/checkRolls";
import Result from "../Result/Result";

function Table(props) {
    const [arrOfDices, setArrOfDices] = useState(props.startingArr);
    const [gameStatus, setGameStatus] = useState(false);
    const [rollCounter, setRollCounter] = useState(0);
    const dices = arrOfDices.map((dice) => {
        return <Die key={dice.id} onClickDice={onClickDice} dicesData={dice} />;
    });

    function onClickDice(e) {
        const buttonId = Number(e.target.id);
        setArrOfDices((prevState) =>
            prevState.map((die) => {
                return die.id === buttonId ? { ...die, isActive: !die.isActive } : die;
            })
        );

        setGameStatus(checkRolls(arrOfDices));
    }

    function handleRollButton() {
        setArrOfDices((prevState) =>
            prevState.map((die) =>
                !die.isActive ? { ...die, roll: randomRollDice(MAX_ROLL) } : die
            )
        );

        setGameStatus(checkRolls(arrOfDices));
        setRollCounter((prevState) => prevState + 1);
    }

    return (
        <section className="table-wrapper">
            {!gameStatus ? (
                <div className="table">
                    <h1 className="table__header">Tenzies</h1>
                    <p className="table__description">
                        Roll until all dice are the same. Click each dice to freeze ot at its
                        current value between the rolls.
                    </p>
                    <div className="table__dices">{dices}</div>
                    <button onClick={handleRollButton} className="table__button">
                        Roll
                    </button>
                </div>
            ) : (
                <Result rollCounter={rollCounter} />
            )}
        </section>
    );
}

export default Table;
