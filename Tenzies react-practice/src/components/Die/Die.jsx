function Die(props) {
    const active = props.dicesData.isActive;
    return (
        <button
            onClick={(e) => props.onClickDice(e)}
            id={props.dicesData.id}
            className={active ? "dice__roll active" : "dice__roll"}
        >
            {props.dicesData.roll}
        </button>
    );
}

export default Die;
