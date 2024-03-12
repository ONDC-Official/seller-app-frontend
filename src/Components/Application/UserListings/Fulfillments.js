import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import RenderInput from "../../../utils/RenderInput";
import {
  deliveryFulfillmentFields,
  selfPickupFulfillmentFields,
} from "./fields";
import StoreTimings from "./StoreTimings";
import StoreTimingsRenderer from "./StoreTimingsRenderer";

const Fulfillments = (props) => {
  const { supportedFulfillments, setSupportedFulfillments, fulfillmentDetails, setFulfillmentDetails, errors } = props;

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSupportedFulfillments({
      ...supportedFulfillments,
      [value]: checked,
    });
  };

  const handleChange = (e, field, args) => {
    let value = e.target.value;

    if (fulfillmentDetails.hasOwnProperty(args.name)) {
      setFulfillmentDetails((prevDetails) => ({
        ...prevDetails,
        [args.name]: {
          ...prevDetails[args.name],
          [field.id]: value,
        },
      }));
    } else {
      setFulfillmentDetails((prevDetails) => ({
        ...prevDetails,
        [args.name]: {
          [field.id]: value,
        },
      }));
    }
  };

  const renderDeliveryForm = () => {
    return (
      <>
        {deliveryFulfillmentFields.map((field) => {
          return (
            <>
              <RenderInput
                item={{
                  ...field,
                  error: errors?.[field?.id] ? true : false,
                  helperText: errors?.[field.id] || "",
                  args: { name: "deliveryDetails" },
                }}
                state={fulfillmentDetails["deliveryDetails"]}
                stateHandler={setFulfillmentDetails}
                key={field?.id}
                handleChange={handleChange}
              />
            </>
          );
        })}
        <StoreTimingsRenderer
          errors={errors}
          storeStatus={"enabled"}
          storeTimings={fulfillmentDetails["deliveryDetails"]["storeTimings"]}
          setStoreTimings={(newTimings) => {
            setFulfillmentDetails((prevDetails) => ({
              ...prevDetails,
              deliveryDetails: {
                ...prevDetails.deliveryDetails,
                storeTimings: newTimings,
              },
            }));
          }}
        />
        <p style={{ marginTop: -5, marginLeft: 2, color: "rgb(211, 47, 47)", fontSize: "14px" }}>
          {errors?.deliveryStoreTimings}
        </p>
      </>
    );
  };

  const renderSelfPickupForm = () => {
    return (
      <>
        {selfPickupFulfillmentFields.map((field) => {
          return (
            <RenderInput
              item={{
                ...field,
                error: errors?.[field?.id] ? true : false,
                helperText: errors?.[field.id] || "",
                args: { name: "selfPickupDetails" },
              }}
              state={fulfillmentDetails["selfPickupDetails"]}
              stateHandler={setFulfillmentDetails}
              key={field?.id}
              handleChange={handleChange}
            />
          );
        })}
        <StoreTimingsRenderer
          errors={errors}
          storeStatus={"enabled"}
          storeTimings={fulfillmentDetails["selfPickupDetails"]["storeTimings"]}
          setStoreTimings={(newTimings) => {
            setFulfillmentDetails((prevDetails) => ({
              ...prevDetails,
              selfPickupDetails: {
                ...prevDetails.selfPickupDetails,
                storeTimings: newTimings,
              },
            }));
          }}
        />
        <p style={{ marginTop: -5, marginLeft: 2, color: "rgb(211, 47, 47)", fontSize: "14px" }}>
          {errors?.selfPickupStoreTimings}
        </p>
      </>
    );
  };


  return (
    <>
      <p className="text-2xl font-semibold mb-4 mt-14">Supported Fulfillments</p>
      <div className="flex flex-col">
        <FormControlLabel
          control={
            <Checkbox checked={supportedFulfillments.delivery} onChange={handleCheckboxChange} value="delivery" />
          }
          label="Delivery"
        />
        {supportedFulfillments.delivery && renderDeliveryForm()}
        <FormControlLabel
          control={
            <Checkbox checked={supportedFulfillments.selfPickup} onChange={handleCheckboxChange} value="selfPickup" />
          }
          label="Self Pickup"
        />
        {supportedFulfillments.selfPickup && renderSelfPickupForm()}
      </div>
    </>
  );
};

export default Fulfillments;
