import React, { useState } from "react";
import { Button } from "@mui/material";
import RenderInput from "../../../utils/RenderInput";
import { isEmailValid, isPhoneNoValid } from "../../../utils/validations";

const credentialFields = [
  {
    id: "email",
    title: "Email",
    placeholder: "Enter your email address",
    type: "input",
    required: true,
  },
  {
    id: "mobile_number",
    title: "Mobile Number",
    placeholder: "Enter your mobile number",
    type: "input",
    required: true,
  },
  {
    id: "provider_admin_name",
    title: "Provider admin name",
    placeholder: "Enter provider admin name",
    type: "input",
    required: true,
  },
];

const kycDetailFields = [
  {
    id: "provider_name",
    title: "Provider details",
    placeholder: "Enter provider details",
    type: "input",
    required: true,
  },
  {
    id: "registered_address",
    title: "Registered address",
    placeholder: "Enter your registered address",
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
    title: "Mobile",
    placeholder: "Enter your mobile number",
    type: "input",
    required: true,
  },
  {
    id: "pan_no",
    title: "PAN",
    placeholder: "Enter your PAN",
    type: "input",
    required: true,
  },
  {
    id: "gstn_no",
    title: "GSTN",
    placeholder: "Enter your GSTN",
    type: "input",
    required: true,
  },
  {
    id: "fssai_no",
    title: "FSSAI Number",
    placeholder: "Enter your FSSAI number",
    type: "input",
    required: true,
  },
];

const kycDocumentFields = [
  {
    id: "address_proof",
    title: "Address proof",
    type: "upload",
    required: true,
  },
  {
    id: "id_proof",
    title: "Id proof",
    type: "upload",
    required: true,
  },
  {
    id: "pan_document",
    title: "PAN Card Image",
    type: "upload",
    required: true,
  },
  {
    id: "gst_certificate",
    title: "GST certificate",
    type: "upload",
    required: true,
  },
];

const bankDetailFields = [
  {
    id: "acc_holder_name",
    title: "Account holder name",
    placeholder: "Enter account holder name",
    type: "input",
    required: true,
  },
  {
    id: "acc_number",
    title: "Account Number",
    placeholder: "Enter account number",
    type: "input",
    required: true,
  },
  {
    id: "bank_name",
    title: "Bank name",
    placeholder: "Enter bank name",
    type: "input",
    required: true,
  },
  {
    id: "branch_name",
    title: "branch name",
    placeholder: "Enter branch name",
    type: "input",
    required: true,
  },
  {
    id: "ifsc_code",
    title: "IFSC code",
    placeholder: "Enter IFSC code",
    type: "input",
    required: true,
  },
  {
    id: "city",
    title: "City",
    placeholder: "Enter city",
    type: "input",
    required: true,
  },
  {
    id: "cancelled_check",
    title: "Cancelled check",
    type: "upload",
    required: true,
  },
];

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [credentials, setCredentials] = useState({
    email: "",
    mobile_number: "",
    provider_admin_name: "",
  });

  const [kycDetails, setKycDetails] = useState({
    provider_name: "",
    registered_address: "",
    email: "",
    mobile_number: "",
    pan_no: "",
    GSTN: "",
    FSSAI_no: "",
  });

  const [kycMedia, setKycMedia] = useState({
    address_proof: "",
    id_proof: "",
    pan: "",
    GST: "",
  });

  const [bankDetails, setBankDetails] = useState({
    acc_holder_name: "",
    acc_number: "",
    bank_name: "",
    banch: "",
    ifsc_code: "",
    city: "",
    cancelled_check: "",
  });

  const handleContinue = () => {
    setStep(step + 1);
  };

  const checkDisabled = () => {
    if (credentials.email == "" || !isEmailValid(credentials.email))
      return true;
    if (
      credentials.password == "" ||
      !isPhoneNoValid(credentials.mobile_number)
    )
      return true;
    if (credentials.provider_admin_name.trim() == "") return true;

    return false;
  };

  const renderHeading = () => {
    if (step == 1) return "Credentials purpose details of provider";
    if (step == 2) return "KYC Details";
    if (step == 3) return "KYC Documents";
    if (step == 4) return "Bank Details";
  };

  const renderCredentialFields = () => {
    return credentialFields.map((item) => (
      <RenderInput
        item={item}
        state={credentials}
        stateHandler={setCredentials}
      />
    ));
  };

  const renderKycDetailFields = () => {
    return kycDetailFields.map((item) => (
      <RenderInput
        item={item}
        state={kycDetails}
        stateHandler={setKycDetails}
      />
    ));
  };

  const renderKycDocumentFields = () => {
    return kycDocumentFields.map((item) => (
      <RenderInput item={item} state={kycMedia} stateHandler={setKycMedia} />
    ));
  };

  const renderBankDetails = () => {
    return bankDetailFields.map((item) => (
      <RenderInput
        item={item}
        state={bankDetails}
        stateHandler={setBankDetails}
      />
    ));
  };

  const renderSteps = () => {
    if (step == 1) return renderCredentialFields();
    if (step == 2) return renderKycDetailFields();
    if (step == 3) return renderKycDocumentFields();
    if (step == 4) return renderBankDetails();
  };

  return (
    <div className="mx-auto !p-5 h-screen min-vh-100 overflow-auto bg-[#f0f0f0]">
      <div className="h-full flex fex-row items-center justify-center">
        <div
          className="flex w-full md:w-2/4 bg-white px-4 py-4 rounded-md shadow-xl h-max"
          style={{ minHeight: "75%" }}
        >
          <div className="m-auto w-10/12 md:w-3/4 h-max">
            <p className="text-2xl font-semibold mb-4 text-center">
              {renderHeading()}
            </p>
            <div>{renderSteps()}</div>
            <div className="flex mt-6">
              <Button
                size="small"
                style={{ marginRight: 10 }}
                variant="text"
                onClick={() => setStep(step - 1)}
                disabled={step == 1}
              >
                Back
              </Button>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={() => {
                  step == 4 ? alert("finished") : handleContinue();
                }}
                //  disabled={checkDisabled()}
              >
                {step == 4 ? "Finish" : "Continue"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
