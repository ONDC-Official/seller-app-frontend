import { useEffect, useState } from "react";
import cogoToast from "cogo-toast";
import Navbar from "../../Shared/Navbar";
import MyButton from "../../Shared/Button";
import RenderInput from "../../../utils/RenderInput";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
import useCancellablePromise from "../../../Api/cancelRequest";
import { getCall, postCall, putCall } from "../../../Api/axios";
import useForm from '../../../hooks/useForm'
import { containsOnlyNumbers } from '../../../utils/formatting/string'

const productFields = [
  {
    id: "productCode",
    title: "Product Code",
    placeholder: "Product code",
    type: "input",
    required: true,
  },
  {
    id: "productName",
    title: "Product name",
    placeholder: "Product name",
    type: "input",
    required: true,
  },
  {
    id: "MRP",
    title: "MRP",
    placeholder: "MRP",
    type: "input",
    required: true,
  },
  {
    id: "retailPrice",
    title: "Retail price",
    placeholder: "Retail price",
    type: "input",
    required: true,
  },
  {
    id: "purchasePrice",
    title: "Purchase price",
    placeholder: "Purchase price",
    type: "input",
    required: true,
  },
  {
    id: "HSNCode",
    title: "HSN code",
    placeholder: "HSN code",
    type: "input",
    required: true,
  },
  {
    id: "GST_Percentage",
    title: "GST Percentage",
    placeholder: "GST Percentage",
    type: "select",
    options: [
      { key: "0", value: 0 },
      { key: "5", value: 5 },
      { key: "12", value: 12 },
      { key: "18", value: 18 },
      { key: "28", value: 28 },
    ],
    required: true,
  },
  {
    id: "productCategory",
    title: "Product category",
    placeholder: "Product category",
    options: [
      { key: "Grocery", value: "grocery" },
      { key: "Beauty & Personal Care", value: "beauty_and_personal_care" },
      { key: "Fashion", value: "fashion" },
      { key: "Home and Decor", value: "home_and_decor" },
      { key: "F&B", value: "f_and_b" },
    ],
    type: "select",
    required: true,
  },
  {
    id: "quantity",
    title: "Quantity",
    placeholder: "Quantity",
    type: "input",
    required: true,
  },
  {
    id: "barcode",
    title: "Barcode",
    placeholder: "Barcode",
    type: "input",
    required: true,
  },
  {
    id: "maxAllowedQty",
    title: "Max allowed quantity",
    placeholder: "Max allowed quantity",
    type: "number",
    required: true,
    min: 1
  },
  {
    id: "UOM",
    title: "UOM",
    placeholder: "UOM",
    type: "input",
    required: true,
  },
  {
    id: "packQty",
    title: "Pack quantity",
    placeholder: "Pack quantity",
    type: "input",
    required: true,
  },
  {
    id: "length",
    title: "Length",
    placeholder: "Length",
    type: "input",
    required: true,
  },
  {
    id: "breadth",
    title: "Breadth",
    placeholder: "Breadth",
    type: "input",
    required: true,
  },
  {
    id: "height",
    title: "Height",
    placeholder: "Height",
    type: "input",
    required: true,
  },
  {
    id: "weight",
    title: "Weight",
    placeholder: "Weight",
    type: "input",
    required: true,
  },
  {
    id: "returnWindow",
    title: "Return Window",
    placeholder: "Return Window",
    type: "input",
    required: true,
  },
  {
    id: "manufacturerName",
    title: "Manufacturer name",
    placeholder: "Manufacturer name",
    type: "input",
    required: true,
  },
  {
    id: "manufacturedDate",
    title: "Manufactured date",
    placeholder: "Manufactured date",
    type: "input",
    required: true,
  },
  {
    id: "nutritionalInfo",
    title: "Nutritional info",
    placeholder: "Nutritional info",
    type: "input",
    required: true,
  },
  {
    id: "additiveInfo",
    title: "Additive info",
    placeholder: "Additive info",
    type: "input",
    required: true,
  },
  {
    id: "instructions",
    title: "Instructions",
    placeholder: "Instructions",
    type: "input",
    required: true,
  },
  {
    id: "longDescription",
    title: "Long description",
    placeholder: "Long description",
    type: "input",
    required: true,
  },
  {
    id: "description",
    title: "Short description",
    placeholder: "Short description",
    type: "input",
    required: true,
  },
  {
    id: "isCancellable",
    title: "Cancellable",
    type: "radio",
    options: [
      { key: "Yes", value: true },
      { key: "No", value: false },
    ],
    required: true,
  },
  {
    id: "isReturnable",
    title: "Returnable",
    type: "radio",
    options: [
      { key: "Yes", value: true },
      { key: "No", value: false },
    ],
    required: true,
  },
  {
    id: "isVegetarian",
    title: "Vegetarian",
    type: "radio",
    options: [
      { key: "Yes", value: true },
      { key: "No", value: false },
    ],
    required: true,
  },
  {
    id: "availableOnCod",
    title: "Available on Cash on delivery",
    type: "radio",
    options: [
      { key: "Yes", value: true },
      { key: "No", value: false },
    ],
    required: true,
  },
  {
    id: "images",
    title: "Images",
    type: "upload",
    multiple: true,
    file_type: "product_image",
    required: true,
  },
];

