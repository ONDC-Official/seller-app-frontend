import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import { putCall } from "../../../Api/axios";

const StyledTableCell = styled(TableCell)({
  "&.MuiTableCell-root": {
    fontWeight: 'bold'
  },
});

const UserTable = (props) => {
  const {
    getProviders, 
    getAdmins,
    columns,
    data,
    isProvider,
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
    handleRowsPerPageChange(parseInt(event.target.value, 10))
    handlePageChange(0)
  };

  const ThreeDotsMenu = (props) => {
    const { row } = props;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
      e.stopPropagation();
      setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const action = async (e, param) => {
      e.stopPropagation();
      try {
        let val;
        if (param == "enable") val = true;
        if (param == "disable") val = false;
        const data = { enabled: val };

        const url = `/api/v1/users/${row?._id}/enable`;
        const res = await putCall(url, data);
        getAdmins();
        getProviders();
      } catch (error) {
        console.log(error.response);
      }
    };
    return (
      <di>
        <Button onClick={handleClick} sx={{ width: 30 }}>
          <MoreVertIcon />
        </Button>
        <Menu
          id="card-actions-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={(e) => action(e, "enable")}>
            Mark as Active
          </MenuItem>
          <MenuItem onClick={(e) => action(e, "disable")}>
            Mark as Inactive
          </MenuItem>
        </Menu>
      </di>
    );
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </StyledTableCell>
            ))}
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
                return (
                  <TableRow
                    style={{ cursor: isProvider ? "pointer" : "default" }}
                    hover
                    tabIndex={-1}
                    key={index}
                    onClick={() => {
                      isProvider &&
                        navigate(
                          `/user-listings/provider-details/${row?.organization?._id}`
                        );
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id == "Action") {
                        return (
                          <TableCell key={column.id} align={"left"}>
                            <ThreeDotsMenu row={row} />
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
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
};

export default UserTable;
