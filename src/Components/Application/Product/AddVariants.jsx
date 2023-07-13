import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { allProperties } from "./categoryProperties";
import MyButton from "../../Shared/Button";
import VariationsForm from "./VariationsForm";

import {
  allProductFieldDetails,
  variationCommonFields,
} from "./product-fields";
import useForm from "../../../hooks/useForm";
import { IntegrationInstructions } from "@mui/icons-material";

const AddVariants = ({
  category,
  subCategory,
  variants,
  selectedVariantNames,
  variantForms,
  setVariantForms,
  shouldValidate
}) => {
  const [fields, setFields] = useState([]);
  const [initialValues, setInitialValues] = useState({});

  const getProductFieldDetails = (field_id) => {
    return allProductFieldDetails.find((field) => field.id === field_id);
  };

  useEffect(() => {
    let default_fields = variationCommonFields.map((field_id) =>
      getProductFieldDetails(field_id)
    );
    let selected_variants = variants.filter((variant) =>
      selectedVariantNames.includes(variant.name)
    );
    let formatted_variants = selected_variants.map((variant) => {
      return {
        id: variant.name,
        title: variant.name,
        placeholder: "Example, " + variant.example,
        type: "input" || variant.type,
        required: true,
      };
    });
    let all_fields = [...formatted_variants, ...default_fields];
    let initial_values = all_fields.reduce((acc, field) => {
      acc[field.id] = field.id === "images" ? [] : "";
      return acc;
    }, {});
    setFields(all_fields);
    setInitialValues(initial_values);

    console.log(variationCommonFields);
    console.log(allProductFieldDetails);
  }, [selectedVariantNames]);

  console.log(fields);
  console.log(initialValues);

  const handleVariationButtonClick = () => {
    setVariantForms([...variantForms, initialValues]);
  };

  const handleOnVariantFormUpdate = (index, formValues) => {
    variantForms[index] = formValues;
    setVariantForms(variantForms);
  };

  const renderForms = () => {
    console.log(2);
    return variantForms.map((form, i) => {
      return (
        <VariationsForm
          index={i}
          formData={form}
          fields={fields}
          onFormUpdate={handleOnVariantFormUpdate}
          shouldValidate={shouldValidate}
        />
      );
    });
  };

  return (
    <>
      {renderForms()}
      <MyButton
        type="button"
        title="Add Variation"
        className="text-black"
        onClick={() => handleVariationButtonClick()}
      />
    </>
  );
};

export default AddVariants;
