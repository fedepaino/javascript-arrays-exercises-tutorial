let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Your code here
function findMax(array) {
    let maxNum = array[0]
    array.forEach(numeros => {
        if (numeros > maxNum) {
            maxNum = numeros;
        }
    });
console.log(maxNum);
}

findMax(myArray);