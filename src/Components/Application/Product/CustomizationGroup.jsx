import React from "react";
import { Input } from "@material-ui/core";
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
        className="border-black rounded-md px-8 py-6"
        style={{ ...props.styles, backgroundColor: "#c7e0ff" }}
      >
        <p className="text-[#181818] mb-2 text-lg">Customization group</p>
        <div className="flex items-center">
          <label className="w-56 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
            Name: &nbsp;
          </label>
          <CssTextField
            required
            type={"input"}
            className="w-72 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
            size="small"
            autoComplete="off"
            placeholder={"Enter Customisation Name"}
            error={group.name.trim() === ""}
            helperText={group.name.trim() === "" ? "Field cannot be empty" : ""}
            value={group.name}
            onChange={(event) => handleInputChange(event, "name")}
          />
        </div>
        <div className="flex items-center">
          <label className="w-56 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
            Minimum quantity: &nbsp;
          </label>
          <CssTextField
            required
            type="number"
            className="w-72 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
            size="small"
            autoComplete="off"
            placeholder="Enter Minimum Quantity"
            error={group.minQuantity <= 0}
            helperText={group.minQuantity <= 0 ? "Minimum quantity must be non-negative" : ""}
            value={group.minQuantity}
            onChange={(event) => handleInputChange(event, "minQuantity")}
            onFocus={() => console.log("onFocus")}
            onBlur={() => console.log("onBlur")}
          />
        </div>
        <div className="flex items-center">
          <label className="w-56 my-4 text-sm py-2 ml-1 font-medium text-[#606161] inline-block">
            Maximum quantity: &nbsp;
          </label>
          <CssTextField
            required
            type="number"
            className="w-72 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
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
    </>
  );
};

export default CustomizationGroup;
