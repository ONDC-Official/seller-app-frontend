export const DELIVERY_FULFILLMENT_STATUS = [
  { fulfillmentType: "Delivery", fulfillmentStatus: "Pending", orderStatus: "Created", seq: 1 },
  { fulfillmentType: "Delivery", fulfillmentStatus: "Packed", orderStatus: "In-progress", seq: 2 },
  { fulfillmentType: "Delivery", fulfillmentStatus: "Agent-assigned", orderStatus: "In-progress", seq: 3 },
  { fulfillmentType: "Delivery", fulfillmentStatus: "Order-picked-up", orderStatus: "In-progress", seq: 4 },
  { fulfillmentType: "Delivery", fulfillmentStatus: "Out-for-delivery", orderStatus: "In-progress", seq: 5 },
  { fulfillmentType: "RTO", fulfillmentStatus: "RTO-Initiated", orderStatus: "Cancelled", seq: 6 },
  { fulfillmentType: "Delivery", fulfillmentStatus: "Order-delivered", orderStatus: "Completed", seq: 7 },
]

export const RTO_FULFILLMENT_STATUS = [
  { fulfillmentType: "RTO", fulfillmentStatus: "RTO-Initiated", orderStatus: "Cancelled", seq: 1 },
  { fulfillmentType: "RTO", fulfillmentStatus: "RTO-Delivered", orderStatus: "Cancelled", seq: 2 },
  { fulfillmentType: "RTO", fulfillmentStatus: "RTO-Disposed", orderStatus: "Cancelled", seq: 3 },
]