import { useEffect } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import randomRollDice from "./utils/randomRoll";
import { MAX_ROLL, PRELOAD_DATA } from "./constants";
import checkRolls from "./utils/checkRolls";
import Result from "./components/ResultTable/ResultTable";

function App() {
    let result = PRELOAD_DATA.map((x) => {
        return { ...x, roll: randomRollDice(MAX_ROLL) };
    });

    return (
        <main>
            <Table startingArr={result} />
        </main>
    );
}

export default App;
