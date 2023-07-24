import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Modal, TextField } from "@mui/material";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "#1c75bc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1c75bc",
    },
  },
  "& .MuiInputBase-input": {
    fontSize: "14px",
  },
});

const AddCustomization = (props) => {
  const { showModal, handleCloseModal, newCustomizationData, setNewCustomizationData, handleAddCustomization } = props;
  const [errors, setErrors] = useState({});

  const validate = () => {
    const formErrors = {};
    formErrors.name =
      newCustomizationData?.name?.trim() == undefined || newCustomizationData?.name?.trim() === ""
        ? "Name is not allowed to be empty"
        : "";
    formErrors.price = newCustomizationData?.price < 0 ? `Please enter a valid price` : "";

    setErrors(formErrors);

    return !Object.values(formErrors).some((val) => val !== "");
  };

  const handleAdd = () => {
    if (validate()) {
      setErrors({});
      handleAddCustomization();
    }
  };

  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => {
          setErrors({});
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
            Add New Customization
          </p>
          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Name:
            </label>

            <CssTextField
              required
              type={"input"}
              className="w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Customisation Name"}
              error={!!errors.name}
              helperText={errors.name}
              value={newCustomizationData.name}
              onChange={(e) => setNewCustomizationData({ ...newCustomizationData, name: e.target.value })}
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Price:
            </label>

            <CssTextField
              required
              type="input"
              className="w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Customization Price"}
              error={!!errors.price}
              helperText={errors.price}
              value={newCustomizationData.price}
              onChange={(e) => setNewCustomizationData({ ...newCustomizationData, price: e.target.value })}
            />
          </div>
          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Parent:
            </label>

            <CssTextField
              required
              disabled
              type="input"
              className="w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Maximum Quantity"}
              value={newCustomizationData?.parent}
            />
          </div>

          <div className="flex justify-end mt-4">
            <Button variant="outlined" color="primary" onClick={handleAdd}>
              Add
            </Button>
            <Button
              sx={{ marginLeft: 2 }}
              color="primary"
              onClick={() => {
                setErrors({});
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
