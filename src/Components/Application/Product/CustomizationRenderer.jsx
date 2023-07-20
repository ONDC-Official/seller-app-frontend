import React from "react";
import CustomizationGroup from "./CustomizationGroup";
import Customization from "./Customization";

const CustomizationRenderer = (props) => {
  const { customizationGroups, setCustomizationGroups, customizations, setCustomizations } = props;

  function renderCustomizations() {
    const inputStyles = {
      background: "transparent",
    };

    const handleGroupChange = (event, groupIndex) => {
      const updatedGroups = [...customizationGroups];
      updatedGroups[groupIndex].name = event.target.value;
      setCustomizationGroups(updatedGroups);
    };

    const handleCustomizationChange = (event, customizationIndex) => {
      const updatedCustomizations = [...customizations];
      updatedCustomizations[customizationIndex].name = event.target.value;
      setCustomizations(updatedCustomizations);
    };

    const renderedElements = [];

    for (const group of customizationGroups) {
      if (group.seq === 1) {
        renderedElements.push(
          <CustomizationGroup
            group={group}
            customizationGroups={customizationGroups}
            handleGroupChange={handleGroupChange}
          />
        );

        for (const customization of customizations) {
          if (customization.parent === group.id) {
            renderedElements.push(
              <Customization
                styles={{ marginLeft: 20 }}
                customization={customization}
                customizations={customizations}
                handleCustomizationChange={handleCustomizationChange}
              />
            );

            if (customization.child) {
              const childGroup = customizationGroups.find((g) => g.id === customization.child);

              if (childGroup) {
                renderedElements.push(
                  <CustomizationGroup
                    styles={{ marginLeft: 40 }}
                    group={childGroup}
                    customizationGroups={customizationGroups}
                    handleGroupChange={handleGroupChange}
                  />
                );

                for (const childCustomization of customizations) {
                  if (childCustomization.parent === childGroup.id) {
                    renderedElements.push(
                      <Customization
                        styles={{ marginLeft: 60 }}
                        customization={childCustomization}
                        customizations={customizations}
                        handleCustomizationChange={handleCustomizationChange}
                      />
                    );
                  }
                }
              }
            }
          }
        }
      }
    }

    return renderedElements;
  }
  return <div>{renderCustomizations()}</div>;
};

export default CustomizationRenderer;
