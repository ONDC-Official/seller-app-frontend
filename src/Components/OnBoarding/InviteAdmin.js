import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import RenderInput from "../../utils/RenderInput";
import { isEmailValid, isPhoneNoValid } from "../../utils/validations";
import { postCall } from "../../Api/axios";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";
import useForm from '../../hooks/useForm'

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
    maxLength: 10,
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
  const initialValues = {
    email: "",
    mobile: "",
    name: "",
  };
  const { formValues, setFormValues, errors, setErrors } = useForm({ ...initialValues })
  const [formSubmitted, setFormSubmited] = useState(false)

  const validate = () => {
    const formErrors = {}
    formErrors.email = !isEmailValid(formValues.email) ? 'Please enter a valid email address' : ''
    formErrors.mobile = !isPhoneNoValid(formValues.mobile) ? 'Please enter a valid mobile number' : ''
    formErrors.name = formValues.name.trim() === '' ? 'Name is required' : ''
    setErrors({
      ...formErrors
    })
    return !Object.values(formErrors).some(val => val !== '')
  }

  const sendInvite = () => {
    try {
      const url = `/api/v1/users/invite/admin`;
      const res = postCall(url, formValues);
      navigate("/application/user-listings");
    } catch (error) {
      cogoToast.error("Invitation sent");
    }
  };

  const checkDisabled = () => {
    return formValues.email === '' || formValues.mobile === '' || formValues.name.trim() === ''
  };

  const renderHeading = () => {
    if (step == 1) return "Details of Admin";
  };

  const renderUserFields = () => {
    return userFields.map((item) => (
      <RenderInput
        item={{ ...item, error: errors?.[item.id] ? true : false, helperText: errors?.[item.id] || '' }}
        state={formValues}
        stateHandler={setFormValues}
      />
    ));
  };

  const renderSteps = () => {
    if (step == 1) return renderUserFields();
  };

  const handleBack = () => {
    navigate("/application/user-listings?view=admin");
  };

  const handleSubmit = () => {
    setFormSubmited(true)
    if (validate()) {
      sendInvite()
    }
  }

  useEffect(() => {
    if (!formSubmitted) return
    validate()
  }, [formValues])

  return (
    <div className="mx-auto !p-5 h-screen min-vh-100 overflow-auto bg-[#f0f0f0]">
      <div className="h-full flex fex-row items-center justify-center">
        <div
          className="flex w-full md:w-2/4 bg-white px-4 py-4 rounded-md shadow-xl h-max"
          style={{ minHeight: "75%" }}
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
                  style={{ marginRight: 10 }}
                  variant="text"
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  type="button"
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  disabled={checkDisabled()}
                >
                  Invite
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteAdmin;
