export const checkEmpty = (obj) => {
  let ans = false;
  for (var key in obj) {
    if (obj[key].trim() == "") {
      ans = true;
      break;
    }
  }
  return ans;
};

export const isNumberOnly = (value) => {
  return /^[0-9]*$/.test(value)
};

export const isAmountValid = (value) => {
  return /^\d{0,8}(\.\d{1,4})?$/.test(value)
};

export const isNameValid = (value) => {
  return /^[a-zA-Z]+[a-zA-Z '.-]*$/.test(value)
};

export const isPhoneNoValid = (value) => {
  return /^(0|91)?[6-9][0-9]{9}$/.test(value)
};

export const isEmailValid = (value) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
};

export const isValidPAN = (value) => {
  return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)
};

export const isValidGSTIN = (value) => {
  // GSTIN should be alphanumeric and 15 characters long
  return /^[a-zA-Z0-9]{15}$/.test(value)
}

export const isValidFSSAI = (value) => {
  // FSSAI should be 14 digit number
  return /^[0-9]{14}$/.test(value)
}

export const isValidIFSC = (value) => {
  // FSSAI should be 14 digit number
  return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)
}

export const isAlphaNumericOnly = (value) => {
  return /^[A-Za-z0-9]+$/i.test(value)
}

export function isObjEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const isValidBankAccountNumber = (str) => {
  return /^\d{9,18}$/.test(str);
}

export const areObjectsEqual = (firstObj, secondObj) => JSON.stringify(firstObj) === JSON.stringify(secondObj);
