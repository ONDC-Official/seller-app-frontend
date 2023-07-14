import { useEffect } from "react";
import useForm from "../../../hooks/useForm";
import RenderInput from "../../../utils/RenderInput";

const VariationsForm = ({formData, fields, index, onFormUpdate, shouldValidate}) => {

  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...formData,
  });

  console.log(formValues);

  useEffect(() => {
    console.log("in useEffect");
    onFormUpdate(index, formValues);
  }, [formValues])

  useEffect(() => {
    console.log("in useEffect");
    if(shouldValidate) {
        console.log("validating....");
    }
  }, [shouldValidate])

  return (
    <div>
    {"Variation " + (index + 1)}
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
          />
      );
    })}
    <hr className="border-spacing-5"/>
   </div>

  )
}

export default VariationsForm;