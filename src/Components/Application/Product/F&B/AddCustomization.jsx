import React, { useState } from "react";
import { Button, Modal } from "@mui/material";
import RenderInput from "../../../../utils/RenderInput";

const containerClasses = "flex items-center";
const inputClasses = "w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black flex";
const labelClasses = "w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block";

export const customizationFields = [
  {
    id: "name",
    title: "Name",
    placeholder: "Enter Customization Name",
    type: "input",
  },
  {
    id: "price",
    title: "Price",
    placeholder: "Enter Customization Price",
    type: "number",
  },
  {
    id: "UOM",
    title: "UOM",
    placeholder: "Select Unit Of Measurement",
    options: [
      { key: "unit", value: "unit" },
      { key: "dozen", value: "dozen" },
      { key: "gram", value: "gram" },
      { key: "kilogram", value: "kilogram" },
      { key: "tonne", value: "tonne" },
      { key: "litre", value: "litre" },
      { key: "millilitre", value: "millilitre" },
    ],
    type: "select",
    inputStyles: {
      width: 320,
    },
    disableClearable: true,
  },
  {
    id: "UOMValue",
    title: "UOMValue",
    placeholder: "Enter UOM Value",
    type: "input",
  },
  {
    id: "available",
    title: "Available Quantity",
    placeholder: "Enter Available Quantity",
    type: "number",
  },
  {
    id: "maximum",
    title: "Maximum Quantity",
    placeholder: "Enter Maximum Quantity",
    type: "number",
  },
  {
    id: "vegNonVeg",
    title: "Veg/Non-Veg/Egg",
    placeholder: "Select Food Category",
    type: "select",
    options: [
      { key: "Veg", value: "VEG" },
      { key: "Non Veg", value: "NONVEG" },
      { key: "Egg", value: "EGG" },
    ],
    disableClearable: true,
    inputStyles: {
      width: 320,
    },
  },
  {
    id: "parent",
    title: "Parent",
    placeholder: "Enter Customization Name",
    type: "input",
    isDisabled: true,
  },
];

const AddCustomization = (props) => {
  const {
    category,
    showModal,
    handleCloseModal,
    newCustomizationData,
    setNewCustomizationData,
    handleAddCustomization,
  } = props;
  const [errors, setErrors] = useState({});

  const validate = () => {
    const formErrors = {};
    formErrors.name =
      newCustomizationData?.name?.trim() == undefined || newCustomizationData?.name?.trim() === ""
        ? "Name is not allowed to be empty"
        : "";

    formErrors.price = newCustomizationData?.price < 0 ? `Please enter a valid price` : "";

    formErrors.UOM =
      newCustomizationData?.UOM == undefined || newCustomizationData?.UOM === ""
        ? "UOM is not allowed to be empty"
        : "";

    formErrors.UOMValue =
      newCustomizationData?.UOMValue == undefined || newCustomizationData?.UOMValue === ""
        ? "UOM Value is not allowed to be empty"
        : newCustomizationData.UOMValue <= 0
        ? "Please Enter a Valid Value"
        : "";

    formErrors.available =
      newCustomizationData?.available == undefined || newCustomizationData?.available === ""
        ? "Available Quantity is not allowed to be empty"
        : newCustomizationData.available <= 0
        ? "Please Enter a Valid Value"
        : "";

    formErrors.maximum =
      newCustomizationData?.maximum == undefined || newCustomizationData?.maximum === ""
        ? "Maximum Quantity is not allowed to be empty"
        : newCustomizationData.maximum <= 0
        ? "Please Enter a Valid Value"
        : "";

    setErrors(formErrors);

    return !Object.values(formErrors).some((val) => val !== "");
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    if (validate()) {
      setErrors({});
      handleAddCustomization();
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showModal}
        onClose={() => {
          setErrors({});
          setNewCustomizationData({ price: 0 });
          handleCloseModal();
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "24px 40px",
            borderRadius: 20,
          }}
        >
          <p className="font-semibold text-xl" style={{ marginBottom: 10 }}>
            {props.mode === "edit" ? "Edit Customization" : "Add New Customization"}
          </p>

          <div className="w-auto">
            {customizationFields.map((field) => {
              const fieldsToRender = [
                "name",
                "price",
                "UOM",
                "UOMValue",
                "available",
                "maximum",
                "vegNonVeg",
                "parent",
              ];
              const fieldCategoryMap = {
                vegNonVeg: ["F&B"],
              };

              const shouldRenderField =
                fieldsToRender.includes(field.id) &&
                (!fieldCategoryMap[field.id] || fieldCategoryMap[field.id].includes(category));

              if (shouldRenderField) {
                return (
                  <RenderInput
                    item={{
                      ...field,
                      error: errors?.[field?.id] ? true : false,
                      helperText: errors?.[field.id] || "",
                    }}
                    state={newCustomizationData}
                    stateHandler={setNewCustomizationData}
                    key={field?.id}
                    containerClasses={containerClasses}
                    labelClasses={labelClasses}
                    inputClasses={inputClasses}
                    inputStyles={field?.inputStyles}
                  />
                );
              }

              return null;
            })}
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="outlined" color="primary" onClick={handleAdd}>
              {props.mode === "edit" ? "Edit" : "Add"}
            </Button>
            <Button
              sx={{ marginLeft: 2 }}
              color="primary"
              onClick={(e) => {
                e.stopPropagation();
                setErrors({});
                setNewCustomizationData({ price: 0 });
                handleCloseModal();
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddCustomization;
