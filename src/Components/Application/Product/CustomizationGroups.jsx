import React from "react";

const CustomizationGroups = (props) => {
  const { group, customizationGroups, handleGroupChange } = props;
  return (
    <>
      <div key={group.id} className="border-2 border-stone-300 rounded-md px-4 py-2" style={props.styles}>
        <div className="flex">
          <p className="font-bold">Customization group: &nbsp;</p>
          <input
            style={{ background: "transparent" }}
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
    </>
  );
};

export default CustomizationGroups;
