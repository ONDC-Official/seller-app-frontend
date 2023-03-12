import React from "react";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
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
import MyButton from "../Components/Shared/Button";
import axios from "axios";

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

const RenderInput = ({ item, state, stateHandler, previewOnly }) => {
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
          type={item.password ? "password" : "input"}
          className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
          required
          size="small"
          autoComplete="off"
          placeholder={item.placeholder}
          error={error}
          disabled={item?.isDisabled || previewOnly || false}
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
            aria-label={item.id}
            name={item.id}
            value={state[item.id]}
            onChange={(e) =>
              stateHandler({ ...state, [item.id]: e.target.value })
            }
          >
            <div className="flex flex-row">
              {item.options.map((radioItem, i) => (
                <FormControlLabel
                  disabled={item?.isDisabled || previewOnly || false}
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
                  disabled={item?.isDisabled || previewOnly || false}
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
            disabled={item?.isDisabled || previewOnly || false}
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
            disabled={item?.isDisabled || previewOnly || false}
            multiple
            filterSelectedOptions
            size="small"
            options={item.options}
            getOptionLabel={(option) => {
              if (previewOnly) return option;
              return option.key;
            }}
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
      const url = `/api/v1/upload/${item?.file_type}`;
      const file_type = file.type.split("/")[1];
      const data = {
        fileName: file.name.replace(`\.${file_type}`, ""),
        fileType: file_type,
      };
      const res = await postCall(url, data);
      return res;
    };

    const renderUploadedUrls = () => {
      if (state?.uploaded_urls) {
        return state?.uploaded_urls?.map((url) => {
          return (
            <img src={url} height={50} width={50} style={{ margin: "10px" }} />
          );
        });
      }
    };

    if (previewOnly) {
      if (typeof state[item.id] == "string") {
        return (
          <div
            style={{ height: 100, width: 100, marginBottom: 20, marginTop: 10 }}
          >
            <img className="ml-1 h-full w-full" src={state[item.id]} />
          </div>
        );
      } else {
        return (
          <div
            style={{ height: 100, width: 100, marginBottom: 40, marginTop: 10 }}
            className="flex"
          >
            {state[item.id].map((img_url) => (
              <img className="ml-1 h-full w-full" key={img_url} src={img_url} />
            ))}
          </div>
        );
      }
    }

    return (
      <div className="py-1 flex flex-col">
        <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
          {item.title}
          {item.required && <span className="text-[#FF0000]"> *</span>}
        </label>
        <div style={{ display: "flex" }}>{renderUploadedUrls()}</div>
        <label htmlFor="contained-button-file">
          <input
            id="contained-button-file"
            style={{ opacity: "none", marginBottom: 10 }}
            accept="image/*"
            type="file"
            key={item?.id}
            onChange={(e) => {
              const token = Cookies.get("token");
              const file = e.target.files[0];

              const formData = new FormData();
              formData.append("file", file);

              getSignUrl(file).then((d) => {
                const url = d.urls;

                axios(url, {
                  method: "PUT",
                  data: file,
                  headers: {
                    ...(token && { "access-token": `Bearer ${token}` }),
                    "Content-Type": "multipart/form-data",
                  },
                })
                  .then((response) => {
                    if (item.multiple) {
                      stateHandler((prevState) => {
                        const newState = {
                          ...prevState,
                          [item.id]: [...prevState[item.id], d.path],
                          uploaded_urls: [],
                        };
                        return newState;
                      });
                    } else {
                      stateHandler({
                        ...state,
                        [item.id]: d.path,
                        uploaded_urls: [],
                      });
                    }
                    response.json();
                  })
                  .then((json) => {});
              });
            }}
          />
          {item.multiple &&
            state[item.id].map((name) => {
              return (
                <div className="flex">
                  <Button
                    size="small"
                    className="w-10 mr-2 !text-black"
                    onClick={(e) => {
                      e.stopPropagation();
                      stateHandler((prevState) => {
                        const newState = {
                          ...prevState,
                          [item.id]: prevState[item.id].filter(
                            (ele) => ele != name
                          ),
                        };
                        return newState;
                      });
                    }}
                  >
                    <DeleteIcon sx={{ fontSize: 20 }} />
                  </Button>
                  <p className="text-sm mt-1 ml-2">{name}</p>
                </div>
              );
            })}
        </label>
      </div>
    );
  }
};

export default RenderInput;
