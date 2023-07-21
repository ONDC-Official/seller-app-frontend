import React from "react";
import { styled } from "@mui/material/styles";
import { Autocomplete, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";

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
    customizationGroups,
    handleAddCustomizationGroup,
  } = props;
  return (
    <div>
      <Modal open={showModal} onClose={handleCloseModal}>
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
              placeholder={"Enter Customisation Group Name"}
              //   error={newCustomizationGroupData.name.trim() === ""}
              //   helperText={newCustomizationGroupData.name.trim() === "" ? "Field cannot be empty" : ""}
              value={newCustomizationGroupData.name}
              onChange={(e) => setNewCustomizationGroupData({ ...newCustomizationGroupData, name: e.target.value })}
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Min Quantity:
            </label>

            <CssTextField
              required
              type="number"
              className="w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Minimum Quantity"}
              //   error={newCustomizationGroupData.price.trim() === ""}
              //   helperText={newCustomizationGroupData.price.trim() === "" ? "Field cannot be empty" : ""}
              value={newCustomizationGroupData.minQuantity}
              onChange={(e) =>
                setNewCustomizationGroupData({ ...newCustomizationGroupData, minQuantity: e.target.value })
              }
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
              //   error={newCustomizationGroupData.price.trim() === ""}
              //   helperText={newCustomizationGroupData.price.trim() === "" ? "Field cannot be empty" : ""}
              value={newCustomizationGroupData.maxQuantity}
              onChange={(e) =>
                setNewCustomizationGroupData({ ...newCustomizationGroupData, maxQuantity: e.target.value })
              }
            />
          </div>
          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Parent
            </label>

            <FormControl>
              <Autocomplete
                sx={{ width: 320 }}
                size="small"
                options={customizationGroups}
                getOptionLabel={(option) => {
                  return `${option.id}: ${option.name}`;
                }}
                value={newCustomizationGroupData.parent}
                onChange={(e) => setNewCustomizationGroupData({ ...newCustomizationGroupData, parent: e.target.value })}
                renderInput={(params) => <TextField {...params} placeholder={"Select a parent"} variant="outlined" />}
              />
            </FormControl>
          </div>

          <div className="flex justify-end mt-4">
            <Button variant="outlined" color="primary" onClick={handleAddCustomizationGroup}>
              Add Customization
            </Button>
            <Button sx={{ marginLeft: 2 }} color="primary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddCustomizationGroup;
