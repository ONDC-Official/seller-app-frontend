import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import RenderInput from "../../../utils/RenderInput";
import { useEffect } from "react";
import { getCall } from "../../../Api/axios";

const providerFields = [
  {
    id: "name",
    title: "Name",
    placeholder: "Enter your email address",
    type: "input",
    required: true,
  },
  {
    id: "email",
    title: "Email",
    placeholder: "Enter your email address",
    type: "input",
    required: true,
  },
  {
    id: "mobile",
    title: "Support Mobile",
    placeholder: "Enter your mobile number",
    type: "input",
    required: true,
  },
];

const kycFields = [
  {
    id: "contactEmail",
    title: "Contact email",
    type: "input",
  },
  {
    id: "contactMobile",
    title: "Contact mobile",
    type: "input",
  },
  {
    id: "fssai",
    title: "FSSAI",
    type: "input",
  },
  {
    id: "address",
    title: "Address",
    type: "input",
  },
  {
    id: "address_proof",
    title: "Address proof",
    type: "upload",
  },
  {
    id: "gst_no",
    title: "GSTN",
    type: "input",
  },
  {
    id: "gst_proof",
    title: "GSTN Proof",
    type: "upload",
  },
  {
    id: "pan_no",
    title: "PAN",
    type: "input",
  },
  {
    id: "pan_proof",
    title: "PAN proof",
    type: "upload",
  },
  {
    id: "id_proof",
    title: "ID proof",
    type: "upload",
  },
];

const bankFields = [
  { id: "bankName", title: "Bank Name", type: "input" },
  { id: "IFSC", title: "IFSC", type: "input" },
  { id: "accHolderName", title: "Account Holder Name", type: "input" },
  { id: "accNumber", title: "Account Number", type: "input" },
  { id: "cancelledCheque", title: "Cancelled Cheque", type: "upload" },
];

let storeFields = [
  {
    id: "email",
    title: "Support Email",
    placeholder: "Enter your Support Email",
    type: "input",
    required: true,
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
  },
  {
    id: "location",
    title: "Store Location",
    placeholder: "Store Location",
    type: "location-picker",
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
    id: "country",
    title: "Country",
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
    id: "city",
    title: "City",
    type: "input",
    required: true,
  },
  {
    id: "building",
    title: "Building",
    type: "input",
    required: true,
  },
  {
    id: "area_code",
    title: "PIN code",
    type: "input",
    required: true,
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

  const [storeDetailFields, setStoreDetailFields] = useState(storeFields);

  const [providerDetails, setProviderDetails] = useState({});
  const [kycDetails, setKycDetails] = useState({});
  const [bankDetails, setBankDetails] = useState({});
  const [storeDetails, setStoreDetails] = useState({
    location: {},
    categories: [],
    location_availability: "",
    default_cancellable: "",
    default_returnable: "",
    cities: [
      { key: "Delhi", value: "delhi" },
      { key: "Pune", value: "pune" },
    ],
  });

  const getOrgDetails = async (id) => {
    try {
      const url = `/api/v1/organizations/${id}`;
      const res = await getCall(url);

      setProviderDetails({
        email: res.user.email,
        mobile: res.user.mobile,
        name: res.user.name,
      });

      setKycDetails({
        contactEmail: res?.providerDetail?.contactEmail,
        contactMobile: res?.providerDetail?.contactMobile,
        fssai: res?.providerDetail?.FSSAI,
        address: res?.providerDetail?.address,
        address_proof: res?.providerDetail?.addressProof.url,
        gst_no: res?.providerDetail?.GSTN.GSTN,
        gst_proof: res?.providerDetail?.GSTN.proof.url,
        pan_no: res?.providerDetail?.PAN.PAN,
        pan_proof: res?.providerDetail?.PAN.proof.url,
        id_proof: res?.providerDetail?.idProof.url,
      });

      setBankDetails({
        bankName: res?.providerDetail?.bankDetails?.bankName,
        IFSC: res?.providerDetail?.bankDetails?.IFSC,
        accHolderName: res?.providerDetail?.bankDetails?.accHolderName,
        accNumber: res?.providerDetail?.bankDetails?.accNumber,
        cancelledCheque: res?.providerDetail?.bankDetails?.cancelledCheque?.url,
      });

      setStoreDetails({
        email: res.providerDetail.storeDetails.supportDetails.email,
        mobile: res.providerDetail.storeDetails.supportDetails.mobile,
        categories: res?.providerDetail?.storeDetails?.categories,
        location: res?.providerDetail?.storeDetails?.location,
        location_availability:
          res.providerDetail.storeDetails.locationAvailabilityPANIndia == true
            ? "pan_india"
            : "city",
        cities: res?.providerDetail?.storeDetails?.city,
        default_cancellable: false,
        default_returnable: false,
        country: res.providerDetail.storeDetails.address.country,
        state: res.providerDetail.storeDetails.address.state,
        city: res.providerDetail.storeDetails.address.city,
        building: res.providerDetail.storeDetails.address.building,
        area_code: res.providerDetail.storeDetails.address.area_code,
        logo: res?.providerDetail?.storeDetails?.logo?.url,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let provider_id = params?.id;
    getOrgDetails(provider_id);
  }, [params.id]);

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

  let userRole = JSON.parse(localStorage.getItem("user"))?.role?.name;

  return (
    <div>
      <div className="mx-auto !p-2 h-screen min-vh-100 overflow-auto">
        <div>
          <div
            className="w-full bg-white px-4 py-4 rounded-md h-full scrollbar-hidden"
            style={{ minHeight: "95%", maxHeight: "100%", overflow: "auto" }}
          >
            <div className="m-auto w-10/12 md:w-3/4 h-max">
              <p className="text-2xl font-semibold mb-4">Provider Details</p>
              {providerFields.map((item) => (
                <RenderInput
                  previewOnly={true}
                  item={item}
                  state={providerDetails}
                  statehandler={setProviderDetails}
                />
              ))}
              <p className="text-2xl font-semibold mb-4 mt-14">KYC Details</p>
              {kycFields.map((item) => (
                <RenderInput
                  previewOnly={true}
                  item={item}
                  state={kycDetails}
                  statehandler={setKycDetails}
                />
              ))}
              <p className="text-2xl font-semibold mb-4 mt-14">Bank Details</p>
              {bankFields.map((item) => (
                <RenderInput
                  previewOnly={true}
                  item={item}
                  state={bankDetails}
                  statehandler={setBankDetails}
                />
              ))}
              <p className="text-2xl font-semibold mb-4 mt-14">Store Details</p>
              {storeDetailFields.map((item) => (
                <RenderInput
                  previewOnly={true}
                  item={item}
                  state={storeDetails}
                  stateHandler={setStoreDetails}
                />
              ))}
              <div className="flex mt-16">
                <Button
                  size="small"
                  style={{ marginRight: 10 }}
                  variant="text"
                  onClick={() => {
                    userRole == "Super Admin"
                      ? navigate("/application/user-listings")
                      : navigate("/application/inventory");
                  }}
                >
                  Back
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
