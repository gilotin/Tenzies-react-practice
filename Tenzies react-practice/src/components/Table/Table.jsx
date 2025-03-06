import "../Table/Table.css";
import Die from "../Die/Die";
import { useEffect, useState } from "react";
import randomRollDice from "../../utils/randomRoll";
import { MAX_ROLL } from "../../constants";
import checkRolls from "../../utils/checkRolls";
import PlayTable from "../playTable/PlayTable";
import ResultTable from "../ResultTable/ResultTable";

function Table(props) {
    const [arrOfDices, setArrOfDices] = useState(props.startingArr);
    const [gameStatus, setGameStatus] = useState(false);
    const [rollCounter, setRollCounter] = useState(0);

    useEffect(() => {
        {
            setGameStatus(checkRolls(arrOfDices));
        }
    }, [arrOfDices]);

    const dices = arrOfDices.map((dice) => {
        return <Die key={dice.id} dicesData={dice} updateDice={updateDiceState} />;
    });

    function updateDiceState(updatedDie) {
        setArrOfDices((prevState) =>
            prevState.map((die) => (die.id === updatedDie.id ? updatedDie : die))
        );
    }

    return (
        <section className="table-wrapper">
            {!gameStatus ? (
                <PlayTable
                    dices={dices}
                    setArrOfDices={setArrOfDices}
                    setRollCounter={setRollCounter}
                />
            ) : (
                <ResultTable rollCounter={rollCounter} />
            )}
        </section>
    );
}

export default Table;
