import { useState, useEffect } from "react";
import Navbar from "../../Shared/Navbar";
import OrderTable from "../Order/OrderTable";
import { OrderData } from "../../../Constants/OrdersData";
import useCancellablePromise from "../../../Api/cancelRequest";
import { getCall } from "../../../Api/axios";

const columns = [
  { id: "orderId", label: "Order Id", minWidth: 120, align: "center" },
  {
    id: "createdAt",
    label: "Created At",
    minWidth: 180,
    format: (value) => value.toLocaleString("en-US"),
    align: "center",
  },
  {
    id: "updatedAt",
    label: "Updated At",
    minWidth: 180,
    format: (value) => value.toLocaleString("en-US"),
    align: "center",
  },
  {
    id: "state",
    label: "Status",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 140,
    align: "center",
  },
  {
    id: "provider_name",
    label: "Provider Name",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 130,
    align: "center",
  },
  {
    id: "order_items",
    label: "Items Ordered",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 100,
    align: "center",
  },
  {
    id: "payment_type",
    label: "Payment Type",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 170,
    align: "center",
  },
  {
    id: "total_amt",
    label: "Total Amount",
    minWidth: 120,
    align: "center",
  },
  {
    id: "delivery_info",
    label: "Delivering To",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 90,
    align: "left",
  },
];

export default function Orders() {
  const { cancellablePromise } = useCancellablePromise();
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  const getOrders = () => {
    const url = `/api/v1/orders?limit=${rowsPerPage}&offset=${page}`;
    getCall(url)
      .then((resp) => {
        setOrders(resp.data);
        setTotalRecords(resp.count);
      })
      .catch((error) => {
        console.log(error.response);
      })
  };

  useEffect(() => {
    getOrders();
  }, [page, rowsPerPage]);

  return (
    <>
      <Navbar />
      <div className="container container mx-auto px-4 lg:px-[5rem] my-4">
        <div className="mb-4 flex flex-row justify-between items-center">
          <label className="font-semibold text-2xl">Orders</label>
        </div>
        <OrderTable
          columns={columns}
          data={orders}
          totalRecords={totalRecords}
          page={page}
          rowsPerPage={rowsPerPage}
          handlePageChange={(val) => setPage(val)}
          handleRowsPerPageChange={(val) => setRowsPerPage(val)}
        />
      </div>
    </>
  );
}
