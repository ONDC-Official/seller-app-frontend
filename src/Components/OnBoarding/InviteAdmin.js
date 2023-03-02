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

const InviteAdmin = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    email: "",
    mobile: "",
    name: "",
  });

  const sendInvite = () => {
    try {
      const url = `/api/v1/users/invite/admin`;
      const res = postCall(url, user);
      navigate("/application/user-listings");
    } catch (error) {
      cogoToast.error("Invitation sent");
    }
  };

  const checkDisabled = () => {
    if (user.email == "" || !isEmailValid(user.email)) return true;
    if (user.mobile == "" || !isPhoneNoValid(user.mobile)) return true;
    if (user.name.trim() == "") return true;

    return false;
  };

  const renderHeading = () => {
    if (step == 1) return "Details of Admin";
  };

  const renderUserFields = () => {
    return userFields.map((item) => (
      <RenderInput item={item} state={user} stateHandler={setUser} />
    ));
  };

  const renderSteps = () => {
    if (step == 1) return renderUserFields();
  };

  const handleBack = () => {
    navigate("/application/user-listings");
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
                onClick={sendInvite}
                disabled={checkDisabled()}
              >
                Invite
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteAdmin;
