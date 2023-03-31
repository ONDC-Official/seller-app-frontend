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

export const isPhoneNoValid = (value) => {
  return /^(0|91)?[6-9][0-9]{9}$/.test(value)
};

export const isEmailValid = (value) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
};

export const isPANValid = (value) => {
  return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)
};

export const isAlphaNumericOnly = (value) => {
  return /^[A-Za-z0-9]+$/i.test(value)
}

export function isObjEmpty(obj) {
  return Object.keys(obj).length === 0;
}
