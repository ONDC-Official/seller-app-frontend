import dayjs from "dayjs";
import moment from "moment";
import StoreTimings from "./StoreTimings";
import MyButton from "../../Shared/Button";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";

const days = [
  { label: "Monday", value: 1 },
  { label: "Tuesday", value: 2 },
  { label: "Wednesday", value: 3 },
  { label: "Thursday", value: 4 },
  { label: "Friday", value: 5 },
  { label: "Saturday", value: 6 },
  { label: "Sunday", value: 7 },
];

const StoreTimingsRenderer = (props) => {
  const {
    errors,
    storeStatus,
    storeTimings,
    setStoreTimings,
    temporaryClosedTimings,
    setTemporaryClosedTimings,
    temporaryClosedDays,
    setTemporaryClosedDays,
  } = props;

  const [toDays, setToDays] = useState(days);

  useEffect(() => {
    if (temporaryClosedDays?.from) {
      let to_days = [...days];
      to_days = days.filter((dayMap) => dayMap.value >= temporaryClosedDays.from);
      setToDays(to_days);
    }
  }, [temporaryClosedDays?.from]);

  const handleDayChange = (event, key) => {
    temporaryClosedDays[key] = event.target.value;
    setTemporaryClosedDays({ ...temporaryClosedDays });
  };

  const renderDaysDD = (key) => {
    let days_list = key === "from" ? days : toDays;
    return (
      <div style={{ marginLeft: "10px" }}>
        <Select
          id={key}
          value={temporaryClosedDays[key]}
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
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "10px", marginTop: "7px" }}>
            Days: <span style={{ color: "red" }}>*</span>
          </div>
          {renderDaysDD("from")}
          <div style={{ marginLeft: "10px", marginTop: "7px" }}>To</div>
          {renderDaysDD("to")}
        </div>
      </div>
    );
  };

  const handleStoreTiming = (data, index) => {
    storeTimings[index] = data;
    setStoreTimings([...storeTimings]);
  };

  const handleAddMoreTimings = () => {
    storeTimings.push({
      daysRange: { from: 1, to: 5 },
      timings: [{ from: "10:00", to: "12:00" }],
    });
    setStoreTimings([...storeTimings]);
  };

  const handleRemoveDaysAndTimings = (i) => {
    storeTimings.splice(i, 1);
    setStoreTimings([...storeTimings]);
  };
  const renderEnabledTimings = () => {
    return (
      <>
        {storeTimings?.map((storeTiming, index) => (
          <StoreTimings
            storeTiming={storeTiming}
            setStoreTiming={(data) => handleStoreTiming(data, index)}
            handleRemoveDaysAndTimings={() => handleRemoveDaysAndTimings(index)}
          />
        ))}
        <div style={{ marginTop: "7px", marginBottom: "10px" }}>
          <MyButton
            variant="outlined"
            type="button"
            title="Add more days & timings"
            className="text-black"
            onClick={handleAddMoreTimings}
          />
        </div>
      </>
    );
  };

  const handleTimeChange = (val, key) => {
    const date = moment(new Date(val)).format("HH:mm").toString();
    setTemporaryClosedTimings({ ...temporaryClosedTimings, [key]: date });
  };

  const getTime = (time) => {
    return dayjs(moment(time, "HH:mm"));
  };

  const renderTimePicker = (key) => {
    return (
      <>
        <div className="mr-4 my-4">
          <TimePicker
            sx={{ minWidth: 120 }}
            clearable
            ampm={false}
            label={key}
            format={"HH:mm"}
            value={getTime(temporaryClosedTimings[key])}
            onChange={(val) => handleTimeChange(val, key)}
          />
        </div>
      </>
    );
  };

  const renderTemporaryClosedTimings = () => {
    return (
      <>
        {renderDaysDDs()}
        <div style={{ display: "flex" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {renderTimePicker("from")}
            {renderTimePicker("to")}
          </LocalizationProvider>
        </div>
        <p style={{ marginBottom: 20, marginTop: -10, marginLeft: 12, color: "rgb(211, 47, 47)", fontSize: "0.75rem" }}>
          {errors?.temporaryClosedTimings}
        </p>
      </>
    );
  };

  const renderStoreTimings = () => {
    if (storeStatus === "enabled") {
      return renderEnabledTimings();
    } else if (storeStatus === "closed") {
      return renderTemporaryClosedTimings();
    } else {
      return null;
    }
  };

  return <>{renderStoreTimings()}</>;
};

export default StoreTimingsRenderer;
