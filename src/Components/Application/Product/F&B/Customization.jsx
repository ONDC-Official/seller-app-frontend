import React, { useEffect, useState } from "react";
import { Button, TextField, Menu, MenuItem, ListItemText } from "@mui/material";
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

const Customization = (props) => {
  const {
    customization,
    customizations,
    handleCustomizationChange,
    customizationGroups,
    setCustomizations,
    setHasErrorCustomization,
  } = props;

  const [showExistingGroups, setShowExistingGroups] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [errors, setErrors] = useState({});

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setShowExistingGroups(false);
  };

  const handleAddNewGroup = () => {
    props.setSelectedCustomization(customization);
    props.setShowCustomizationGroupModal(true);
    handleMenuClose();
  };

  const handleChooseExistingGroup = () => {
    setShowExistingGroups(true);
  };

  const handleChooseGroup = (groupId) => {
    const selectedCustomizationIndex = customizations.findIndex((c) => c.id === customization.id);
    const updatedCustomizations = [...customizations];
    updatedCustomizations[selectedCustomizationIndex] = {
      ...updatedCustomizations[selectedCustomizationIndex],
      child: groupId,
    };
    setCustomizations(updatedCustomizations);
    handleMenuClose();
  };

  const handleInputChange = (event, property) => {
    const updatedGroups = customizations.map((g) =>
      g.id === customization.id ? { ...g, [property]: event.target.value } : g
    );
    handleCustomizationChange(updatedGroups);
  };

  const renderValidGroupOptions = () => {
    const parentIndex = customizationGroups.findIndex((g) => g.id === customization.parent);
    const parentSeq = parseInt(customizationGroups[parentIndex].seq);
    const validGroups = customizationGroups.filter((group) => parseInt(group.seq) > parentSeq);

    if (validGroups.length === 0) {
      return (
        <MenuItem key="no-valid-group">
          <ListItemText primary="No valid groups available" />
        </MenuItem>
      );
    }

    return validGroups.map((group) => (
      <MenuItem key={group.id} onClick={() => handleChooseGroup(group.id)}>
        <ListItemText primary={`Group ${group.id} - ${group.name}`} />
      </MenuItem>
    ));
  };

  const validate = () => {
    const newErrors = {};

    if (customization.name.trim() === "") {
      newErrors.name = "Field cannot be empty";
    }

    if (customization.price < 0) {
      newErrors.price = "Please enter a valid price value";
    }

    setHasErrorCustomization(Object.keys(newErrors).length > 0);
    setErrors(newErrors);
  };

  useEffect(() => {
    validate();
  }, [customizations]);

  const parentGroup = customizationGroups.find((group) => group.id === customization.parent);
  const shouldShowButton = !customization.child && parentGroup && parentGroup.seq < 3;

  return (
    <>
      <div
        key={customization.id}
        style={{ ...props.styles, backgroundColor: "#1876d221", border: "2px solid #ffffff" }}
        className="border-black rounded-md px-8 py-2 my-2"
      >
        <div className="flex items-end">
          <p className="text-[#181818] text-medium">Customization: {customization.id}</p>
          {shouldShowButton && (
            <div>
              <Button size="small" variant="outlined" sx={{ marginLeft: 2 }} onClick={handleMenuOpen}>
                Add Customization Group
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {showExistingGroups ? (
                  renderValidGroupOptions()
                ) : (
                  <div>
                    <MenuItem onClick={handleAddNewGroup}>
                      <ListItemText primary="Add New Group" />
                    </MenuItem>
                    <MenuItem onClick={handleChooseExistingGroup}>
                      <ListItemText primary="Choose Existing Group" />
                    </MenuItem>
                  </div>
                )}
              </Menu>
            </div>
          )}
        </div>
        <div className="flex">
          <div className="flex flex-col mr-6">
            <p className="w-40 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Variant Name: &nbsp;
            </p>

            <CssTextField
              required
              type={"input"}
              className="w-48 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Variant Name"}
              error={!!errors.name}
              helperText={errors.name}
              value={customization.name}
              onChange={(event) => handleInputChange(event, "name")}
            />
          </div>
          <div className="flex flex-col">
            <p className="w-40 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">Price: &nbsp;</p>
            <CssTextField
              required
              type={"number"}
              className="w-54 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Variant Price"}
              error={!!errors.price}
              helperText={errors.price}
              value={customization.price}
              onChange={(event) => handleInputChange(event, "price")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Customization;
