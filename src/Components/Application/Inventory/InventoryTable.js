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
import CachedIcon from "@mui/icons-material/Cached";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { getCall, postCall, putCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";
import Tooltip from "@material-ui/core/Tooltip";

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
    onRefresh,
  } = props;

  const onPageChange = (event, newPage) => {
    handlePageChange(newPage);
  };

  const onRowsPerPageChange = (event) => {
    handleRowsPerPageChange(parseInt(event.target.value, 10));
    handlePageChange(0);
  };

  const ThreeDotsMenu = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const { row } = props;

    const handlePublishState = (product_id, published) => {
      const url = `/api/v1/products/${product_id}/publish`;
      putCall(url, { published: !published })
        .then((resp) => {
          cogoToast.success("Product state updated successfully");
          onRefresh();
        })
        .catch((error) => {
          console.log(error);
          cogoToast.error(error.response.data.error);
        });
    };

    return (
      <Fragment>
        <Tooltip title="Action">
          <Button onClick={handleClick}>
            <MoreVertIcon />
          </Button>
        </Tooltip>
        <Menu
          id="card-actions-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/application/add-products" state={{ productId: row._id }}>
            <MenuItem>Edit</MenuItem>
          </Link>
          <MenuItem
            onClick={() => handlePublishState(row?._id, row?.published)}
          >
            {row?.published ? "Unpublish" : "Publish"}
          </MenuItem>
        </Menu>
      </Fragment>
    );
  };

  const renderCellContent = (column, value) => {
    if (typeof value == "boolean") {
      return (
        <div>
          <span className="ml-2">
            {value === false || value === null ? "No" : "Yes"}
          </span>
        </div>
      );
    } else {
      return column.format ? column.format(value) : value;
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
                >
                  {column.label}
                </StyledTableCell>
              ))}

              <StyledTableCell
                style={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                }}
              >
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {props.columns.map((column) => {
                    const value =
                      row[column.id] === undefined ? " - " : row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {renderCellContent(column, value)}
                      </TableCell>
                    );
                  })}
                  <TableCell component="th" scope="row">
                    <ThreeDotsMenu row={row} />
                  </TableCell>
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
