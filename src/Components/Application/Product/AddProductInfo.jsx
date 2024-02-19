import { PRODUCT_SUBCATEGORY, FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY } from "../../../utils/constants";
import RenderInput from "../../../utils/RenderInput";
import { allProductFieldDetails } from "./product-fields";
import { useState } from "react";

const AddProductInfo = ({ allFields, fields, state, form, setFocusedField }) => {
  const { formValues, setFormValues, errors, setErrors } = form;

  const getProductFieldDetails = (category_id) => {
    return allFields.find((field) => field.id === category_id);
  };

  return fields?.map((category_id) => {
    let item = getProductFieldDetails(category_id);
    let returnElement = true;
    if (formValues?.productSubcategory1) {
      const subCatList = PRODUCT_SUBCATEGORY[formValues?.productCategory];
      const selectedSubCatObject = subCatList?.find((subitem) => subitem.value === formValues?.productSubcategory1);
      if (selectedSubCatObject && selectedSubCatObject.protocolKey) {
        const hiddenFields = FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY[selectedSubCatObject.protocolKey];
        const fielditemAvailableInHidden = hiddenFields.find((hiddenItem) => hiddenItem === item.id);
        if (fielditemAvailableInHidden) {
          returnElement = false;
        }
      }
    } else {
    }
    if (returnElement) {
      return (
        <RenderInput
          key={item.id}
          previewOnly={state?.productId && item.id === "productCode" ? true : false}
          item={{
            ...item,
            error: errors?.[item.id] ? true : false,
            helperText: errors?.[item.id] || "",
          }}
          state={formValues}
          stateHandler={setFormValues}
          setFocusedField={setFocusedField}
        />
      );
    } else {
      return <></>;
    }
  });
};

export default AddProductInfo;
