import React, { useState } from "react";
import { Edit, ExpandMore } from "@mui/icons-material";
import AddCustomization from "./AddCustomization";
import {
  Button,
  Menu,
  MenuItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

const containerClasses = "flex items-center mb-0.5";
const labelClasses = "w-28 text-md ml-1 text-md text-[#606161]";
const inputClasses = "w-80 h-full text-md text-[#606161]";

const Customization = (props) => {
  const {
    category,
    customization,
    customizations,
    handleCustomizationChange,
    customizationGroups,
    setCustomizations,
  } = props;

  const [showExistingGroups, setShowExistingGroups] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showCustomizationModal, setShowCustomizationModal] = useState(false);
  const [customizationDetails, setCustomizationDetails] = useState({});

  const handleMenuOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
    setShowExistingGroups(false);
  };

  const updateCustomizationDetail = () => {
    const updatedCustomization = customizations.find(
      (c) => c.id === customizationDetails.id
    );
    if (updatedCustomization) {
      const updatedCustomizationCopy = {
        ...updatedCustomization,
        ...customizationDetails,
      };

      if (
        customizationDetails.defaultCustomizationId ===
          customizationDetails.id &&
        customizationDetails.default === "No"
      ) {
        // Customization is no longer default, update the group data
        const groupIndex = customizationGroups.findIndex(
          (cg) => cg.id === customizationDetails.parent
        );
        let groups = [...customizationGroups];
        groups[groupIndex].defaultCustomizationId = null;
      }

      if (
        customizationDetails.default === "Yes" &&
        customizationDetails.defaultCustomizationId === null
      ) {
        // Customization is marked default, update the group data
        const groupIndex = customizationGroups.findIndex(
          (cg) => cg.id === customizationDetails.parent
        );
        let groups = [...customizationGroups];
        groups[groupIndex].defaultCustomizationId = customizationDetails.id;
      }

      const updatedCustomizations = customizations.map((c) =>
        c.id === customizationDetails.id ? updatedCustomizationCopy : c
      );
      handleCustomizationChange(updatedCustomizations);
      setShowCustomizationModal(false);
    }
  };

  const handleAddNewGroup = (e) => {
    e.stopPropagation();
    props.setSelectedCustomization(customization);
    props.setShowCustomizationGroupModal(true);
    handleMenuClose();
  };

  const handleChooseExistingGroup = (e) => {
    e.stopPropagation();
    setShowExistingGroups(true);
  };

  const handleChooseGroup = (groupId) => {
    const selectedCustomizationIndex = customizations.findIndex(
      (c) => c.id === customization.id
    );
    const updatedCustomizations = [...customizations];
    updatedCustomizations[selectedCustomizationIndex] = {
      ...updatedCustomizations[selectedCustomizationIndex],
      child: groupId,
    };
    setCustomizations(updatedCustomizations);
    handleMenuClose();
  };

  const renderValidGroupOptions = () => {
    const parentIndex = customizationGroups.findIndex(
      (g) => g.id === customization.parent
    );
    const parentSeq = parseInt(customizationGroups[parentIndex].seq);
    const validGroups = customizationGroups.filter(
      (group) => parseInt(group.seq) > parentSeq
    );

    if (validGroups.length === 0) {
      return (
        <MenuItem key="no-valid-group" onClick={(e) => e.stopPropagation()}>
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

  const parentGroup = customizationGroups.find(
    (group) => group.id === customization.parent
  );

  const shouldShowButton =
    !customization.child && parentGroup && parentGroup.seq < 3;

  return (
    <>
      <Accordion
        style={{
          ...props.styles,
          backgroundColor: "#1876d221",
          // border: "2.5px solid #ffffff",
          borderRadius: 8,
          marginTop: 10,
          marginBottom: 10,
          position: "unset",
          boxShadow: "none",
        }}
        onClick={() => setCustomizationDetails(customization)}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          style={{ borderRadius: 8 }}
        >
          <div key={customization.id} style={{ width: "100%" }}>
            <div
              className="flex"
              style={{ justifyContent: "space-between", width: "100%" }}
            >
              <div>
                <span className="flex items-center">
                  <p className="text-[#181818] text-medium">
                    [{customization.id}] &nbsp;
                  </p>
                  <p className="text-[#000000] text-medium">
                    {customization.name} &nbsp; => &nbsp;
                  </p>
                  <p className="text-[#000000] text-medium">
                    {customization.price} Rupees
                  </p>
                </span>
              </div>
              <div className="flex">
                {shouldShowButton && (
                  <div>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{ marginLeft: 2 }}
                      onClick={handleMenuOpen}
                    >
                      Add Customization Group
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      onClick={(e) => e.stopPropagation()}
                    >
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
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ marginLeft: 2, fontSize: 12 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCustomizationDetails({
                      ...customization,
                      defaultCustomizationId:
                        parentGroup.defaultCustomizationId,
                    });
                    setShowCustomizationModal(true);
                  }}
                >
                  <Edit />
                </Button>
              </div>
            </div>

            <AddCustomization
              mode="edit"
              category={category}
              showModal={showCustomizationModal}
              handleCloseModal={() => setShowCustomizationModal(false)}
              newCustomizationData={customizationDetails}
              setNewCustomizationData={setCustomizationDetails}
              handleAddCustomization={updateCustomizationDetail}
            />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="w-auto">
            {Object.keys(customizationDetails).map((f) => {
              const fieldsToRender = [
                "id",
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
                fieldsToRender.includes(f) &&
                (!fieldCategoryMap[f] ||
                  fieldCategoryMap[f].includes(category));

              if (shouldRenderField) {
                return (
                  <div className={containerClasses}>
                    <p className={labelClasses}>{f}: &nbsp;</p>
                    <p className={inputClasses}>{customizationDetails[f]}</p>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Customization;
