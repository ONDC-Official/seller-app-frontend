import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, FormControl, MenuItem, Modal, Select, TextField, Checkbox } from "@mui/material";

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

const AddCustomizationGroup = (props) => {
  const {
    showModal,
    handleCloseModal,
    newCustomizationGroupData,
    setNewCustomizationGroupData,
    handleAddCustomizationGroup,
  } = props;

  const [errors, setErrors] = useState({});
  const [inputType, setInputType] = useState(null);

  const validate = () => {
    const formErrors = {};
    formErrors.name =
      newCustomizationGroupData?.name == undefined || newCustomizationGroupData?.name?.trim() === ""
        ? "Name is not allowed to be empty"
        : "";
    formErrors.minQuantity =
      newCustomizationGroupData?.minQuantity == undefined || newCustomizationGroupData?.minQuantity === ""
        ? "Min Quantity is not allowed to be empty"
        : newCustomizationGroupData?.minQuantity < 0
        ? `Please enter a valid quantity`
        : "";
    formErrors.maxQuantity =
      newCustomizationGroupData?.maxQuantity == undefined || newCustomizationGroupData?.maxQuantity === ""
        ? "Max Quantity is not allowed to be empty"
        : newCustomizationGroupData?.maxQuantity <= 0
        ? `Please enter a valid quantity`
        : "";

    setErrors(formErrors);

    return !Object.values(formErrors).some((val) => val !== "");
  };

  const handleSubmit = () => {
    if (validate() === true) {
      setErrors({});
      handleAddCustomizationGroup(newCustomizationGroupData, inputType);
    }
  };

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setInputType(selectedValue);
  };

  useEffect(() => {
    if (props.mode === "edit" && Object.keys(newCustomizationGroupData).length > 0) {
      setInputType(newCustomizationGroupData.inputType);
    } else {
      setInputType("select");
    }
  }, [newCustomizationGroupData]);

  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => {
          setErrors({});
          handleCloseModal();
          setNewCustomizationGroupData({});
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
            {props.mode === "edit" ? "Edit Customization Group" : "Add New Customization Group"}
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
              placeholder={"Enter Customisation Group Name"}
              error={!!errors.name}
              helperText={errors.name}
              value={newCustomizationGroupData.name}
              onChange={(e) =>
                setNewCustomizationGroupData({
                  ...newCustomizationGroupData,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Optional? :
            </label>

            <Checkbox
              checked={newCustomizationGroupData.optional}
              onChange={(e) => {
                let checkbox_state = e.target.checked;
                let state = { optional: checkbox_state };
                if (checkbox_state) {
                  state["minQuantity"] = "0";
                } else {
                  state["minQuantity"] = "1";
                }
                setNewCustomizationGroupData({
                  ...newCustomizationGroupData,
                  ...state,
                });
              }}
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Min Quantity:
            </label>

            <CssTextField
              required
              disabled={newCustomizationGroupData.optional}
              type="number"
              className="w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Minimum Quantity"}
              error={!!errors.minQuantity}
              helperText={errors.minQuantity}
              value={newCustomizationGroupData.minQuantity}
              onChange={(e) => {
                let val = e.target.value;
                if (!newCustomizationGroupData.optional && val === "0") {
                  val = "1";
                }
                setNewCustomizationGroupData({
                  ...newCustomizationGroupData,
                  minQuantity: val,
                });
              }}
            />
          </div>
          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Max Quantity:
            </label>

            <CssTextField
              required
              type="number"
              className="w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Maximum Quantity"}
              error={!!errors.maxQuantity}
              helperText={errors.maxQuantity}
              value={newCustomizationGroupData.maxQuantity}
              onChange={(e) =>
                setNewCustomizationGroupData({
                  ...newCustomizationGroupData,
                  maxQuantity: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Input Type:
            </label>

            <FormControl>
              <Select
                sx={{ width: 320 }}
                size="small"
                displayEmpty
                value={inputType}
                onChange={handleChange}
                renderValue={(value) => {
                  if (!value) {
                    return <p>Select Input Type</p>;
                  }
                  return value;
                }}
              >
                <MenuItem value="input">input</MenuItem>
                <MenuItem value="select">select</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="flex justify-end mt-4">
            <Button variant="outlined" color="primary" onClick={handleSubmit}>
              {props.mode === "edit" ? "Edit" : "Add"}
            </Button>
            <Button
              sx={{ marginLeft: 2 }}
              color="primary"
              onClick={() => {
                handleCloseModal();
                setErrors({});
                setNewCustomizationGroupData({});
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

export default AddCustomizationGroup;
