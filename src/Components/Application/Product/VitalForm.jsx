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
  setFormValidate
}) => {
  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...formData,
  });

  useEffect(() => {
    onFormUpdate(formValues);
  }, [formValues]);

  useEffect(() => {
    //add to errors only initially
    if (Object.keys(errors).length === 0) {
      setErrors(vitalFormErrors);
    }
  }, [vitalFormErrors]);

  useEffect(() => {
    if (shouldValidate) {
      let form_errors = getFormErrors(fields, formValues);
      let valid_form = !Object.values(form_errors).some((val) => val !== "");
      tabErrors[1] = !valid_form;
      setTabErrors((prevState) => {
        prevState[1] = !valid_form;
        return [...prevState];
      });
      setErrors(form_errors);
      setVitalFormErrors(form_errors);
      if(!valid_form){
        setFormValidate(false);
      }
    }
  }, [shouldValidate]);

  return (
    <div>
      {fields.map((field) => {
        return (
          <RenderInput
            item={{
              ...field,
              error: errors?.[field?.id] ? true : false,
              helperText: errors?.[field.id] || "",
            }}
            state={formValues}
            stateHandler={setFormValues}
            key={field?.id}
          />
        );
      })}
      <hr className="border-spacing-5" />
    </div>
  );
};

export default VitalForm;
