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
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { getFullAddress, getFulfillmentData } from "./../../../utils/orders.js";

export default function InventoryTable(props) {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const ThreeDotsMenu = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    function handleMenuClick(data) {
      console.log(data);
    }

    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const { data } = props;

    return (
      <Fragment>
        <Button onClick={(e) => handleClick(e)}>
          <MoreVertIcon />
        </Button>
        <Menu
          id="card-actions-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              navigate(`/application/orders/${props.row.attributes.order_id}`);
            }}
          >
            Order Details
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick(data.Val1)}>
            Edit Order
          </MenuItem>
        </Menu>
      </Fragment>
    );
  };

  const renderColumn = (row, column) => {
    const value = row[column.id];
    const payment = row["payment"];
    const delivery_info = getFulfillmentData(row["fulfillments"], "Delivery");
    const ordered_items = row.items;

    switch (column.id) {
      case "_id":
        return (
          <>
            <span>{value}</span>
          </>
        );
      case "publishedAt":
        return (
          <>
            <span>{moment(value).format("d-MM-YYYY")}</span>
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
            <span>₹ {payment?.params?.amount}</span>
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
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="font-medium"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data
              //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
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
        count={props.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
