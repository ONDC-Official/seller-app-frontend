import { useState, useEffect } from "react";
import ReturnOrderTable from "./ReturnOrderTable";
import { getCall } from "../../../Api/axios";
import columns from './colDefs';
import { useTheme } from '@mui/material/styles';

export default function Returns() {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  const getReturnOrders = (offset, limit) => {
    const url = `/api/v1/orders/return/request?limit=${offset}&offset=${limit}`;
    getCall(url)
      .then((resp) => {
        setData(resp.data);
        setTotalRecords(resp.count);
      })
      .catch((error) => {
        console.log(error.response);
      })
  };

  useEffect(() => {
    getReturnOrders(rowsPerPage, page);
  }, [page, rowsPerPage]);

  const handleRefresh = () => {
    getReturnOrders(rowsPerPage, page);
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="mb-4 flex flex-row justify-between items-center">
          <label style={{color: theme.palette.primary.main}} className="font-semibold text-2xl">Returns</label>
        </div>
        <ReturnOrderTable
          columns={columns}
          data={data}
          totalRecords={totalRecords}
          page={page}
          rowsPerPage={rowsPerPage}
          handlePageChange={(val) => setPage(val)}
          handleRowsPerPageChange={(val) => setRowsPerPage(val)}
          handleRefresh={handleRefresh}
        />
      </div>
    </>
  );
}
