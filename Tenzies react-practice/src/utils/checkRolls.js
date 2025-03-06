function checkRolls(data) {
    const allActiveDices = data.filter((die) => die.isActive);
    const firstRoll = allActiveDices[0]?.roll;

    if (allActiveDices.length === 0) {
        return false;
    }

    if (data.every((die) => die.roll === firstRoll) && allActiveDices) {
        return true;
    }
    return false;
}

export default checkRolls;
