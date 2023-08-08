import React, { useState } from "react";
import MenuManager from "./MenuManager";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import ExitDialog from "../../Shared/ExitDialog";

const availableMenu = [
  { id: "M1", name: "Snacks" },
  { id: "M2", name: "Breakfast" },
  { id: "M3", name: "Lunch" },
  { id: "M4", name: "Dinner" },
];

const CustomMenu = () => {
  const theme = useTheme();
  const params = useParams();
  const navigate = useNavigate();

  const [showExitDialog, setShowExitDialog] = useState(false);

  const [reordering, setReordering] = useState(false);
  const [availableMenuItems, setAvailableMenuItems] = useState(availableMenu);

  const [mode, setMode] = useState("add");
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [menuData, setMenuData] = useState({ id: "", position: "", name: "" });

  const onDiscardChanges = () => {
    navigate(`/application/menu-category/`);
  };

  const onSaveChanges = () => {
    setShowExitDialog(false);
  };

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

  const Menu = ({ data }) => {
    return (
      <div>
        <div
          style={{ borderStyle: reordering ? "dashed" : "solid" }}
          className={`flex items-center justify-between py-2 px-8 mb-2 border-2 border-[#1876d1a1] rounded-xl bg-white `}
          onClick={(e) => e.stopPropagation()}
        >
          <p>{data.name}</p>
          <div>
            <Button
              variant="contained"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/application/menu-category/${params.category}/${data.name}`);
              }}
            >
              Edit Menu
            </Button>
          </div>
        </div>
      </div>
    );
  };
  const MenuItem = SortableElement(({ item }) => <Menu data={item} />);

  const MenuList = SortableContainer(({ items }) => {
    return (
      <div>
        {items.map((item, index) => (
          <MenuItem key={`item-${index}`} index={index} item={item} />
        ))}
      </div>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex === newIndex) return;

    setAvailableMenuItems((items) => {
      const reorderedItems = [...items];
      const movedItem = reorderedItems.splice(oldIndex, 1)[0];
      reorderedItems.splice(newIndex, 0, movedItem);
      return reorderedItems;
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="mb-4">
        <BackNavigationButton
          onClick={() => {
            setShowExitDialog(true);
          }}
        />
      </div>
      <div className="mb-4 flex flex-row justify-between items-center">
        <label style={{ color: theme.palette.primary.main }} className="text-2xl font-semibold">
          {params.category}: &nbsp;Custom Menu
        </label>

        <div>
          <Button
            sx={{ marginRight: 1 }}
            variant="contained"
            onClick={() => {
              setShowMenuModal(true);
              setMode("add");
            }}
            disabled={reordering}
          >
            Add Menu
          </Button>
          <Button
            sx={{ marginRight: 1, width: 180 }}
            variant="contained"
            onClick={() => setReordering((prevState) => !prevState)}
          >
            {reordering ? "Save" : "Reorder Menu"}
          </Button>
        </div>
      </div>

      <div>
        {reordering ? (
          <MenuList items={availableMenuItems} onSortEnd={onSortEnd} />
        ) : (
          <div>
            {availableMenuItems.map((item) => (
              <Menu data={item} />
            ))}
          </div>
        )}
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

      <ExitDialog
        showExitDialog={showExitDialog}
        onClose={() => setShowExitDialog(false)}
        onDiscard={onDiscardChanges}
        onSave={onSaveChanges}
      />
    </div>
  );
};

export default CustomMenu;
