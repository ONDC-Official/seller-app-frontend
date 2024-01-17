export const containsOnlyNumbers = (str) => {
    return /^\d+$/.test(str);
}

// Password complexity - one uppercase, one lowercase, one digit, one special character and min 8 characters
export const validatePasswordComplexity = (str) => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(str)
}

export const extractKeyValuePairs = (data) => {
    if (typeof data !== 'string') {
        return false; // Return false if data is not a string
    }

    const keyValuePattern = /"([^"]+)": "([^"]+)"/g;
    const keyValuePairs = {};
    let match;
    let matchFound = false;

    while ((match = keyValuePattern.exec(data))) {
        const key = match[1];
        const value = match[2];
        keyValuePairs[key] = value;
        matchFound = true;
    }

    return matchFound ? keyValuePairs : false;
}