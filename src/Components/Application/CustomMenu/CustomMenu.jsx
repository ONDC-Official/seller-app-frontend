import React, { useState } from "react";
import MenuManager from "./MenuManager";
import { Button } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link, useParams } from "react-router-dom";

const availableMenu = [
  { id: "M1", position: 1, name: "Snacks" },
  { id: "M2", position: 2, name: "Breakfast" },
  { id: "M3", position: 3, name: "Lunch" },
  { id: "M4", position: 4, name: "Dinner" },
];

const CustomMenu = () => {
  const theme = useTheme();
  const params = useParams();

  const [availableMenuItems, setAvailableMenuItems] = useState(availableMenu);

  const [mode, setMode] = useState("add");
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [menuData, setMenuData] = useState({ id: "", position: "", name: "" });

  const handleAdd = (data) => {
    let newMenuItem = { ...data };
    newMenuItem["id"] = `M${availableMenuItems.length + 1}`;
    newMenuItem["position"] = availableMenuItems.length + 1;
    setAvailableMenuItems([...availableMenuItems, newMenuItem]);
    setShowMenuModal(false);
    setMenuData({});
  };

  const handleEdit = (data) => {
    const itemIndex = availableMenuItems.findIndex((m) => m.id === data.id);
    const updatedMenuItems = [...availableMenuItems];
    updatedMenuItems[itemIndex] = data;
    setAvailableMenuItems(updatedMenuItems);
    setShowMenuModal(false);
    setMenuData({});
  };

  return (
    <div className="container mx-auto my-8">
      <div className="mb-4 flex flex-row justify-between items-center">
        <label style={{ color: theme.palette.primary.main }} className="text-2xl font-semibold">
          {params.category}: &nbsp;Custom Menu
        </label>
        <Button
          variant="contained"
          onClick={() => {
            setShowMenuModal(true);
            setMode("add");
          }}
        >
          Add Menu
        </Button>
      </div>

      <div>
        {availableMenuItems.map((item) => {
          return (
            <div>
              <div className="flex items-center justify-between py-4 px-8 mb-2 border border-[#1876d1a1] rounded-xl hover:bg-[#1876D1] text-black hover:text-white cursor-pointer duration-300">
                <p className="w-24">{item.name}</p>
                <Button
                  onClick={() => {
                    setMode("edit");
                    setMenuData(item);
                    setShowMenuModal(true);
                  }}
                >
                  <Edit style={{ color: "#8798ad" }} />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <MenuManager
        mode={mode}
        showMenuModal={showMenuModal}
        handleCloseMenuModal={() => setShowMenuModal(false)}
        menuData={menuData}
        setMenuData={setMenuData}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default CustomMenu;
