function Die(props) {
    function handleClick() {
        props.updateDice({ ...props.dicesData, isActive: !props.dicesData.isActive });
    }

    const active = props.dicesData.isActive;
    return (
        <button
            onClick={handleClick}
            id={props.dicesData.id}
            className={active ? "dice__roll active" : "dice__roll"}
        >
            {props.dicesData.roll}
        </button>
    );
}

export default Die;
