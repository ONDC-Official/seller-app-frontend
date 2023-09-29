import { useState, useEffect } from "react";
import { getCall } from "../../../Api/axios";
import { useTheme } from '@mui/material/styles';
import ComplaintTable from "./ComplaintTable";

const columns = [
  {
    id: "issueId",
    label: "Issue Id",
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
    label: "Issue Subcategory",
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
  const [complaints, setComplaints] = useState([]);
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
        setComplaints(resp.issues);
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
      const data = columns.filter((item) => item.id !== "provider_name")
      setColumnList(data);
    }
    if (user && user?.role?.name === "Super Admin") {
      const data = columns.filter((item) => item.id !== "action")
      setColumnList(data);
    }
  }, [user]);

    // empty state ui
    const empty_orders_state = (
      <div
          className={`d-flex align-items-center justify-content-center`}
      >
          <div className="text-center">
              <div className="py-2">
                  <p>No Complaints found!</p>
              </div>
          </div>
      </div>
  );
  
  return (
    <>
      <div className="container mx-auto my-8">
        <div className="mb-4 flex flex-row justify-between items-center">
          <label style={{ color: theme.palette.primary.main }} className="font-semibold text-2xl">Complaints</label>
        </div>
        { complaints?.length > 0 ?
         <ComplaintTable
          columns={columnList}
          data={complaints}
          totalRecords={totalRecords}
          page={page}
          user={user}
          rowsPerPage={rowsPerPage}
          handlePageChange={(val) => setPage(val)}
          handleRowsPerPageChange={(val) => setRowsPerPage(val)}
          onSuccess={() => getOrders()}
        />
        :
        empty_orders_state
       }
      </div>
    </>
  );
}
