import React, { useState } from "react";
import { Button } from "@mui/material";
import RenderInput from "../../utils/RenderInput";
import { isEmailValid, isPhoneNoValid } from "../../utils/validations";
import { postCall } from "../../Api/axios";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";

const userFields = [
  {
    id: "email",
    title: "Email",
    placeholder: "Enter your email address",
    type: "input",
    email: true,
    required: true,
  },
  {
    id: "mobile",
    title: "Mobile Number",
    placeholder: "Enter your mobile number",
    type: "input",
    mobile: true,
    required: true,
  },
  {
    id: "name",
    title: "Name",
    placeholder: "Enter provider first name",
    type: "input",
    required: true,
  },
];

const kycDetailFields = [
  {
    id: "name",
    title: "Provider Name",
    placeholder: "Enter provider name",
    type: "input",
    required: true,
  },
  {
    id: "address",
    title: "Registered address",
    placeholder: "Enter your registered address",
    type: "input",
    required: true,
  },
  {
    id: "contactEmail",
    title: "Email",
    placeholder: "Enter your email address",
    type: "input",
    email: true,
    required: true,
  },
  {
    id: "contactMobile",
    title: "Mobile",
    placeholder: "Enter your mobile number",
    type: "input",
    mobile: true,
    required: true,
  },
  {
    id: "PAN",
    title: "PAN",
    placeholder: "Enter your PAN",
    type: "input",
    required: true,
  },
  {
    id: "GSTN",
    title: "GSTN",
    placeholder: "Enter your GSTN",
    type: "input",
    required: true,
  },
  {
    id: "FSSAI",
    title: "FSSAI Number",
    placeholder: "Enter your FSSAI number",
    type: "input",
    required: false,
  },
];

const kycDocumentFields = [
  {
    id: "address_proof",
    title: "Address proof",
    type: "upload",
    file_type: "address_proof",
    required: true,
  },
  {
    id: "id_proof",
    title: "Id proof",
    type: "upload",
    file_type: "id_proof",
    required: true,
  },
  {
    id: "PAN_proof",
    title: "PAN Card Image",
    type: "upload",
    file_type: "pan",
    required: true,
  },
  {
    id: "GST_proof",
    title: "GST certificate",
    type: "upload",
    file_type: "gst",
    required: true,
  },
];

const bankDetailFields = [
  {
    id: "accHolderName",
    title: "Account holder name",
    placeholder: "Enter account holder name",
    type: "input",
    required: true,
  },
  {
    id: "accNumber",
    title: "Account Number",
    placeholder: "Enter account number",
    type: "input",
    required: true,
  },
  {
    id: "bankName",
    title: "Bank name",
    placeholder: "Enter bank name",
    type: "input",
    required: true,
  },
  {
    id: "branchName",
    title: "branch name",
    placeholder: "Enter branch name",
    type: "input",
    required: true,
  },
  {
    id: "IFSC",
    title: "IFSC code",
    placeholder: "Enter IFSC code",
    type: "input",
    required: true,
  },
  {
    id: "cancelledCheque",
    title: "Cancelled cheque",
    type: "upload",
    file_type: "cancelled_cheque",
    required: true,
  },
];

const InviteProvider = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    email: "",
    mobile: "",
    name: "",
  });

  const [kycDetails, setKycDetails] = useState({
    name: "",
    address: "",
    contactEmail: "",
    contactMobile: "",
    PAN: "",
    GSTN: "",
    FSSAI: "",
  });

  const [kycMedia, setKycMedia] = useState({
    address_proof: "",
    id_proof: "",
    PAN_proof: "",
    GST_proof: "",
  });

  const [bankDetails, setBankDetails] = useState({
    accHolderName: "",
    accNumber: "",
    bankName: "",
    branchName: "",
    IFSC: "",
    cancelledCheque: "",
  });

  const handleContinue = () => {
    setStep(step + 1);
  };

  const sendInvite = async () => {
    try {
      const data = {
        user,
        providerDetails: {
          name: kycDetails.name,
          address: kycDetails.address,
          contactEmail: kycDetails.contactEmail,
          contactMobile: kycDetails.contactMobile,
          addressProof: kycMedia.address_proof,
          idProof: kycMedia.id_proof,
          bankDetails: {
            accHolderName: bankDetails.accHolderName,
            accNumber: bankDetails.accNumber,
            IFSC: bankDetails.IFSC,
            cancelledCheque: bankDetails.cancelledCheque,
            bankName: bankDetails.bankName,
            branchName: bankDetails.banchName,
          },
          PAN: { PAN: kycDetails.PAN, proof: kycMedia.PAN_proof },
          GSTN: { GSTN: kycDetails.GSTN, proof: kycMedia.GST_proof },
          FSSAI: kycDetails.FSSAI,
        },
      };
      const url = `/api/v1/organizations`;
      const res = await postCall(url, data);
      navigate("/application/user-listings");
      cogoToast.success("Invitation sent");
    } catch (error) {
      console.log("error.response", error.response);
      cogoToast.error(error.response.data.error);
    }
  };

  const checkDisabled = () => {
    if (user.email == "" || !isEmailValid(user.email)) return true;
    if (user.password == "" || !isPhoneNoValid(user.mobile_number)) return true;
    if (user.provider_admin_name.trim() == "") return true;

    return false;
  };

  const renderHeading = () => {
    if (step == 1) return "Details of Provider";
    if (step == 2) return "KYC Details";
    if (step == 3) return "KYC Documents";
    if (step == 4) return "Bank Details";
  };

  const renderUserFields = () => {
    return userFields.map((item) => (
      <RenderInput item={item} state={user} stateHandler={setUser} />
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
    if (step == 1) return renderUserFields();
    if (step == 2) return renderKycDetailFields();
    if (step == 3) return renderKycDocumentFields();
    if (step == 4) return renderBankDetails();
  };

  const handleBack = () => {
    if (step === 1) {
      navigate("/application/user-listings");
    } else {
      setStep(step - 1);
    }
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
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={() => {
                  step == 4 ? sendInvite() : handleContinue();
                }}
                //  disabled={checkDisabled()}
              >
                {step == 4 ? "Invite" : "Continue"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteProvider;
