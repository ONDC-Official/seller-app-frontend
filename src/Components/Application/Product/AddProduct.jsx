import MyButton from "../../Shared/Button";
import RenderInput from "../../../utils/RenderInput";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import {
  allProductFieldDetails,
  categoryFields,
} from "./product-fields";
import AddGenericProduct from "./AddGenericProduct";

export default function AddProduct() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const categoryInitialValues = {
    productCategory: "",
    productSubcategory1: "",
  };

  const categoryForm = useForm(categoryInitialValues);

  const getProductFieldDetails = (category_id) => {
    return allProductFieldDetails.find((field) => field.id === category_id);
  };

  const renderFields = () => {
    if (
      !state?.productId &&
      (!categoryForm.formValues["productCategory"] ||
        !categoryForm.formValues["productSubcategory1"])
    ) {
      return categoryFields.map((category_id) => {
        let item = getProductFieldDetails(category_id);
        return (
          item && (
            <RenderInput
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
    } else {
      return <AddGenericProduct state={state} categoryForm={categoryForm} />;
    }
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <BackNavigationButton
          onClick={() => navigate("/application/inventory")}
        />
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
