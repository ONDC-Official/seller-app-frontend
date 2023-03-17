import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import RenderInput from "../../../utils/RenderInput";
import { useEffect } from "react";
import { getCall, postCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";
import Navbar from "../../Shared/Navbar";
import { useAuth } from "../../../Router/AuthProvider.js";

let storeFields = [
  {
    id: "email",
    title: "Support Email",
    placeholder: "Enter your email address",
    type: "input",
    required: true,
    isDisabled: true,
  },
  {
    id: "mobile",
    title: "Support Mobile",
    placeholder: "Enter your mobile number",
    type: "input",
    required: true,
  },
  {
    id: "categories",
    title: "Supported product categories",
    placeholder: "Supported product categories",
    options: [
      { key: "Grocery", value: "grocery" },
      { key: "Beauty & Personal Care", value: "beauty_and_personal_care" },
      { key: "Fashion", value: "fashion" },
      { key: "Home and Decor", value: "home_and_decor" },
      { key: "F&B", value: "f_and_b" },
    ],
    type: "multi-select",
    required: true,
  },
  // {
  //   id: "store_location",
  //   title: "Store Location",
  //   placeholder: "Store Location",
  //   type: "location-picker",
  //   required: false,
  // },
  {
    id: "location_availability",
    title: "Location availability",
    options: [
      { key: "PAN India", value: true },
      { key: "City", value: false },
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
    file_type: "logo",
  },
];

let addressFields = [
  {
    id: "building",
    title: "Building",
    type: "input",
    required: true,
  },
  {
    id: "locality",
    title: "Locality",
    type: "input",
    required: true,
  },
  {
    id: "city",
    title: "City",
    type: "input",
    required: true,
  },
  {
    id: "state",
    title: "State",
    type: "input",
    required: true,
  },
  {
    id: "country",
    title: "Country",
    type: "input",
    required: true,
  },
  {
    id: "area_code",
    title: "PIN Code",
    type: "input",
    required: true,
  },
];

const StoreDetails = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const [storeDetailFields, setStoreDetailFields] = useState(storeFields);
  const [storeDetails, setStoreDetails] = useState({
    logo: "",
    categories: [],
    store_location: "",
    location_availability: "",
    default_cancellable: "",
    default_returnable: "",
    email: "",
    mobile_number: "",
  });
  const [addressDetails, setAddressDetails] = useState({
    building: "",
    locality: "",
    city: "",
    state: "",
    country: "",
    area_code: "",
  });

  function addAfter(array, index, newItem) {
    return [...array.slice(0, index), newItem, ...array.slice(index)];
  }

  useEffect(() => {
    if (eval(storeDetails?.location_availability) == false) {
      let fieldsWithCityInput = addAfter(storeFields, 4, {
        id: "city",
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
  }, [storeDetails]);

  const getStoreDetails = (org_id) => {
    const url = `/api/v1/organizations/${org_id}/storeDetails`;

    getCall(url)
      .then((res) => {
        const store_details = res?.storeDetails;
        setStoreDetails({
          ...store_details,
          ...store_details?.supportDetails,
          location_availability: store_details?.locationAvailabilityPANIndia,
          default_cancellable: store_details?.defaultCancellable,
          default_returnable: store_details?.defaultReturnable,
          logo: store_details?.logo?.path,
          uploaded_urls: [store_details?.logo?.url],
        });
        setAddressDetails(store_details?.address);
      })
      .catch((error) => {
        cogoToast.error(error.response.data.error);
      });
  };

  useEffect(() => {
    const org_id = auth?.user?.organization;
    if (org_id) getStoreDetails(org_id);
  }, []);

  const renderSteps = () => {
    return storeDetailFields.map((item) => (
      <RenderInput
        previewOnly={true}
        key={item?.id}
        item={item}
        state={storeDetails}
        stateHandler={setStoreDetails}
      />
    ));
  };

  const onUpdate = () => {
    const org_id = auth?.user?.organization;
    const url = `/api/v1/organizations/${org_id}/storeDetails`;
    const {
      categories,
      logo,
      location_availability,
      default_cancellable,
      default_returnable,
      mobile,
      email,
      city,
    } = storeDetails;
    const locationAvailability = eval(location_availability);
    let payload = {
      categories,
      logo: logo,
      locationAvailabilityPANIndia: locationAvailability,
      defaultCancellable: eval(default_cancellable),
      defaultReturnable: eval(default_returnable),
      address: addressDetails,
      supportDetails: {
        email,
        mobile,
      },
    };
    if (locationAvailability == false) {
      payload["city"] = city;
    }
    postCall(url, payload)
      .then((resp) => {
        cogoToast.success("Store details updated successfully");
        getStoreDetails(org_id);
      })
      .catch((error) => {
        console.log(error);
        cogoToast.error(error.response.data.error);
      });
  };

  const renderAddressFields = () => {
    return addressFields?.map((item) => (
      <RenderInput
        key={item?.id}
        item={item}
        state={addressDetails}
        stateHandler={setAddressDetails}
      />
    ));
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="mx-auto !p-2 h-screen min-vh-100 overflow-auto">
          <div>
            <div
              className="w-full bg-white px-4 py-4 rounded-md h-full scrollbar-hidden"
              style={{ minHeight: "85%", maxHeight: "100%", overflow: "auto" }}
            >
              <div className="m-auto w-10/12 md:w-3/4 h-max">
                <p className="text-2xl font-semibold mb-4">Store Details</p>
                <div>{renderSteps()}</div>
                <p className="text-l font-semibold mb-4">Address Details</p>
                <div>{renderAddressFields()}</div>
                <div className="flex mt-6">
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={onUpdate}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
