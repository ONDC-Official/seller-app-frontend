import MyButton from "../../Shared/Button";
import VarinatForm from "./VariantForm";
import { v4 as uuidv4 } from "uuid";

const AddVariants = ({
  variantFields,
  variantInitialValues,
  variantForms,
  setVariantForms,
  shouldValidate,
  variantFormsErrors,
}) => {
  const addNewVariationForm = () => {
    setVariantForms([...variantForms, { ...variantInitialValues, formKey: uuidv4() }]);
  };

  const handleOnVariantFormUpdate = (index, formValues) => {
    variantForms[index] = formValues;
    setVariantForms([...variantForms]);
  };

  const handleRemoveForm = (i) => {
    variantForms.splice(i, 1);
    setVariantForms([...variantForms]);
    variantFormsErrors.splice(i, 1);
  };

  const renderForms = () => {
    return variantForms.map((form, i) => {
      return (
        <VarinatForm
          key={form.formKey}
          index={i}
          formData={form}
          fields={variantFields}
          onFormUpdate={handleOnVariantFormUpdate}
          shouldValidate={shouldValidate}
          formsErrors={variantFormsErrors}
          removeForm={handleRemoveForm}
        />
      );
    });
  };

  return (
    <>
      {renderForms()}
      <MyButton type="button" title="Add Variation" className="text-black" onClick={() => addNewVariationForm()} />
    </>
  );
};

export default AddVariants;
