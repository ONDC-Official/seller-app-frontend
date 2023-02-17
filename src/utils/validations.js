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

export const isPhoneNoValid = (no) => {
  if (no == "") return true;
  if (/^(0|91)?[6-9][0-9]{9}$/.test(no)) {
    return true;
  } else return false;
};

export const isEmailValid = (email) => {
  if (email == "") return true;
  if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) return true;
  else return false;
};
