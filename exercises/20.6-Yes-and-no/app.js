let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
let newArray = theBools.map(function(number) {
    if(number === 0) return 'woko'
    else return 'wiki'
})

console.log(newArray);