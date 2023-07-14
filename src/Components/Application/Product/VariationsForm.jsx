import { useEffect } from "react";
import useForm from "../../../hooks/useForm";
import RenderInput from "../../../utils/RenderInput";
import { Typography, Box } from "@mui/material";
import { getFormErrors } from "./utils";

const VariationsForm = ({
  formData,
  fields,
  index,
  onFormUpdate,
  shouldValidate,
  formsErrors,
  setFormsErrors,
}) => {
  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...formData,
  });

  console.log(formValues);

  useEffect(() => {
    console.log("in useEffect");
    onFormUpdate(index, formValues);
  }, [formValues]);

  useEffect(() => {
    console.log("in useEffect");
    if (shouldValidate) {
      console.log("validating....");
    }
  }, [shouldValidate]);

  console.log("formErrors" , formsErrors);
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setErrors(formsErrors[index]);
    }
  }, [formsErrors[index]]);

  useEffect(() => {
    console.log("** in should validate useEffect");
    if (shouldValidate) {
      console.log("** here...", fields);
      console.log("formValues..", formValues);

      let form_errors = getFormErrors(fields, formValues);

      console.log("** ", form_errors);
      let valid_form = !Object.values(form_errors).some((val) => val !== "");

      setErrors(form_errors);
      console.log("** setting variant form errors to ", form_errors);

      formsErrors[index] = form_errors;
      setFormsErrors(formsErrors);
    }
  }, [shouldValidate]);

  return (
    <div className="mt-5">
      <Typography sx={{ fontWeight: "bold" }}>
        {" "}
        {"Variation " + (index + 1)}
      </Typography>
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
      <hr className="border-spacing-5" />
    </div>
  );
};

export default VariationsForm;
