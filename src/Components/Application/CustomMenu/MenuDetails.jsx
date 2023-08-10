import React, { useState } from "react";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const MenuDetails = () => {
  const theme = useTheme();
  const params = useParams();
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState("1");
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderMenuDetails = () => {};
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
      <div className="mb-4 flex flex-row justify-between items-center">
        <Box sx={{ width: "100%", typography: "body1" }}>
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
