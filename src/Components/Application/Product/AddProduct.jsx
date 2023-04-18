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
import useForm from '../../../hooks/useForm'
import { containsOnlyNumbers } from '../../../utils/formatting/string'
import BackNavigationButton from "../../Shared/BackNavigationButton";
import { PRODUCT_CATEGORY } from "../../../utils/constants";
import productFields from './product-fields'

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
      let data = Object.assign({}, formValues);
      // Create a duration object with the hours you want to convert
      const duration = moment.duration(parseInt(data.returnWindow), 'hours');

      // Format the duration in ISO 8601 format
      const iso8601 = duration.toISOString();
      data.returnWindow = iso8601;

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
        // Create a duration object from the ISO 8601 string
        const duration = moment.duration(resp.returnWindow);

        // Get the number of hours from the duration object
        const hours = duration.asHours();
        resp.returnWindow = hours;
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
      let data = Object.assign({}, formValues);
      // Create a duration object with the hours you want to convert
      const duration = moment.duration(parseInt(data.returnWindow), 'hours');

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
          previewOnly={state?.productId && item.id === "productCode"?true:false}
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
    formErrors.MRP = !formValues.MRP ? 'Please enter a valid number' : ''
    formErrors.retailPrice = !formValues.retailPrice ? 'Please enter a valid number' : ''
    formErrors.purchasePrice = !formValues.purchasePrice ? 'Please enter a valid number' : ''
    formErrors.HSNCode = formValues.HSNCode.trim() === '' ? 'HSN code is required' : ''
    formErrors.GST_Percentage = !formValues.GST_Percentage ? 'GST percentage is required' : ''
    formErrors.productCategory = formValues.productCategory.length < 1 ? 'Product category is required' : ''
    formErrors.quantity = !formValues.quantity ? 'Please enter a valid number' : ''
    formErrors.barcode = !formValues.barcode ? 'Please enter a valid number' : ''
    formErrors.maxAllowedQty = !formValues.maxAllowedQty ? 'Please enter a valid number' : ''
    formErrors.UOM = formValues.UOM.trim() === '' ? 'UOM is required' : ''
    formErrors.packQty = !formValues.packQty ? 'Pack quantity is required' : ''
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
      <div className="container mx-auto my-8">
        <BackNavigationButton onClick={() => navigate("/application/inventory")} />
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
