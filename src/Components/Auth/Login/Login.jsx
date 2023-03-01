import React, { useEffect, useState } from "react";
import Button from "../../Shared/Button";
import AuthActionCard from "../AuthActionCard/AuthActionCard";
import { NavLink, useNavigate } from "react-router-dom";
import ErrorMessage from "../../Shared/ErrorMessage";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { AddCookie, getValueFromCookie } from "../../../utils/cookies";
import { postCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";

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

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [signInUsingEmailAndPasswordloading] = useState(false);
  const [inlineError, setInlineError] = useState({
    email_error: "",
    password_error: "",
  });

  // use this function to check the email
  function checkEmail() {
    if (!login.email) {
      setInlineError((inlineError) => ({
        ...inlineError,
        email_error: "email cannot be empty",
      }));
      return false;
    }
    return true;
  }

  function checkPassword() {
    if (!login.password) {
      setInlineError((inlineError) => ({
        ...inlineError,
        password_error: "password cannot be empty",
      }));
      return false;
    }

    return true;
  }

  async function handleLogin() {
    const url = "/api/v1/auth/login";
    try {
      const res = await postCall(url, login);
      handleRedirect(res.data.access_token, res.data.user);
    } catch (error) {
      console.log(error);
      cogoToast.error(error.response.data.error);
    }
  }

  function handleRedirect(token, user) {
    const { _id } = user;
    AddCookie("token", token);
    localStorage.setItem("user_id", _id);
    navigate("/application/inventory");
  }

  useEffect(() => {
    if (getValueFromCookie("token")) {
      navigate("/application/inventory");
    }
  }, []);

  const loginForm = (
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
            id={
              inlineError.email_error
                ? "outlined-error"
                : "demo-helper-text-aligned"
            }
            name="email"
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
            onChange={(event) => {
              setLogin({ ...login, email: event.target.value });
              setInlineError((inlineError) => ({
                ...inlineError,
                email_error: "",
              }));
            }}
            size="small"
            onBlur={checkEmail}
            error={inlineError.email_error ? true : false}
            // helperText={inlineError.email_error && inlineError.email_error}
            required
          />
        </div>
        {inlineError.email_error && (
          <ErrorMessage>{inlineError.email_error}</ErrorMessage>
        )}
        <div className="py-1">
          <label
            htmlFor="password"
            className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
          >
            Password
            <span className="text-[#FF0000]"> *</span>
          </label>
          <CssTextField
            id={
              inlineError.password_error
                ? "outlined-error"
                : "demo-helper-text-aligned"
            }
            name="password"
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent"
            onChange={(event) => {
              setLogin({ ...login, password: event.target.value });
              setInlineError((inlineError) => ({
                ...inlineError,
                password_error: "",
              }));
            }}
            size="small"
            onBlur={checkPassword}
            error={inlineError.password_error ? true : false}
            style={{ borderRadius: "10px" }}
            required
          />
        </div>
        {inlineError.password_error && (
          <ErrorMessage>{inlineError.password_error}</ErrorMessage>
        )}
        <div className="py-3 pt-6  text-center flex flex-row justify-center">
          <Button
            isloading={signInUsingEmailAndPasswordloading ? 1 : 0}
            disabled={signInUsingEmailAndPasswordloading}
            variant="contained"
            title="Login"
            type="submit"
            className="!w-40 !capitalize !py-2"
            onClick={handleLogin}
          />
        </div>
      </form>
    </div>
  );
  const navigation_link = (
    <div className="py-2 text-center">
      <NavLink to="/forgot-password" className="">
        <p className="text-xs text-[#346cc1]">Forgot password</p>
      </NavLink>
    </div>
  );
  return (
    <AuthActionCard action_form={loginForm} navigation_link={navigation_link} />
  );
}
