import { useEffect } from "react";
import useForm from "../../../hooks/useForm";
import RenderInput from "../../../utils/RenderInput";
import { Typography, Box } from "@mui/material";

const VarinatForm = ({ formData, fields, index, onFormUpdate, formsErrors, removeForm }) => {
  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...formData,
  });

  useEffect(() => {
    onFormUpdate(index, formValues);
  }, [formValues]);

  useEffect(() => {
    setErrors(formsErrors[index]);
  }, []);

  useEffect(() => {
    setErrors(formsErrors[index]);
  }, [formsErrors[index]]);

  return (
    <div className="mt-5">
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: "bold" }}> {"Variation " + (index + 1)}</Typography>
        <button type="button" className="close" aria-label="Close" onClick={() => removeForm(index)}>
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
