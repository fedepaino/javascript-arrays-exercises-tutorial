let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList(array) {
    let odd = [];
    let even = [];
    let oddMasEven = []
    array.forEach(element => {
        if (element % 2 === 0) {
            even.push(element);
        }
        else {odd.push(element);}
    })
    return odd.concat(even);
}

console.log(mergeTwoList(listOfNumbers));