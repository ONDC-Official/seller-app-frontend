import React from "react";

const CustomizationRenderer = (props) => {
  const {
    customizationGroups,
    setCustomizationGroups,
    customizations,
    setCustomizations,
  } = props;

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
          <div
            key={group.id}
            className="border-2 border-stone-300 rounded-md px-4 py-2"
          >
            <div className="flex">
              <p className="font-bold">Customization group: &nbsp;</p>
              <input
                style={inputStyles}
                value={group.name}
                onChange={(event) =>
                  handleGroupChange(
                    event,
                    customizationGroups.findIndex((g) => g.id === group.id)
                  )
                }
              />
            </div>
            <div className="flex font-medium">
              <p>Minimum quantity: &nbsp;</p>
              <p>{group.minQuanity}</p>
            </div>
            <div className="flex font-medium">
              <p>Maximum quantity: &nbsp;</p>
              <p>{group.maxQuantity}</p>
            </div>
          </div>
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
                        customizations.findIndex(
                          (c) => c.id === customization.id
                        )
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
              const childGroup = customizationGroups.find(
                (g) => g.id === customization.child
              );

              if (childGroup) {
                renderedElements.push(
                  <div
                    key={childGroup.id}
                    style={{ marginLeft: "40px" }}
                    className="border-2 border-stone-300 rounded-md px-4 py-2"
                  >
                    <div className="flex">
                      <p className="font-bold">Customization group: &nbsp;</p>
                      <input
                        style={inputStyles}
                        value={childGroup.name}
                        onChange={(event) =>
                          handleGroupChange(
                            event,
                            customizationGroups.findIndex(
                              (g) => g.id === childGroup.id
                            )
                          )
                        }
                      />
                    </div>
                    <div className="flex font-medium">
                      <p>Minimum quantity: &nbsp;</p>
                      <p>{childGroup.minQuanity}</p>
                    </div>
                    <div className="flex font-medium">
                      <p>Maximum quantity: &nbsp;</p>
                      <p>{childGroup.maxQuantity}</p>
                    </div>
                  </div>
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
                                customizations.findIndex(
                                  (c) => c.id === childCustomization.id
                                )
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
