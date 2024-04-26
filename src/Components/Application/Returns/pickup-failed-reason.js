export const PICKUP_REJECT_REASONS = [
    {
        key: "001",
        value: "Seller not available",
    },
    {
        key: "002",
        value: "Seller phone no not contactable",
    },
    {
        key: "03",
        value: "Address incorrect",
    },
    {
        key: "04",
        value: "Shipment not ready",
        isApplicableForCancellation: true,
    },
    {
        key: "05",
        value: "Pickup request cancelled by Seller",
    },
    {
        key: "06",
        value: "Pick failed due to dangerous goods",
    },
    {
        key: "07",
        value: "Product packaging issue",
    },
    {
        key: "08",
        value: "Bar Code issue",
    },
    {
        key: "09",
        value: "Vehicle issue e.g. malfunctioning vehicle, space constraint in vehicle, etc",
    },
    {
        key: "010",
        value: "Buyer not available",
    },
];