export default function AddProduct() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { cancellablePromise } = useCancellablePromise();

  const initialValues = {
    productCode: "",
    productName: "",
    MRP: "",
    retailPrice: "",
    purchasePrice: "",
    HSNCode: "",
    GST_Percentage: 18,
    productCategory: [],
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
    isReturnable: false,
    isVegetarian: false,
    isCancellable: false,
    availableOnCod: false,
    images: [],
  };
  const { formValues, setFormValues, errors, setErrors } = useForm({ ...initialValues })
  const [formSubmitted, setFormSubmited] = useState(false)

  const addProduct = async () => {
    try {
      const data = Object.assign({}, formValues);
      delete data["uploaded_urls"];
      await cancellablePromise(
        postCall(`/api/v1/products`, data)
      );
      cogoToast.success("Product added successfully!");
      navigate("/application/inventory");
    } catch (error) {
      cogoToast.error(error.response.data.error);
      console.log(error);
    }
  };

  const getProduct = () => {
    getCall(`/api/v1/products/${state.productId}`)
      .then(resp => {
        resp["uploaded_urls"] = resp?.images?.map(i => i?.url) || [];
        resp["images"] = resp?.images?.map(i => i?.path) || [];
        setFormValues({ ...resp});
      })
      .catch(error => {
        cogoToast.error("Something went wrong!");
        console.log(error.response);
      });
  };

  const updateProduct = async () => {
    // id will be dynamic after schema changes
    try {
      const data = Object.assign({}, formValues);
      delete data["__v"];
      delete data["_id"];
      delete data["organization"];
      delete data["createdAt"];
      delete data["updatedAt"];
      delete data["published"];
      delete data["uploaded_urls"];
      await  putCall(`/api/v1/products/${state.productId}`, data);
      cogoToast.success("Product updated successfully!");
      navigate("/application/inventory");
    } catch (error) {
      cogoToast.error("Something went wrong!");
      console.log(error);
    }
  };

  const renderFields = () => {
    return productFields.map((item) => {
      return (
        <RenderInput
          item={{ ...item, error: errors?.[item.id] ? true : false, helperText: errors?.[item.id] || '' }}
          state={formValues}
          stateHandler={setFormValues}
        />
      );
    });
  };

  useEffect(() => {
    if (state?.productId) {
      getProduct();
    }
  }, []);

  const validate = () => {
    let formErrors = {}
    formErrors.productCode = formValues.productCode.trim() === '' ? 'Product code is required' : ''
    formErrors.productName = formValues.productName.trim() === '' ? 'Product name is required' : ''
    formErrors.MRP = !containsOnlyNumbers(formValues.MRP) ? 'Please enter a valid number' : ''
    formErrors.retailPrice = !containsOnlyNumbers(formValues.retailPrice) ? 'Please enter a valid number' : ''
    formErrors.purchasePrice = !containsOnlyNumbers(formValues.purchasePrice) ? 'Please enter a valid number' : ''
    formErrors.HSNCode = formValues.HSNCode.trim() === '' ? 'HSN code is required' : ''
    formErrors.GST_Percentage = !formValues.GST_Percentage ? 'GST percentage is required' : ''
    formErrors.productCategory = formValues.productCategory.length < 1 ? 'Product category is required' : ''
    formErrors.quantity = !containsOnlyNumbers(formValues.quantity) ? 'Please enter a valid number' : ''
    formErrors.barcode = !containsOnlyNumbers(formValues.barcode) ? 'Please enter a valid number' : ''
    formErrors.maxAllowedQty = !formValues.maxAllowedQty ? 'Max allowed quantity is required' : ''
    formErrors.UOM = formValues.UOM.trim() === '' ? 'UOM is required' : ''
    formErrors.packQty = formValues.packQty.trim() === '' ? 'Pack quantity is required' : ''
    formErrors.length = formValues.length.trim() === '' ? 'Length is required' : ''
    formErrors.breadth = formValues.breadth.trim() === '' ? 'Breadth is required' : ''
    formErrors.height = formValues.height.trim() === '' ? 'Height is required' : ''
    formErrors.weight = formValues.weight.trim() === '' ? 'Weight is required' : ''
    formErrors.returnWindow = formValues.returnWindow.trim() === '' ? 'Return window is required' : ''
    formErrors.manufacturerName = formValues.manufacturerName.trim() === '' ? 'Manufacturer name is required' : ''
    formErrors.manufacturedDate = formValues.manufacturedDate.trim() === '' ? 'Manufactured date is required' : ''
    formErrors.nutritionalInfo = formValues.nutritionalInfo.trim() === '' ? 'Nutritional info is required' : ''
    formErrors.additiveInfo = formValues.additiveInfo.trim() === '' ? 'Additive info is required' : ''
    formErrors.instructions = formValues.instructions.trim() === '' ? 'Instruction is required' : ''
    formErrors.longDescription = formValues.longDescription.trim() === '' ? 'Long description is required' : ''
    formErrors.description = formValues.description.trim() === '' ? 'Short description is required' : ''
    formErrors.images = formValues.images.length < 1 ? 'At least one image is required' : ''
    setErrors({
      ...formErrors
    })
    return !Object.values(formErrors).some(val => val !== '')
  }

  const handleSubmit = () => {
    setFormSubmited(true)
    if (validate()) {
      state?.productId ? updateProduct() : addProduct();
    }
  }

  useEffect(() => {
    if (!formSubmitted) return
    validate()
  }, [formValues])

  return (
    <>
      <Navbar />
      <div className="p-4">
        <MyButton
          className="mr-2 !text-black"
          icon={<ArrowBackIcon />}
          title="BACK"
          onClick={() => navigate("/application/inventory")}
        />
      </div>
      <div className="container px-4 mx-auto mb-4 md:w-4/5 lg:w-full place-content-center max-w-[1240px]">
        <div className="w-full !h-full">
          <label className="ml-2 md:mb-4 md:mt-3 mt-2 font-semibold text-xl">
            {state?.productId == undefined ? "Add Product" : "Update Product"}
          </label>
          <form>
            <div className="mt-2">{renderFields()}</div>
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
        </div>
      </div>
    </>
  );
}
