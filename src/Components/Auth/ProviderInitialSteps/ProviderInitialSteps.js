import { Button } from "@mui/material";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCall, postCall } from "../../../Api/axios";
import { AddCookie, removeCookie } from "../../../utils/cookies";
import RenderInput from "../../../utils/RenderInput";

const passwordFields = [
  {
    id: "password_1",
    title: "Password",
    placeholder: "Password",
    type: "input",
    required: true,
  },
  {
    id: "password_2",
    title: "Confirm Password",
    placeholder: "Confirm Password",
    type: "input",
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
  {
    id: "location",
    title: "Store Location",
    placeholder: "Store Location",
    type: "input",
    required: false,
  },
  {
    id: "locationAvailability",
    title: "Location availability",
    options: [
      { key: "PAN India", value: "PAN INDIA" },
      { key: "City", value: "city" },
    ],
    type: "radio",
    required: false,
  },
  {
    id: "defaultCancellable",
    title: "Default cancellable setting",
    options: [
      { key: "Cancellable", value: true },
      { key: "Non Cancellable", value: false },
    ],
    type: "radio",
    required: false,
  },
  {
    id: "defaultReturnable",
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

const ProviderInitialSteps = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [storeDetailFields, setStoreDetailFields] = useState(storeFields);

  const [password, setPassword] = useState({ password_1: "", password_2: "" });
  const [storeDetails, setStoreDetails] = useState({
    logo: "",
    categories: [],
    location: "",
    locationAvailability: "pan_india",
    cities: [],
    defaultCancellable: "",
    defaultReturnable: "",
    email: "",
    mobile: "",
  });

  function addAfter(array, index, newItem) {
    return [...array.slice(0, index), newItem, ...array.slice(index)];
  }

  const getOrgDetails = async (org_id) => {
    const url = `/api/v1/organizations/${org_id}/storeDetails`;
    const res = await getCall(url);
    return res;
  };

  const getUser = async (id) => {
    const url = `/api/v1/users/${id}`;
    const res = await getCall(url);
    return res[0];
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    getUser(user_id).then((u) => {
      if (u.isSystemGeneratedPassword) setStep(1);
      else {
        getOrgDetails(u.organization).then((org) => {
          if (org.storeDetails.categories.length == 0) setStep(2);
        });
      }
    });
  }, []);

  useEffect(() => {
    if (storeDetails.locationAvailability == "city") {
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
  }, [storeDetails.locationAvailability]);

  const handleSetPasswordReq = async () => {
    let org = JSON.parse(Cookies.get("org"));
    const url = `/api/v1/auth/resetPassword`;
    try {
      const res = await postCall(url, { password: password.password_1 });

      if (org.storeDetailsAvailable) {
        navigate("/application/inventory");
      } else setStep(2);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStoreDetailsReq = async () => {
    const url = `/api/v1/organizations/{orgId}/storeDetails`;
    try {
      const res = await postCall(url, password.password_1);
      navigate("/application/inventory");
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleContinue = () => {
    if (step == 1) handleSetPasswordReq();
    if (step == 2) handleStoreDetailsReq();
  };

  const checkDisabled = () => {
    if (step == 1) {
      if (password.password_1.trim() == "") return true;
      if (password.password_1 != password.password_2) {
        return true;
      }
    }

    return false;
  };

  const renderSetPasswordFields = () => {
    return passwordFields.map((item) => (
      <RenderInput item={item} state={password} stateHandler={setPassword} />
    ));
  };

  const renderStoreDetailsFields = () => {
    return storeDetailFields.map((item) => (
      <RenderInput
        item={item}
        state={storeDetails}
        stateHandler={setStoreDetails}
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
              <p className="text-2xl font-semibold mb-4 text-center">
                {renderHeading()}
              </p>
              <div>{renderSteps()}</div>
              <div className="flex mt-6">
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={handleContinue}
                  disabled={checkDisabled()}
                >
                  {step == 2 ? "Finish" : "Continue"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderInitialSteps;
