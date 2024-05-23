function add(num1, num2) {
    if (typeof num1 !== "number" && typeof num2 !== "number") return
    return num1 + num2
}

// let sum1 = add(5, 15)
// let sum2 = add(1000, 1_000_000)
// console.log(sum1) // 20
// console.log(sum2) // 1,001,000

function factorial(num) {
    if (typeof num !== "number") return null

    let total = num

    for (let i = num - 1; i >= 1; i--) {
        total *= i;
    }

    return total
}

let fac3 = factorial(3)
console.log(fac3) // 6


function factorialRecursively(num) {
    // Base case: When should the function stop calling itself
    if (num === 1 || num === 0) return 1;

    // if num is not 1 return current num * current num - 1
    return num * factorialRecursively(num - 1);
}

fac3 = factorialRecursively(3)
console.log(fac3) // 6
