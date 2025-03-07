function Result(props) {
    return (
        <section className="result__table">
            <h2 className="result__header">Congratulation!!!</h2>
            <p className="result__description">
                You won the game with only <span>{props.rollCounter}</span> rolls!!!
            </p>
        </section>
    );
}

export default Result;
