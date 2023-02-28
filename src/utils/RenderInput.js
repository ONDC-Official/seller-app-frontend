import React from "react";
import { styled } from "@mui/material/styles";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { isEmailValid, isPhoneNoValid } from "./validations";
import { getCall, postCall } from "../Api/axios";
import Cookies from "js-cookie";

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

  if (item.email) {
    if (state[item.id] != "" && !isEmailValid(state[item.id])) {
      error = true;
      error_text = "Please enter a valid email address";
    }
  } else if (item.mobile) {
    if (!isPhoneNoValid(state[item.id])) {
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
    return (
      <div className="py-1 flex flex-col">
        <label className="text-sm py-2 ml-1 mb-1 font-medium text-left text-[#606161] inline-block">
          {item.title}
          {item.required && <span className="text-[#FF0000]"> *</span>}
        </label>
        <FormControl>
          <Autocomplete
            hiddenLabel="true"
            multiple
            size="small"
            options={item.options}
            getOptionLabel={(option) => option.key}
            value={state[item.id]}
            onChange={(event, newValue) => {
              stateHandler((prevState) => {
                const newState = {
                  ...prevState,
                  [item.id]: newValue,
                };
                return newState;
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={item.placeholder}
                variant="outlined"
              />
            )}
          />
        </FormControl>
      </div>
    );
  } else if (item.type == "upload") {
    const getSignUrl = async (file) => {
      const url = `/api/v1/upload/aadhar`;
      const data = {
        fileName: file.fileName,
        fileType: file.type.split("/")[1],
      };
      const res = await postCall(url, data);
      return res;
    };
    const uploadFile = async (e) => {
      const token = Cookies.get("token");
      const file = e.target.files[0];

      const formData = new FormData();
      formData.append("file", file);

      getSignUrl(file).then((d) => {
        const url = d.urls;
        stateHandler({ ...state, [item.id]: d.path });

        fetch(url, {
          method: "PUT",
          body: formData,
          headers: { ...(token && { "access-token": `Bearer ${token}` }) },
        })
          .then((response) => {
            console.log(item.id, state);
            response.json();
          })
          .then((json) => {});
      });
    };

    return (
      <div className="py-1 flex flex-col">
        <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
          {item.title}
          {item.required && <span className="text-[#FF0000]"> *</span>}
        </label>
        <label htmlFor="contained-button-file">
          {/* <Button
            size="small"
            variant="contained"
            component="span"
            sx={{ background: "E0E0E0" }}
            onClick={(e) => console.log(e.target.files)}
          > */}
          <input
            id="contained-button-file"
            style={{ opacity: "none" }}
            accept="image/*"
            type="file"
            onChange={(e) => {
              const token = Cookies.get("token");
              const file = e.target.files[0];

              const formData = new FormData();
              formData.append("file", file);

              getSignUrl(file).then((d) => {
                const url = d.urls;

                fetch(url, {
                  method: "PUT",
                  body: formData,
                  headers: {
                    ...(token && { "access-token": `Bearer ${token}` }),
                  },
                })
                  .then((response) => {
                    stateHandler({ ...state, [item.id]: d.path });
                    console.log(item, state);
                    response.json();
                  })
                  .then((json) => {});
              });
            }}
          />
          {/* Upload */}
          {/* </Button> */}
        </label>
      </div>
    );
  }
};

export default RenderInput;
