export const RETURN_REJECT_REASONS = [
  {
    key: "001",
    value:
      "Product is damaged",
    isApplicableForCancellation: false,
  },
  {
    key: "002",
    value: "Product packaging is damaged",
    isApplicableForCancellation: false,
  },
  {
    key: "03",
    value: "Product has been used and / or tags have been removed",
    isApplicableForCancellation: false,
  },
  {
    key: "04",
    value: "Product is not the same as what was ordered and / or is not complete, i.e. without accessories which were included",
    isApplicableForCancellation: true,
  },
  {
    key: "05",
    value: "Product delivered is different from what was shown and ordered",
    isApplicableForCancellation: false,
  },
  {
    key: "06",
    value: "Return beyond return window",
    isApplicableForCancellation: false,
  },
  {
    key: "07",
    value: "Final sale",
    isApplicableForCancellation: false,
  },
];
