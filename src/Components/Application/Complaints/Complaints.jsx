import { useState, useEffect } from "react";
import { OrderData } from "../../../Constants/OrdersData";
import { getCall } from "../../../Api/axios";
import { useTheme } from '@mui/material/styles';
import ComplaintTable from "./ComplaintTable";

const columns = [
  {
    id: "issueId",
    label: "Complaint Id",
    minWidth: 120,
    align: "center"
  },
  {
    id: "created_at",
    label: "Created On",
    minWidth: 180,
    format: (value) => value.toLocaleString("en-US"),
    align: "center",
  },
  {
    id: "updated_at",
    label: "Modified On",
    minWidth: 180,
    format: (value) => value.toLocaleString("en-US"),
    align: "center",
  },
  {
    id: "status",
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
    id: "category",
    label: "Category",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 130,
    align: "center",
  },
  {
    id: "sub_category",
    label: "Subcategory",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 100,
    align: "center",
  },
  {
    id: "short_description",
    label: "Short Description",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 170,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    format: (value) => value.toLocaleString("en-US"),
    minWidth: 100,
    align: "center",
  },
];

export default function Complaints() {
  const theme = useTheme();
  const [orders, setOrders] = useState(OrderData);
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
    const url = `/api/client/all-issue?limit=${rowsPerPage}&offset=${page}`;
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
    if (user && user?.role?.name === "Organization Admin") {
      const data = columns.filter((item) => item.id !== "provider_name" && item.id !== "action")
      setColumnList(data);
    }
  }, [user]);

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="mb-4 flex flex-row justify-between items-center">
          <label style={{ color: theme.palette.primary.main }} className="font-semibold text-2xl">Complaints</label>
        </div>
        <ComplaintTable
          columns={columnList}
          data={orders}
          totalRecords={totalRecords}
          page={page}
          user={user}
          rowsPerPage={rowsPerPage}
          handlePageChange={(val) => setPage(val)}
          handleRowsPerPageChange={(val) => setRowsPerPage(val)}
          onSuccess={() => getOrders()}
        />
      </div>
    </>
  );
}
