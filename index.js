function findMatching(drivers, name) {
    return drivers.filter(oneElement => oneElement.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    const lettersLength = letters.length;
    return drivers.filter((driver) => driver.slice(0,lettersLength) === letters);
}

function matchName(drivers, nameToMatch) {
    return drivers.filter((driver) => driver.name === nameToMatch)
}