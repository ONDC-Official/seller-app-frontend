import React from "react";
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import { isEmailValid, isPhoneNoValid } from "./validations";

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

const RenderInput = ({ item, state, stateHandler }) => {
  let error = false;
  let error_text = "";

  if (item.id == "email") {
    if (!isEmailValid(state["email"])) {
      error = true;
      error_text = "Please enter a valid email address";
    }
  } else if (item.id == "mobile_number") {
    if (!isPhoneNoValid(state["mobile_number"])) {
      error = true;
      error_text = "Please enter a valid mobile address";
    }
  }

  if (item.type == "input") {
    return (
      <div className="py-1 flex flex-col">
        <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
          {item.title}
          <span className="text-[#FF0000]"> *</span>
        </label>
        <CssTextField
          className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
          required
          size="small"
          autoComplete="off"
          placeholder={item.placeholder}
          error={error}
          helperText={error && error_text}
          value={state[item.id]}
          onChange={(e) =>
            stateHandler({ ...state, [item.id]: e.target.value })
          }
        />
      </div>
    );
  } else if (item.type == "upload") {
    return (
      <div className="py-1 flex flex-col">
        <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
          {item.title}
          <span className="text-[#FF0000]"> *</span>
        </label>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
      </div>
    );
  }
};

export default RenderInput;
