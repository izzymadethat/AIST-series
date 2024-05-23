function power(base, exponent) {
    if (exponent === 0) return 1

    if (exponent % 2 === 0) {
        let half = power(base, exponent / 2)
        return half * half
    } else {
        return base * power(base, exponent - 1)
    }
}