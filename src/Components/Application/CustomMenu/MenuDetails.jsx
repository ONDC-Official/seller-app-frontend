import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate, useParams } from "react-router-dom";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import MenuBasicInfo from "./MenuBasicInfo";
import MenuProducts from "./MenuProducts";
import { Button } from "@mui/material";
import { getCall, putCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";
import StoreTimingsRenderer from "../UserListings/StoreTimingsRenderer";

const initialMenuDetails = {
  seq: "",
  name: "",
  longDescription: "",
  shortDescription: "",
  images: [],
};

const products = [];

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

const defaultTimings = [
  {
    daysRange: { from: 1, to: 5 },
    timings: [{ from: "00:00", to: "00:00" }],
  },
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

  const [menuTimings, setMenuTimings] = useState([...defaultTimings]);

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
    if (validate()) {
      updateMenuDetails();
    }
  };

  const getMenuDetails = async () => {
    try {
      const url = `/api/v1/menu/${params.menuId}?menuProducts=true`;
      let res = await getCall(url);
      const { products, timings, ...menuDetails } = res;

      const image_paths = res.images.map((image) => image.path);
      const image_urls = res.images.map((image) => image.url)

      const updatedMenuDetails = {
        ...menuDetails,
        images: image_paths,
        uploaded_urls: image_urls
      };

      setMenuData(updatedMenuDetails);
      setAddedProducts(products);
      if(timings){
        setMenuTimings(timings);
      }

      const allProductsURL = `/api/v1/products?category=${encodeURIComponent(params.category)}`;
      let products_res = await getCall(allProductsURL);
      let all_products = products_res.data.map((product) => {
        return { id: product._id, name: product.productName };
      });
      setAllProducts(all_products);
    } catch (error) {
      cogoToast.error(error.response.data.error);
    }
  };

  const updateMenuDetails = async () => {
    try {
      const url = `/api/v1/menu/${params.menuId}`;
      const { name, seq, longDescription, shortDescription, images } = menuData;

      let added_products = addedProducts.map((product, index) => {
        product.seq = index + 1;
        return product;
      });

      const updatedData = {
        name,
        seq,
        longDescription,
        shortDescription,
        images,
        products: added_products,
        timings: menuTimings,
      };

      console.log(updatedData);

      const res = await putCall(url, updatedData);
      getMenuDetails();
      cogoToast.success("Menu details updated successfully");
    } catch (error) {
      cogoToast.error(error.response.data.error);
    }
  };

  const renderMenuDetails = () => {
    return (
      <div>
        <MenuBasicInfo menuData={menuData} setMenuData={setMenuData} errors={menuDetailErrors} defaultStyles={true} />
      </div>
    );
  };

  const renderMenuProducts = () => {
    return <MenuProducts allProducts={allProducts} addedProducts={addedProducts} setAddedProducts={setAddedProducts} />;
  };

  const renderMenuTimings = () => {
    return <StoreTimingsRenderer storeStatus={"enabled"} storeTimings={menuTimings} setStoreTimings={setMenuTimings} />;
  };

  useEffect(() => {
    getMenuDetails();
  }, []);

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
                <Tab label="Timings" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="mt-2">{renderMenuDetails()}</div>
            </TabPanel>
            <TabPanel value="2">
              <div className="mt-2">{renderMenuProducts()}</div>
            </TabPanel>
            <TabPanel value="3">
              <div className="mt-2">{renderMenuTimings()}</div>
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
