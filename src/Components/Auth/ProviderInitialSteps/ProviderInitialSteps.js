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
import {
  isEmailValid,
  isNumberOnly,
  isObjEmpty,
  isPhoneNoValid,
} from "../../../utils/validations";
import {
  containsOnlyNumbers,
  validatePasswordComplexity,
} from "../../../utils/formatting/string";
import { PRODUCT_CATEGORY } from "../../../utils/constants";
import moment from "moment";

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
      return { key: value, value: key };
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
      { key: "Cancellable", value: "true" },
      { key: "Non Cancellable", value: "false" },
    ],
    type: "radio",
    required: true,
  },
  {
    id: "defaultReturnable",
    title: "Default returnable setting",
    options: [
      { key: "Returnable", value: "true" },
      { key: "Non Returnable", value: "false" },
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
    fontColor: "#ffffff",
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
    defaultCancellable: "false",
    defaultReturnable: "false",
    email: "",
    mobile: "",

    days: [],
    holidays: [],
    StoreTimeType: "time",
    startTime: "",
    endTime: "",
    frequency: "",
    storeTimes: [""],
    radius: "",
    logisticsBppId: "",
  };

  const {
    formValues: form1Values,
    setFormValues: setForm1Values,
    errors: form1Errors,
    setErrors: setForm1Errors,
  } = useForm({ ...password });
  const {
    formValues: form2Values,
    setFormValues: setForm2Values,
    errors: form2Errors,
    setErrors: setForm2Errors,
  } = useForm({ ...storeDetails });
  const [form1Submitted, setForm1Submited] = useState(false);
  const [form2Submitted, setForm2Submited] = useState(false);

  const validateForm1 = () => {
    const formErrors = {};
    formErrors.password_1 =
      form1Values.password_1 === ""
        ? "Password is required"
        : !validatePasswordComplexity(form1Values.password_1)
        ? `
    Password should have minimum 8 characters,
     at least one upper case character,
     at least one lower case character,
     at least one special character
     and at least one digit`
        : "";
    formErrors.password_2 =
      form1Values.password_2 === ""
        ? "Confirm Password is required"
        : form1Values.password_1 !== form1Values.password_2
        ? "Passwords don't match"
        : "";
    setForm1Errors({
      ...formErrors,
    });
    return !Object.values(formErrors).some((val) => val !== "");
  };

  const validateForm2 = () => {
    const formErrors = {};
    formErrors.logo = form2Values.logo.trim() === "" ? "Logo is required" : "";
    formErrors.categories =
      form2Values.categories.length < 1
        ? "Supported Product Categories are required"
        : "";
    formErrors.location = !form2Values.location ? "Location is required" : "";
    formErrors.building =
      form2Values.building.trim() === "" ? "Building is required" : "";
    formErrors.address_city =
      form2Values.address_city.trim() === "" ? "City is required" : "";
    formErrors.state =
      form2Values.state.trim() === "" ? "State is required" : "";
    formErrors.country =
      form2Values.country.trim() === "" ? "Country is required" : "";
    formErrors.area_code = !containsOnlyNumbers(form2Values.area_code)
      ? "Please enter a valid PIN code"
      : "";
    formErrors.locality =
      form2Values.locality.trim() === "" ? "Locality is required" : "";
    if (form2Values.locationAvailability === "city") {
      formErrors.city = form2Values.city.length < 1 ? "City is required" : "";
    }
    formErrors.email =
      form2Values.email.trim() === ""
        ? "Support Email is required"
        : !isEmailValid(form2Values.email)
        ? "Please enter a valid email address"
        : "";
    formErrors.mobile =
      form2Values.mobile.trim() === ""
        ? "Support Mobile Number is required"
        : !isPhoneNoValid(form2Values.mobile)
        ? "Please enter a valid mobile number"
        : "";

    formErrors.days = form2Values.days.length === 0 ? "Days is required" : "";
    formErrors.holidays = "";
    formErrors.startTime =
      form2Values.StoreTimeType === "time" && form2Values.startTime === ""
        ? "Start time is required"
        : "";
    formErrors.endTime =
      form2Values.StoreTimeType === "time" && form2Values.endTime === ""
        ? "End time is required"
        : "";
    formErrors.frequency =
      form2Values.StoreTimeType === "frequency"
        ? form2Values.frequency === ""
          ? "Frequency is required"
          : !isNumberOnly(form2Values?.frequency)
          ? "Please enter only digit"
          : ""
        : "";
    formErrors.storeTimes =
      form2Values.storeTimes.length === 0
        ? "Al least One store time is required"
        : "";
    formErrors.radius =
      form2Values.radius.trim() === ""
        ? "Serviceable Radius/Circle is required"
        : !isNumberOnly(form2Values?.radius)
        ? "Please enter only digit"
        : "";
    formErrors.logisticsBppId =
      form2Values.logisticsBppId.trim() === ""
        ? "Logistics Bpp Id is required"
        : "";
    setForm2Errors({
      ...formErrors,
    });
    return !Object.values(formErrors).some((val) => val !== "");
  };

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
    data.defaultCancellable = eval(data.defaultCancellable);
    data.defaultReturnable = eval(data.defaultReturnable);
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

    let iso8601 = "";
    if (form2Values.frequency) {
      // Create a duration object with the hours you want to convert
      const duration = moment.duration(
        parseInt(form2Values.frequency),
        "hours"
      );

      // Format the duration in ISO 8601 format
      iso8601 = duration.toISOString();
    } else {
    }
    data.storeTiming = {
      days: form2Values.days,
      schedule: {
        holidays: form2Values.holidays,
        frequency: iso8601 || "",
        times: form2Values.storeTimes || [],
      },
      range: {
        start: form2Values.startTime || "",
        end: form2Values.endTime || "",
      },
    };
    data.radius = {
      unit: "km",
      value: form2Values.radius || "",
    };
    data.logisticsBppId = form2Values.logisticsBppId;

    delete data["building"];
    delete data["address_city"];
    delete data["state"];
    // delete data["city"];
    delete data["country"];
    delete data["area_code"];
    delete data["locality"];
    // delete data["location"];
    delete data["locationAvailability"];
    delete data["email"];
    delete data["mobile"];
    delete data["uploaded_urls"];

    delete data["days"];
    delete data["holidays"];
    delete data["frequency"];
    delete data["startTime"];
    delete data["endTime"];
    delete data["storeTimes"];
    delete data["StoreTimeType"];
    delete data["tempURL"];

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
      setForm1Submited(true);
      if (validateForm1()) handleSetPasswordReq();
    } else if (step == 2) {
      setForm2Submited(true);
      if (validateForm2()) {
        handleStoreDetailsReq();
      }
    }
  };

  useEffect(() => {
    if (!form1Submitted) return;
    validateForm1();
  }, [form1Values]);

  useEffect(() => {
    if (!form2Submitted) return;
    validateForm2();
  }, [form2Values]);

  const checkDisabled = () => {
    if (step == 1) {
      return false;
    } else if (
      (step === 2 &&
        (!form2Values.logo ||
          form2Values.categories.length === 0 ||
          !form2Values.location ||
          !form2Values.building ||
          !form2Values.address_city ||
          !form2Values.state ||
          !form2Values.country ||
          !form2Values.area_code ||
          !form2Values.locality ||
          (form2Values.locationAvailability === "city" &&
            form2Values.city.length === 0) ||
          !form2Values.logo ||
          !form2Values.email ||
          !form2Values.mobile ||
          form2Values.days.length === 0 ||
          (!form2Values.frequency &&
            !form2Values.StoreTimeType === "frequency") ||
          (!form2Values.startTime && !form2Values.StoreTimeType === "time") ||
          (!form2Values.endTime && !form2Values.StoreTimeType === "time") ||
          (form2Values.storeTimes.length === 0 &&
            !form2Values.StoreTimeType === "frequency") ||
          form2Values.holidays.length === 0)) ||
      (form2Values.StoreTimeType === "frequency" &&
        (form2Values.frequency === "" || form2Values.frequency === "0")) ||
      (form2Values.StoreTimeType === "time" &&
        (form2Values.startTime === "" ||
          form2Values.endTime === "" ||
          form2Values.startTime === "Invalid date" ||
          form2Values.endTime === "Invalid date" ||
          form2Values.startTime === form2Values.endTime)) ||
      // form2Values.storeTimes[0] === "" ||
      // form2Values.storeTimes[0] === "Invalid date" ||
      form2Values.logisticsBppId === "" ||
      form2Values.radius === ""
    ) {
      return true;
    }
    return false;
  };

  const renderSetPasswordFields = () => {
    return passwordFields.map((item) => (
      <RenderInput
        item={{
          ...item,
          error: form1Errors?.[item.id] ? true : false,
          helperText: form1Errors?.[item.id] || "",
        }}
        state={form1Values}
        stateHandler={setForm1Values}
      />
    ));
  };

  const renderStoreDetailsFields = () => {
    return storeDetailFields.map((item) => (
      <RenderInput
        item={{
          ...item,
          error: form2Errors?.[item.id] ? true : false,
          helperText: form2Errors?.[item.id] || "",
        }}
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
                <div>
                  {renderSteps()}
                  {step == 2 ? (
                    <>
                      <p className="text-2xl font-semibold mb-4 mt-14">
                        Store Timing
                      </p>
                      <RenderInput
                        item={{
                          id: "days",
                          title: "Days",
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
                          error: form2Errors?.["days"] ? true : false,
                          helperText: form2Errors?.["days"] || "",
                        }}
                        state={form2Values}
                        stateHandler={setForm2Values}
                      />
                      <RenderInput
                        item={{
                          id: "holidays",
                          title: "Holidays",
                          placeholder: "Holidays",
                          type: "days-picker",
                          format: "YYYY-MM-DD",
                          required: true,
                          error: form2Errors?.["holidays"] ? true : false,
                          helperText: form2Errors?.["holidays"] || "",
                        }}
                        state={form2Values}
                        stateHandler={setForm2Values}
                      />
                      <RenderInput
                        item={{
                          id: "StoreTimeType",
                          title: "StoreTimeType",
                          options: [
                            { key: "Frequency", value: "frequency" },
                            { key: "Time", value: "time" },
                          ],
                          type: "radio",
                          required: true,
                          error: form2Errors?.["StoreTimeType"] ? true : false,
                          helperText: form2Errors?.["StoreTimeType"] || "",
                        }}
                        state={form2Values}
                        stateHandler={setForm2Values}
                      />
                      {form2Values.StoreTimeType === "frequency" ? (
                        <>
                          <RenderInput
                            item={{
                              id: "frequency",
                              title: "Frequency (in hours)",
                              placeholder: "Frequency (in hours)",
                              type: "number",
                              required: true,
                              error: form2Errors?.["frequency"] ? true : false,
                              helperText: form2Errors?.["frequency"] || "",
                            }}
                            state={form2Values}
                            stateHandler={setForm2Values}
                          />
                          <label className="text-sm py-2 ml-1 mb-1 font-medium text-left text-[#606161] inline-block">
                            Store Time
                            <span className="text-[#FF0000]"> *</span>
                          </label>
                          {form2Values.storeTimes &&
                            form2Values.storeTimes.length > 0 &&
                            form2Values.storeTimes.map((itemTime, idx) => {
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
                                        error: form2Errors?.["frequency"]
                                          ? true
                                          : false,
                                        helperText:
                                          form2Errors?.["frequency"] || "",
                                      }}
                                      state={{ time: itemTime }}
                                      onChange={(value) => {
                                        let data = JSON.parse(
                                          JSON.stringify(form2Values.storeTimes)
                                        );
                                        data[idx] = value;
                                        setForm2Values((prevState) => {
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
                                    }}
                                  >
                                    {form2Values.storeTimes.length - 1 ===
                                      idx && (
                                      <Button
                                        variant="contained"
                                        onClick={() => {
                                          console.log(
                                            "form2Values.storeTimes=====>",
                                            form2Values.storeTimes
                                          );
                                          let data = JSON.parse(
                                            JSON.stringify(
                                              form2Values.storeTimes
                                            )
                                          );
                                          data.push("");
                                          setForm2Values((prevState) => {
                                            const newState = {
                                              ...prevState,
                                              storeTimes: data,
                                            };
                                            return newState;
                                          });
                                        }}
                                      >
                                        Add
                                      </Button>
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
                              id: "startTime",
                              title: "Start Time",
                              placeholder: "Start Time",
                              type: "time-picker",
                              format: "HH:mm",
                              required: true,
                              error: form2Errors?.["startTime"] ? true : false,
                              helperText: form2Errors?.["startTime"] || "",
                            }}
                            state={form2Values}
                            stateHandler={setForm2Values}
                          />
                          <RenderInput
                            item={{
                              id: "endTime",
                              title: "End Time",
                              placeholder: "End Time",
                              type: "time-picker",
                              format: "HH:mm",
                              required: true,
                              error: form2Errors?.["endTime"] ? true : false,
                              helperText: form2Errors?.["endTime"] || "",
                            }}
                            state={form2Values}
                            stateHandler={setForm2Values}
                          />
                        </>
                      )}

                      <RenderInput
                        item={{
                          id: "radius",
                          title: "Serviceable Radius/Circle (in Kilometer)",
                          placeholder:
                            "Serviceable Radius/Circle (in Kilometer)",
                          type: "input",
                          error: form2Errors?.["radius"] ? true : false,
                          helperText: form2Errors?.["radius"] || "",
                          required: true,
                        }}
                        state={form2Values}
                        stateHandler={setForm2Values}
                      />

                      <RenderInput
                        item={{
                          id: "logisticsBppId",
                          title: "Logistics Bpp Id",
                          placeholder: "Logistics Bpp Id",
                          type: "input",
                          error: form2Errors?.["logisticsBppId"] ? true : false,
                          helperText: form2Errors?.["logisticsBppId"] || "",
                          required: true,
                        }}
                        state={form2Values}
                        stateHandler={setForm2Values}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
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
