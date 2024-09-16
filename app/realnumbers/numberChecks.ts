export function isWholeNumber(number: number): boolean { 
    // Check if the number is greater than 0 and make sure its not a decimal
    if (number > 0 && number === Math.floor(number)) return true
    return false
}

export function isFraction(number: string): boolean {
    return number.split("/").length === 2 
}

export function fractionQuotient(fraction: string): number {
    const numerator = Number(fraction.split("/")[0])
    const denominator = Number(fraction.split("/")[1])

    return numerator / denominator
}

export function isPositiveFraction(number: string): boolean { 
    const numerator = number.split("/")[0]
    if (numerator.charAt(0) === "-") return false

    return true
}