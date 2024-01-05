import React from "react";
import RenderInput from "../../../utils/RenderInput";
const containerClasses = "flex items-center mb-4";
const inputClasses = "w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black flex";
const labelClasses = "w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block";

const menuFields = [
  {
    id: "name",
    title: "Menu Name",
    placeholder: "Menu Name",
    type: "input",
    required: true,
  },
  {
    id: "shortDescription",
    title: "Short Description",
    placeholder: "Menu Short Description",
    type: "input",
    required: true,
  },
  {
    id: "longDescription",
    title: "Long Description",
    placeholder: "Menu Long Description",
    type: "input",
    required: true,
  },
  {
    id: "images",
    title: "Images (Select minimum 3 files with maximum size of 2Mb for each file)",
    type: "upload",
    multiple: true,
    file_type: "menu_image",
    fontColor: "#000000",
    required: true,
  },
];

const MenuBasicInfo = (props) => {
  const { menuData, setMenuData, errors, defaultStyles = false } = props;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className="w-auto max-h-[500px] overflow-y-auto">
        {menuFields.map((field) => {
          return (
            <RenderInput
              item={{
                ...field,
                error: errors?.[field?.id] ? true : false,
                helperText: errors?.[field.id] || "",
              }}
              state={menuData}
              stateHandler={setMenuData}
              key={field?.id}
              containerClasses={!defaultStyles ? containerClasses : ""}
              labelClasses={!defaultStyles ? labelClasses : ""}
              inputClasses={!defaultStyles ? inputClasses : ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuBasicInfo;
