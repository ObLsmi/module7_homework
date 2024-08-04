const array = [2, 4, 5, 3, 12, 1, 34, 23, 45, 5, 45, 1, 34];

function funNewArr(arr) {
    const arrSet = new Set(arr);
    const arrUniq = Array.from(arrSet);
    return arrUniq.sort((a, b) => a - b);
}

const newArr = funNewArr(array);
console.log(newArr);


