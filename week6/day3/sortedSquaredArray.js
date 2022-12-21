// loop and square
// sort ascending
// return array (NOT CONSOLE LOG  ARRAY)

array = [-3, 1, 2]
newArray =[]

function squaredArray() {
    array.forEach(number => {
        const newNumber = Math.pow(number, 2);
    newArray.push(newNumber);
    const sortedArray = newArray.sort((a,b) => (a-b))
    return sortedArray;
    });
    
}

squaredArray()