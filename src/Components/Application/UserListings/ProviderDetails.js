import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import RenderInput from "../../../utils/RenderInput";
import {areObjectsEqual, isEmailValid, isPhoneNoValid} from '../../../utils/validations';
import { useEffect } from "react";
import { getCall, postCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";
import BackNavigationButton from "../../Shared/BackNavigationButton";

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
    required: true,
  },
  {
    id: "contactMobile",
    title: "Contact mobile",
    type: "input",
    required: true,
  },
  {
    id: "fssai",
    title: "FSSAI",
    type: "input",
    required: true,
  },
  {
    id: "address",
    title: "Address",
    type: "input",
    required: true,
  },
  {
    id: "address_proof",
    title: "Address proof",
    type: "upload",
    required: true,
  },
  {
    id: "gst_no",
    title: "GSTIN",
    type: "input",
    required: true,
  },
  {
    id: "gst_proof",
    title: "GSTIN Proof",
    type: "upload",
    required: true,
  },
  {
    id: "pan_no",
    title: "PAN",
    type: "input",
    required: true,
  },
  {
    id: "pan_proof",
    title: "PAN proof",
    type: "upload",
    required: true,
  },
  {
    id: "id_proof",
    title: "ID proof",
    type: "upload",
    required: true,
  },
];

const bankFields = [
  { id: "bankName", title: "Bank Name", type: "input", required: true, },
  { id: "branchName", title: "Branch Name", type: "input", required: true, },
  { id: "IFSC", title: "IFSC", type: "input", required: true, },
  { id: "accHolderName", title: "Account Holder Name", type: "input", required: true, },
  { id: "accNumber", title: "Account Number", type: "input", required: true, },
  { id: "cancelledCheque", title: "Cancelled Cheque", type: "upload", required: true, },
];

const categoriesList = [
  { key: "Grocery", value: "grocery" },
  { key: "Beauty & Personal Care", value: "beauty_and_personal_care" },
  { key: "Fashion", value: "fashion" },
  { key: "Home and Decor", value: "home_and_decor" },
  { key: "F&B", value: "f_and_b" },
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
    maxLength: 10,
    required: true,
  },
  {
    id: "categories",
    title: "Supported product categories",
    placeholder: "Supported product categories",
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
    title: "Location availability",
    options: [
      { key: "PAN India", value: "pan_india" },
      { key: "City", value: "city" },
    ],
    type: "radio",
    required: true,
  },
  {
    id: "default_cancellable",
    title: "Default cancellable setting",
    options: [
      { key: "Cancellable", value: true },
      { key: "Non Cancellable", value: false },
    ],
    type: "radio",
    required: true,
  },
  {
    id: "default_returnable",
    title: "Default returnable setting",
    options: [
      { key: "Returnable", value: true },
      { key: "Non Returnable", value: false },
    ],
    type: "radio",
    required: true,
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
    id: "locality",
    title: "Locality",
    placeholder: "Locality",
    type: "input",
    required: true,
  },
  {
    id: "logo",
    title: "Logo",
    type: "upload",
    required: true,
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
  const [errors, setErrors] = useState(null)

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
        email: res.providerDetail.storeDetails?.supportDetails.email || '',
        mobile: res.providerDetail.storeDetails?.supportDetails.mobile || '',
        categories: res?.providerDetail?.storeDetails?.categories || [],
        location: res?.providerDetail?.storeDetails?.location || '',
        location_availability:
        res.providerDetail.storeDetails?res.providerDetail.storeDetails.locationAvailabilityPANIndia == true
            ? "pan_india"
            : "city":'',
        cities: res?.providerDetail?.storeDetails?.city || [],
        default_cancellable: false,
        default_returnable: false,
        country: res.providerDetail?.storeDetails?.address?.country || '',
        state: res.providerDetail?.storeDetails?.address?.state || '',
        city: res.providerDetail?.storeDetails?.address.city || '',
        building: res.providerDetail?.storeDetails?.address?.building || '',
        area_code: res.providerDetail?.storeDetails?.address?.area_code || '',
        locality: res.providerDetail?.storeDetails?.address?.locality || '',
        logo: res?.providerDetail?.storeDetails?.logo?.url || '',
      };
      // if(storeData.categories && storeData.categories.length > 0){
      //   storeData.categories = storeData.categories.map((item) => {
      //     const findFromList = categoriesList.find((catItem) => catItem.value === item);
      //     return findFromList;
      //   })
      // }else{}
      setStoreDetails(Object.assign({}, JSON.parse(JSON.stringify(storeData))));
      setDefaultStoreDetails(Object.assign({}, JSON.parse(JSON.stringify(storeData))));
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

  const validate = () => {
    console.log("storeDetails=====>", storeDetails);
    const formErrors = {};
    formErrors.email = storeDetails.email.trim() === '' ? 'Email is required' : !isEmailValid(storeDetails.email) ? 'Please enter a valid email address' : ''
    formErrors.mobile = storeDetails.mobile?.trim() === '' ? 'Mobile Number is required' : !isPhoneNoValid(storeDetails.mobile) ? 'Please enter a valid mobile number' : ''
    formErrors.categories = storeDetails.categories.length === 0 ? 'Category is required' : ''
    // formErrors.location = storeDetails.location.trim() === '' ? 'Location is required' : ''
    if(storeDetails.location_availability === 'city'){
      formErrors.cities = storeDetails.cities.length === 0 ? 'City is required' : ''
    }else{}
    formErrors.country = storeDetails.country.trim() === '' ? 'Country is required' : ''
    formErrors.state = storeDetails.state.trim() === '' ? 'State is required' : ''
    formErrors.city = storeDetails.city.trim() === '' ? 'City is required' : ''
    formErrors.building = storeDetails.building.trim() === '' ? 'Building is required' : ''
    formErrors.area_code = storeDetails.area_code.trim() === '' ? 'Area code is required' : ''
    formErrors.logo = storeDetails.logo.trim() === '' ? 'Logo is required' : ''
    console.log("formErrors=====>", formErrors);
    setErrors(formErrors);
    return !Object.values(formErrors).some(val => val !== '');
  };

  const onUpdate = () => {
    if(validate()){
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
        city,
        country,
        area_code,
        location,
        locality = ''
      } = storeDetails;
      const locationAvailability = location_availability === "pan_india"?true:false;
      const addressDetails = {
        building: building,
        city: city,
        state: state,
        country: country,
        area_code: area_code,
        locality: locality
      };
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
      if(location){
        payload.location = location;
        delete payload.location._id;
      }else{}
      if (locationAvailability == false) {
        payload["city"] = cities;
      }else{}
      console.log("payload=====>", payload);
      postCall(url, payload)
        .then((resp) => {
          cogoToast.success("Store details updated successfully");
          getOrgDetails(provider_id);
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
        placeholder: "Select Cities",
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
              <BackNavigationButton onClick={() => {
                userRole == "Super Admin"
                  ? navigate("/application/user-listings?view=provider")
                  : navigate("/application/inventory");
              }} />
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
                  item={{ ...item, error: !!errors?.[item.id], helperText: errors?.[item.id] || '' }}
                  state={storeDetails}
                  stateHandler={setStoreDetails}
                />
              ))}
              {
                !areObjectsEqual(storeDetails, defaultStoreDetails) && (
                  <div className="flex mt-16">
                    <Button
                      style={{ marginRight: 10 }}
                      variant="contained"
                      onClick={onUpdate}
                    >
                      Update Store
                    </Button>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
