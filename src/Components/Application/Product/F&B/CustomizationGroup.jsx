import React from "react";
import { TextField } from "@mui/material";
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
  const { group, customizationGroups, handleGroupChange } = props;

  const handleInputChange = (event, property) => {
    const updatedGroups = customizationGroups.map((g) =>
      g.id === group.id ? { ...g, [property]: event.target.value } : g
    );
    handleGroupChange(updatedGroups);
  };

  return (
    <>
      <div
        key={group.id}
        className="border-black rounded-md px-8 py-2"
        style={{ ...props.styles, backgroundColor: "#c7e0ff", border: "2px solid #000000" }}
      >
        <p className="text-[#181818] text-medium">Customization group: {group.id}</p>
        <div className="flex items-center">
          <div className="flex flex-col mr-6">
            <p className="w-40 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">Name: &nbsp;</p>
            <CssTextField
              required
              type={"input"}
              className="w-40 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Customisation Name"}
              error={group.name.trim() === ""}
              helperText={group.name.trim() === "" ? "Field cannot be empty" : ""}
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
              className="w-40 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder="Enter Minimum Quantity"
              error={group.minQuantity <= 0}
              helperText={group.minQuantity <= 0 ? "Minimum quantity must be non-negative" : ""}
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
              className="w-40 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder="Enter Maximum Quantity"
              error={group.maxQuantity <= 0}
              helperText={group.maxQuantity <= 0 ? "Maximum quantity must be non-negative" : ""}
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
