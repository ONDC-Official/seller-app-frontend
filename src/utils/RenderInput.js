import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
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
    if (state["email"] != "" && !isEmailValid(state["email"])) {
      error = true;
      error_text = "Please enter a valid email address";
    }
  } else if (item.id == "mobile_number") {
    if (!isPhoneNoValid(state["mobile_number"])) {
      error = true;
      error_text = "Please enter a valid mobile number";
    }
  }

  if (item.type == "input") {
    return (
      <div className="py-1 flex flex-col">
        <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
          {item.title}
          {item.required && <span className="text-[#FF0000]"> *</span>}
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
  } else if (item.type == "radio") {
    return (
      <div className="py-1 flex flex-col">
        <FormControl component="fieldset">
          <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
            {item.title}
            {item.required && <span className="text-[#FF0000]"> *</span>}
          </label>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={state[item.id]}
            onChange={(e) =>
              stateHandler({ ...state, [item.id]: e.target.value })
            }
          >
            <div className="flex flex-row">
              {item.options.map((radioItem, i) => (
                <FormControlLabel
                  key={i}
                  value={radioItem.value}
                  control={<Radio size="small" />}
                  label={
                    <div className="text-sm font-medium text-[#606161]">
                      {radioItem.key}
                    </div>
                  }
                />
              ))}
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    );
  } else if (item.type == "checkbox") {
    const onChange = (e) => {
      const val = e.target.name;
      const itemIndex = state[item.id].indexOf(val);
      if (itemIndex == -1) {
        stateHandler((prevState) => {
          const newState = {
            ...prevState,
            [item.id]: [...prevState[item.id], val],
          };
          return newState;
        });
      } else {
        stateHandler((prevState) => {
          const newState = {
            ...prevState,
            [item.id]: prevState[item.id].filter((ele) => ele != val),
          };
          return newState;
        });
      }
    };
    return (
      <div className="py-1 flex flex-col">
        <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
          {item.title}
          {item.required && <span className="text-[#FF0000]"> *</span>}
        </label>
        <FormGroup row>
          {item.options.map((checkboxItem) => (
            <FormControlLabel
              control={
                <Checkbox
                  key={checkboxItem.key}
                  onChange={onChange}
                  name={checkboxItem.value}
                  size="small"
                />
              }
              label={
                <div
                  className="text-sm font-medium text-[#606161]"
                  key={checkboxItem.key}
                >
                  {checkboxItem.key}
                </div>
              }
            />
          ))}
        </FormGroup>
      </div>
    );
  } else if (item.type == "select") {
    return (
      <div className="py-1 flex flex-col">
        <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
          {item.title}
          {item.required && <span className="text-[#FF0000]"> *</span>}
        </label>
        <FormControl>
          <Select
            size="small"
            placeholder={item.placeholder}
            value={state[item.id]}
            onChange={(e) =>
              stateHandler({ ...state, [item.id]: e.target.value })
            }
          >
            <MenuItem value="none" disabled>
              <p className="text-[#606161]">None</p>
            </MenuItem>
            {item.options.map((selectItem, i) => (
              <MenuItem value={selectItem.value} key={i}>
                {selectItem.key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  } else if (item.type == "multi-select") {
    const handleChangeMultiple = (event, idx, value) => {
      let val = idx.props.value;

      const itemIndex = state[item.id].indexOf(val);

      if (itemIndex == -1) {
        stateHandler((prevState) => {
          const newState = {
            ...prevState,
            [item.id]: [...prevState[item.id], val],
          };
          return newState;
        });
      } else {
        stateHandler((prevState) => {
          const newState = {
            ...prevState,
            [item.id]: prevState[item.id].filter((ele) => ele != val),
          };
          return newState;
        });
      }
    };

    return (
      <div className="py-1 flex flex-col">
        <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
          {item.title}
          {item.required && <span className="text-[#FF0000]"> *</span>}
        </label>
        <FormControl>
          <Select
            multiple
            size="small"
            placeholder={item.placeholder}
            value={state[item.id]}
            onChange={handleChangeMultiple}
          >
            <MenuItem value="none" disabled>
              <p className="text-[#606161]">None</p>
            </MenuItem>
            {item.options.map((selectItem, i) => (
              <MenuItem key={i} value={selectItem.value}>
                {selectItem.key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
          <Button
            size="small"
            variant="contained"
            component="span"
            sx={{ background: "E0E0E0" }}
          >
            Upload
          </Button>
        </label>
      </div>
    );
  }
};

export default RenderInput;
