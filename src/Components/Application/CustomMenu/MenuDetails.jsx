import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate, useParams } from "react-router-dom";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import MenuManager from "./MenuManager";

const initialMenuDetails = {
  seq: "",
  name: "",
  longDescription: "",
  shortDescription: "",
  images: [],
};

const MenuDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState("1");
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const [menuInfoError, setMenuInfoError] = useState({});
  const [menuData, setMenuData] = useState(initialMenuDetails);

  const renderMenuDetails = () => {
    return (
      <div>
        <MenuManager menuData={menuData} setMenuData={setMenuData} errors={menuInfoError} defaultStyles={true} />
      </div>
    );
  };
  const renderMenuProducts = () => {};

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
              <TabList
                centered
                onChange={handleTabChange}
                //  textColor={highlightedTabColor}
              >
                <Tab
                  // sx={{
                  //   color: tabErrors[0] && Object.keys(errors).length > 0 ? "red" : "none",
                  // }}
                  label="Details"
                  value="1"
                />

                <Tab
                  // sx={{
                  //   color: tabErrors[1] && Object.keys(errors).length > 0 ? "red" : "none",
                  // }}
                  label="Products"
                  value="2"
                />
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
    </div>
  );
};

export default MenuDetails;
