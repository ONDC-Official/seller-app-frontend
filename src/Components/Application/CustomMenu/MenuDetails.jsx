import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate, useParams } from "react-router-dom";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import MenuManager from "./MenuManager";
import MenuProducts from "./MenuProducts";
import { Button } from "@mui/material";

const initialMenuDetails = {
  seq: "",
  name: "",
  longDescription: "",
  shortDescription: "",
  images: [],
};

const products = [
  { id: "P1", seq: 1, name: "Product A" },
  { id: "P2", seq: 2, name: "Product B" },
  { id: "P3", seq: 3, name: "Product C" },
  { id: "P4", seq: 4, name: "Product D" },
];

const _allProducts = [
  { id: "P1", name: "Product A" },
  { id: "P2", name: "Product B" },
  { id: "P3", name: "Product C" },
  { id: "P4", name: "Product D" },
  { id: "P5", name: "Product E" },
  { id: "P6", name: "Product F" },
  { id: "P7", name: "Product G" },
  { id: "P8", name: "Product H" },
  { id: "P9", name: "Product I" },
  { id: "P10", name: "Product J" },
  { id: "P11", name: "Product K" },
  { id: "P12", name: "Product L" },
  { id: "P13", name: "Product M" },
  { id: "P14", name: "Product N" },
  { id: "P15", name: "Product O" },
  { id: "P16", name: "Product P" },
];

const MenuDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  //   const initiallyAddedProducts = useRef(products);
  //   const initialMenuDetails = useRef(products);

  const [tabErrors, setTabErrors] = useState([true, true]);
  const [tabValue, setTabValue] = useState("1");
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const [allProducts, setAllProducts] = useState([..._allProducts]);
  const [addedProducts, setAddedProducts] = useState(products);

  const [menuDetailErrors, setMenuDetailErrors] = useState({});
  const [menuData, setMenuData] = useState(initialMenuDetails);

  const validateMenuDetailsForm = () => {
    let formErrors = {};
    formErrors.name = menuData?.name.trim() === "" ? "Menu Name is required" : "";
    formErrors.shortDescription = menuData?.shortDescription.trim() === "" ? "Short Description is required" : "";
    formErrors.longDescription = menuData?.longDescription.trim() === "" ? "Long Description is required" : "";
    formErrors.images = menuData?.images.length < 3 ? "Minimum 3 images are required" : "";
    setMenuDetailErrors({
      ...formErrors,
    });

    let valid_form = !Object.values(formErrors).some((val) => val !== "");

    return valid_form;
  };

  const validate = () => {
    let menuDetailsValidity = validateMenuDetailsForm();

    setTabErrors((prev_state) => {
      prev_state[0] = !menuDetailsValidity;
      return [...prev_state];
    });

    return menuDetailsValidity;
  };

  const handleSave = () => {
    validate();
  };

  const renderMenuDetails = () => {
    return (
      <div>
        <MenuManager menuData={menuData} setMenuData={setMenuData} errors={menuDetailErrors} defaultStyles={true} />
      </div>
    );
  };

  const renderMenuProducts = () => {
    return <MenuProducts allProducts={allProducts} addedProducts={addedProducts} setAddedProducts={setAddedProducts} />;
  };

  let highlightedTabColor = tabErrors.includes(true) ? "error" : "primary";
  return (
    <div className="container mx-auto my-8">
      <div className="mb-4">
        <BackNavigationButton
          onClick={() => {
            navigate(`/application/menu-category/${params.category}`);
          }}
        />
      </div>
      <div
        className="w-full bg-white px-4 py-4 rounded-md h-full scrollbar-hidden"
        style={{ minHeight: "95%", maxHeight: "100%", overflow: "auto" }}
      >
        <Box sx={{ width: "100%" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList centered onChange={handleTabChange} textColor={highlightedTabColor}>
                <Tab
                  sx={{
                    color: tabErrors[0] && Object.keys(menuDetailErrors).length > 0 ? "red" : "none",
                  }}
                  label="Details"
                  value="1"
                />

                <Tab label="Products" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="mt-2">{renderMenuDetails()}</div>
            </TabPanel>
            <TabPanel value="2">
              <div className="mt-2">{renderMenuProducts()}</div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>

      <div className="mt-4 w-full flex justify-center">
        <Button variant="contained" onClick={handleSave}>
          SAVE
        </Button>
      </div>
    </div>
  );
};

export default MenuDetails;
