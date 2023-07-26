import React, { useEffect, useState } from "react";
import { Edit } from "@mui/icons-material";
import AddCustomization from "./AddCustomization";
import { Button, Menu, MenuItem, ListItemText } from "@mui/material";

const Customization = (props) => {
  const { customization, customizations, handleCustomizationChange, customizationGroups, setCustomizations } = props;

  const [showExistingGroups, setShowExistingGroups] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showCustomizationModal, setShowCustomizationModal] = useState(false);
  const [customizationDetails, setCustomizationDetails] = useState({});

  const [errors, setErrors] = useState({});

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setShowExistingGroups(false);
  };

  const updateCustomizationDetail = () => {
    const updatedCustomization = customizations.find((c) => c.id === customizationDetails.id);
    if (updatedCustomization) {
      const updatedCustomizationCopy = { ...updatedCustomization, ...customizationDetails };
      const updatedCustomizations = customizations.map((c) =>
        c.id === customizationDetails.id ? updatedCustomizationCopy : c
      );
      handleCustomizationChange(updatedCustomizations);
      setShowCustomizationModal(false);
    }
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
        <div className="flex">
          <span className="flex items-center">
            <p className="text-[#181818] text-medium">{customization.id}- &nbsp;</p>
            <p className="text-[#000000] text-medium">{customization.name}</p>
          </span>
          <div className="flex align-center">
            <Button
              size="small"
              variant="outlined"
              sx={{ marginLeft: 2, fontSize: 12 }}
              onClick={() => {
                setCustomizationDetails(customization);
                setShowCustomizationModal(true);
              }}
            >
              <Edit />
            </Button>
          </div>
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
        <AddCustomization
          mode="edit"
          showModal={showCustomizationModal}
          handleCloseModal={() => setShowCustomizationModal(false)}
          newCustomizationData={customizationDetails}
          setNewCustomizationData={setCustomizationDetails}
          handleAddCustomization={updateCustomizationDetail}
        />
      </div>
    </>
  );
};

export default Customization;
