import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import RenderInput from "../../../utils/RenderInput";
import {
  areObjectsEqual,
  isEmailValid,
  isNumberOnly,
  isPhoneNoValid,
} from "../../../utils/validations";
import { useEffect } from "react";
import { getCall, postCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import moment from "moment";
import { AddOutlined, DeleteOutlined } from "@mui/icons-material";

const providerFields = [
  {
    id: "name",
    title: "Name",
    placeholder: "Enter your Name",
    type: "input",
    required: true,
  },
  {
    id: "email",
    title: "Email",
    placeholder: "Enter your Email Address",
    type: "input",
    required: true,
  },
  {
    id: "mobile",
    title: "Mobile Number",
    placeholder: "Enter your Mobile Number",
    type: "input",
    required: true,
  },
];

const kycFields = [
  {
    id: "contactEmail",
    title: "Contact Email",
    placeholder: "Enter your Contact Email Address",
    type: "input",
    required: true,
  },
  {
    id: "contactMobile",
    title: "Contact Mobile Number",
    placeholder: "Enter your Contact Mobile Number",
    type: "input",
    required: true,
  },
  {
    id: "fssai",
    title: "FSSAI Number",
    placeholder: "FSSAI Number",
    type: "input",
    required: true,
  },
  {
    id: "address",
    title: "Registered Address",
    placeholder: "Enter your Registered Address",
    type: "input",
    required: true,
  },
  {
    id: "address_proof",
    title: "Address Proof",
    type: "upload",
    file_type: "address_proof",
    required: true,
    fontColor: "#ffffff",
  },
  {
    id: "gst_no",
    title: "GSTIN Certificate",
    placeholder: "GSTIN Certificate",
    type: "input",
    required: true,
  },
  {
    id: "gst_proof",
    title: "GSTIN Proof",
    type: "upload",
    file_type: "gst",
    required: true,
    fontColor: "#ffffff",
  },
  {
    id: "pan_no",
    title: "PAN",
    placeholder: "Enter your PAN",
    type: "input",
    required: true,
  },
  {
    id: "pan_proof",
    title: "PAN Card Proof",
    type: "upload",
    fontColor: "#ffffff",
    file_type: "pan",
    required: true,
  },
  {
    id: "id_proof",
    title: "ID Proof",
    type: "upload",
    fontColor: "#ffffff",
    file_type: "id_proof",
    required: true,
  },
];

const bankFields = [
  {
    id: "bankName",
    title: "Bank Name",
    placeholder: "Enter Bank Name",
    type: "input",
    required: true,
  },
  {
    id: "branchName",
    title: "Branch Name",
    placeholder: "Enter Branch Name",
    type: "input",
    required: true,
  },
  {
    id: "IFSC",
    title: "IFSC Code",
    placeholder: "Enter IFSC Code",
    type: "input",
    required: true,
  },
  {
    id: "accHolderName",
    title: "Account Holder Name",
    placeholder: "Enter Account Holder Name",
    type: "input",
    required: true,
  },
  {
    id: "accNumber",
    title: "Account Number",
    placeholder: "Enter Account Number",
    type: "input",
    required: true,
  },
  {
    id: "cancelledCheque",
    title: "Cancelled Cheque",
    type: "upload",
    fontColor: "#ffffff",
    file_type: "cancelled_check",
    required: true,
  },
];

const categoriesList = [
  { key: "Grocery", value: "grocery" },
  { key: "Beauty & Personal Care", value: "beauty_and_personal_care" },
  { key: "Fashion", value: "fashion" },
  { key: "Home and Decor", value: "home_and_decor" },
  { key: "F&B", value: "f_and_b" },
];

let storeFields = [
  // {
  //   id: "name",
  //   title: "Store Name",
  //   placeholder: "Enter Store Name",
  //   type: "input",
  //   email: true,
  //   required: true,
  // },
  {
    id: "email",
    title: "Support Email",
    placeholder: "Enter your Support Email",
    type: "input",
    required: true,
  },
  {
    id: "mobile",
    title: "Support Mobile Number",
    placeholder: "Enter your Support Mobile Number",
    type: "input",
    required: true,
    maxLength: 10,
    required: true,
  },
  {
    id: "categories",
    title: "Supported Product Categories",
    placeholder: "Please Select Supported Product Categories",
    options: categoriesList,
    type: "multi-select",
    required: true,
  },
  {
    id: "location",
    title: "Store Location",
    placeholder: "Store Location",
    type: "location-picker",
    required: true,
  },
  {
    id: "location_availability",
    title: "Location Availability",
    options: [
      { key: "PAN India", value: "pan_india" },
      { key: "City", value: "city" },
    ],
    type: "radio",
    required: true,
  },
  {
    id: "default_cancellable",
    title: "Default Cancellable Setting",
    options: [
      { key: "Cancellable", value: "true" },
      { key: "Non-Cancellable", value: "false" },
    ],
    type: "radio",
    required: true,
  },
  {
    id: "default_returnable",
    title: "Default Returnable Setting",
    options: [
      { key: "Returnable", value: "true" },
      { key: "Non-Returnable", value: "false" },
    ],
    type: "radio",
    required: true,
  },
  {
    id: "country",
    title: "Country",
    placeholder: "Country",
    type: "input",
    required: true,
  },
  {
    id: "state",
    title: "State",
    placeholder: "State",
    type: "input",
    required: true,
  },
  {
    id: "city",
    title: "City",
    placeholder: "City",
    type: "input",
    required: true,
  },
  {
    id: "building",
    title: "Building",
    placeholder: "Building",
    type: "input",
    required: true,
  },
  {
    id: "area_code",
    title: "PIN Code",
    placeholder: "PIN code",
    type: "input",
    required: true,
  },
  {
    id: "locality",
    title: "Locality",
    placeholder: "Locality",
    placeholder: "Locality",
    type: "input",
    required: true,
  },
  {
    id: "logo",
    file_type: "logo",
    title: "Logo",
    type: "upload",
    required: true,
    fontColor: "#ffffff",
  },
];

const ProviderDetails = ({ isFromUserListing = false }) => {
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
  const [errors, setErrors] = useState(null);

  const [defaultStoreDetails, setDefaultStoreDetails] = useState({
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
        branchName: res?.providerDetail?.bankDetails?.branchName,
        IFSC: res?.providerDetail?.bankDetails?.IFSC,
        accHolderName: res?.providerDetail?.bankDetails?.accHolderName,
        accNumber: res?.providerDetail?.bankDetails?.accNumber,
        cancelledCheque: res?.providerDetail?.bankDetails?.cancelledCheque?.url,
      });

      let storeData = {
        email: res.providerDetail.storeDetails?.supportDetails.email || "",
        mobile: res.providerDetail.storeDetails?.supportDetails.mobile || "",
        categories: res?.providerDetail?.storeDetails?.categories || [],
        location: res?.providerDetail?.storeDetails?.location || "",
        location_availability: res.providerDetail.storeDetails
          ? res.providerDetail.storeDetails.locationAvailabilityPANIndia == true
            ? "pan_india"
            : "city"
          : "",
        cities: res?.providerDetail?.storeDetails?.city || [],
        default_cancellable: "false",
        default_returnable: "false",
        country: res.providerDetail?.storeDetails?.address?.country || "",
        state: res.providerDetail?.storeDetails?.address?.state || "",
        city: res.providerDetail?.storeDetails?.address.city || "",
        address_city: res.providerDetail?.storeDetails?.address.city || "",
        building: res.providerDetail?.storeDetails?.address?.building || "",
        area_code: res.providerDetail?.storeDetails?.address?.area_code || "",
        locality: res.providerDetail?.storeDetails?.address?.locality || "",
        logo: res?.providerDetail?.storeDetails?.logo?.url || "",

        days: res?.providerDetail?.storeDetails?.storeTiming?.days || [],
        holidays:
          res?.providerDetail?.storeDetails?.storeTiming?.schedule?.holidays ||
          [],
        StoreTimeType: res?.providerDetail?.storeDetails?.storeTiming?.schedule
          ?.frequency
          ? "frequency"
          : "time",
        startTime:
          res?.providerDetail?.storeDetails?.storeTiming?.range?.start || "",
        endTime:
          res?.providerDetail?.storeDetails?.storeTiming?.range?.end || "",
        frequency: "",
        storeTimes:
          res?.providerDetail?.storeDetails?.storeTiming?.schedule?.times
            .length > 0
            ? res?.providerDetail?.storeDetails?.storeTiming?.schedule?.times
            : [""],
        radius: res?.providerDetail?.storeDetails?.radius?.value || "",
        logisticsBppId: res?.providerDetail?.storeDetails?.logisticsBppId || "",
      };

      if (res?.providerDetail?.storeDetails?.storeTiming?.schedule?.frequency) {
        // Create a duration object from the ISO 8601 string
        const duration = moment.duration(
          res?.providerDetail?.storeDetails?.storeTiming?.schedule?.frequency
        );

        // Get the number of hours from the duration object
        const hours = duration.asHours();
        storeData.frequency = String(hours);
      } else {
      }

      // if(storeData.categories && storeData.categories.length > 0){
      //   storeData.categories = storeData.categories.map((item) => {
      //     const findFromList = categoriesList.find((catItem) => catItem.value === item);
      //     return findFromList;
      //   })
      // }else{}
      setStoreDetails(Object.assign({}, JSON.parse(JSON.stringify(storeData))));
      setDefaultStoreDetails(
        Object.assign({}, JSON.parse(JSON.stringify(storeData)))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let provider_id = params?.id;
    getOrgDetails(provider_id);
  }, [params.id]);

  function addAfter(array, index, newItem) {
    return [...array.slice(0, index), newItem, ...array.slice(index)];
  }

  const validate = () => {
    console.log("storeDetails=====>", storeDetails);
    const formErrors = {};
    formErrors.email =
      storeDetails.email.trim() === ""
        ? "Support Email is required"
        : !isEmailValid(storeDetails.email)
        ? "Please enter a valid email address"
        : "";
    formErrors.mobile =
      storeDetails.mobile?.trim() === ""
        ? "Support Mobile Number is required"
        : !isPhoneNoValid(storeDetails.mobile)
        ? "Please enter a valid mobile number"
        : "";
    formErrors.categories =
      storeDetails.categories.length === 0
        ? "Supported Product Categories are required"
        : "";
    // formErrors.location = storeDetails.location.trim() === '' ? 'Location is required' : ''
    if (storeDetails.location_availability === "city") {
      formErrors.cities =
        storeDetails.cities.length === 0 ? "City is required" : "";
    } else {
    }
    formErrors.country =
      storeDetails.country.trim() === "" ? "Country is required" : "";
    formErrors.state =
      storeDetails.state.trim() === "" ? "State is required" : "";
    formErrors.address_city = storeDetails.address_city.trim() === "" ? "City is required" : "";
    formErrors.building =
      storeDetails.building.trim() === "" ? "Building is required" : "";
    formErrors.area_code =
      storeDetails.area_code.trim() === "" ? "PIN Code is required" : "";
    formErrors.logo = storeDetails.logo.trim() === "" ? "Logo is required" : "";

    if (!isFromUserListing) {
      formErrors.days =
        storeDetails.days.length === 0 ? "Opening Days are required" : "";
      formErrors.holidays =
        storeDetails.holidays.length === 0 ? "Holidays are required" : "";

      formErrors.storeTimes =
        storeDetails.StoreTimeType === "frequency" &&
        storeDetails.storeTimes.length === 0
          ? "At least One store time is required"
          : "";

      if (
        storeDetails.StoreTimeType === "frequency" &&
        storeDetails.storeTimes.length > 0
      ) {
        const invalidTimeIndices = storeDetails.storeTimes.reduce(
          (invalidIndices, time, index) => {
            if (time === "Invalid date" || time === "") {
              invalidIndices.push(index);
            }
            return invalidIndices;
          },
          []
        );

        if (invalidTimeIndices.length > 0) {
          formErrors.storeTimes = invalidTimeIndices;
        } else {
          delete formErrors.storeTimes; // Remove the error if all store times are valid
        }
      } else {
        delete formErrors.storeTimes; // Remove the error if there are no store times
      }

      formErrors.startTime =
        storeDetails.StoreTimeType === "time" &&
        (storeDetails.startTime === "" ||
          storeDetails.startTime === "Invalid date")
          ? "Opening time is required"
          : "";

      formErrors.endTime =
        storeDetails.StoreTimeType === "time" &&
        (storeDetails.endTime === "" || storeDetails.endTime === "Invalid date")
          ? "Closing time is required"
          : "";

      formErrors.frequency =
        storeDetails.StoreTimeType === "frequency"
          ? storeDetails.frequency === ""
            ? "Frequency is required"
            : !isNumberOnly(storeDetails?.frequency)
            ? "Please enter only digits"
            : ""
          : "";
    } else {
    }
    formErrors.radius =
      storeDetails.radius.trim() === ""
        ? "Serviceable Radius/Circle is required"
        : !isNumberOnly(storeDetails?.radius)
        ? "Please enter only digit"
        : "";
    formErrors.logisticsBppId =
      storeDetails.logisticsBppId.trim() === ""
        ? "Logistics Bpp Id is required"
        : "";

    console.log("formErrors=====>", formErrors);
    setErrors(formErrors);
    return !Object.values(formErrors).some((val) => val !== "");
  };

  const onUpdate = () => {
    console.log(
      "areObjectsEqual(storeDetails, defaultStoreDetails)",
      !areObjectsEqual(storeDetails, defaultStoreDetails)
    );
    if (!areObjectsEqual(storeDetails, defaultStoreDetails) && validate()) {
      const provider_id = params?.id;
      const url = `/api/v1/organizations/${provider_id}/storeDetails`;
      const {
        categories,
        logo,
        location_availability,
        default_cancellable,
        default_returnable,
        mobile,
        email,
        cities,

        building,
        state,
        address_city,
        country,
        area_code,
        location,
        locality = "",
      } = storeDetails;

      const locationAvailability =
        location_availability === "pan_india" ? true : false;
      const addressDetails = {
        building: building,
        city: address_city,
        state: state,
        country: country,
        area_code: area_code,
        locality: locality,
      };
      let iso8601 = "";
      if (
        storeDetails.frequency &&
        storeDetails.StoreTimeType === "frequency"
      ) {
        // Create a duration object with the hours you want to convert
        const duration = moment.duration(
          parseInt(storeDetails.frequency),
          "hours"
        );

        // Format the duration in ISO 8601 format
        iso8601 = duration.toISOString();
      } else {
      }
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
        storeTiming: {
          days: storeDetails.days,
          schedule: {
            holidays: storeDetails.holidays,
            frequency: iso8601 || "",
            times:
              storeDetails.StoreTimeType === "frequency"
                ? storeDetails.storeTimes
                : [],
          },
          range: {
            start:
              storeDetails.StoreTimeType === "time"
                ? storeDetails.startTime
                : "",
            end:
              storeDetails.StoreTimeType === "time" ? storeDetails.endTime : "",
          },
        },
        radius: {
          unit: "km",
          value: storeDetails.radius || "",
        },
        logisticsBppId: storeDetails.logisticsBppId,
      };
      if (location) {
        payload.location = location;
        delete payload.location._id;
      } else {
      }
      if (locationAvailability == false) {
        payload["city"] = cities;
      } else {
      }
      console.log("payload=====>", payload);
      postCall(url, payload)
        .then((resp) => {
          cogoToast.success("Store details updated successfully");
          getOrgDetails(provider_id);
          navigate("/application/inventory");
        })
        .catch((error) => {
          console.log(error);
          cogoToast.error(error.response.data.error);
        });
    }
  };

  useEffect(() => {
    if (storeDetails.location_availability == "city") {
      let fieldsWithCityInput = addAfter(storeDetailFields, 5, {
        id: "cities",
        title: "Select Cities",
        placeholder: "Please Select Cities",
        options: [
          { key: "Delhi", value: "delhi" },
          { key: "Pune", value: "pune" },
          { key: "Bengaluru", value: "bengaluru" },
          { key: "Kolkata", value: "kolkata" },
          { key: "Noida", value: "noida" },
        ],
        type: "multi-select",
        required: true,
      });
      setStoreDetailFields(fieldsWithCityInput);
    } else {
      setStoreDetailFields(storeFields);
    }
  }, [storeDetails.location_availability]);

  let userRole = JSON.parse(localStorage.getItem("user"))?.role?.name;

  return (
    <div>
      <div className="container mx-auto my-8">
        <div>
          <div
            className="w-full bg-white px-4 py-4 rounded-md h-full scrollbar-hidden"
            style={{ minHeight: "95%", maxHeight: "100%", overflow: "auto" }}
          >
            <div className="m-auto w-10/12 md:w-3/4 h-max">
              <BackNavigationButton
                onClick={() => {
                  userRole == "Super Admin"
                    ? navigate("/application/user-listings?view=provider")
                    : navigate("/application/inventory");
                }}
              />
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
                  // previewOnly={true}
                  // item={item}
                  item={{
                    ...item,
                    error: !!errors?.[item.id],
                    helperText: errors?.[item.id] || "",
                  }}
                  state={storeDetails}
                  stateHandler={setStoreDetails}
                />
              ))}
              {!isFromUserListing && (
                <>
                  <p className="text-2xl font-semibold mb-4 mt-14">
                    Store Timing
                  </p>
                  <RenderInput
                    item={{
                      id: "days",
                      title: "Opening Days",
                      options: [
                        { key: "Monday", value: "1" },
                        { key: "Tuesday", value: "2" },
                        { key: "Wednesday", value: "3" },
                        { key: "Thursday", value: "4" },
                        { key: "Friday", value: "5" },
                        { key: "Saturday", value: "6" },
                        { key: "Sunday", value: "7" },
                      ],
                      type: "checkbox",
                      required: true,
                      error: errors?.["days"] ? true : false,
                      helperText: errors?.["days"] || "",
                    }}
                    state={storeDetails}
                    stateHandler={setStoreDetails}
                  />
                  <p
                    style={{
                      color: "#d32f2f",
                      fontSize: "0.75rem",
                      marginLeft: 12,
                    }}
                  >
                    {errors?.["days"] || ""}
                  </p>
                  <RenderInput
                    item={{
                      id: "holidays",
                      title: "Holidays",
                      placeholder: "Holidays",
                      type: "days-picker",
                      required: true,
                      format: "YYYY-MM-DD",
                      error: errors?.["holidays"] ? true : false,
                      helperText: errors?.["holidays"] || "",
                    }}
                    state={storeDetails}
                    stateHandler={setStoreDetails}
                  />
                  <p
                    style={{
                      color: "#d32f2f",
                      fontSize: "0.75rem",
                      marginLeft: 12,
                    }}
                  >
                    {errors?.["holidays"] || ""}
                  </p>
                  <RenderInput
                    item={{
                      id: "StoreTimeType",
                      title: "Store Time Type",
                      options: [
                        { key: "Frequency", value: "frequency" },
                        { key: "Time", value: "time" },
                      ],
                      type: "radio",
                      required: true,
                      error: errors?.["StoreTimeType"] ? true : false,
                      helperText: errors?.["StoreTimeType"] || "",
                    }}
                    state={storeDetails}
                    stateHandler={setStoreDetails}
                  />
                  {storeDetails.StoreTimeType === "frequency" ? (
                    <>
                      <RenderInput
                        item={{
                          id: "frequency",
                          title: "Frequency (in hours)",
                          placeholder: "Frequency (in hours)",
                          type: "number",
                          min: 1,
                          required: true,
                          error: errors?.["frequency"] ? true : false,
                          helperText: errors?.["frequency"] || "",
                        }}
                        state={storeDetails}
                        stateHandler={setStoreDetails}
                      />
                      <label className="text-sm py-2 ml-1 mb-1 font-medium text-left text-[#606161] inline-block">
                        Store Time
                        <span className="text-[#FF0000]"> *</span>
                      </label>
                      {storeDetails.storeTimes &&
                        storeDetails.storeTimes.length > 0 &&
                        storeDetails.storeTimes.map((itemTime, idx) => {
                          const isError =
                            errors?.storeTimes &&
                            errors.storeTimes.includes(idx);
                          return (
                            <div style={{ display: "flex" }}>
                              <div style={{ flex: 1 }}>
                                <RenderInput
                                  item={{
                                    id: "time",
                                    title: "",
                                    format: "HH:mm",
                                    ampm: false,
                                    placeholder: "Frequency (in hours)",
                                    type: "time-picker",
                                    required: true,
                                    error: isError,
                                    helperText: isError
                                      ? "Please enter a valid store time"
                                      : "",
                                  }}
                                  state={{ time: itemTime }}
                                  onChange={(value) => {
                                    let data = JSON.parse(
                                      JSON.stringify(storeDetails.storeTimes)
                                    );
                                    data[idx] = value;
                                    setStoreDetails((prevState) => {
                                      const newState = {
                                        ...prevState,
                                        storeTimes: data,
                                      };
                                      return newState;
                                    });
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  width: "100px",
                                  margin: "auto",
                                  paddingLeft: "20px",
                                  display:
                                    storeDetails.storeTimes.length - 1 === idx
                                      ? "none"
                                      : "flex",
                                }}
                              >
                                {storeDetails.storeTimes.length - 1 !== idx && (
                                  <IconButton
                                    style={{ width: 35, height: 35 }}
                                    size="small"
                                    onClick={(e) => {
                                      let updatedStoreTimes = [
                                        ...storeDetails.storeTimes,
                                      ];
                                      updatedStoreTimes.splice(idx, 1);
                                      setStoreDetails((prevState) => ({
                                        ...prevState,
                                        storeTimes: updatedStoreTimes,
                                      }));
                                    }}
                                  >
                                    <DeleteOutlined fontSize="small" />
                                  </IconButton>
                                )}
                              </div>
                              <div
                                style={{
                                  width:
                                    storeDetails.storeTimes.length - 1 !== idx
                                      ? 0
                                      : "120px",
                                  margin: "auto",
                                  paddingLeft: "20px",
                                  marginLeft: -1,
                                }}
                              >
                                {storeDetails.storeTimes.length - 1 === idx && (
                                  <IconButton
                                    style={{ width: 35, height: 35 }}
                                    size="small"
                                    onClick={(e) => {
                                      console.log(
                                        "storeDetails.storeTimes=====>",
                                        storeDetails.storeTimes
                                      );
                                      let data = JSON.parse(
                                        JSON.stringify(storeDetails.storeTimes)
                                      );
                                      data.push("");
                                      setStoreDetails((prevState) => {
                                        const newState = {
                                          ...prevState,
                                          storeTimes: data,
                                        };
                                        return newState;
                                      });
                                    }}
                                  >
                                    <AddOutlined fontSize="small" />
                                  </IconButton>
                                )}
                              </div>
                            </div>
                          );
                        })}
                    </>
                  ) : (
                    <>
                      <RenderInput
                        item={{
                          ampm: false,
                          id: "startTime",
                          title: "Opening Time",
                          placeholder: "Opening Time",
                          type: "time-picker",
                          format: "HH:mm",
                          required: true,
                          error: errors?.["startTime"] ? true : false,
                          helperText: errors?.["startTime"] || "",
                        }}
                        state={storeDetails}
                        stateHandler={setStoreDetails}
                      />
                      <RenderInput
                        item={{
                          ampm: false,
                          id: "endTime",
                          title: "Closing Time",
                          placeholder: "Closing Time",
                          type: "time-picker",
                          format: "HH:mm",
                          required: true,
                          error: errors?.["endTime"] ? true : false,
                          helperText: errors?.["endTime"] || "",
                        }}
                        state={storeDetails}
                        stateHandler={setStoreDetails}
                      />
                    </>
                  )}

                  <RenderInput
                    item={{
                      id: "radius",
                      title: "Serviceable Radius/Circle (in Kilometer)",
                      placeholder: "Serviceable Radius/Circle (in Kilometer)",
                      type: "input",
                      error: errors?.["radius"] ? true : false,
                      helperText: errors?.["radius"] || "",
                      required: true,
                    }}
                    state={storeDetails}
                    stateHandler={setStoreDetails}
                  />
                  <RenderInput
                    item={{
                      id: "logisticsBppId",
                      title: "Logistics Bpp Id",
                      placeholder: "Logistics Bpp Id",
                      type: "input",
                      error: errors?.["logisticsBppId"] ? true : false,
                      helperText: errors?.["logisticsBppId"] || "",
                      required: true,
                    }}
                    state={storeDetails}
                    stateHandler={setStoreDetails}
                  />
                </>
              )}

              {/* {
                !areObjectsEqual(storeDetails, defaultStoreDetails) && ( */}
              <div className="flex mt-16">
                <Button
                  style={{ marginRight: 10 }}
                  variant="contained"
                  onClick={onUpdate}
                  disabled={areObjectsEqual(storeDetails, defaultStoreDetails)}
                >
                  Update Store
                </Button>
              </div>
              {/* )
              } */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
