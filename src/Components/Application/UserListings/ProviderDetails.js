import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import RenderInput from "../../../utils/RenderInput";
import { useEffect } from "react";
import { getCall } from "../../../Api/axios";

let storeFields = [
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
    type: "radio",
    required: false,
  },

  {
    id: "default_cancellable",
    title: "Default cancellable setting",
    options: [
      { key: "Cancellable", value: true },
      { key: "Non Cancellable", value: false },
    ],
    type: "radio",
    required: false,
  },
  {
    id: "default_returnable",
    title: "Default returnable setting",
    options: [
      { key: "Returnable", value: true },
      { key: "Non Returnable", value: false },
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
  const params = useParams();

  const getProviderDetails = async (id) => {
    try {
      const url = `/api/v1/users/${id}`;
      const res = await getCall(url);

      console.log("getProviderDetails", res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let provider_id = params?.id;
    getProviderDetails(provider_id);
  }, []);

  const [storeDetailFields, setStoreDetailFields] = useState(storeFields);
  const [storeDetails, setStoreDetails] = useState({
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJg-4S3AohGb_Nnea52bExRtchH6AFN0PC4Q&usqp=CAU",
    supported_product_categories: "grocery",
    store_location: "Bengaluru",
    location_availability: "city",
    cities: ["delhi", "pune"],
    default_cancellable: false,
    default_returnable: true,
    email: "rohaan@dataorc.com",
    mobile_number: "8445666963",
  });

  function addAfter(array, index, newItem) {
    return [...array.slice(0, index), newItem, ...array.slice(index)];
  }

  useEffect(() => {
    if (storeDetails.location_availability == "city") {
      let fieldsWithCityInput = addAfter(storeDetailFields, 5, {
        id: "cities",
        title: "Select Cities",
        placeholder: "Select Cities",
        options: [
          { key: "Delhi", value: "delhi" },
          { key: "Pune", value: "pune" },
          { key: "Bengaluru", value: "bengaluru" },
          { key: "Kolkata", value: "kolkata" },
          { key: "Noida", value: "noida" },
        ],
        type: "multi-select",
        required: false,
      });
      setStoreDetailFields(fieldsWithCityInput);
    } else {
      setStoreDetailFields(storeFields);
    }
  }, [storeDetails.location_availability]);

  const renderSteps = () => {
    return storeDetailFields.map((item) => (
      <RenderInput
        previewOnly={true}
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
