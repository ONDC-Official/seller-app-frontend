import { Button } from "@mui/material";
import cogoToast from "cogo-toast";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCall, patchCall, postCall } from "../../../Api/axios";
import useForm from "../../../hooks/useForm";
import { AddCookie, removeCookie } from "../../../utils/cookies";
import RenderInput from "../../../utils/RenderInput";
import { isEmailValid, isObjEmpty, isPhoneNoValid } from "../../../utils/validations";
import { containsOnlyNumbers, validatePasswordComplexity } from '../../../utils/formatting/string'
import { PRODUCT_CATEGORY } from "../../../utils/constants";

const passwordFields = [
  {
    id: "password_1",
    title: "Password",
    placeholder: "Password",
    type: "input",
    password: true,
    required: true,
  },
  {
    id: "password_2",
    title: "Confirm Password",
    placeholder: "Confirm Password",
    type: "input",
    password: true,
    required: true,
  },
];

let storeFields = [
  {
    id: "email",
    title: "Support Email",
    placeholder: "Enter your email address",
    type: "input",
    email: true,
    required: true,
  },
  {
    id: "mobile",
    title: "Support Mobile",
    placeholder: "Enter your mobile number",
    type: "input",
    mobile: true,
    maxLength: 10,
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
    id: "building",
    title: "Building",
    placeholder: "Building",
    type: "input",
    required: true,
  },
  {
    id: "address_city",
    title: "City",
    placeholder: "City",
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
    id: "country",
    title: "Country",
    placeholder: "Country",
    type: "input",
    required: true,
  },
  {
    id: "area_code",
    title: "PIN code",
    placeholder: "PIN code",
    type: "input",
    maxLength: 6,
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
    id: "categories",
    title: "Supported product categories",
    placeholder: "Supported product categories",
    options: Object.entries(PRODUCT_CATEGORY).map(([key, value]) => {
      return { key: value, value: key}
    }),
    type: "multi-select",
    required: true,
  },
  {
    id: "locationAvailability",
    title: "Location availability",
    options: [
      { key: "PAN India", value: "PAN INDIA" },
      { key: "City", value: "city" },
    ],
    type: "radio",
    required: true,
  },
  {
    id: "defaultCancellable",
    title: "Default cancellable setting",
    options: [
      { key: "Cancellable", value: true },
      { key: "Non Cancellable", value: false },
    ],
    type: "radio",
    required: true,
  },
  {
    id: "defaultReturnable",
    title: "Default returnable setting",
    options: [
      { key: "Returnable", value: true },
      { key: "Non Returnable", value: false },
    ],
    type: "radio",
    required: true,
  },
  {
    id: "logo",
    title: "Logo",
    type: "upload",
    required: true,
    file_type: "logo",
  },
];

