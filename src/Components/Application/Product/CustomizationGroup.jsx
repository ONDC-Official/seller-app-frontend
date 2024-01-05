import React, { useState } from "react";
import { Button } from "@mui/material";
import { Edit } from "@mui/icons-material";
import AddCustomizationGroup from "./AddCustomizationGroup";

const CustomizationGroup = (props) => {
  const { group, customizationGroups, handleGroupChange } = props;

  const [showCustomizationGroupModal, setShowCustomizationGroupModal] =
    useState(false);
  const [groupData, setGroupData] = useState({});

  const updateCustomizationGroup = (updatedGroupData) => {
    const groupIndex = customizationGroups.findIndex(
      (g) => g.id === updatedGroupData.id
    );
    if (groupIndex !== -1) {
      const updatedGroups = [...customizationGroups];
      updatedGroups[groupIndex] = updatedGroupData;
      handleGroupChange(updatedGroups);
      setShowCustomizationGroupModal(false);
    }
  };

  return (
    <>
      <div
        key={group.id}
        className="border-black rounded-md px-8 py-7 flex flex-col justify-center"
        style={{
          ...props.styles,
          backgroundColor: "#C7E0FF",
          // border: "2px solid #7CA6D9",
          height: 50,
        }}
      >
        <div
          className="flex items-center"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <div>
            <span className="flex">
              <p className="text-[#181818] text-medium">[{group.id}]&nbsp;</p>
              <p className="text-[#000000] text-medium">{group.name}</p>
            </span>
          </div>
          <div style={{ marginRight: "10px" }}>
            <Button
              size="small"
              variant="outlined"
              sx={{ marginLeft: 2 }}
              onClick={() => {
                props?.setNewCustomizationData({
                  ...props.newCustomizationData,
                  parent: group.id,
                  defaultCustomizationId: group.defaultCustomizationId,
                });
                props?.openCustomizationModal();
              }}
            >
              Add Customization
            </Button>
            <Button
              size="small"
              variant="outlined"
              sx={{ marginLeft: 2, fontSize: 12 }}
              onClick={() => {
                setGroupData(group);
                setShowCustomizationGroupModal(true);
              }}
            >
              <Edit />
            </Button>
          </div>
        </div>
      </div>
      <AddCustomizationGroup
        mode="edit"
        showModal={showCustomizationGroupModal}
        handleCloseModal={() => setShowCustomizationGroupModal(false)}
        newCustomizationGroupData={groupData}
        setNewCustomizationGroupData={setGroupData}
        customizationGroups={customizationGroups}
        handleAddCustomizationGroup={updateCustomizationGroup}
      />
    </>
  );
};

export default CustomizationGroup;
