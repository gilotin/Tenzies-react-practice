function Result(props) {
    return (
        <section>
            <h2 className="result__header">Congratulation!!!</h2>
            <p className="result__descriptor">
                You wont the game with only {props.rollCounter} rolls!!!
            </p>
        </section>
    );
}

export default Result;
