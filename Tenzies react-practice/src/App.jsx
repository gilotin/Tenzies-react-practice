import "./App.css";
import Table from "./components/Table/Table";
import randomRollDice from "./utils/randomRoll";
import { MAX_ROLL, PRELOAD_DATA } from "./constants";

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
