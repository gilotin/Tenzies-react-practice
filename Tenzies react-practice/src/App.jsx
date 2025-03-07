import "./App.css";
import Table from "./components/Table/Table";
import { MAX_ROLL, PRELOAD_DATA } from "./constants";
import populateTable from "./utils/populateTable";

function App() {
    return (
        <main>
            <Table startingArr={populateTable(PRELOAD_DATA, MAX_ROLL)} />
        </main>
    );
}

export default App;
