import { useEffect, useState } from "react";
import cogoToast from "cogo-toast";
import moment from "moment";
import Navbar from "../../Shared/Navbar";
import MyButton from "../../Shared/Button";
import RenderInput from "../../../utils/RenderInput";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
import useCancellablePromise from "../../../Api/cancelRequest";
import { getCall, postCall, putCall } from "../../../Api/axios";
import useForm from "../../../hooks/useForm";
import { containsOnlyNumbers } from "../../../utils/formatting/string";
import BackNavigationButton from "../../Shared/BackNavigationButton";
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
} from "../../../utils/constants";
import { isAmountValid, isNumberOnly } from "../../../utils/validations";
import {
  allProductFieldDetails,
  categoryFields,
  productDetailsFields,
  variationCommonFields,
} from "./product-fields";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddVariants from "./AddVariants";
import AddVitalInfo from "./AddVitalInfo";

const AddGenericProduct = ({
  state,
  category,
  subCategory,
  categoryForm,
  selectedVariantNames,
  variants,
}) => {
  const navigate = useNavigate();
  const hasVariants = selectedVariantNames.length > 0;
  const [fields, setFields] = useState(allProductFieldDetails);
  const [focusedField, setFocusedField] = useState("");
  const { cancellablePromise } = useCancellablePromise();
  const [productInfoFields, setProductInfoFields] = useState([]);

  const [variantFields, setVariantFields] = useState([]);
  const [variantInitialValues, setVariantInitialValues] = useState({});
  const [variantForms, setVariantForms] = useState([]);
  const [variantFormsErrors, setVariantFormsErrors] = useState([]);

  const [vitalForm, setVitalForm] = useState({});
  const [vitalFormErrors, setVitalFormErrors] = useState({});
  const [vitalFields, setVitalFields] = useState([]);
  const [tabErrors, setTabErrors] = useState([true, true, true]);
  const [formValidate, setFormValidate] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);

  const [tabValue, setTabValue] = useState("1");


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

  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...initialValues,
  });

  useEffect(() => {
    //User is typing something, set form validation to false
    setFormValidate(false);
  }, [formValues, variantForms, vitalForm]);

  useEffect(() => {
    if (!tabErrors.includes(true)) {
      // When there is no error in any tab
      state?.productId ? updateProduct() : addProduct();
    } else {
      // if (Object.keys(errors).length > 0) {
      //   cogoToast.error("Please enter details for all required fields!");
      // }
    }
  }, [tabErrors]);

  useEffect(() => {
    if (formValidate) {
      validate();
    }
  }, [formValidate]);


  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const addProduct = async () => {
    try {
      let product_data = Object.assign({}, formValues, categoryForm.formValues);
      let vital_data = Object.assign({}, vitalForm);
      let variant_data = Object.assign({}, variantForms);
      let api_url = hasVariants
        ? "/api/v1/productWithVariant"
        : "/api/v1/products";

      const subCatList =
        PRODUCT_SUBCATEGORY[categoryForm.formValues?.productCategory];
      const selectedSubCatObject = subCatList.find(
        (subitem) =>
          subitem.value === categoryForm.formValues?.productSubcategory1
      );
      if (selectedSubCatObject && selectedSubCatObject.protocolKey) {
        const hiddenFields =
          FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY[
            selectedSubCatObject.protocolKey
          ];
        hiddenFields.forEach((field) => {
          delete product_data[field];
        });
      } else {
      }

      // Create a duration object with the hours you want to convert
      const duration = moment.duration(
        parseInt(product_data.returnWindow),
        "hours"
      );

      // Format the duration in ISO 8601 format
      const iso8601 = duration.toISOString();
      product_data.returnWindow = iso8601;
      product_data.isCancellable =
        product_data.isCancellable === "true" ? true : false;
      product_data.isReturnable =
        product_data.isReturnable === "true" ? true : false;
      product_data.isVegetarian =
        product_data.isVegetarian === "true" ? true : false;
      product_data.availableOnCod =
        product_data.availableOnCod === "true" ? true : false;

      delete product_data["uploaded_urls"];

      let data = {
        commonDetails: product_data,
        attributesValues: vital_data,
      };

      if (hasVariants) {
        data["variantSpecificDetails"] = variant_data;
      }

      await cancellablePromise(postCall(api_url, data));
      cogoToast.success("Product added successfully!");
      navigate("/application/inventory");
    } catch (error) {
      cogoToast.error(error.response.data.error);
    }
  };

  const getProduct = () => {
    getCall(`/api/v1/products/${state.productId}`)
      .then((resp) => {
        resp["uploaded_urls"] = resp?.images?.map((i) => i?.url) || [];
        resp["images"] = resp?.images?.map((i) => i?.path) || [];

        resp.isCancellable = resp.isCancellable ? "true" : "false";
        resp.isReturnable = resp.isReturnable ? "true" : "false";
        resp.isVegetarian = resp.isVegetarian ? "true" : "false";
        resp.availableOnCod = resp.availableOnCod ? "true" : "false";

        // Create a duration object from the ISO 8601 string
        const duration = moment.duration(resp.returnWindow);

        // Get the number of hours from the duration object
        const hours = duration.asHours();
        resp.returnWindow = String(hours);
        setFormValues({ ...resp });
      })
      .catch((error) => {
        cogoToast.error("Something went wrong!");
        console.log(error.response);
      });
  };

  const updateProduct = async () => {
    // id will be dynamic after schema changes
    try {
      let data = Object.assign({}, formValues);
      const subCatList = PRODUCT_SUBCATEGORY[formValues?.productCategory];
      const selectedSubCatObject = subCatList.find(
        (subitem) => subitem.value === formValues?.productSubcategory1
      );
      if (selectedSubCatObject && selectedSubCatObject.protocolKey) {
        const hiddenFields =
          FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY[
            selectedSubCatObject.protocolKey
          ];
        hiddenFields.forEach((field) => {
          delete data[field];
        });
      } else {
      }

      // Create a duration object with the hours you want to convert
      const duration = moment.duration(parseInt(data.returnWindow), "hours");

      // Format the duration in ISO 8601 format
      const iso8601 = duration.toISOString();
      data.returnWindow = iso8601;

      delete data["__v"];
      delete data["_id"];
      delete data["organization"];
      delete data["createdAt"];
      delete data["updatedAt"];
      delete data["published"];
      delete data["uploaded_urls"];
      await putCall(`/api/v1/products/${state.productId}`, data);
      cogoToast.success("Product updated successfully!");
      navigate("/application/inventory");
    } catch (error) {
      cogoToast.error("Something went wrong!");
      console.log(error);
    }
  };

  const getProductFieldDetails = (category_id) => {
    return fields.find((field) => field.id === category_id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (state?.productId) {
      getProduct();
    }
  }, []);

  useEffect(() => {
    if (formValues?.productCategory) {
      let data = [...fields]; // Create a copy of the fields array
      const subCategoryIndex = data.findIndex(
        (item) => item.id === "productSubcategory1"
      );
      data[subCategoryIndex].options =
        PRODUCT_SUBCATEGORY[formValues?.productCategory];

      const vegetarianIndex = data.findIndex(
        (item) => item.id === "isVegetarian"
      );
      if (formValues.productCategory === "f_and_b") {
        const imagesIndex = data.findIndex((item) => item.id === "images");
        data[imagesIndex].required = false;
        if (vegetarianIndex !== -1) {
          data[vegetarianIndex].required = true;
        }
      } else {
        const imagesIndex = data.findIndex((item) => item.id === "images");
        data[imagesIndex].required = true;
        if (vegetarianIndex !== -1) {
          data[vegetarianIndex].required = false;
        }
      }

      setFields(data);
    }
  }, [formValues]);

  useEffect(() => {
    if (!hasVariants) {
      setTabErrors((prevState) => {
        prevState[2] = false;
        return prevState;
      });
    }

    let product_info_field_names = hasVariants
      ? productDetailsFields
      : [...productDetailsFields, ...variationCommonFields];
    setProductInfoFields(product_info_field_names);

    let vital_fields = variants.filter(
      (variant) => !selectedVariantNames.includes(variant.name)
    );
    setVitalFields(vital_fields);

    let default_variant_fields = variationCommonFields.map((field_id) =>
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
    let all_variant_fields = [...formatted_variants, ...default_variant_fields];
    let variant_initial_values = all_variant_fields.reduce((acc, field) => {
      acc[field.id] = field.id === "images" ? [] : "";
      return acc;
    }, {});
    setVariantFields(all_variant_fields);
    setVariantInitialValues(variant_initial_values);
  }, [selectedVariantNames]);

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
    formErrors.HSNCode =
      formValues?.HSNCode?.trim() === ""
        ? "HSN code is not allowed to be empty"
        : formValues?.HSNCode.length > MAX_STRING_LENGTH_8
        ? `Cannot be more than ${MAX_STRING_LENGTH_8} characters`
        : "";
    formErrors.GST_Percentage =
      formValues?.GST_Percentage === "" ? "GST percentage is required" : "";
    formErrors.quantity = !formValues?.quantity
      ? "Please enter a valid Quantity"
      : !isNumberOnly(formValues?.quantity)
      ? "Please enter only digit"
      : "";
    formErrors.barcode = !formValues?.barcode
      ? "Please enter a valid Barcode"
      : !isNumberOnly(formValues?.barcode)
      ? "Please enter only digit"
      : formValues?.barcode?.length > MAX_STRING_LENGTH_12
      ? `Cannot be more than ${MAX_STRING_LENGTH_12} characters`
      : "";
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
        : formValues?.returnWindow?.length > MAX_STRING_LENGTH_3
        ? `Cannot be more than ${MAX_STRING_LENGTH_3} characters`
        : "";
    formErrors.manufacturerName =
      formValues?.manufacturerName?.trim() === ""
        ? "Manufacturer name is required"
        : formValues?.manufacturerName?.length > MAX_STRING_LENGTH_50
        ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
        : "";
    formErrors.manufacturedDate =
      formValues?.manufacturedDate?.trim() === ""
        ? "Manufactured date is required"
        : "";
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
        : formValues?.commonOrGenericNameOfCommodity?.length >
          MAX_STRING_LENGTH_50
        ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
        : "";
    formErrors.monthYearOfManufacturePackingImport =
      formValues?.monthYearOfManufacturePackingImport?.trim() === ""
        ? "Month year of manufacture packing import is required"
        : formValues?.monthYearOfManufacturePackingImport?.length >
          MAX_STRING_LENGTH
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
    if (!hasVariants) {
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
      formErrors.images =
        formValues?.productCategory !== "f_and_b" &&
        formValues?.images.length < 1
          ? "At least one image is required"
          : "";
    }

    if (formValues?.productCategory) {
      const subCatList = PRODUCT_SUBCATEGORY[formValues?.productCategory];
      const selectedSubCatObject = subCatList.find(
        (subitem) => subitem.value === formValues?.productSubcategory1
      );
      if (selectedSubCatObject && selectedSubCatObject.protocolKey) {
        const hiddenFields =
          FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY[
            selectedSubCatObject.protocolKey
          ];
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

    let valid_form = !Object.values(formErrors).some((val) => val !== "");

    tabErrors[0] = !valid_form;
    setTabErrors((prev_state) => {
      prev_state[0] = !valid_form;
      return [...prev_state];
    });
    if (!valid_form) {
      setFormValidate(false);
    }
  };

  const handleSubmit = () => {
    setFormValidate(true);
    setSubmitClicked(true);
  };

  const renderVariationsFields = () => {
    return (
      <AddVariants
        category={category}
        subCategory={subCategory}
        variants={variants}
        selectedVariantNames={selectedVariantNames}
        variantFields={variantFields}
        variantInitialValues={variantInitialValues}
        variantForms={variantForms}
        setVariantForms={setVariantForms}
        variantFormsErrors={variantFormsErrors}
        setVariantFormsErrors={setVariantFormsErrors}
        shouldValidate={formValidate}
        setTabErrors={setTabErrors}
        setFormValidate={setFormValidate}
      />
    );
  };

  const renderProductInfoFields = () => {
    return productInfoFields.map((category_id) => {
      let item = getProductFieldDetails(category_id);
      let returnElement = true;
      if (formValues?.productSubcategory1) {
        const subCatList = PRODUCT_SUBCATEGORY[formValues?.productCategory];
        const selectedSubCatObject = subCatList?.find(
          (subitem) => subitem.value === formValues?.productSubcategory1
        );
        if (selectedSubCatObject && selectedSubCatObject.protocolKey) {
          const hiddenFields =
            FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY[
              selectedSubCatObject.protocolKey
            ];
          const fielditemAvailableInHidden = hiddenFields.find(
            (hiddenItem) => hiddenItem === item.id
          );
          if (fielditemAvailableInHidden) {
            returnElement = false;
          }
        }
      } else {
      }
      if (returnElement) {
        return (
          <RenderInput
            previewOnly={
              state?.productId && item.id === "productCode" ? true : false
            }
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

  const renderProductVitalFields = () => {
    return (
      <AddVitalInfo
        selectedVariantNames={selectedVariantNames}
        vitalForm={vitalForm}
        setVitalForm={setVitalForm}
        vitalFormErrors={vitalFormErrors}
        setVitalFormErrors={setVitalFormErrors}
        vitalFields={vitalFields}
        shouldValidate={formValidate}
        setFormValidate={setFormValidate}
        tabErrors={tabErrors}
        setTabErrors={setTabErrors}
      />
    );
  };

  useEffect(() => {
    if (!formValidate) {
      let formErrors = {};

      if (
        formValues[focusedField]?.trim() !== "" &&
        focusedField === "manufacturerOrPackerName"
      ) {
        formErrors.manufacturerOrPackerName =
          formValues?.manufacturerOrPackerName?.trim() === ""
            ? "Manufacturer or packer name is required"
            : formValues?.manufacturerOrPackerName.length > MAX_STRING_LENGTH_50
            ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
            : "";
      } else if (
        formValues[focusedField]?.trim() !== "" &&
        focusedField === "manufacturerOrPackerAddress"
      ) {
        formErrors.manufacturerOrPackerAddress =
          formValues?.manufacturerOrPackerAddress?.trim() === ""
            ? "Manufacturer or packer address is required"
            : formValues?.manufacturerOrPackerAddress.length >
              MAX_STRING_LENGTH_50
            ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
            : "";
      } else if (
        formValues[focusedField]?.trim() !== "" &&
        focusedField === "commonOrGenericNameOfCommodity"
      ) {
        formErrors.description =
          formValues?.description?.trim() === ""
            ? "Short description cannot be empty"
            : formValues?.commonOrGenericNameOfCommodity.length >
              MAX_STRING_LENGTH_50
            ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
            : "";
      } else if (
        formValues[focusedField]?.trim() !== "" &&
        focusedField === "description"
      ) {
        formErrors.description =
          formValues?.description?.trim() === ""
            ? "Short description is required"
            : formValues?.description?.length > MAX_STRING_LENGTH
            ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
            : "";
      }
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...formErrors,
      }));
    } else {
      validate();
    }
  }, [formValues, focusedField]);

  let highlightedTabColor = tabErrors.includes(true) ? "error" : "primary";

  return (
    <form>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleTabChange}
              textColor={highlightedTabColor}
              centered
            >
              <Tab
                sx={{
                  color:
                    tabErrors[0] && Object.keys(errors).length > 0
                      ? "red"
                      : "none",
                }}
                label="Product Info"
                value="1"
                // textColor={tabErrors[0] ? "error" : "none"}
                // indicatorColor="secondary"
              />
              <Tab
                sx={{
                  color:
                    tabErrors[1] && Object.keys(errors).length > 0
                      ? "red"
                      : "none",
                }}
                label="Vital Info"
                value="2"
              />
              {selectedVariantNames.length > 0 && (
                <Tab
                  sx={{
                    color:
                      tabErrors[2] && Object.keys(errors).length > 0
                        ? "red"
                        : "none",
                  }}
                  label="Variations"
                  value="3"
                />
              )}
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="mt-2">{renderProductInfoFields()}</div>
          </TabPanel>
          <TabPanel value="2">
            <div className="mt-2">{renderProductVitalFields()}</div>
          </TabPanel>
          <TabPanel value="3">{renderVariationsFields()}</TabPanel>
        </TabContext>
      </Box>

      <div className="flex flex-row justify-center py-2 sm:pt-5 md:!mt-10">
        <MyButton
          type="button"
          title={state?.productId ? "Update Product" : "ADD PRODUCT"}
          variant="contained"
          className="!ml-5"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default AddGenericProduct;
