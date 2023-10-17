import { useEffect } from "react";
import useForm from "../../../hooks/useForm";
import RenderInput from "../../../utils/RenderInput";

const VitalForm = ({ fields, formData, onFormUpdate, vitalFormErrors }) => {
  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...formData,
  });

  useEffect(() => {
    onFormUpdate(formValues);
  }, [formValues]);

  useEffect(() => {
    setErrors(vitalFormErrors);
  }, []);

  useEffect(() => {
    setErrors(vitalFormErrors);
  }, [vitalFormErrors]);

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
