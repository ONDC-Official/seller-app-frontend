import React from "react";
import CustomizationGroup from "./CustomizationGroup";

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
              <div
                key={customization.id}
                style={{ marginLeft: "20px", borderWidth: 1 }}
                className="border-stone-300 rounded-md px-4 py-2 my-2"
              >
                <div className="flex">
                  <p className="font-medium">Variant Name: &nbsp;</p>
                  <input
                    style={{
                      ...inputStyles,
                    }}
                    value={customization.name}
                    onChange={(event) =>
                      handleCustomizationChange(
                        event,
                        customizations.findIndex((c) => c.id === customization.id)
                      )
                    }
                  />
                </div>
                <div className="flex font-medium">
                  <p>Price: &nbsp;</p>
                  <p>{customization.price}</p>
                </div>
              </div>
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
                      <div
                        key={childCustomization.id}
                        style={{
                          marginLeft: "60px",
                          borderWidth: 1,
                        }}
                        className="border-2 border-stone-300 rounded-md px-4 py-2 my-2"
                      >
                        <div className="flex">
                          <p className="font-medium">Variant Name: &nbsp;</p>
                          <input
                            style={inputStyles}
                            value={childCustomization.name}
                            onChange={(event) =>
                              handleCustomizationChange(
                                event,
                                customizations.findIndex((c) => c.id === childCustomization.id)
                              )
                            }
                          />
                        </div>
                        <div className="flex font-medium">
                          <p>Price: &nbsp;</p>
                          <p>{childCustomization.price}</p>
                        </div>
                      </div>
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
