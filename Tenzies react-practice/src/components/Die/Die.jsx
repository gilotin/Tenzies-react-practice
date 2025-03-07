import React from "react";

const Die = React.memo((props) => {
    function handleClick() {
        props.updateDice({ ...props.dicesData, isActive: !props.dicesData.isActive });
    }

    const active = props.dicesData.isActive;
    return (
        <button
            onClick={handleClick}
            id={props.dicesData.id}
            className={active ? "dice__roll active" : "dice__roll"}
            aria-pressed={active}
            aria-label={`Die with value${props.dicesData.roll}, ${active ? "held" : "not held"}`}
        >
            {props.dicesData.roll}
        </button>
    );
});

export default Die;
