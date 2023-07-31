import { useEffect, useState } from "react";
import cogoToast from "cogo-toast";
import moment from "moment";
import MyButton from "../../../Shared/Button";
import { useLocation, useNavigate } from "react-router-dom";
import useCancellablePromise from "../../../../Api/cancelRequest";
import { getCall, postCall, putCall } from "../../../../Api/axios";
import useForm from "../../../../hooks/useForm";
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
import { isAmountValid, isNumberOnly } from "../../../../utils/validations";
import {
  allProductFieldDetails,
  categoryFields,
  productDetailsFields,
  variationCommonFields,
  UOMVariationFields,
} from "../product-fields";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddVariants from "./AddVariants";
import { allProperties } from "../categoryProperties";
import AddProductInfo from "../AddProductInfo";
import { getFormErrors } from "./utils";
import VitalForm from "./VitalForm";
import { v4 as uuidv4 } from "uuid";

const AddGenericProduct = ({
  state,
  category,
  subCategory,
  categoryForm,
  selectedVariantNames,
  variants,
  attributes,
  variationOn,
}) => {
  const navigate = useNavigate();
  const hasVariants = selectedVariantNames.length > 0;
  const [allFields, setAllFields] = useState(allProductFieldDetails);
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

  const productInfoForm = useForm({
    ...initialValues,
  });

  const { formValues, setFormValues, errors, setErrors } = productInfoForm;

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const formatAttributesToFieldsDataFormat = (variants) => {
    return variants.map((variant) => {
      return {
        id: variant.name,
        title: variant.name,
        placeholder: "Example, " + variant.example,
        type: "input" || variant.type,
        required: true,
      };
    });
  };

  const formattedVariantDataForAddProduct = () => {
    let variant_forms_data = [...variantForms];

    return variant_forms_data.map((variantData) => {
      if (variationOn === "attributes") {
        let variant_attrs = selectedVariantNames.reduce((acc, variant_name) => {
          acc[variant_name] = variantData[variant_name];
          delete variantData[variant_name];
          return acc;
        }, {});

        variantData["varientAttributes"] = variant_attrs;
      }
      delete variantData["formKey"];
      delete variantData["uploaded_urls"];

      return variantData;
    });
  };

  const addProduct = async () => {
    try {
      let product_data = Object.assign({}, formValues, categoryForm.formValues);
      let vital_data = Object.assign({}, vitalForm);
      let variant_data = formattedVariantDataForAddProduct();
      let api_url =
        variationOn === "none"
          ? "/api/v1/products"
          : "/api/v1/productWithVariant";

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

      if (variationOn !== "none") {
        variationCommonFields.forEach((field) => {
          delete product_data[field];
        });
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
        commonAttributesValues: vital_data,
      };

      if (variationOn !== "none") {
        data["variantSpecificDetails"] = variant_data;
        data["variationOn"] = variationOn.toUpperCase();
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
        resp.commonDetails["uploaded_urls"] =
          resp?.commonDetails.images?.map((i) => i?.url) || [];
        resp.commonDetails["images"] =
          resp?.commonDetails.images?.map((i) => i?.path) || [];

        resp.commonDetails.isCancellable = resp.commonDetails.isCancellable
          ? "true"
          : "false";
        resp.commonDetails.isReturnable = resp.commonDetails.isReturnable
          ? "true"
          : "false";
        resp.commonDetails.isVegetarian = resp.commonDetails.isVegetarian
          ? "true"
          : "false";
        resp.commonDetails.availableOnCod = resp.commonDetails.availableOnCod
          ? "true"
          : "false";

        // Create a duration object from the ISO 8601 string
        const duration = moment.duration(resp.returnWindow);

        // Get the number of hours from the duration object
        const hours = duration.asHours();
        resp.commonDetails.returnWindow = String(hours);
        setFormValues({ ...resp.commonDetails });
        setVitalForm({ ...resp.commonAttributesValues });

        let category = resp.commonDetails["productCategory"];
        let sub_category = resp.commonDetails["productSubcategory1"];
        let attributes = allProperties[category][sub_category];
        setVitalFields(formatAttributesToFieldsDataFormat(attributes));
      })
      .catch((error) => {
        cogoToast.error("Something went wrong!");
        console.log(error.response);
      });
  };

  const updateProduct = async () => {
    // id will be dynamic after schema changes
    try {
      let product_data = Object.assign({}, formValues);
      let vital_data = Object.assign({}, vitalForm);
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
        commonAttributesValues: vital_data,
      };

      await putCall(`/api/v1/products/${state.productId}`, data);
      cogoToast.success("Product updated successfully!");
      navigate("/application/inventory");
    } catch (error) {
      cogoToast.error("Something went wrong!");
      console.log(error);
    }
  };

  const getProductFieldDetails = (category_id) => {
    return allFields.find((field) => field.id === category_id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (state?.productId) {
      getProduct();
    }
  }, []);

  useEffect(() => {
    if (formValues?.productCategory) {
      let data = [...allFields]; // Create a copy of the fields array
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

      setAllFields(data);
    }
  }, [formValues]);

  useEffect(() => {
    setProductInfoFields(getProductInfoFields());

    // Set vital form data
    let vital_fields = attributes.filter(
      (variant) => !selectedVariantNames.includes(variant.name)
    );
    vital_fields = vital_fields.map((field) => {
      return {
        id: field.name,
        title: field.name,
        placeholder: "Example, " + field.example,
        type: field.type === "text" ? "input" : field.type,
        required: true,
      };
    });
    setVitalFields(vital_fields);
    let initial_values = vital_fields.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {});
    setVitalForm(initial_values);

    // Set variant form data
    let default_variant_fields = variationCommonFields.map((field_id) =>
      getProductFieldDetails(field_id)
    );

    if (variationOn !== "none") {
      let variants_fields = getVariantsFields();
      // let selected_variants = variants.filter((variant) =>
      //   selectedVariantNames.includes(variant.name)
      // );
      // let formatted_variants =
      //   formatAttributesToFieldsDataFormat(selected_variants);
      let all_variant_fields = [...variants_fields, ...default_variant_fields];
      let variant_initial_values = all_variant_fields.reduce((acc, field) => {
        acc[field.id] = field.id === "images" ? [] : "";
        return acc;
      }, {});
      setVariantFields(all_variant_fields);
      setVariantInitialValues(variant_initial_values);
      setVariantForms([{ ...variant_initial_values, formKey: uuidv4() }]);
    }
    // Set initial values for vital and variant tab
    let variant_tab_error = true;
    let vital_tab_error = true;

    if (variationOn === "none") {
      variant_tab_error = false;
    }

    if (Object.keys(vital_fields).length === 0) {
      vital_tab_error = false;
    }

    setTabErrors((prevState) => {
      prevState[1] = vital_tab_error;
      prevState[2] = variant_tab_error;
      return prevState;
    });
  }, [variationOn]);
  console.log(errors);

  const getProductInfoFields = () => {
    let product_info_fields = [...productDetailsFields];

    let protocolKey = PRODUCT_SUBCATEGORY[category].filter(
      (sub_category) => sub_category.value === subCategory
    )[0].protocolKey;

    if (protocolKey !== "") {
      let fields_to_remove =
        FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY[protocolKey];
      product_info_fields = product_info_fields.filter(
        (field) => !fields_to_remove.includes(field)
      );
      console.log("remioving ", fields_to_remove);
    }

    console.log(product_info_fields);
    console.log(productInfoFields);

    if (!variationOn || variationOn === "none") {
      return [
        ...product_info_fields,
        ...UOMVariationFields,
        ...variationCommonFields,
      ];
    } else if (variationOn === "attributes") {
      return [...product_info_fields, ...UOMVariationFields];
    } else {
      return product_info_fields;
    }
  };

  const getVariantsFields = () => {
    if (!variationOn || variationOn === "none") {
      return [];
    } else if (variationOn === "attributes") {
      let selected_variants = variants.filter((variant) =>
        selectedVariantNames.includes(variant.name)
      );
      return formatAttributesToFieldsDataFormat(selected_variants);
    } else if (variationOn === "uom") {
      return UOMVariationFields.map((field_id) =>
        getProductFieldDetails(field_id)
      );
    }
  };

  const validateProductInfoForm = () => {
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
    formErrors.GST_Percentage =
      formValues?.GST_Percentage === "" ? "GST percentage is required" : "";
    formErrors.maxAllowedQty = !formValues?.maxAllowedQty
      ? "Please enter a valid Max. Allowed Quantity"
      : formValues?.maxAllowedQty?.length > MAX_STRING_LENGTH_10
      ? `Cannot be more than ${MAX_STRING_LENGTH_10} characters`
      : parseInt(formValues?.maxAllowedQty) > parseInt(formValues?.quantity)
      ? "Cannot be more than quantity"
      : "";
    formErrors.UOM = formValues?.UOM === "" ? "UOM unit is required" : "";
    // formErrors.UOM =
    //   formValues?.UOM?.trim() === ""
    //     ? "UOM is required"
    //     : formValues?.UOM?.length > MAX_STRING_LENGTH
    //     ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
    //     : "";
    if (productInfoFields.includes("packQty")) {
      formErrors.packQty = !formValues?.packQty
        ? "Please enter a valid Measurement Quantity"
        : !isNumberOnly(formValues?.packQty)
        ? "Please enter only digit"
        : "";
    }
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
    if (productInfoFields.includes("nutritionalInfo")) {
      formErrors.nutritionalInfo =
        formValues?.nutritionalInfo?.trim() === ""
          ? "Nutritional info is required"
          : formValues?.nutritionalInfo?.length > MAX_STRING_LENGTH
          ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
          : "";
    }
    if (productInfoFields.includes("additiveInfo")) {
      formErrors.additiveInfo =
        formValues?.additiveInfo?.trim() === ""
          ? "Additive info is required"
          : formValues?.additiveInfo?.length > MAX_STRING_LENGTH
          ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
          : "";
    }
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
    if (productInfoFields.includes("manufacturerOrPackerName")) {
      formErrors.manufacturerOrPackerName =
        formValues?.manufacturerOrPackerName?.trim() === ""
          ? "Manufacturer or packer name is required"
          : formValues?.manufacturerOrPackerName?.length > MAX_STRING_LENGTH_50
          ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
          : "";
    }
    if (productInfoFields.includes("manufacturerOrPackerAddress")) {
      formErrors.manufacturerOrPackerAddress =
        formValues?.manufacturerOrPackerAddress?.trim() === ""
          ? "Manufacturer or packer address is required"
          : formValues?.manufacturerOrPackerAddress?.length >
            MAX_STRING_LENGTH_50
          ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
          : "";
    }
    if (productInfoFields.includes("commonOrGenericNameOfCommodity")) {
      formErrors.commonOrGenericNameOfCommodity =
        formValues?.commonOrGenericNameOfCommodity?.trim() === ""
          ? "Common or generic name of commodity is required"
          : formValues?.commonOrGenericNameOfCommodity?.length >
            MAX_STRING_LENGTH_50
          ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
          : "";
    }
    if (productInfoFields.includes("monthYearOfManufacturePackingImport")) {
      formErrors.monthYearOfManufacturePackingImport =
        formValues?.monthYearOfManufacturePackingImport?.trim() === ""
          ? "Month year of manufacture packing import is required"
          : formValues?.monthYearOfManufacturePackingImport?.length >
            MAX_STRING_LENGTH
          ? `Cannot be more than ${MAX_STRING_LENGTH} characters`
          : "";
    }
    if (productInfoFields.includes("importerFSSAILicenseNo")) {
      formErrors.importerFSSAILicenseNo =
        formValues?.importerFSSAILicenseNo?.trim() === ""
          ? "Importer FSSAI license no is required"
          : !isNumberOnly(formValues?.importerFSSAILicenseNo)
          ? "Please enter only digit"
          : formValues?.importerFSSAILicenseNo?.length > MAX_STRING_LENGTH_14
          ? `Cannot be more than ${MAX_STRING_LENGTH_14} characters`
          : "";
    }
    if (productInfoFields.includes("brandOwnerFSSAILicenseNo")) {
      formErrors.brandOwnerFSSAILicenseNo =
        formValues?.brandOwnerFSSAILicenseNo?.trim() === ""
          ? "Brand owner FSSAI license no is required"
          : !isNumberOnly(formValues?.brandOwnerFSSAILicenseNo)
          ? "Please enter only digit"
          : formValues?.brandOwnerFSSAILicenseNo?.length > MAX_STRING_LENGTH_14
          ? `Cannot be more than ${MAX_STRING_LENGTH_14} characters`
          : "";
    }
    if (variationOn === "none") {
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
      formErrors.images =
        formValues?.productCategory !== "f_and_b" &&
        formValues?.images.length < 1
          ? "At least one image is required"
          : "";
    }

    if (formValues?.productCategory) {
      const subCatList = PRODUCT_SUBCATEGORY[formValues?.productCategory];
      const selectedSubCatObject = subCatList?.find(
        (subitem) => subitem.value === formValues?.productSubcategory1
      );
      if (selectedSubCatObject && selectedSubCatObject.protocolKey) {
        const hiddenFields =
          FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY[
            selectedSubCatObject.protocolKey
          ];
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

  const validateVitalInfoForm = () => {
    if (Object.keys(vitalFields).length === 0) {
      return true;
    } else {
      let form_errors = getFormErrors(vitalFields, vitalForm);
      let is_valid_form = form_errors
        ? !Object.values(form_errors).some((val) => val !== "")
        : true;
      setVitalFormErrors(form_errors);
      return is_valid_form;
    }
  };

  const validateVariantsForms = () => {
    if (variationOn === "none") {
      return true;
    } else {
      let forms_errors = variantForms.map((variant_form) =>
        getFormErrors(variantFields, variant_form)
      );
      let has_forms_errors = forms_errors.map((form_errors) =>
        Object.values(form_errors).some((val) => val !== "")
      );
      let are_valid_forms = !has_forms_errors.some((val) => val === true);
      setVariantFormsErrors(forms_errors);
      return are_valid_forms;
    }
  };

  const validate = () => {
    let product_info_form_validity = validateProductInfoForm();
    let vital_info_form_validity = validateVitalInfoForm();
    let variants_forms_validity = validateVariantsForms();

    setTabErrors((prev_state) => {
      prev_state[0] = !product_info_form_validity;
      prev_state[1] = !vital_info_form_validity;
      prev_state[2] = !variants_forms_validity;
      return [...prev_state];
    });

    return (
      product_info_form_validity &&
      vital_info_form_validity &&
      variants_forms_validity
    );
  };

  const handleSubmit = () => {
    if (validate()) {
      state?.productId ? updateProduct() : addProduct();
    }
  };

  const renderVariationsFields = () => {
    return (
      <AddVariants
        variantFields={variantFields}
        variantInitialValues={variantInitialValues}
        variantForms={variantForms}
        setVariantForms={setVariantForms}
        variantFormsErrors={variantFormsErrors}
      />
    );
  };

  const renderProductInfoFields = () => {
    return (
      <AddProductInfo
        allFields={allFields}
        fields={productInfoFields}
        category={category}
        subCategory={subCategory}
        state={state}
        form={productInfoForm}
        setFocusedField={setFocusedField}
      />
    );
  };

  const renderProductVitalFields = () => {
    return (
      <VitalForm
        fields={vitalFields}
        formData={vitalForm}
        onFormUpdate={setVitalForm}
        vitalFormErrors={vitalFormErrors}
      />
    );
  };

  useEffect(() => {
    if (!formValidate) {
      let formErrors = {};
      let focusFieldValue = formValues[focusedField]?.toString().trim();
      if (
        focusFieldValue !== "" &&
        focusedField === "manufacturerOrPackerName"
      ) {
        formErrors.manufacturerOrPackerName =
          formValues?.manufacturerOrPackerName?.trim() === ""
            ? "Manufacturer or packer name is required"
            : formValues?.manufacturerOrPackerName.length > MAX_STRING_LENGTH_50
            ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
            : "";
      } else if (
        focusFieldValue !== "" &&
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
        focusFieldValue !== "" &&
        focusedField === "commonOrGenericNameOfCommodity"
      ) {
        formErrors.description =
          formValues?.description?.trim() === ""
            ? "Short description cannot be empty"
            : formValues?.commonOrGenericNameOfCommodity.length >
              MAX_STRING_LENGTH_50
            ? `Cannot be more than ${MAX_STRING_LENGTH_50} characters`
            : "";
      } else if (focusFieldValue !== "" && focusedField === "description") {
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
              {Object.keys(vitalFields).length > 0 && (
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
              )}
              {variationOn !== "none" && (
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
