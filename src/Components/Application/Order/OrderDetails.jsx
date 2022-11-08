import React from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const params = useParams();
  return <div>OrderDetails {params.id}</div>;
};

export default OrderDetails;
