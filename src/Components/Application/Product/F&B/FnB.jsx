import React, { useEffect, useState } from "react";
import MyButton from "../../../Shared/Button";
import useForm from "../../../../hooks/useForm";
import CustomizationRenderer from "./CustomizationRenderer";
import { isAmountValid, isNumberOnly } from "../../../../utils/validations";
import { useLocation, useNavigate } from "react-router-dom";
import AddProductInfo from "../AddProductInfo";
import {
  UOMVariationFields,
  allProductFieldDetails,
  productDetailsFields,
  variationCommonFields,
} from "../product-fields";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
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
import moment from "moment";
import cogoToast from "cogo-toast";
import { getCall, postCall, putCall } from "../../../../Api/axios";
import useCancellablePromise from "../../../../Api/cancelRequest";
import { allProperties } from "../categoryProperties";

const FnB = (props) => {
  const { category, subCategory } = props;

  const navigate = useNavigate();
  const { state } = useLocation();
  const [allFields, setAllFields] = useState(allProductFieldDetails);
  const [focusedField, setFocusedField] = useState("");

  const [customizationGroups, setCustomizationGroups] = useState([]);
  const [customizations, setCustomizations] = useState([]);

  const [tabValue, setTabValue] = useState("1");
  const [tabErrors, setTabErrors] = useState([true]);
  const { cancellablePromise } = useCancellablePromise();

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
    isReturnable: "",
    isVegetarian: "",
    isCancellable: "",
    availableOnCod: "",
    images: [],
    manufacturerOrPackerName: "",
    manufacturerOrPackerAddress: "",
    commonOrGenericNameOfCommodity: "",
    monthYearOfManufacturePackingImport: "",
    importerFSSAILicenseNo: "",
    brandOwnerFSSAILicenseNo: "",
  };

  const productInfoForm = useForm({
    ...initialValues,
  });

  const { formValues, setFormValues, errors, setErrors } = productInfoForm;

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const getCustomizationGroupName = (groupId) => {
    const group = customizationGroups.find((group) => group.id === groupId);
    return group ? group.name : "";
  };

  const getCustomizationName = (customizationId) => {
    const customization = customizations.find((customization) => customization.id === customizationId);
    return customization ? customization.name : "";
  };

  const validateProductInfoForm = () => {
    const selectedCustomizations = customizations.filter((customization) => customization.parent);

    if (customizationGroups.length > 0) {
      // Validation check: If customization groups are present, check that all groups have at least one customization.
      const groupIdsWithCustomizations = new Set(selectedCustomizations.map((customization) => customization.parent));
      const groupIds = new Set(customizationGroups.map((group) => group.id));

      if (groupIdsWithCustomizations.size < groupIds.size) {
        const missingGroups = [...groupIds].filter((groupId) => !groupIdsWithCustomizations.has(groupId));
        const missingGroupNames = missingGroups.map((groupId) => getCustomizationGroupName(groupId));
        cogoToast.error(`Please add at least one customization for groups: ${missingGroupNames.join(", ")}.`);
        return;
      }
    }

    // Validation check: If any customization has no child property, it must have a price value greater than 0.
    const invalidCustomizations = selectedCustomizations.filter(
      (customization) => !customization.child && (!customization.price || customization.price <= 0)
    );

    if (invalidCustomizations.length > 0) {
      const errorMessages = invalidCustomizations.map((customization) => {
        const groupName = getCustomizationGroupName(customization.parent);
        const customizationName = getCustomizationName(customization.id);
        return `${groupName} [${customizationName}]`;
      });

      cogoToast.error(
        `Customizations with the following details must have a price greater than 0: ${errorMessages.join(", ")}.`
      );
      return;
    }

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
    formErrors.HSNCode =
      formValues?.HSNCode?.trim() === ""
        ? "HSN code is not allowed to be empty"
        : formValues?.HSNCode?.length > MAX_STRING_LENGTH_8
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
    formErrors.UOM = formValues?.UOM === "" ? "UOM unit is required" : "";
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
        : formValues?.returnWindow?.length > MAX_STRING_LENGTH_3
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
    formErrors.manufacturerOrPackerName =
      formValues?.manufacturerOrPackerName?.trim() === ""
        ? "Manufacturer or packer name is required"
        : formValues?.manufacturerOrPackerName?.length > MAX_STRING_LENGTH_50
        ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
        : "";
    formErrors.manufacturerOrPackerAddress =
      formValues?.manufacturerOrPackerAddress?.trim() === ""
        ? "Manufacturer or packer address is required"
        : formValues?.manufacturerOrPackerAddress?.length > MAX_STRING_LENGTH_50
        ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
        : "";
    formErrors.commonOrGenericNameOfCommodity =
      formValues?.commonOrGenericNameOfCommodity?.trim() === ""
        ? "Common or generic name of commodity is required"
        : formValues?.commonOrGenericNameOfCommodity?.length > MAX_STRING_LENGTH_50
        ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
        : "";
    formErrors.monthYearOfManufacturePackingImport =
      formValues?.monthYearOfManufacturePackingImport?.trim() === ""
        ? "Month year of manufacture packing import is required"
        : formValues?.monthYearOfManufacturePackingImport?.length > MAX_STRING_LENGTH
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
      const selectedSubCatObject = subCatList?.find((subitem) => subitem.value === formValues?.productSubcategory1);
      if (selectedSubCatObject && selectedSubCatObject.protocolKey) {
        const hiddenFields = FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY[selectedSubCatObject.protocolKey];
        hiddenFields?.forEach((field) => {
          formErrors[field] = "";
        });
      } else {
      }
    } else {
    }

    setErrors({
      ...formErrors,
    });

    let valid_form = !Object.values(formErrors).some((val) => val !== "");

    return valid_form;
  };

  const validate = () => {
    let product_info_form_validity = validateProductInfoForm();

    setTabErrors((prev_state) => {
      prev_state[0] = !product_info_form_validity;
      return [...prev_state];
    });

    return product_info_form_validity;
  };

  const getProduct = () => {
    getCall(`/api/v1/products/${state?.productId}`)
      .then((resp) => {
        resp.commonDetails["uploaded_urls"] = resp?.commonDetails.images?.map((i) => i?.url) || [];
        resp.commonDetails["images"] = resp?.commonDetails.images?.map((i) => i?.path) || [];

        resp.commonDetails.isCancellable = resp.commonDetails.isCancellable ? "true" : "false";
        resp.commonDetails.isReturnable = resp.commonDetails.isReturnable ? "true" : "false";
        resp.commonDetails.isVegetarian = resp.commonDetails.isVegetarian ? "true" : "false";
        resp.commonDetails.availableOnCod = resp.commonDetails.availableOnCod ? "true" : "false";

        // Create a duration object from the ISO 8601 string
        const duration = moment.duration(resp.returnWindow);

        // Get the number of hours from the duration object
        const hours = duration.asHours();
        resp.commonDetails.returnWindow = String(hours);

        setFormValues({ ...resp.commonDetails });
        setCustomizationGroups(resp.customizationDetails.customizationGroups);
        setCustomizations(resp.customizationDetails.customizations);

        let category = resp.commonDetails["productCategory"];
        let sub_category = resp.commonDetails["productSubcategory1"];
        let attributes = allProperties[category][sub_category];
      })
      .catch((error) => {
        //   cogoToast.error("Something went wrong!");
        //   console.log(error.response);
      });
  };

  const addProduct = async () => {
    try {
      let product_data = Object.assign({}, formValues, productInfoForm.formValues);
      let api_url = "/api/v1/products";

      product_data.productCategory = category;

      // Create a duration object with the hours you want to convert
      const duration = moment.duration(parseInt(product_data.returnWindow), "hours");

      // Format the duration in ISO 8601 format
      const iso8601 = duration.toISOString();
      product_data.returnWindow = iso8601;
      product_data.isCancellable = product_data.isCancellable === "true" ? true : false;
      product_data.isReturnable = product_data.isReturnable === "true" ? true : false;
      product_data.isVegetarian = product_data.isVegetarian === "true" ? true : false;
      product_data.availableOnCod = product_data.availableOnCod === "true" ? true : false;

      delete product_data["uploaded_urls"];

      let data = {
        commonDetails: product_data,
        customizationDetails: {
          customizationGroups,
          customizations,
        },
      };

      console.log(data);

      await cancellablePromise(postCall(api_url, data));
      cogoToast.success("Product added successfully!");
      navigate("/application/inventory");
    } catch (error) {
      cogoToast.error(error.response.data.error);
    }
  };

  const updateProduct = async () => {
    // id will be dynamic after schema changes
    try {
      let product_data = Object.assign({}, formValues);
      const subCatList = PRODUCT_SUBCATEGORY[formValues?.productCategory];
      const selectedSubCatObject = subCatList.find((subitem) => subitem.value === formValues?.productSubcategory1);
      if (selectedSubCatObject && selectedSubCatObject.protocolKey) {
        const hiddenFields = FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY[selectedSubCatObject.protocolKey];
        hiddenFields.forEach((field) => {
          delete product_data[field];
        });
      } else {
      }

      // Create a duration object with the hours you want to convert
      const duration = moment.duration(parseInt(product_data.returnWindow), "hours");

      // Format the duration in ISO 8601 format
      const iso8601 = duration.toISOString();
      product_data.returnWindow = iso8601;

      let fields_to_remove = [
        "__v",
        "organization",
        "createdAt",
        "updatedAt",
        "published",
        "uploaded_urls",
        "createdBy",
        "_id",
        "variantGroup",
      ];

      fields_to_remove.forEach((field) => {
        delete product_data[field];
      });

      let data = {
        commonDetails: product_data,
        customizationDetails: {
          customizationGroups,
          customizations,
        },
      };

      await putCall(`/api/v1/products/${state?.productId}`, data);
      cogoToast.success("Product updated successfully!");
      navigate("/application/inventory");
    } catch (error) {
      cogoToast.error("Something went wrong!");
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (validate()) {
      state?.productId ? updateProduct() : addProduct();
    }
  };

  useEffect(() => {
    if (state?.productId) getProduct();
  }, []);

  const renderProductInfoFields = () => {
    return (
      <AddProductInfo
        allFields={allFields}
        fields={[...productDetailsFields, ...UOMVariationFields, ...variationCommonFields]}
        category={category}
        subCategory={subCategory}
        state={state}
        form={productInfoForm}
        setFocusedField={setFocusedField}
      />
    );
  };

  let highlightedTabColor = tabErrors.includes(true) ? "error" : "primary";

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} textColor={highlightedTabColor} centered>
            <Tab
              sx={{
                color: tabErrors[0] && Object.keys(errors).length > 0 ? "red" : "none",
              }}
              label="Product Info"
              value="1"
            />
            <Tab
              sx={{
                color: tabErrors[1] && Object.keys(errors).length > 0 ? "red" : "none",
              }}
              label="Customizations"
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="mt-2 mb-4">{renderProductInfoFields()}</div>
        </TabPanel>
        <TabPanel value="2">
          <CustomizationRenderer
            customizationGroups={customizationGroups}
            setCustomizationGroups={setCustomizationGroups}
            customizations={customizations}
            setCustomizations={setCustomizations}
          />
        </TabPanel>
      </TabContext>

      <div className="flex flex-row justify-center sm:pt-5 md:!mt-10">
        <MyButton
          type="button"
          title={state?.productId ? "UPDATE PRODUCT" : "ADD PRODUCT"}
          variant="contained"
          onClick={handleSubmit}
        />
      </div>
    </Box>
  );
};

export default FnB;
