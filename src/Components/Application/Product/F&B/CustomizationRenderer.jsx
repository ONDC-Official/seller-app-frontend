import React, { useState } from "react";
import CustomizationGroup from "./CustomizationGroup";
import Customization from "./Customization";
import { Button } from "@mui/material";
import AddCustomizationGroup from "./AddCustomizationGroup";
import AddCustomization from "./AddCustomization";

const CustomizationRenderer = (props) => {
  const { customizationGroups, setCustomizationGroups, customizations, setCustomizations } = props;
  const [showCustomizationGroupModal, setShowCustomizationGroupModal] = useState(false);
  const [newCustomizationGroupData, setNewCustomizationGroupData] = useState({
    name: "",
    price: 0,
    minQuantity: "",
    maxQuantity: "",
  });

  const [showCustomizationModal, setShowCustomizationModal] = useState(false);
  const [newCustomizationData, setNewCustomizationData] = useState({
    name: "",
    price: "",
    inStock: true,
    parent: "",
  });

  const handleGroupChange = (updatedGroups) => {
    setCustomizationGroups(updatedGroups);
  };

  const handleCustomizationChange = (updatedCustomizations) => {
    setCustomizations(updatedCustomizations);
  };

  const handleAddCustomizationGroup = () => {};

  const openCustomizationModal = () => {
    setShowCustomizationModal(true);
  };

  const handleAddCustomization = () => {
    let newCustomization = { ...newCustomizationData, id: `C${customizations.length + 1}`, inStock: true };
    setCustomizations([...customizations, newCustomization]);
    setNewCustomizationData({});
    setShowCustomizationModal(false);
  };

  const renderCustomizations = (groups) => {
    const renderedElements = [];

    for (const group of groups) {
      if (group.seq === 1) {
        renderedElements.push(
          <React.Fragment key={group.id}>
            <Button variant="contained" onClick={() => setShowCustomizationGroupModal(true)} sx={{ marginBottom: 2 }}>
              Add Customization Group
            </Button>
            <CustomizationGroup
              group={group}
              customizationGroups={customizationGroups}
              handleGroupChange={handleGroupChange}
              openCustomizationModal={openCustomizationModal}
              setNewCustomizationData={setNewCustomizationData}
            />
            {renderCustomizationElements(group.id)}
          </React.Fragment>
        );
      }
    }

    return renderedElements;
  };

  const renderCustomizationElements = (groupId, level = 1) => {
    const renderedElements = [];

    const groupCustomizations = customizations.filter((customization) => customization.parent === groupId);
    for (const customization of groupCustomizations) {
      renderedElements.push(
        <Customization
          styles={{ marginLeft: `${level * 55}px` }}
          customization={customization}
          customizations={customizations}
          handleCustomizationChange={handleCustomizationChange}
        />
      );

      if (customization.child) {
        const childGroup = customizationGroups.find((g) => g.id === customization.child);
        if (childGroup) {
          renderedElements.push(
            <React.Fragment key={childGroup.id}>
              <CustomizationGroup
                group={childGroup}
                customizationGroups={customizationGroups}
                handleGroupChange={(event) => handleGroupChange(event, childGroup.id)}
                styles={{ marginLeft: `${(level + 1) * 60}px` }}
                openCustomizationModal={openCustomizationModal}
                setNewCustomizationData={setNewCustomizationData}
              />
              {renderCustomizationElements(childGroup.id, level + 2)}
            </React.Fragment>
          );
        }
      }
    }
    return renderedElements;
  };

  return (
    <div>
      {renderCustomizations(customizationGroups)}
      <AddCustomizationGroup
        showModal={showCustomizationGroupModal}
        handleCloseModal={() => setShowCustomizationGroupModal(false)}
        newCustomizationGroupData={newCustomizationGroupData}
        setNewCustomizationGroupData={setNewCustomizationGroupData}
        customizationGroups={customizationGroups}
        handleAddCustomizationGroup={handleAddCustomizationGroup}
      />
      <AddCustomization
        showModal={showCustomizationModal}
        handleCloseModal={() => setShowCustomizationModal(false)}
        newCustomizationData={newCustomizationData}
        setNewCustomizationData={setNewCustomizationData}
        handleAddCustomization={handleAddCustomization}
      />
    </div>
  );
};

export default CustomizationRenderer;
