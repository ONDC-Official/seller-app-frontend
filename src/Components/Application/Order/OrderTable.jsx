import { useState, Fragment } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { getFullAddress, getFulfillmentData } from "./../../../utils/orders.js";
import { convertDateInStandardFormat } from "../../../utils/formatting/date.js";

const StyledTableCell = styled(TableCell)({
  "&.MuiTableCell-root": {
    fontWeight: "bold",
  },
});

export default function InventoryTable(props) {
  const {
    page,
    rowsPerPage,
    totalRecords,
    handlePageChange,
    handleRowsPerPageChange,
  } = props;
  const navigate = useNavigate();

  const onPageChange = (event, newPage) => {
    handlePageChange(newPage);
  };

  const onRowsPerPageChange = (event) => {
    handleRowsPerPageChange(parseInt(event.target.value, 10));
    handlePageChange(0);
  };

  // const ThreeDotsMenu = (props) => {
  //   const [anchorEl, setAnchorEl] = useState(null);

  //   function handleMenuClick(data) {}

  //   const handleClick = (e) => {
  //     setAnchorEl(e.currentTarget);
  //   };

  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  //   const { data } = props;

  //   return (
  //     <Fragment>
  //       <Button onClick={(e) => handleClick(e)}>
  //         <MoreVertIcon />
  //       </Button>
  //       <Menu
  //         id="card-actions-menu"
  //         anchorEl={anchorEl}
  //         keepMounted
  //         open={Boolean(anchorEl)}
  //         onClose={handleClose}
  //       >
  //         <MenuItem
  //           onClick={() => {
  //             navigate(`/application/orders/${props.row.attributes.order_id}`);
  //           }}
  //         >
  //           Order Details
  //         </MenuItem>
  //         <MenuItem onClick={() => handleMenuClick(data.Val1)}>
  //           Edit Order
  //         </MenuItem>
  //       </Menu>
  //     </Fragment>
  //   );
  // };

  const renderColumn = (row, column) => {
    const value = row[column.id];
    const payment = row["payment"];
    const delivery_info = getFulfillmentData(row["fulfillments"], "Delivery");
    const ordered_items = row.items;

    switch (column.id) {
      case "orderId":
        return (
          <>
            <span>{row.orderId}</span>
          </>
        );
      case "createdAt":
        return (
          <>
            <span>{convertDateInStandardFormat(value)}</span>
          </>
        );
      case "updatedAt":
        return (
          <>
            <span>{convertDateInStandardFormat(value)}</span>
          </>
        );
      case "state":
        return (
          <div>
            <span className="mr-2">{value}</span>
          </div>
        );

      case "payment_type":
        return (
          <div>
            <span>{payment.type}</span>
            <br />
          </div>
        );
      case "provider_name":
        return (
          <div>
            <span>{row?.organization?.name}</span>
            <br />
          </div>
        );
      case "total_amt":
        return (
          <div>
            <span>
              ₹{" "}
              {payment?.params?.amount
                ? parseFloat(payment?.params?.amount).toFixed(2)
                : ""}
            </span>
            <br />
          </div>
        );
      case "order_items":
        return (
          <div>
            x{ordered_items.length}
            {/* {ordered_items.map((item, idx) => (
              <span>{`${item.attributes.product.data.attributes.name} ${
                idx !== ordered_items.length - 1 ? "," : ""
              } `}</span>
            ))} */}
            <br />
          </div>
        );
      case "delivery_info":
        return (
          <div style={{ textTransform: "capitalize" }}>
            <span>
              <p>{getFullAddress(delivery_info?.end?.location?.address)}</p>
            </span>
            <br />
          </div>
        );

      default:
        break;
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {props.columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#1976d2",
                    color: "#fff",
                  }}
                  className="font-medium"
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row, index) => {
              return (
                <TableRow
                  style={{ cursor: "pointer" }}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={index}
                  onClick={() => {
                    navigate(`/application/orders/${row?._id}`);
                  }}
                >
                  {props.columns.map((column, idx) => {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {renderColumn(row, column)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={totalRecords}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Paper>
  );
}
