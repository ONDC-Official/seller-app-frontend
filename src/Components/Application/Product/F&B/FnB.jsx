import React, { useEffect, useState } from "react";

import MyButton from "../../../Shared/Button";
import useForm from "../../../../hooks/useForm";
import CustomizationRenderer from "./CustomizationRenderer";
import { isAmountValid, isNumberOnly } from "../../../../utils/validations";
import {
  PRODUCT_SUBCATEGORY,
  FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY,
  MAX_STRING_LENGTH,
  MAX_STRING_LENGTH_50,
  MAX_STRING_LENGTH_14,
  MAX_STRING_LENGTH_3,
  MAX_STRING_LENGTH_6,
  MAX_STRING_LENGTH_10,
  MAX_STRING_LENGTH_13,
  MAX_STRING_LENGTH_8,
  MAX_STRING_LENGTH_12,
} from "../../../../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";

const FnB = (props) => {
  const { customizationGroups, setCustomizationGroups, customizations, setCustomizations } = props;

  const initialValues = {
    productCode: "",
    productName: "",
    MRP: "",
    retailPrice: "",
    purchasePrice: "",
    HSNCode: "",
    GST_Percentage: "",
    quantity: "",
    barcode: "",
    maxAllowedQty: "",
    UOM: "",
    packQty: "",
    length: "",
    breadth: "",
    height: "",
    weight: "",
    returnWindow: "",
    manufacturerName: "",
    manufacturedDate: "",
    nutritionalInfo: "",
    additiveInfo: "",
    instructions: "",
    longDescription: "",
    description: "",
    isReturnable: "false",
    isVegetarian: "false",
    isCancellable: "false",
    availableOnCod: "false",
    images: [],
    manufacturerOrPackerName: "",
    manufacturerOrPackerAddress: "",
    commonOrGenericNameOfCommodity: "",
    monthYearOfManufacturePackingImport: "",
    importerFSSAILicenseNo: "",
    brandOwnerFSSAILicenseNo: "",
  };

  const navigate = useNavigate();
  const { state } = useLocation();
  const { formValues, setFormValues, errors, setErrors } = useForm({ ...initialValues });
  const [formSubmitted, setFormSubmited] = useState(false);

  const validate = () => {
    let formErrors = {};
    formErrors.productCode =
      formValues?.productCode?.trim() === ""
        ? "Product code is not allowed to be empty"
        : !isNumberOnly(formValues?.productCode)
        ? "Please enter only digit"
        : formValues?.productCode?.length > MAX_STRING_LENGTH_13
        ? `Cannot be more than ${MAX_STRING_LENGTH_13} characters`
        : "";
    formErrors.productName =
      formValues?.productName?.trim() === ""
        ? "Product name is not allowed to be empty"
        : formValues?.productName?.length > MAX_STRING_LENGTH
        ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
        : "";
    formErrors.MRP = !formValues?.MRP
      ? "Please enter a valid number"
      : !isAmountValid(formValues?.MRP)
      ? "Please enter only digit"
      : "";
    formErrors.retailPrice = !formValues?.retailPrice
      ? "Please enter a valid number"
      : !isAmountValid(formValues?.retailPrice)
      ? "Please enter only digit"
      : "";
    formErrors.purchasePrice = !formValues?.purchasePrice
      ? "Please enter a valid number"
      : !isAmountValid(formValues?.purchasePrice)
      ? "Please enter only digit"
      : "";
    formErrors.HSNCode =
      formValues?.HSNCode?.trim() === ""
        ? "HSN code is not allowed to be empty"
        : formValues?.HSNCode.length > MAX_STRING_LENGTH_8
        ? `Cannot be more than ${MAX_STRING_LENGTH_8} characters`
        : "";
    formErrors.GST_Percentage = formValues?.GST_Percentage === "" ? "GST percentage is required" : "";

    formErrors.maxAllowedQty = !formValues?.maxAllowedQty
      ? "Please enter a valid Max. Allowed Quantity"
      : formValues?.maxAllowedQty?.length > MAX_STRING_LENGTH_10
      ? `Cannot be more than ${MAX_STRING_LENGTH_10} characters`
      : parseInt(formValues?.maxAllowedQty) > parseInt(formValues?.quantity)
      ? "Cannot be more than quantity"
      : "";
    formErrors.UOM =
      formValues?.UOM?.trim() === ""
        ? "UOM is required"
        : formValues?.UOM?.length > MAX_STRING_LENGTH
        ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
        : "";
    formErrors.packQty = !formValues?.packQty
      ? "Please enter a valid Measurement Quantity"
      : !isNumberOnly(formValues?.packQty)
      ? "Please enter only digit"
      : "";
    formErrors.length =
      formValues?.length?.trim() === ""
        ? "Length is required"
        : formValues?.length.length > MAX_STRING_LENGTH_6
        ? `Cannot be more than ${MAX_STRING_LENGTH_6} characters`
        : "";
    formErrors.breadth =
      formValues?.breadth?.trim() === ""
        ? "Breadth is required"
        : formValues?.breadth.length > MAX_STRING_LENGTH_6
        ? `Cannot be more than ${MAX_STRING_LENGTH_6} characters`
        : "";
    formErrors.height =
      formValues?.height?.trim() === ""
        ? "Height is required"
        : formValues?.height.length > MAX_STRING_LENGTH_6
        ? `Cannot be more than ${MAX_STRING_LENGTH_6} characters`
        : "";
    formErrors.weight =
      formValues?.weight?.trim() === ""
        ? "Weight is required"
        : formValues?.weight.length > MAX_STRING_LENGTH_3
        ? `Cannot be more than ${MAX_STRING_LENGTH_3} characters`
        : "";
    formErrors.returnWindow =
      formValues?.returnWindow?.trim() === ""
        ? "Return window is required"
        : !isNumberOnly(formValues?.returnWindow)
        ? "Please enter only digit"
        : formValues?.returnWindow.length > MAX_STRING_LENGTH_3
        ? `Cannot be more than ${MAX_STRING_LENGTH_3} characters`
        : "";
    formErrors.manufacturerName =
      formValues?.manufacturerName?.trim() === ""
        ? "Manufacturer name is required"
        : formValues?.manufacturerName?.length > MAX_STRING_LENGTH_50
        ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
        : "";
    formErrors.manufacturedDate = formValues?.manufacturedDate?.trim() === "" ? "Manufactured date is required" : "";
    formErrors.nutritionalInfo =
      formValues?.nutritionalInfo?.trim() === ""
        ? "Nutritional info is required"
        : formValues?.nutritionalInfo?.length > MAX_STRING_LENGTH
        ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
        : "";
    formErrors.additiveInfo =
      formValues?.additiveInfo?.trim() === ""
        ? "Additive info is required"
        : formValues?.additiveInfo?.length > MAX_STRING_LENGTH
        ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
        : "";
    formErrors.instructions =
      formValues?.instructions?.trim() === ""
        ? "Instruction is required"
        : formValues?.instructions?.length > MAX_STRING_LENGTH
        ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
        : "";
    formErrors.longDescription =
      formValues?.longDescription?.trim() === ""
        ? "Long description is required"
        : formValues?.longDescription?.length > MAX_STRING_LENGTH
        ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
        : "";
    formErrors.description =
      formValues?.description?.trim() === ""
        ? "Short description is required"
        : formValues?.description?.length > MAX_STRING_LENGTH
        ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
        : "";

    formErrors.images = formValues?.images.length < 1 ? "At least one image is required" : "";

    formErrors.manufacturerOrPackerName =
      formValues?.manufacturerOrPackerName?.trim() === ""
        ? "Manufacturer or packer name is required"
        : formValues?.manufacturerOrPackerName.length > MAX_STRING_LENGTH_50
        ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
        : "";
    formErrors.manufacturerOrPackerAddress =
      formValues?.manufacturerOrPackerAddress?.trim() === ""
        ? "Manufacturer or packer address is required"
        : formValues?.manufacturerOrPackerAddress.length > MAX_STRING_LENGTH_50
        ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
        : "";
    formErrors.commonOrGenericNameOfCommodity =
      formValues?.commonOrGenericNameOfCommodity?.trim() === ""
        ? "Common or generic name of commodity is required"
        : formValues?.commonOrGenericNameOfCommodity.length > MAX_STRING_LENGTH_50
        ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
        : "";
    formErrors.monthYearOfManufacturePackingImport =
      formValues?.monthYearOfManufacturePackingImport?.trim() === ""
        ? "Month year of manufacture packing import is required"
        : formValues?.monthYearOfManufacturePackingImport.length > MAX_STRING_LENGTH
        ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
        : "";
    formErrors.importerFSSAILicenseNo =
      formValues?.importerFSSAILicenseNo?.trim() === ""
        ? "Importer FSSAI license no is required"
        : !isNumberOnly(formValues?.importerFSSAILicenseNo)
        ? "Please enter only digit"
        : formValues?.importerFSSAILicenseNo?.length > MAX_STRING_LENGTH_14
        ? `Cannot be more than ${MAX_STRING_LENGTH_14} characters`
        : "";
    formErrors.brandOwnerFSSAILicenseNo =
      formValues?.brandOwnerFSSAILicenseNo?.trim() === ""
        ? "Brand owner FSSAI license no is required"
        : !isNumberOnly(formValues?.brandOwnerFSSAILicenseNo)
        ? "Please enter only digit"
        : formValues?.brandOwnerFSSAILicenseNo?.length > MAX_STRING_LENGTH_14
        ? `Cannot be more than ${MAX_STRING_LENGTH_14} characters`
        : "";

    if (formValues?.productCategory) {
      const subCatList = PRODUCT_SUBCATEGORY[formValues?.productCategory];
      const selectedSubCatObject = subCatList.find((subitem) => subitem.value === formValues?.productSubcategory1);
      if (selectedSubCatObject && selectedSubCatObject.protocolKey) {
        const hiddenFields = FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY[selectedSubCatObject.protocolKey];
        hiddenFields.forEach((field) => {
          formErrors[field] = "";
        });
      } else {
      }
    } else {
    }

    setErrors({
      ...formErrors,
    });
    return !Object.values(formErrors).some((val) => val !== "");
  };

  const handleSubmit = () => {
    setFormSubmited(true);
    if (validate()) {
      //   add product with customization detail
    }
  };

  useEffect(() => {
    if (!formSubmitted) return;
    validate();
  }, [formValues]);

  return (
    <>
      <form>
        <CustomizationRenderer
          customizationGroups={customizationGroups}
          setCustomizationGroups={setCustomizationGroups}
          customizations={customizations}
          setCustomizations={setCustomizations}
        />
        <div className="flex flex-row justify-center py-2 sm:pt-5 md:!mt-10">
          <MyButton
            type="button"
            title="CANCEL"
            className="text-black"
            onClick={() => navigate("/application/inventory")}
          />
          <MyButton
            type="button"
            title={state?.productId ? "Update Product" : "ADD PRODUCT"}
            variant="contained"
            className="!ml-5"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default FnB;
