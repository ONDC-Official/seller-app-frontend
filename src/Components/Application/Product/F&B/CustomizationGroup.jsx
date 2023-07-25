import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

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

const CustomizationGroup = (props) => {
  const { group, customizationGroups, handleGroupChange, setHasErrorCustomizationGroup } = props;

  const [error, setError] = useState({});

  const handleInputChange = (event, property) => {
    const updatedGroups = customizationGroups.map((g) =>
      g.id === group.id ? { ...g, [property]: event.target.value } : g
    );
    handleGroupChange(updatedGroups);
  };

  const validate = () => {
    const newError = {};

    // Validation check for name
    if (!group.name.trim()) {
      newError.name = "Field cannot be empty";
    }

    // Validation check for minimum quantity
    if (group.minQuantity <= 0) {
      newError.minQuantity = "Minimum quantity must be non-negative";
    }

    // Validation check for maximum quantity
    if (group.maxQuantity <= 0) {
      newError.maxQuantity = "Maximum quantity must be non-negative";
    }

    setHasErrorCustomizationGroup(Object.keys(newError).length > 0);
    setError(newError);
  };

  useEffect(() => {
    validate();
  }, [group]);

  return (
    <>
      <div
        key={group.id}
        className="border-black rounded-md px-8 py-2 flex flex-col justify-center"
        style={{
          ...props.styles,
          backgroundColor: "#c7e0ff",
          border: "2px solid rgb(193 188 188 / 72%)",
          height: 150,
        }}
      >
        <div className="flex items-center mb-2">
          <p className="text-[#181818] text-medium">Customization group: {group.id}</p>
          <Button
            size="small"
            variant="outlined"
            sx={{ marginLeft: 2 }}
            onClick={() => {
              props?.setNewCustomizationData({ ...props.newCustomizationData, parent: group.id });
              props?.openCustomizationModal();
            }}
          >
            Add Customization
          </Button>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col mr-6">
            <p className="w-40 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">Name: &nbsp;</p>
            <CssTextField
              required
              type={"input"}
              className="w-52 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Customisation Name"}
              error={!!error.name}
              helperText={error.name || ""}
              value={group.name}
              onChange={(event) => handleInputChange(event, "name")}
            />
          </div>
          <div className="flex flex-col mr-6">
            <p className="w-40 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Minimum quantity: &nbsp;
            </p>
            <CssTextField
              required
              type="number"
              className="w-54 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder="Enter Minimum Quantity"
              error={!!error.minQuantity}
              helperText={error.minQuantity || ""}
              value={group.minQuantity}
              onChange={(event) => handleInputChange(event, "minQuantity")}
            />
          </div>
          <div className="flex flex-col">
            <label className="w-40 text-sm py-2 ml-1 font-medium text-[#606161] inline-block">
              Maximum quantity: &nbsp;
            </label>
            <CssTextField
              required
              type="number"
              className="w-54 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder="Enter Maximum Quantity"
              error={!!error.maxQuantity}
              helperText={error.maxQuantity || ""}
              value={group.maxQuantity}
              onChange={(event) => handleInputChange(event, "maxQuantity")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizationGroup;
