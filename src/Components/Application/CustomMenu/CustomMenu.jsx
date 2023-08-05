import React, { useState } from "react";
import MenuManager from "./MenuManager";
import { Button } from "@mui/material";
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

  const [showMenuModal, setShowMenuModal] = useState(false);
  const [menuData, setMenuData] = useState({ id: "", position: "", name: "" });

  const handleAdd = (data) => {
    let newMenuItem = { ...data };
    newMenuItem["id"] = `M${availableMenuItems.length + 1}`;
    newMenuItem["position"] = availableMenuItems.length + 1;
    setAvailableMenuItems([...availableMenuItems, newMenuItem]);
  };

  const handleEdit = (data) => {};

  return (
    <div className="container mx-auto my-8">
      <div className="mb-4 flex flex-row justify-between items-center">
        <label style={{ color: theme.palette.primary.main }} className="text-2xl font-semibold">
          {params.category}: &nbsp;Custom Menu
        </label>
        <Button variant="contained" onClick={() => setShowMenuModal(true)}>
          Add Menu
        </Button>
      </div>

      <div>
        {availableMenuItems.map((item) => {
          return (
            <div className="py-4 px-8 mb-2 border border-[#1876d1a1] rounded-xl hover:bg-[#1876D1] text-black hover:text-white cursor-pointer duration-300">
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <MenuManager
        mode="add"
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
