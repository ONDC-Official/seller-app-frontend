import { isAmountValid } from "../../../../utils/validations";
import { MAX_STRING_LENGTH_50 } from "../../../../utils/constants";

export const getFormErrors = (fields, formValues) => {
  console.log("fields ", fields);
  console.log("formValues", formValues);
  if (formValues) {
    let form_errors = {};
    let error = "";
    fields.forEach((field) => {
      let id = field.id;
      let field_value = formValues[id];
      if (field.type === "number") {
        error = !field_value
          ? "Please enter a valid number"
          : !isAmountValid(field_value)
          ? "Please enter only digit"
          : "";
      } else if (field.type === "upload") {
        error = field_value.length < 1 ? "At least one image is required" : "";
      } else if (field.type === "input") {
        error =
          field_value?.trim() === ""
            ? id + " is required"
            : field_value?.length > MAX_STRING_LENGTH_50
            ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
            : "";
      }
      form_errors[id] = error;
    });
    return form_errors;
  } else {
    return {};
  }
};
