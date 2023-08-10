import React, { useEffect, useRef, useState } from "react";
import MenuManager from "./MenuManager";
import { Button, Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import ExitDialog from "../../Shared/ExitDialog";
import { getCall, postCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";

const availableMenu = [
  { id: "M1", seq: 1, name: "Snacks" },
  { id: "M2", seq: 2, name: "Breakfast" },
  { id: "M3", seq: 3, name: "Lunch" },
  { id: "M4", seq: 4, name: "Dinner" },
];

const CustomMenu = () => {
  const theme = useTheme();
  const params = useParams();
  const navigate = useNavigate();
  const initialAvailableMenu = useRef(availableMenu);

  const [showExitDialog, setShowExitDialog] = useState(false);

  const [reordering, setReordering] = useState(false);
  const [availableMenuItems, setAvailableMenuItems] = useState([]);

  const [showMenuModal, setShowMenuModal] = useState(false);
  const [menuData, setMenuData] = useState({
    seq: "",
    name: "",
    longDescription: "",
    shortDescription: "",
    images: [],
  });

  const getAllMenu = async () => {
    const url = `/api/v1/menu?name=${params.category}`;
    //  const url = `/api/v1/menu?name=`;
    const res = await getCall(url);
    setAvailableMenuItems(res.data);
  };

  const handleAddMenu = async (data) => {
    let newMenuItem = { ...data };

    if (availableMenuItems.length === 0) newMenuItem["seq"] = 1;
    else newMenuItem["seq"] = availableMenuItems[availableMenuItems.length - 1].seq + 1;
    delete newMenuItem["uploaded_urls"];
    try {
      const url = `api/v1/menu/${params.category}`;
      const res = await postCall(url, newMenuItem);
      getAllMenu();
      setShowMenuModal(false);
    } catch (error) {
      cogoToast.error(error.response.data.error);
    }
  };

  const onDiscardChanges = () => {
    navigate(`/application/menu-category/`);
  };

  const onSaveChanges = () => {
    initialAvailableMenu.current = availableMenuItems;
    setShowExitDialog(false);
  };

  const detectChanges = () => {
    const hasChanges = availableMenuItems.some(
      (currentItem, index) =>
        currentItem.name !== initialAvailableMenu.current[index].name ||
        currentItem.seq !== initialAvailableMenu.current[index].seq
    );

    return hasChanges;
  };

  useEffect(() => {
    getAllMenu();
  }, [showMenuModal]);

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
              disabled={reordering}
              variant="contained"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/application/menu-category/${params.category}/${data.name}`);
              }}
            >
              Edit Menu
            </Button>
            <Button
              disabled={reordering}
              variant="contained"
              sx={{ marginLeft: 2 }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Delete Menu
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
            if (detectChanges()) {
              setShowExitDialog(true);
            } else {
              navigate(`/application/menu-category/`);
            }
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
            }}
            disabled={reordering}
          >
            Add Menu
          </Button>
          <Button
            sx={{ marginRight: 1, width: 200 }}
            variant="contained"
            onClick={() => setReordering((prevState) => !prevState)}
          >
            {reordering ? "Finish Reordering" : "Reorder Menu"}
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

      <AddMenuModal
        showMenuModal={showMenuModal}
        handleCloseMenuModal={() => setShowMenuModal(false)}
        menuData={menuData}
        setMenuData={setMenuData}
        handleAdd={handleAddMenu}
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

const AddMenuModal = (props) => {
  const { showMenuModal, handleCloseMenuModal, menuData, setMenuData, handleAdd } = props;

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
      handleAdd(menuData);
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
            Add New Menu
          </p>

          <MenuManager menuData={menuData} setMenuData={setMenuData} errors={errors} />

          <div className="flex justify-end mt-4">
            <Button variant="contained" color="primary" onClick={handleClick}>
              Add
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
export default CustomMenu;
