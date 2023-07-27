import React, { useState } from "react";
import { Button } from "@mui/material";
import { Edit } from "@mui/icons-material";
import AddCustomizationGroup from "./AddCustomizationGroup";

const CustomizationGroup = (props) => {
  const { group, customizationGroups, handleGroupChange } = props;

  const [showCustomizationGroupModal, setShowCustomizationGroupModal] = useState(false);
  const [groupData, setGroupData] = useState({});

  const updateCustomizationGroup = (updatedGroupData) => {
    const groupIndex = customizationGroups.findIndex((g) => g.id === updatedGroupData.id);
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
          backgroundColor: "#c7e0ff",
          border: "2px solid #7CA6D9",
          height: 50,
        }}
      >
        <div className="flex items-center">
          <span className="flex">
            <p className="text-[#181818] text-medium">{group.id}- &nbsp;</p>
            <p className="text-[#000000] text-medium">{group.name}</p>
          </span>
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
          <Button
            size="small"
            variant="outlined"
            sx={{ marginLeft: 2 }}
            onClick={() => {
              props?.setNewCustomizationData({ ...props.newCustomizationData, parent: group.id });
              props?.openCustomizationModal();
            }}
          >
            Add Customization
          </Button>
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
