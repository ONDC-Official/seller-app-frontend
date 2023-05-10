import { useState, useEffect } from "react";
import Navbar from "../../Shared/Navbar";
import OrderTable from "../Order/OrderTable";
import { OrderData } from "../../../Constants/OrdersData";
import useCancellablePromise from "../../../Api/cancelRequest";
import { getCall } from "../../../Api/axios";
import { useTheme } from '@mui/material/styles';

const columns = [
  { id: "orderId", label: "Order Id", minWidth: 120, align: "center" },
  {
    id: "createdAt",
    label: "Created On",
    minWidth: 180,
    format: (value) => value.toLocaleString("en-US"),
    align: "center",
  },
  {
    id: "updatedAt",
    label: "Modified On",
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
    label: "Provider Store Name",
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
  const theme = useTheme();
  const { cancellablePromise } = useCancellablePromise();
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [user, setUser] = useState();
  const [columnList, setColumnList] = useState(columns);
  
  const getUser = async (id) => {
    const url = `/api/v1/users/${id}`;
    const res = await getCall(url);
    setUser(res[0]);
    return res[0];
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    getUser(user_id);
  }, []);

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

  useEffect(() => {
    if(user && user?.role?.name === "Organization Admin"){
      const data = columns.filter((item) => item.id !== "provider_name")
      setColumnList(data);
    }
  }, [user]);

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="mb-4 flex flex-row justify-between items-center">
          <label style={{color: theme.palette.primary.main}} className="font-semibold text-2xl">Orders</label>
        </div>
        <OrderTable
          columns={columnList}
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
