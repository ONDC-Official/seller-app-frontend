import { useState, useEffect } from "react";
import Navbar from "../../Shared/Navbar";
import OrderTable from "../Order/OrderTable";
import { OrderData } from "../../../Constants/OrdersData";
import useCancellablePromise from "../../../Api/cancelRequest";
import { getCall } from "../../../Api/axios";
import moment from "moment";

const columns = [
  { id: "order_id", label: "Order Id", minWidth: 90 },
  {
    id: "publishedAt",
    label: "Date",
    minWidth: 110,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "state",
    label: "Status",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 140,
  },
  {
    id: "Provider_Name",
    label: "Provider Name",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 130,
  },
  {
    id: "order_items",
    label: "Items Ordered",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 150,
  },
  {
    id: "payment_type",
    label: "Payment Type",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 170,
  },
  {
    id: "total_amt",
    label: "Total Amount",
    minWidth: 120,
  },
  {
    id: "delivery_info",
    label: "Delivering To",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 90,
  },
  {
    id: "menu",
    label: "",
  },
];

export default function Orders() {
  const { cancellablePromise } = useCancellablePromise();
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const url = `/api/order`;
      const res = await cancellablePromise(getCall(url));
      setOrders(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container container mx-auto px-4 lg:px-[5rem] my-4">
        <div className="mb-4 flex flex-row justify-between items-center">
          <label className="font-semibold text-2xl">Orders</label>
        </div>
        <OrderTable columns={columns} data={orders} />
      </div>
    </>
  );
}
