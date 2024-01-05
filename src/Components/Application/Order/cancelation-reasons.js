export const CANCELATION_REASONS = [
  {
    key: "002",
    value:
      "One or more items in the Order not available",
    isApplicableForCancellation: true,
  },
  {
    key: "005",
    value: "Merchant rejected the order",
    isApplicableForCancellation: false,
  },
  {
    key: "011",
    value: "Buyer not found or cannot be contacted",
    isApplicableForCancellation: false,
  },
  {
    key: "012",
    value: "Buyer does not want product any more",
    isApplicableForCancellation: true,
  },
  {
    key: "013",
    value: "Buyer refused to accept delivery",
    isApplicableForCancellation: false,
  },
  {
    key: "014",
    value: "Address not found",
    isApplicableForCancellation: false,
  },
  {
    key: "015",
    value: "Buyer not available at location",
    isApplicableForCancellation: false,
  },
  {
    key: "018",
    value: "Delivery pin code not serviceable",
    isApplicableForCancellation: false,
  },
  {
    key: "019",
    value: "Pickup pin code not serviceable",
    isApplicableForCancellation: false,
  },
];
