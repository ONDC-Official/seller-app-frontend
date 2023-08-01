import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import RenderInput from "../../../utils/RenderInput";
import {
  deliveryFulfillmentFields,
  selfPickupFulfillmentFields,
  deliveryAndSelfPickupFulfillmentFields,
} from "./fields";

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
    return deliveryFulfillmentFields.map((field) => {
      return (
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
      );
    });
  };

  const renderSelfPickupForm = () => {
    return selfPickupFulfillmentFields.map((field) => {
      return (
        <RenderInput
          item={{
            ...field,
            error: errors?.[field?.id] ? true : false,
            helperText: errors?.[field.id] || "",
            args: { name: "selfPickupDetails" },
          }}
          state={fulfillmentDetails}
          stateHandler={setFulfillmentDetails}
          key={field?.id}
          handleChange={handleChange}
        />
      );
    });
  };

  const renderDeliveryAndSelfPickupFulfillmentFields = () => {
    return deliveryAndSelfPickupFulfillmentFields.map((field) => {
      return (
        <RenderInput
          item={{
            ...field,
            error: errors?.["deliveryAndSelfPickupDetails"][field?.id] ? true : false,
            helperText: errors?.["deliveryAndSelfPickupDetails"][field.id] || "",
            args: { name: "deliveryAndSelfPickupDetails" },
          }}
          state={fulfillmentDetails}
          stateHandler={setFulfillmentDetails}
          key={field?.id}
          handleChange={handleChange}
        />
      );
    });
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
        <FormControlLabel
          control={
            <Checkbox
              checked={supportedFulfillments.deliveryAndSelfPickup}
              onChange={handleCheckboxChange}
              value="deliveryAndSelfPickup"
            />
          }
          label="Delivery and Self Pickup"
        />
        {supportedFulfillments.deliveryAndSelfPickup && renderDeliveryAndSelfPickupFulfillmentFields()}
      </div>
    </>
  );
};

export default Fulfillments;
