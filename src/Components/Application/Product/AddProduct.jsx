import { useEffect, useState } from "react";

import MyButton from "../../Shared/Button";
import RenderInput from "../../../utils/RenderInput";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import { allProductFieldDetails, categoryFields } from "./product-fields";
import ProductDetails from "./ProductDetails";
import { PRODUCT_SUBCATEGORY } from "../../../utils/constants";
import { allProperties } from "./categoryProperties";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { Input } from "@material-ui/core";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { getCall } from "../../../Api/axios";
import axios from "axios";


const customization_groups = [
  {
    id: "CG1",
    name: "Crust(Select any 1)",
    inputType: "select",
    minQuantity: 1,
    maxQuantity: 1,
    seq: 1,
  },
  {
    id: "CG2",
    name: "Size(Select any 1)",
    inputType: "select",
    minQuantity: 1,
    maxQuantity: 1,
    seq: 2,
  },
  {
    id: "CG3",
    name: "Size(Select any 1)",
    inputType: "select",
    minQuantity: 1,
    maxQuantity: 1,
    seq: 2,
  },
  {
    id: "CG4",
    name: "Toppings(Select any 1)",
    inputType: "select",
    minQuantity: 1,
    maxQuantity: 1,
    seq: 3,
  },
];

const Customizations = [
  {
    id: "C1",
    name: "Hand tossed",
    price: 299,
    inStock: true,
    parent: "CG1",
    child: "CG2",
  },
  {
    id: "C2",
    name: "Thin crust",
    price: 349,
    inStock: true,
    parent: "CG1",
    child: "CG3",
  },
  {
    id: "C3",
    name: "Regular",
    price: 50,
    inStock: true,
    parent: "CG2",
    child: "CG4",
  },
  {
    id: "C4",
    name: "Large",
    price: 100,
    inStock: true,
    parent: "CG2",
  },
  {
    id: "C5",
    name: "Small",
    price: 30,
    inStock: true,
    parent: "CG3",
  },
  {
    id: "C6",
    name: "Large",
    price: 120,
    inStock: true,
    parent: "CG3",
  },
  {
    id: "C7",
    name: "Olives",
    price: 120,
    inStock: true,
    parent: "CG4",
  },
];

const BarcodeFields = [
  {
    id: "barCodeType",
    title: "Barcode Type",
    placeholder: "Please Select Barcode type",
    options: ["UPC", "GTIN", "HSN", "EAN", "MPN", "ISBN", "BARCODE"].map(
      (v) => {
        return { key: v, value: v };
      }
    ),
    type: "select",
    disableClearable: true,
    required: false,
  },
  {
    id: "barCodeValue",
    title: "Barcode value",
    placeholder: "Please enter Barcode value",
    type: "input",
    required: false,
  },
];

const DataEntryRadioItem = {
  id: "dataEntryMode",
  title: "Data Entry Mode",
  type: "radio",
  options: [
    { value: "manual", key: "Manual" },
    { value: "catalogue", key: "Auto fill from Catalogue" },
  ],
  required: true,
};

