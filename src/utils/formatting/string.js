export const containsOnlyNumbers = (str) => {
    return /^\d+$/.test(str);
}

// Password complexity - minimum eight characters, at least one letter and one number
export const validatePasswordComplexity = (str) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(str)
}
