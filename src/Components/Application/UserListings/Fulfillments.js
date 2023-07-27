import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import RenderInput from "../../../utils/RenderInput";

const deliveryFulfillmentFields = [
  {
    id: "deliveryEmail",
    title: "Delivery Email",
    placeholder: "Enter Delivery Email",
    type: "input",
    required: true,
  },
  {
    id: "deliveryMobile",
    title: "Delivery Contact Number",
    placeholder: "Enter Delivery Contact Number",
    type: "input",
    required: true,
  },
];

const selfPickupFulfillmentFields = [
  {
    id: "selfPickupEmail",
    title: "Self Pickup Email",
    placeholder: "Enter Self Pickup Email",
    type: "input",
    required: true,
  },
  {
    id: "selfPickupMobile",
    title: "Self Pickup Contact Number",
    placeholder: "Enter Self Pickup Contact Number",
    type: "input",
    required: true,
  },
];

const deliveryAndSelfPickupFulfillmentFields = [
  {
    id: "deliveryEmail",
    title: "Delivery Email",
    placeholder: "Enter Delivery Email",
    type: "input",
    required: true,
  },
  {
    id: "deliveryMobile",
    title: "Delivery Contact Number",
    placeholder: "Enter Delivery Contact Number",
    type: "input",
    required: true,
  },
  {
    id: "selfPickupEmail",
    title: "SelfPickup Email",
    placeholder: "Enter SelfPickup Email",
    type: "input",
    required: true,
  },
  {
    id: "selfPickupMobile",
    title: "SelfPickup Contact Number",
    placeholder: "Enter SelfPickup Contact Number",
    type: "input",
    required: true,
  },
];

const Fulfillments = (props) => {
  const { supportedFulfillments, setSupportedFulfillments, fulfillmentDetails, setFulfillmentDetails } = props;

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
            // error: errors?.[field?.id] ? true : false,
            // helperText: errors?.[field.id] || "",
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

  console.log(fulfillmentDetails);

  const renderSelfPickupForm = () => {
    return selfPickupFulfillmentFields.map((field) => {
      return (
        <RenderInput
          item={{
            ...field,
            // error: errors?.[field?.id] ? true : false,
            // helperText: errors?.[field.id] || "",
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
            // error: errors?.[field?.id] ? true : false,
            // helperText: errors?.[field.id] || "",
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
