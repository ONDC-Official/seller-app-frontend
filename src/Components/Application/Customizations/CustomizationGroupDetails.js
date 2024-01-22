import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate, useParams } from "react-router-dom";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import { getCall, postCall, putCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";
import { FormControl, MenuItem, Select, TextField, Checkbox } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Add, Delete, Save } from "@mui/icons-material";
import Button from "../../Shared/Button";
import CustomizationGroupItems from "./CustomizationGroupItems";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "#1c75bc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1c75bc",
    },
  },
  "& .MuiInputBase-input": {
    fontSize: "14px",
  },
});

const initialMenuDetails = {
  seq: "",
  name: "",
  longDescription: "",
  shortDescription: "",
  images: [],
};

const products = [];

const _allProducts = [
  { id: "P1", name: "Customization Item - A" },
  { id: "P2", name: "Customization Item - B" },
  { id: "P3", name: "Customization Item - C" },
  { id: "P4", name: "Customization Item - D" },
  { id: "P5", name: "Customization Item - E" },
  { id: "P6", name: "Customization Item - F" },
  { id: "P7", name: "Customization Item - G" },
  { id: "P8", name: "Customization Item - H" },
  { id: "P9", name: "Customization Item - I" },
  { id: "P10", name: "Customization Item - J" },
  { id: "P11", name: "Customization Item - K" },
  { id: "P12", name: "Customization Item - L" },
  { id: "P13", name: "Customization Item - M" },
  { id: "P14", name: "Customization Item - N" },
  { id: "P15", name: "Customization Item - O" },
  { id: "P16", name: "Customization Item - P" },
];