const ProviderInitialSteps = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const [org, setOrg] = useState();

  const [step, setStep] = useState(1);
  const [storeDetailFields, setStoreDetailFields] = useState(storeFields);

  const password = { password_1: "", password_2: "" };
  const storeDetails = {
    logo: "",
    categories: [],
    location: "",
    building: "",
    address_city: "",
    state: "",
    country: "",
    area_code: "",
    locality: "",
    locationAvailability: "PAN INDIA",
    city: [],
    defaultCancellable: false,
    defaultReturnable: false,
    email: "",
    mobile: "",
  };

  const { formValues: form1Values, setFormValues: setForm1Values, errors: form1Errors, setErrors: setForm1Errors } = useForm({ ...password })
  const { formValues: form2Values, setFormValues: setForm2Values, errors: form2Errors, setErrors: setForm2Errors } = useForm({ ...storeDetails })
  const [form1Submitted, setForm1Submited] = useState(false)
  const [form2Submitted, setForm2Submited] = useState(false)

  const validateForm1 = () => {
    const formErrors = {}
    formErrors.password_1 = form1Values.password_1 === '' ? 'Password is required': !validatePasswordComplexity(form1Values.password_1) ? `
    Password should have minimum 8 characters,
     at least one upper case character,
     at least one lower case character,
     at least one special character
     and at least one digit` : ''
    formErrors.password_2 = form1Values.password_2 === '' ? 'Confirm password is required' : form1Values.password_1 !== form1Values.password_2 ? 'Passwords don\'t match' : ''
    setForm1Errors({
      ...formErrors
    })
    return !Object.values(formErrors).some(val => val !== '')
  }

  const validateForm2 = () => {
    const formErrors = {}
    formErrors.logo = form2Values.logo.trim() === '' ? 'Logo is required' : ''
    formErrors.categories = form2Values.categories.length < 1 ? 'Category is required' : ''
    formErrors.location = !form2Values.location ? 'Location is required' : ''
    formErrors.building = form2Values.building.trim() === '' ? 'Building is required' : ''
    formErrors.address_city = form2Values.address_city.trim() === '' ? 'City is required' : ''
    formErrors.state = form2Values.state.trim() === '' ? 'State is required' : ''
    formErrors.country = form2Values.country.trim() === '' ? 'Country is required' : ''
    formErrors.area_code = !containsOnlyNumbers(form2Values.area_code) ? 'Please enter a valid PIN code' : ''
    formErrors.locality = form2Values.locality.trim() === '' ? 'Locality is required' : ''
    if (form2Values.locationAvailability === 'city') {
      formErrors.city = form2Values.city.length < 1 ? 'City is required' : ''
    }
    formErrors.email = form2Values.email.trim() === '' ? 'Email is required' : !isEmailValid(form2Values.email) ? 'Please enter a valid email address' : ''
    formErrors.mobile = form2Values.mobile.trim() === '' ? 'Mobile number is required' : !isPhoneNoValid(form2Values.mobile) ? 'Please enter a valid mobile number' : ''
    setForm2Errors({
      ...formErrors
    })
    return !Object.values(formErrors).some(val => val !== '')
  }

  function addAfter(array, index, newItem) {
    return [...array.slice(0, index), newItem, ...array.slice(index)];
  }

  const getOrgDetails = async (org_id) => {
    const url = `/api/v1/organizations/${org_id}/storeDetails`;
    const res = await getCall(url);
    setOrg(res);
    return res;
  };

  const getUser = async (id) => {
    const url = `/api/v1/users/${id}`;
    const res = await getCall(url);
    setUser(res[0]);
    return res[0];
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    getUser(user_id).then((u) => {
      if (u.isSystemGeneratedPassword) {
        setStep(1);
      } else {
        if (u.role.name == "Organization Admin") {
          getOrgDetails(u.organization).then((org) => {
            if (isObjEmpty(org.storeDetails)) setStep(2);
            else navigate("/application/inventory");
          });
        } else navigate("/application/inventory");
      }
    });
  }, []);

  useEffect(() => {
    if (form2Values.locationAvailability == "city") {
      let fieldsWithCityInput = addAfter(storeDetailFields, 11, {
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
  }, [form2Values.locationAvailability]);

  const handleSetPasswordReq = async () => {
    const user_id = localStorage.getItem("user_id");
    const url = `/api/v1/auth/resetPassword`;
    try {
      const res = await postCall(url, { password: form1Values.password_1 });
      // navigate("/application/inventory");
      getUser(user_id).then((u) => {
        if (u.isSystemGeneratedPassword) setStep(1);
        else {
          if (u.role.name == "Organization Admin") {
            getOrgDetails(u.organization).then((org) => {
              if (isObjEmpty(org.storeDetails)) setStep(2);
              else navigate("/application/inventory");
            });
          } else navigate("/application/user-listings");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleStoreDetailsReq = async () => {
    const data = Object.assign({}, form2Values);

    data.address = {
      building: form2Values.building,
      city: form2Values.address_city,
      state: form2Values.state,
      country: form2Values.country,
      area_code: form2Values.area_code,
      locality: form2Values.locality,
    };

    data["supportDetails"] = {
      email: form2Values.email,
      mobile: form2Values.mobile,
    };

    data["locationAvailabilityPANIndia"] =
    form2Values.locationAvailability == "PAN INDIA" ? true : false;

    delete data["building"];
    delete data["address_city"];
    delete data["state"];
    delete data["country"];
    delete data["area_code"];
    delete data["locality"];
    // delete data["location"];
    delete data["locationAvailability"];
    delete data["email"];
    delete data["mobile"];
    delete data["uploaded_urls"];

    const url = `/api/v1/organizations/${org._id}/storeDetails`;
    try {
      const res = await postCall(url, data);
      navigate("/application/inventory");
    } catch (error) {
      cogoToast.error(error.response.data.error);
      console.log(error.response);
    }
  };

  const handleSubmit = () => {
    if (step == 1) {
      setForm1Submited(true)
      if (validateForm1()) handleSetPasswordReq();
    } else if (step == 2) {
      setForm2Submited(true)
      if (validateForm2()) handleStoreDetailsReq();
    }
  };

  useEffect(() => {
    if (!form1Submitted) return
    validateForm1()
  }, [form1Values])

  useEffect(() => {
    if (!form2Submitted) return
    validateForm2()
  }, [form2Values])

  const checkDisabled = () => {
    if (step === 2 && (
      !form2Values.logo ||
      form2Values.categories.length === 0 ||
      !form2Values.location ||
      !form2Values.building ||
      !form2Values.address_city ||
      !form2Values.state ||
      !form2Values.country ||
      !form2Values.area_code ||
      !form2Values.locality ||
      (form2Values.locationAvailability === 'city' && form2Values.city.length === 0) ||
      !form2Values.logo ||
      !form2Values.email ||
      !form2Values.mobile)) {
        return true
    }
    return false;
  };

  const renderSetPasswordFields = () => {
    return passwordFields.map((item) => (
      <RenderInput
        item={{ ...item, error: form1Errors?.[item.id] ? true : false, helperText: form1Errors?.[item.id] || '' }}
        state={form1Values}
        stateHandler={setForm1Values}
      />
    ));
  };

  const renderStoreDetailsFields = () => {
    return storeDetailFields.map((item) => (
      <RenderInput
        item={{ ...item, error: form2Errors?.[item.id] ? true : false, helperText: form2Errors?.[item.id] || '' }}
        state={form2Values}
        stateHandler={setForm2Values}
      />
    ));
  };

  const renderHeading = () => {
    if (step == 1) return "Set Password";
    if (step == 2) return "Provider Store details";
  };

  const renderSteps = () => {
    if (step == 1) return renderSetPasswordFields();
    if (step == 2) return renderStoreDetailsFields();
  };

  return (
    <>
      <div className="mx-auto !p-5 h-screen min-vh-100 overflow-auto bg-[#f0f0f0]">
        <div className="h-full flex fex-row items-center justify-center">
          <div
            className="flex w-full md:w-2/4 bg-white px-4 py-4 rounded-md shadow-xl h-max scrollbar-hidden"
            style={{ minHeight: "85%", maxHeight: "100%", overflow: "auto" }}
          >
            <div className="m-auto w-10/12 md:w-3/4 h-max">
              <form>
                <p className="text-2xl font-semibold mb-4 text-center">
                  {renderHeading()}
                </p>
                <div>{renderSteps()}</div>
                <div className="flex mt-6">
                  <Button
                    type="button"
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={checkDisabled()}
                  >
                    {step == 2 ? "Finish" : "Continue"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderInitialSteps;
