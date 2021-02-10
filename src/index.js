function Pair(letter) {
    if (letter === ')') return '('
    if (letter === ']') return '['
    if (letter === '}') return '{'
    if (letter === '|') return '|'
    if (+letter) return letter
    return null
}

function multiDimensionalUnique(arr) {
    const uniques = [];
    const itemsFound = {};
    for (let i = 0, l = arr.length; i < l; i++) {
        const stringified = JSON.stringify(arr[i]);
        if (itemsFound[stringified]) {
            continue;
        }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}

module.exports = function check(str, bracketsConfig) {
    const res = []
    const temp = []
    temp.push(str[0])
    for (let i = 1; i < str.length; i++) {
        if (temp[temp.length - 1] === Pair(str[i])) {
            temp.splice(temp.length - 1, 1)
            res.unshift([Pair(str[i]), str[i]])
            continue
        }
        temp.push(str[i])
    }

    const result = multiDimensionalUnique(res)
    if (temp.length > 0) {
        result.push(temp)
    }
    return JSON.stringify(result.sort()) === JSON.stringify(bracketsConfig)
}


