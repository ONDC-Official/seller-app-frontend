import { useEffect, useState } from "react";
import RenderInput from "../../../utils/RenderInput";
import useForm from "../../../hooks/useForm";
import VitalForm from "./VitalForm";

const AddVitalInfo = ({
  selectedVariantNames,
  vitalFields,
  vitalForm,
  setVitalForm,
}) => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    let vital_fields = vitalFields.map((variant) => {
      return {
        id: variant.name,
        title: variant.name,
        placeholder: "Example, " + variant.example,
        type: variant.type === "text" ? "input" : variant.type,
      };
    });
    setFields(vital_fields);

    if (Object.keys(vitalForm).length == 0) {
      let initial_values = vital_fields.reduce((acc, field) => {
        acc[field.id] = "";
        return acc;
      }, {});
      console.log("********* resetting...");

      setVitalForm(initial_values);
    }
  }, [selectedVariantNames]);

  const handleFormUpdate = (data) => {
    setVitalForm(data);
  };

  return (
    <VitalForm
      fields={fields}
      formData={vitalForm}
      onFormUpdate={handleFormUpdate}
    />
  );
};

export default AddVitalInfo;
