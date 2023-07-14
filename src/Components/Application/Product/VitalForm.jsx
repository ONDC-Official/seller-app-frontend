import { useEffect } from "react";
import useForm from "../../../hooks/useForm";
import RenderInput from "../../../utils/RenderInput";
import { isAmountValid } from "../../../utils/validations";
import { MAX_STRING_LENGTH_50 } from "../../../utils/constants";

const VitalForm = ({
  fields,
  formData,
  onFormUpdate,
  shouldValidate,
  tabErrors,
  setTabErrors,
  vitalFormErrors,
  setVitalFormErrors
}) => {
  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...formData,
  });

  console.log("*** formvalues", formValues);  console.log("*** formdata", formData);


  useEffect(() => {
    console.log("in useEffect");
    onFormUpdate(formValues);
  }, [formValues]);

  useEffect(() => {
    console.log("in useEffect");
    //add to errors only initially
    if(Object.keys(errors).length === 0) {
        setErrors(vitalFormErrors);
    }
  }, [vitalFormErrors])

  useEffect(() => {
    console.log("** in should validate useEffect");
    if (shouldValidate) {
        console.log("** here...", fields);
      let form_error = {};
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
        } else if (field.type === "images") {
          error =
            field_value.length < 1 ? "At least one image is required" : "";
        } else if (field.type === "input") {
            console.log("*** field ", field);
            console.log("*** formValues ", formValues);
            console.log("*** field_value ", field_value);
          error =
            field_value?.trim() === ""
              ? id + " is required"
              : field_value?.length > MAX_STRING_LENGTH_50
              ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
              : "";
        }
        form_error[id] = error;
      });

      console.log("** ", form_error);
      let valid_form = !Object.values(form_error).some((val) => val !== "");

      tabErrors[1] = !valid_form;
      console.log(tabErrors);
      setTabErrors((prevState) => {
        prevState[1] = !valid_form;
        return prevState;
      });
      setErrors(form_error);
      console.log("** setting vital form errors to ", form_error);
      setVitalFormErrors(form_error);
    }
  }, [shouldValidate]);

  console.log(formData);

  return (
    <div>
      {fields.map((field) => {
        console.log(field);
        return (
          <RenderInput
            item={{
              ...field,
              error: errors?.[field?.id] ? true : false,
              helperText: errors?.[field.id] || "",
            }}
            state={formValues}
            stateHandler={setFormValues}
          />
        );
      })}
      <hr className="border-spacing-5" />
    </div>
  );
};

export default VitalForm;
