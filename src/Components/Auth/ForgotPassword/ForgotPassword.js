import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import AuthActionCard from "../AuthActionCard/AuthActionCard";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { isEmailValid } from "../../../utils/validations";
import { postCall } from "../../../Api/axios";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "#1c75bc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1c75bc",
    },
  },
});

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [captchaVal, setCaptchaVal] = useState('');
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    loadCaptchaEnginge(6)
  }, []);

  const checkDisabled = () => {
    if (email.trim() === '' || !isEmailValid(email) || captchaVal.trim() === '') return true;
    return false;
  };

  const forgotPassword = async () => {
    const url = `/api/v1/auth/forgotPassword`;
    try {
      await postCall(url, { email });
      setError(false);
      setMsg('OTP sent to your email')
      loadCaptchaEnginge(6)
    } catch (error) {
      setError(true);
      setMsg(error.response.data.error);
    }
  };

  const handleSubmit = async () => {
    if (validateCaptcha(captchaVal) === true) {
      await forgotPassword()
    } else {
      setError(true)
      setMsg('Captcha does not match');
    }
  };

  const forgot_password_form = (
    <div className="m-auto w-10/12 md:w-3/4">
      <form>
        <div className="py-1">
          <label
            htmlFor="email"
            className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
          >
            Email
            <span className="text-[#FF0000]"> *</span>
          </label>
          <CssTextField
            required
            size="small"
            name="email"
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <br />
        <LoadCanvasTemplate />
        <div className="py-1">
          <CssTextField
            required
            size="small"
            name="captchaVal"
            type="text"
            placeholder="Enter Captcha Value"
            autoComplete="off"
            className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
            onChange={(event) => setCaptchaVal(event.target.value)}
          />
        </div>
        {msg && <p className={`text-xs ${error ? 'text-red-600' : 'text-green-600'} mt-2`}>{msg}</p>}
        <br />
        <Button
          variant="contained"
          primary
          onClick={handleSubmit}
          disabled={checkDisabled()}
        >
          Get OTP
        </Button>
      </form>
    </div>
  );
  const navigation_link = (
    <div className="py-2 text-center">
      <p className="text-xs text-[#606161]">Already have an account?</p>
      <NavLink to="/login" className="">
        <p className="text-xs text-[#3d629ad2] hover:text-[#0066ffd2]">Login</p>
      </NavLink>
    </div>
  );
  return (
    <AuthActionCard
      action_form={forgot_password_form}
      navigation_link={navigation_link}
    />
  );
};

export default ForgotPassword;
