function reverseString(string) {
    if (string.length === 0) return string

    let lastIndex = string.length - 1
    let lastChar = string[lastIndex]
    let newString = string.slice(0, lastIndex)

    return lastChar + reverseString(newString)
}