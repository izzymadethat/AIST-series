// This is a bit tricky to understand
// Note that you're not adding a number to an array
// But you're using the new array to get the next value
function sumArray(arr) {
    // base case
    if (arr.length === 0) return 0

    /*  You can use pop, splice, or slice to get newArr
        I prefer NOT to mutate array data 
        rather just make a new copy 

        with that said...
    */

    // give me the first number in array
    let num = arr[0]
    // then give me a new copy without the first number
    let newArr = arr.slice(1)


    return num + sumArray(newArr)

}
