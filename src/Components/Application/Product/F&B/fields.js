export const customizationFields = [
  {
    id: "name",
    title: "Name",
    placeholder: "Enter Customization Name",
    type: "input",
  },
  {
    id: "price",
    title: "Price",
    placeholder: "Enter Customization Price",
    type: "number",
  },
  {
    id: "UOM",
    title: "UOM",
    placeholder: "Select Unit Of Measurement",
    options: [
      { key: "unit", value: "unit" },
      { key: "dozen", value: "dozen" },
      { key: "gram", value: "gram" },
      { key: "kilogram", value: "kilogram" },
      { key: "tonne", value: "tonne" },
      { key: "litre", value: "litre" },
      { key: "millilitre", value: "millilitre" },
    ],
    type: "select",
    inputStyles: {
      width: 320,
    },
    disableClearable: true,
  },
  {
    id: "UOMValue",
    title: "UOMValue",
    placeholder: "Enter UOM Value",
    type: "input",
  },
  {
    id: "available",
    title: "Available Quantity",
    placeholder: "Enter Available Quantity",
    type: "number",
  },
  {
    id: "maximum",
    title: "Maximum Quantity",
    placeholder: "Enter Maximum Quantity",
    type: "number",
  },
  {
    id: "parent",
    title: "Parent",
    placeholder: "Enter Customization Name",
    type: "input",
    isDisabled: true,
  },
];