const CustomizationGroupDetails = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const [customizationGroupData, setCustomizationGroupData] = useState({});
  const [errors, setErrors] = useState({});
  const [inputType, setInputType] = useState("input");

  const [tabErrors, setTabErrors] = useState([true, true]);
  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (event, newValue) => {
    if (newValue != 1) {
      if (!customizationGroupData.seq || customizationGroupData.seq <= 0) {
        cogoToast.error("Please select a valid sequence first");
      } else {
        setTabValue(newValue);
      }
    } else {
      setTabValue(newValue);
    }
  };

  const [allItems, setAllItems] = useState([]);
  const [addedItems, setAddedItems] = useState(products);
  const [customizationGroups, setCustomizationGroups] = useState([]);
  const [defaultCustomization, setDefaultCustomization] = useState(null);

  const validateGroupDetailsForm = () => {
    const formErrors = {};
    formErrors.name =
      customizationGroupData?.name == undefined || customizationGroupData?.name?.trim() === ""
        ? "Name is not allowed to be empty"
        : "";
    formErrors.minQuantity =
      customizationGroupData?.minQuantity == undefined || customizationGroupData?.minQuantity === ""
        ? "Min Quantity is not allowed to be empty"
        : customizationGroupData?.minQuantity < 0
        ? `Please enter a valid quantity`
        : "";
    formErrors.maxQuantity =
      customizationGroupData?.maxQuantity == undefined || customizationGroupData?.maxQuantity === ""
        ? "Max Quantity is not allowed to be empty"
        : customizationGroupData?.maxQuantity <= 0
        ? `Please enter a valid quantity`
        : "";
    formErrors.seq =
      customizationGroupData?.seq == undefined || customizationGroupData?.seq === "" || customizationGroupData?.seq <= 0
        ? "Please enter a valid sequence"
        : "";
    setErrors(formErrors);

    let valid_form = !Object.values(formErrors).some((val) => val !== "");
    return valid_form;
  };

  const validate = () => {
    let groupDetailsValidity = validateGroupDetailsForm();

    setTabErrors((prev_state) => {
      prev_state[0] = !groupDetailsValidity;
      return [...prev_state];
    });

    return groupDetailsValidity;
  };

  const handleChange = (e) => {
    setInputType(e.target.value);
  };

  const getCustomizationGroups = async () => {
    const url = `/api/v1/customizationGroups?limit=10&offset=0&seq=${customizationGroupData.seq}`;

    try {
      const res = await getCall(url);
      const groups = res.data.map((g) => {
        return {
          key: g.name,
          value: g._id,
          description: g.description ? g.description : "",
        };
      });

      setCustomizationGroups(groups);
      return groups;
    } catch (error) {
      console.log("Error fetching customziation groups:", error);
    }
  };

  const getCustomizationItems = async () => {
    try {
      const url = `/api/v1/product/customizations`;
      const res = await getCall(url);
      setAllItems(res.data);
    } catch (error) {
      console.log("error fetching customization items: ", error);
    }
  };

  const getCustomizationGroupDetails = async () => {
    try {
      const url = `/api/v1/customizationGroup/${params.groupId}`;
      const res = await getCall(url);
      setInputType(res.inputType);
      setCustomizationGroupData(res);
      setInputType(res.inputType);

      const customizations = res.customizations.map((item) => {
        if (item.default) {
          setDefaultCustomization(item.customizationId.id);
        }
        let nextGroupId = item.nextGroupId.map((ng) => {
          return {
            key: ng.name,
            value: ng.groupId,
            description: ng.description,
          };
        });

        return {
          productName: item.customizationId.name,
          customizationId: item.customizationId.id,
          _id: item.customizationId.id,
          nextGroupId: nextGroupId,
          default: item.default,
        };
      });
      setAddedItems(customizations);
    } catch (error) {
      console.log(error);
      cogoToast.error(error.response.data.error);
    }
  };

  const addCustomizationGroup = async (data) => {
    try {
      const url = `/api/v1/customizationGroup`;
      const res = await postCall(url, data);
      console.log({ res });
      cogoToast.success("Group added successfully");
      navigate("/application/customizations/customization-groups");
    } catch (error) {
      cogoToast.error(error.response.data.error);
    }
  };

  const updateCustomizationGroupDetails = async (data) => {
    try {
      console.log("update payload: ", data);
      const url = `/api/v1/customizationGroup/${params.groupId}`;
      const res = await putCall(url, data);
      console.log({ res });
      navigate("/application/customizations/customization-groups");
      cogoToast.success("Group details updated successfully");
    } catch (error) {
      cogoToast.error(error.response.data.error);
    }
  };

  const handleSave = () => {
    if (validate()) {
      const customizations = addedItems.map((item) => {
        if (item._id) {
          let nextGroupIds = [];
          if (item.nextGroupId) {
            nextGroupIds = item.nextGroupId.map((group) => {
              return {
                groupId: group.value,
              };
            });
          }

          return {
            customizationId: item._id,
            nextGroupId: nextGroupIds,
            default: defaultCustomization === item._id,
          };
        } else {
          delete item["productName"];
          return item;
        }
      });

      const data = { ...customizationGroupData, customizations, inputType };

      if (params.groupId) {
        delete data["_id"];
        updateCustomizationGroupDetails(data);
      } else {
        addCustomizationGroup(data);
      }
    }
  };

  const renderCustomizationGroupDetails = () => {
    return (
      <div>
        <div>
          <div className="flex items-center mb-4">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block ">
              Name:
            </label>

            <CssTextField
              required
              type={"input"}
              className="w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black flex flex-1"
              size="small"
              autoComplete="off"
              placeholder={"Enter Customisation Group Name"}
              error={!!errors.name}
              helperText={errors.name}
              value={customizationGroupData.name}
              onChange={(e) =>
                setCustomizationGroupData({
                  ...customizationGroupData,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div className="flex items-center mb-4">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block ">
              Description:
            </label>

            <CssTextField
              required
              type={"input"}
              className="w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black flex flex-1"
              size="small"
              autoComplete="off"
              placeholder={"Enter Customisation Group Description"}
              error={!!errors.description}
              helperText={errors.description}
              value={customizationGroupData.description}
              onChange={(e) =>
                setCustomizationGroupData({
                  ...customizationGroupData,
                  description: e.target.value,
                })
              }
            />
          </div>

          {/* <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Optional? :
            </label>

            <Checkbox
              checked={customizationGroupData.optional}
              onChange={(e) => {
                let checkbox_state = e.target.checked;
                let state = { optional: checkbox_state };
                if (checkbox_state) {
                  state["minQuantity"] = "0";
                } else {
                  state["minQuantity"] = "1";
                }
                setCustomizationGroupData({
                  ...customizationGroupData,
                  ...state,
                });
              }}
            />
          </div> */}

          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Min Quantity:
            </label>

            <CssTextField
              required
              disabled={customizationGroupData.optional}
              type="number"
              className="w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black flex-1"
              size="small"
              autoComplete="off"
              placeholder={"Enter Minimum Quantity"}
              error={!!errors.minQuantity}
              helperText={errors.minQuantity}
              value={customizationGroupData.minQuantity}
              onChange={(e) => {
                let val = parseInt(e.target.value);
                if (val < 0) {
                  return;
                }
                setCustomizationGroupData({
                  ...customizationGroupData,
                  minQuantity: val,
                });
              }}
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block ">
              Max Quantity:
            </label>

            <CssTextField
              required
              type="number"
              className="w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black flex-1"
              size="small"
              autoComplete="off"
              placeholder={"Enter Maximum Quantity"}
              error={!!errors.maxQuantity}
              helperText={errors.maxQuantity}
              value={customizationGroupData.maxQuantity}
              onChange={(e) => {
                let val = parseInt(e.target.value);
                if (val < 0) {
                  return;
                }
                setCustomizationGroupData({
                  ...customizationGroupData,
                  maxQuantity: e.target.value,
                });
              }}
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block ">
              Sequence:
            </label>

            <CssTextField
              required
              type="number"
              className="w-80 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black flex-1"
              size="small"
              autoComplete="off"
              placeholder={"Enter group sequence"}
              error={!!errors.seq}
              helperText={errors.seq}
              value={customizationGroupData.seq}
              onChange={(e) => {
                setCustomizationGroupData({
                  ...customizationGroupData,
                  seq: e.target.value,
                });

                const updatedItems = addedItems.map((item) => {
                  return {
                    ...item,
                    nextGroupId: [],
                  };
                });
                setAddedItems(updatedItems);
              }}
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 my-4 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Input Type:
            </label>

            <FormControl>
              <Select
                sx={{ width: 320 }}
                size="small"
                displayEmpty
                value={inputType}
                onChange={handleChange}
                renderValue={(value) => {
                  if (!value) {
                    return <p>Select Input Type</p>;
                  }
                  return value;
                }}
              >
                <MenuItem value="input">input</MenuItem>
                <MenuItem value="select">select</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    );
  };

  const renderCustomizationItems = () => {
    return (
      <CustomizationGroupItems
        seq={customizationGroupData.seq}
        allItems={allItems}
        addedItems={addedItems}
        setAddedItems={setAddedItems}
        defaultCustomization={defaultCustomization}
        setDefaultCustomization={setDefaultCustomization}
        customizationGroups={customizationGroups}
        setCustomizationGroups={setCustomizationGroupData}
      />
    );
  };

  useEffect(() => {
    if (params.groupId) {
      getCustomizationGroupDetails();
    }

    getCustomizationItems();
  }, []);

  useEffect(() => {
    if (customizationGroupData.seq) getCustomizationGroups();
  }, [customizationGroupData.seq]);

  let highlightedTabColor = tabErrors.includes(true) ? "error" : "primary";
  return (
    <div className="container mx-auto my-8">
      <div className="mb-4">
        <BackNavigationButton
          onClick={() => {
            navigate(`/application/customizations/customization-groups`);
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
                    color: tabErrors[0] && Object.keys(errors).length > 0 ? "red" : "none",
                  }}
                  label="Details"
                  value="1"
                />

                <Tab label="Customizations" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="mt-2">{renderCustomizationGroupDetails()}</div>
            </TabPanel>
            <TabPanel value="2">
              <div className="mt-2">{renderCustomizationItems()}</div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>

      <div className="mt-4 w-full flex justify-center">
        <Button title=" SAVE" variant="contained" onClick={handleSave} />
      </div>
    </div>
  );
};

export default CustomizationGroupDetails;
