import "../Table/Table.css";
import Die from "../Die/Die";
import { useEffect, useMemo, useState } from "react";
import checkRolls from "../../utils/checkRolls";
import PlayTable from "../playTable/PlayTable";
import ResultTable from "../ResultTable/ResultTable";

function Table(props) {
    const [arrOfDices, setArrOfDices] = useState(props.startingArr);
    const [rollCounter, setRollCounter] = useState(0);

    const gameStatus = checkRolls(arrOfDices);

    const dices = useMemo(
        () =>
            arrOfDices.map((dice) => {
                return <Die key={dice.id} dicesData={dice} updateDice={updateDiceState} />;
            }),
        [arrOfDices]
    );

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
                <ResultTable
                    setArrOfDices={setArrOfDices}
                    setRollCounter={setRollCounter}
                    rollCounter={rollCounter}
                />
            )}
        </section>
    );
}

export default Table;
