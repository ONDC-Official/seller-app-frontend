import { useEffect } from "react";
import useForm from "../../../hooks/useForm";
import RenderInput from "../../../utils/RenderInput";
import { isAmountValid } from "../../../utils/validations";
import { MAX_STRING_LENGTH_50 } from "../../../utils/constants";
import { getFormErrors } from "./utils";

const VitalForm = ({
  fields,
  formData,
  onFormUpdate,
  shouldValidate,
  tabErrors,
  setTabErrors,
  vitalFormErrors,
  setVitalFormErrors,
}) => {
  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...formData,
  });

  console.log("*** formvalues", formValues);
  console.log("*** formdata", formData);

  useEffect(() => {
    console.log("in useEffect");
    onFormUpdate(formValues);
  }, [formValues]);

  useEffect(() => {
    console.log("in useEffect");
    //add to errors only initially
    if (Object.keys(errors).length === 0) {
      setErrors(vitalFormErrors);
    }
  }, [vitalFormErrors]);

  useEffect(() => {
    console.log("** in should validate useEffect");
    if (shouldValidate) {
      console.log("** here...", fields);

      let form_errors = getFormErrors(fields, formValues);

      console.log("** ", form_errors);
      let valid_form = !Object.values(form_errors).some((val) => val !== "");

      tabErrors[1] = !valid_form;
      console.log(tabErrors);
      setTabErrors((prevState) => {
        prevState[1] = !valid_form;
        return prevState;
      });
      setErrors(form_errors);
      console.log("** setting vital form errors to ", form_errors);
      setVitalFormErrors(form_errors);
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
