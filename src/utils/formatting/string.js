export const containsOnlyNumbers = (str) => {
    return /^\d+$/.test(str);
}

// Password complexity - one uppercase, one lowercase, one digit, one special character and min 8 characters
export const validatePasswordComplexity = (str) => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(str)
}
