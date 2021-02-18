module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }

    let stack = [];

    const openBrackets = [];
    const closeBrackets = [];

    bracketsConfig.forEach((item) => {
        openBrackets.push(item[0]);
        closeBrackets.push(item[1]);
    });

    for (const bracket of str) {
        if (openBrackets.includes(bracket)) {
            stack.push(bracket);
        } else if (closeBrackets.includes(bracket)) {
            const res = stack.pop(bracket);

            if (res === undefined) {
                return false;
            }

            const indexClosedBracket = closeBrackets.indexOf(bracket);
            const openedBrackets = openBrackets[indexClosedBracket];
            if (res !== openedBrackets) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
