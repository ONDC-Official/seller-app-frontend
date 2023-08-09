import { Button, Modal } from "@mui/material";
import RenderInput from "../../../utils/RenderInput";
import { useState } from "react";

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
    fontColor: "#ffffff",
    required: true,
  },
];

const MenuManager = (props) => {
  const { mode = "add", showMenuModal, handleCloseMenuModal, menuData, setMenuData, handleAdd, handleEdit } = props;

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    formErrors.name = menuData?.name === "" ? "Menu Name is required" : "";
    formErrors.shortDescription = menuData?.shortDescription === "" ? "Short Description is required" : "";
    formErrors.longDescription = menuData?.longDescription === "" ? "Long Description is required" : "";
    formErrors.images = menuData?.images.length < 3 ? "Minimum 3 images are required" : "";
    setErrors({
      ...formErrors,
    });

    let valid_form = !Object.values(formErrors).some((val) => val !== "");

    return valid_form;
  };

  const handleClick = () => {
    if (validate()) {
      if (mode === "add") handleAdd(menuData);
      else handleEdit(menuData);
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showMenuModal}
        onClose={() => {
          handleCloseMenuModal();
          setErrors({});
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "24px 40px",
            borderRadius: 20,
          }}
        >
          <p className="font-semibold text-xl" style={{ marginBottom: 10 }}>
            {mode === "edit" ? "Edit Menu" : "Add New Menu"}
          </p>

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
                  containerClasses={containerClasses}
                  labelClasses={labelClasses}
                  inputClasses={inputClasses}
                />
              );
            })}
          </div>

          <div className="flex justify-end mt-4">
            <Button variant="contained" color="primary" onClick={handleClick}>
              {mode === "edit" ? "Edit" : "Add"}
            </Button>
            <Button
              sx={{ marginLeft: 2 }}
              color="primary"
              onClick={(e) => {
                setMenuData({ seq: "", name: "", longDescription: "", shortDescription: "", images: [] });
                handleCloseMenuModal();
                setErrors({});
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MenuManager;