export default function AddProduct() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [fields, setFields] = useState(allProductFieldDetails);
  const [attributes, setAttributes] = useState([]);
  const [variants, setVariants] = useState([]);
  const [variantsCheckboxState, setVariantsCheckboxState] = useState({});
  const [renderCategories, setRenderCategories] = useState(!state?.productId);

  const [variationOn, setVariationOn] = useState("none");

  const categoryInitialValues = {
    productCategory: "",
    productSubcategory1: "",
  };

  const barCodeInitialValues = {
    barCodeType: "",
    barCodeValue: "",
  };

  const dataEntryFormInitialValues = {
    dataEntryMode: "manual",
  };

  const categoryForm = useForm(categoryInitialValues);
  const barCodeForm = useForm(barCodeInitialValues);
  const dataEntryForm = useForm(dataEntryFormInitialValues);
  const category = categoryForm.formValues["productCategory"];
  const subCategory = categoryForm.formValues["productSubcategory1"];

  const getProductFieldDetails = (category_id) => {
    return allProductFieldDetails.find((field) => field.id === category_id);
  };

  const getOrgDetails = async (org_id) => {
    const url = `/api/v1/organizations/${org_id}/storeDetails`;
    const res = await getCall(url);
    return res;
  };

  const getUser = async (id) => {
    const url = `/api/v1/users/${id}`;
    const res = await getCall(url);
    return res[0];
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    getUser(user_id).then((u) => {
      getOrgDetails(u.organization).then((org) => {
        let category = org?.storeDetails?.category;
        if (!category) navigate(`/application/store-details/${u.organization}`);
        categoryForm.setFormValues((prev) => {
          return { ...prev, productCategory: category };
        });
        let data = [...fields]; // Create a copy of the fields array
        const subCategoryIndex = data.findIndex(
          (item) => item.id === "productSubcategory1"
        );
        data[subCategoryIndex].options = PRODUCT_SUBCATEGORY[category];
        setFields(data);
      });
    });
  }, []);

  useEffect(() => {
    let category = categoryForm.formValues["productCategory"];
    let sub_category = categoryForm.formValues["productSubcategory1"];
    if (category && category !== "F&B" && sub_category) {
      let category_data = allProperties[category];
      let properties = category_data?.hasOwnProperty(sub_category)
        ? category_data[sub_category]
        : category_data["default"] || [];
      let variants = properties?.filter((property) => property.required);
      let variants_checkbox_map = variants?.reduce((acc, variant) => {
        acc[variant.name] = false;
        return acc;
      }, {});
      setAttributes(properties);
      setVariants(variants);
      setVariantsCheckboxState(variants_checkbox_map);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryForm.formValues.productSubcategory1]);

  const renderCategoryFields = () => {
    return categoryFields.map((category_id) => {
      let item = getProductFieldDetails(category_id);
      return (
        item && (
          <RenderInput
            key={category_id}
            item={{
              ...item,
              error: categoryForm.errors?.[item?.id] ? true : false,
              helperText: categoryForm.errors?.[item.id] || "",
            }}
            state={categoryForm.formValues}
            stateHandler={categoryForm.setFormValues}
          />
        )
      );
    });
  };

  const handleVariantCheckboxChange = (event) => {
    setVariantsCheckboxState({
      ...variantsCheckboxState,
      [event.target.name]: event.target.checked,
    });
  };

  const renderVariantsList = () => {
    if (variants.length === 0) {
      return <div>No attributes available for Variations!</div>;
    }
    return (
      <div>
        <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block mt-2">
          Select Variants
        </label>
        <Box sx={{ display: "flex" }}>
          <FormControl
            sx={{ ml: 3, display: "flex" }}
            component="fieldset"
            variant="standard"
          >
            <FormGroup sx={{ display: "flex" }}>
              {variants?.map(({ name }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={variantsCheckboxState[name]}
                      onChange={handleVariantCheckboxChange}
                      name={name}
                    />
                  }
                  label={name}
                  key={name}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>
      </div>
    );
  };

  const getSelectedVariantNames = () => {
    let variant_names = Object.keys(variantsCheckboxState);
    return variant_names.filter(
      (variant_name) => variantsCheckboxState[variant_name]
    );
  };

  const anyVariantSelected = () => {
    let variant_names = Object.keys(variantsCheckboxState);
    return variant_names.some(
      (variant_name) => variantsCheckboxState[variant_name]
    );
  };

  const renderVariants = () => {
    return (
      <FormControl>
        <div className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block mt-2">
          Variation On
        </div>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={variationOn}
          onChange={(val) => setVariationOn(val.target.value)}
          sx={{ paddingLeft: "22px" }}
        >
          <FormControlLabel value="none" control={<Radio />} label="None" />
          <FormControlLabel
            value="attributes"
            control={<Radio />}
            label="Attribute"
          />
          <FormControlLabel value="uom" control={<Radio />} label="UOM" />
        </RadioGroup>
      </FormControl>
    );
  };

  const renderBarcodeFields = () => {
    return BarcodeFields.map((item) => {
      return (
        item && (
          <RenderInput
            key={item.id}
            item={{
              ...item,
            }}
            state={barCodeForm.formValues}
            stateHandler={barCodeForm.setFormValues}
          />
        )
      );
    });
  };

  const renderDataOptions = () => {
    let item = DataEntryRadioItem;
    return (
      <RenderInput
        key={item.id}
        item={{
          ...item,
        }}
        state={dataEntryForm.formValues}
        stateHandler={dataEntryForm.setFormValues}
      />
    );
  };

  const renderFields = () => {
    if (renderCategories && !state?.productId) {
      return (
        <div>
          {renderCategoryFields()}
          {renderDataOptions()}
          {dataEntryForm.formValues.dataEntryMode === "manual"
            ? renderVariants()
            : renderBarcodeFields()}
          {dataEntryForm.formValues.dataEntryMode === "manual" && variationOn === "attributes" && renderVariantsList()}
        </div>
      );
    } else {
      let selectedCategory = categoryForm.formValues?.productCategory;
      if (!selectedCategory) selectedCategory = state?.productCategory;
      return (
        <ProductDetails
          state={state}
          barCodeForm={barCodeForm}
          categoryForm={categoryForm}
          category={selectedCategory}
          subCategory={categoryForm.formValues?.productSubcategory1}
          attributes={attributes}
          variants={variants}
          variationOn={dataEntryForm.formValues.dataEntryMode === "manual" ? variationOn : "none"}
          selectedVariantNames={getSelectedVariantNames()}
        />
      );
    }
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div
          className="w-full bg-white px-4 py-4 rounded-md h-full scrollbar-hidden"
          style={{ minHeight: "95%", maxHeight: "100%", overflow: "auto" }}
        >
          <BackNavigationButton
            onClick={() => navigate("/application/inventory")}
          />
          <div className="w-full !h-full">
            <label className="ml-2 md:mb-4 md:mt-3 mt-2 font-semibold text-xl">
              {state?.productId == undefined ? "Add Product" : "Update Product"}
            </label>
            <form>
              <div className="mt-2">{renderFields()}</div>
            </form>
            {}
            <div className="flex flex-row justify-center py-2 sm:pt-5 md:!mt-10">
              <MyButton
                type="button"
                title="CANCEL"
                className="text-black"
                onClick={() => navigate("/application/inventory")}
              />
              {renderCategories && (
                <MyButton
                  type="button"
                  title="NEXT"
                  className="text-black"
                  disabled={
                    !(
                      categoryForm.formValues["productCategory"] &&
                      categoryForm.formValues["productSubcategory1"] &&
                      (dataEntryForm.formValues.dataEntryMode === "manual"
                        ? variationOn === "none" ||
                          variationOn === "uom" ||
                          anyVariantSelected()
                        : barCodeForm.formValues.barCodeType &&
                          barCodeForm.formValues.barCodeValue)
                    )
                  }
                  onClick={() => setRenderCategories(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
