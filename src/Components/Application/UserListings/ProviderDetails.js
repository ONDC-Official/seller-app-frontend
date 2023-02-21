import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RenderInput from "../../../utils/RenderInput";

const storeDetailFields = [
  {
    id: "email",
    title: "Support Email",
    placeholder: "Enter your email address",
    type: "input",
    required: true,
  },
  {
    id: "mobile_number",
    title: "Support Mobile",
    placeholder: "Enter your mobile number",
    type: "input",
    required: true,
  },
  {
    id: "supported_product_categories",
    title: "Supported product categories",
    placeholder: "Supported product categories",
    options: [
      { key: "Grocery", value: "grocery" },
      { key: "Beauty & Personal Care", value: "beauty_and_personal_care" },
      { key: "Fashion", value: "fashion" },
      { key: "Home and Decor", value: "home_and_decor" },
      { key: "F&B", value: "f_and_b" },
    ],
    type: "select",
    required: true,
  },
  {
    id: "store_location",
    title: "Store Location",
    placeholder: "Store Location",
    type: "input",
    required: false,
  },
  {
    id: "location_availability",
    title: "Location availability",
    options: [
      { key: "PAN India", value: "pan_india" },
      { key: "City", value: "city" },
    ],
    type: "checkbox",
    required: false,
  },
  {
    id: "default_cancellable",
    title: "Default cancellable setting",
    options: [
      { key: "Cancellable", value: "cancellable" },
      { key: "Non Cancellable", value: "non_cancellable" },
    ],
    type: "radio",
    required: false,
  },
  {
    id: "default_returnable",
    title: "Default returnable setting",
    options: [
      { key: "Returnable", value: "returnable" },
      { key: "Non Returnable", value: "non_returnable" },
    ],
    type: "radio",
    required: false,
  },
  {
    id: "logo",
    title: "Logo",
    type: "upload",
    required: false,
  },
];

const ProviderDetails = () => {
  const navigate = useNavigate();
  const [storeDetails, setStoreDetails] = useState({
    logo: "",
    supported_product_categories: "none",
    multi_supported_product_categories: [],
    store_location: "",
    location_availability: [],
    default_cancellable: "",
    default_returnable: "",
    email: "",
    mobile_number: "",
  });

  const renderSteps = () => {
    return storeDetailFields.map((item) => (
      <RenderInput
        item={item}
        state={storeDetails}
        stateHandler={setStoreDetails}
      />
    ));
  };

  return (
    <div>
      <div className="mx-auto !p-5 h-screen min-vh-100 overflow-auto">
        <div>
          <div
            className="w-full bg-white px-4 py-4 rounded-md h-full scrollbar-hidden"
            style={{ minHeight: "85%", maxHeight: "100%", overflow: "auto" }}
          >
            <div className="m-auto w-10/12 md:w-3/4 h-max">
              <p className="text-2xl font-semibold mb-4">Provider Details</p>
              <div>{renderSteps()}</div>
              <div className="flex mt-6">
                <Button
                  size="small"
                  style={{ marginRight: 10 }}
                  variant="text"
                  onClick={() => navigate("/application/user-listings")}
                >
                  Back
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => {}}
                >
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
