import { TextField, Select, MenuItem } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
import dayjs from "dayjs";
import MyButton from "../../Shared/Button";
import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const days = [
  { label: "Monday", value: 1 },
  { label: "Tuesday", value: 2 },
  { label: "Wednesday", value: 3 },
  { label: "Thursday", value: 4 },
  { label: "Friday", value: 5 },
  { label: "Saturday", value: 6 },
  { label: "Sunday", value: 7 },
];

const StoreTimings = ({ storeTiming, setStoreTiming, handleRemoveDaysAndTimings }) => {
  /**
   * storeTiming looks like:
   * {
   *   daysRange: {from: 1, to: 4},
   *   timings: [{from: 10:00, to: 12:00}, {from: 4:00, to: 6:00}]
   * }
   *
   */

  const [toDays, setToDays] = useState(days);

  useEffect(() => {
    if (storeTiming.daysRange.from) {
      let to_days = [...days];
      to_days = days.filter(
        (dayMap) => dayMap.value >= storeTiming.daysRange.from
      );
      setToDays(to_days);
    }
  }, [storeTiming.daysRange.from]);

  const handleDayChange = (event, key) => {
    storeTiming["daysRange"][key] = event.target.value;
    setStoreTiming({ ...storeTiming });
  };

  const renderDaysDD = (key) => {
    let days_list = key === "from" ? days : toDays;
    return (
      <div style={{ marginLeft: "10px" }}>
        <Select
          id={key}
          value={storeTiming.daysRange[key]}
          label={key + " day"}
          size="small"
          onChange={(event) => handleDayChange(event, key)}
          sx={{ minWidth: 120 }}
          variant="outlined"
        >
          {days_list.map((day) => (
            <MenuItem value={day.value}>{day.label}</MenuItem>
          ))}
        </Select>
      </div>
    );
  };

  const renderDaysDDs = () => {
    return (
      <div style={{ display: "flex" , justifyContent: "space-between"}}>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "10px", marginTop: "7px" }}>
            Days: <span style={{ color: "red" }}>*</span>
          </div>
          {renderDaysDD("from")}
          <div style={{ marginLeft: "10px", marginTop: "7px" }}>To</div>
          {renderDaysDD("to")}
        </div>
        <div style={{ marginRight: "5px" }}>
                  <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={() => handleRemoveDaysAndTimings()}
                  >
                    <img
                      alt="Remove"
                      src="https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        marginTop: "7px",
                        width: "20px",
                      }}
                    />
                  </button>
                </div>
      </div>
    );
  };

  const handleTimeChange = (val, index, key) => {
    const date = moment(new Date(val)).format("HH:mm").toString();
    storeTiming["timings"][index][key] = date;
    setStoreTiming({ ...storeTiming });
  };

  const getTime = (time) => {
    return dayjs(moment(time, "HH:mm"));
  };

  const renderTimePicker = (index, key) => {
    return (
      <div style={{ marginLeft: "10px" }}>
        <TimePicker
          sx={{ minWidth: 120 }}
          clearable
          ampm={false}
          label={key}
          format={"HH:mm"}
          value={getTime(storeTiming.timings[index][key])}
          onChange={(val) => handleTimeChange(val, index, key)}
        />
      </div>
    );
  };

  const handleAddMoreTimings = () => {
    storeTiming["timings"].push({ from: "", to: "" });
    setStoreTiming({ ...storeTiming });
  };

  const handleRemoveTiming = (i) => {
    storeTiming["timings"].splice(i, 1);
    setStoreTiming({ ...storeTiming });
  };

  const renderTimings = () => {
    return (
      <div>
        <div
          style={{ marginLeft: "10px", marginTop: "7px", marginBottom: "10px" }}
        >
          Timings: <span style={{ color: "red" }}>*</span>
        </div>
        {storeTiming.timings.map((timing, index) => {
          return (
            <div style={{ marginBottom: "7px", display: "flex" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {renderTimePicker(index, "from")}
                {renderTimePicker(index, "to")}
                <div style={{ margin: "10px" }}>
                  <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={() => handleRemoveTiming(index)}
                  >
                    <img
                      alt="Remove"
                      src="https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        marginTop: "7px",
                        width: "17px",
                      }}
                    />
                  </button>
                </div>
              </LocalizationProvider>
            </div>
          );
        })}
        <div
          style={{ marginLeft: "10px", marginTop: "7px", marginBottom: "10px" }}
        >
          <MyButton
            variant="outlined"
            type="button"
            title="Add more timings"
            className="text-black"
            onClick={handleAddMoreTimings}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        border: "1px solid #dfd7d7",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      {renderDaysDDs()}
      {renderTimings()}
    </div>
  );
};

export default StoreTimings;
