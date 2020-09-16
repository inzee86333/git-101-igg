let temp = ['apple', 'banana', 'kiwi']

let newValue = temp.map((elementm, idx) => {
    return `${idx+1} . ${elementm}`
})

console.log(newValue)

let filterMoreThanZero = [-1,2,3,56,6,-93,0,4].filter(el => el >= 0)
console.log(filterMoreThanZero)