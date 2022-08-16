import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Button from "../../Shared/Button";
import AuthActionCard from "../AuthActionCard/AuthActionCard";
import { NavLink, useNavigate } from "react-router-dom";
import { getErrorMessage } from "../../../Api/Utils/MapFirebaseError";
// import TextField from "@mui/material/TextField";
// import { styled } from '@mui/material/styles';
// import ErrorMessage from "../../Shared/ErrorMessage";


// const CssTextField = styled(TextField)({
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'black',
//     },
//     '&:hover fieldset': {
//       borderColor: '#1c75bc',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#1c75bc',
//     },
//   },
// });

export default function SignUp() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    'full_name': '',
    'email': '',
    'password': ''
  });
  const [signInUsingGoogleloading, setSignInUsingGoogleLoading] = useState(false);
  const [
    signInUsingEmailAndPasswordloading,
    setSignInUsingEmailAndPasswordLoading,
  ] = useState(false);
  const [inlineError, setInlineError] = useState({
    full_name_error: "",
    email_error: "",
    password_error: "",
  });
  // use this function to check the email
  function checkFullName() {
    if (!signUp.full_name) {
      setInlineError((inlineError) => ({
        ...inlineError,
        full_name_error: "full name cannot be empty",
      }));
      return false;
    }
    return true;
  }

  function checkEmail() {
    if (!signUp.email) {
      setInlineError((inlineError) => ({
        ...inlineError,
        email_error: "email cannot be empty",
      }));
      return false;
    }
    return true;
  }

  function checkPassword() {
    if (!signUp.password) {
      setInlineError((inlineError) => ({
        ...inlineError,
        password_error: "password cannot be empty",
      }));
      return false;
    }

    return true;
  }

  function handleLoginWithEmailAndPassword(e) {
    e.preventDefault();
    const allCheckPassed = [checkFullName(), checkEmail(), checkPassword()].every(Boolean);
    if (!allCheckPassed) {
      return;
    }
    setSignInUsingEmailAndPasswordLoading(true);
    signInWithEmailAndPassword(auth, signUp.full_name, signUp.email, signUp.password)
      .then((result) => {
        handleRedirect(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = getErrorMessage(errorCode);
        console.log(errorMessage)
      })
      .finally(() => setSignInUsingEmailAndPasswordLoading(false));
  }
  function handleLoginWithGoogle() {
    setSignInUsingGoogleLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        handleRedirect(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
    })
      .finally(() => setSignInUsingGoogleLoading(false));
  }
  function handleRedirect(user) {
    navigate("/");
  }
  const signUpForm = (
    <div className='m-auto w-10/12 md:w-3/4'>
      <form onSubmit={handleLoginWithEmailAndPassword}>
      {/* <div className="py-1">
          <label className='text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block'>
            Full Name 
            <span className='text-[#FF0000]'> *</span>
          </label>
          <CssTextField
            id={inlineError.full_name_error ? "outlined-error" : "demo-helper-text-aligned" }
            name="full_name"
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            className='w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black'
            onChange={(event) => {
              setSignUp({...signUp, full_name: event.target.value});
              setInlineError((inlineError) => ({
                ...inlineError,
                full_name_error: "",
              }));
            }}
            size="small"
            onBlur={checkFullName}
            error={inlineError.full_name_error ? true : false}
            // helperText={inlineError.email_error && inlineError.email_error}
            required
          />
        </div>
        {inlineError.full_name_error && (
          <ErrorMessage>{inlineError.full_name_error}</ErrorMessage>
        )}
        <div className="py-1">
          <label htmlFor="email" className='text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block'>
            Email 
            <span className='text-[#FF0000]'> *</span>
          </label>
          <CssTextField
            id={inlineError.email_error ? "outlined-error" : "demo-helper-text-aligned" }
            name="email"
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            className='w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black'
            onChange={(event) => {
              setSignUp({...signUp, email: event.target.value});
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
          <label htmlFor="password" className='text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block'>
            Password
            <span className='text-[#FF0000]'> *</span>  
          </label>
          <CssTextField
            id={inlineError.password_error ? "outlined-error" : "demo-helper-text-aligned" }
            name="password"
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            className='w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent'
            onChange={(event) => {
              setSignUp({...signUp, password: event.target.value});
              setInlineError((inlineError) => ({
                ...inlineError,
                password_error: "",
              }));
            }}
            size="small"
            onBlur={checkPassword}
            error={inlineError.password_error ? true : false}
            style={{borderRadius: '10px'}}
            required
          />
        </div>
        {inlineError.password_error && (
          <ErrorMessage>{inlineError.password_error}</ErrorMessage>
        )}
        <div className="py-3 pt-6 text-center flex flex-row justify-center">
          <Button
            isloading={signInUsingEmailAndPasswordloading ? 1 : 0}
            disabled={
              signInUsingGoogleloading || signInUsingEmailAndPasswordloading
            }
            variant='contained'
            title="Sign Up"
            type="submit"
            className='!w-40 !capitalize !py-2'
          />
        </div>
        <hr className="mx-4 border-[#DDDDDD] m-1.5" /> */}
        <div className="py-3 text-center flex flex-row justify-center">
          <Button
            isloading={signInUsingGoogleloading ? 1 : 0}
            disabled={
              signInUsingGoogleloading || signInUsingEmailAndPasswordloading
            }
            variant='contained'
            title="Login with google"
            onClick={handleLoginWithGoogle}
            className='!w-40 !capitalize !py-2 '
          />
        </div>
      </form>
    </div>
  );
  const navigation_link = (
    <div className="py-2 text-center">
      <p className='text-xs text-[#606161]'>Do not have an account</p>
      <NavLink to="/login" className=''>
        Sign In
      </NavLink>
    </div>
  );
  return (
    <AuthActionCard action_form={signUpForm} navigation_link={navigation_link} />
  );
}
