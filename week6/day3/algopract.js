// return first duplicates
// if no duplicates, return -1

const array = [2, 1, 5, 2, 3, 3, 4]

function findDup () {
    let elementSet = new Set();
    for (let index = 0; index < array.length; index++) {
        if (elementSet.has(array[index]))
        elementSet.add(array[index]);
        return array[index];
    }
}

findDup()