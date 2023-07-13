import { useEffect } from "react";
import useForm from "../../../hooks/useForm";
import RenderInput from "../../../utils/RenderInput";


const VitalForm = ({fields, formData, onFormUpdate, shouldValidate}) => {

  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...formData,
  });

  console.log(formValues);

  useEffect(() => {
    onFormUpdate(formValues);
  }, [formValues])

  useEffect(() => {
    if(shouldValidate) {
        console.log("validating....");
    }
  }, [shouldValidate])

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
    <hr className="border-spacing-5"/>
   </div>

  )
}

export default VitalForm;