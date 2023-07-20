import { useEffect } from "react";
import useForm from "../../../hooks/useForm";
import RenderInput from "../../../utils/RenderInput";
import { Typography, Box } from "@mui/material";
import { getFormErrors } from "./utils";

const VarinatForm = ({
  formData,
  fields,
  index,
  onFormUpdate,
  shouldValidate,
  formsErrors,
  setFormsErrors,
  removeForm
}) => {
  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...formData,
  });

  useEffect(() => {
    onFormUpdate(index, formValues);
  }, [formValues]);

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setErrors(formsErrors[index]);
    }
  }, [formsErrors[index]]);

  useEffect(() => {
    if (shouldValidate) {
      let form_errors = getFormErrors(fields, formValues);
      setErrors(form_errors);
      formsErrors[index] = form_errors;
      setFormsErrors([...formsErrors]);
    }
  }, [shouldValidate]);

  return (
    <div className="mt-5">
      <div className="flex" style={{justifyContent: "space-between"}}>
      <Typography sx={{ fontWeight: "bold" }}>
        {" "}
        {"Variation " + (index + 1)}
      </Typography>
      <button
        type="button"
        class="close"
        aria-label="Close"
        onClick={() => removeForm(index)}>
        <span aria-hidden="true">&times;</span>
      </button>
      </div>
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

export default VarinatForm;
