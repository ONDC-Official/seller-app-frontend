import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Menu,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreVert, LockOutlined } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { putCall } from "../../../Api/axios";
import { Tooltip } from "@material-ui/core";

const StyledTableCell = styled(TableCell)({
  "&.MuiTableCell-root": {
    fontWeight: "bold",
  },
});

const ThreeDotsMenu = (props) => {
  const { row, isProvider, getAdmins, getProviders, view } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const openActionMenu = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const action = async (e, action) => {
    e.stopPropagation();
    try {
      switch (action) {
        case "enable":
          await putCall(`/api/v1/users/${row?._id}/enable`, { enabled: true });
          break;
        case "disable":
          await putCall(`/api/v1/users/${row?._id}/enable`, { enabled: false });
          break;
        case "unlock":
          await putCall(`/api/v1/auth/grantAccess/${row?._id}`);
          break;
        default:
          break;
      }
      setAnchorEl(null);
      if (view === "admin") {
        getAdmins();
      } else {
        getProviders();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <Tooltip title="Action">
        <Button
          id="user-action-menu-button"
          aria-controls={Boolean(anchorEl) ? "user-action-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={Boolean(anchorEl) ? "true" : undefined}
          onClick={openActionMenu}
          sx={{ width: 30 }}
        >
          <MoreVert />
        </Button>
      </Tooltip>
      <Menu
        id="user-action-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
          "aria-labelledby": "user-action-menu-button",
        }}
      >
        {isProvider && (
          <MenuItem onClick={() => navigate(`/user-listings/provider-details/${row?.organization?._id}`)}>
            View
          </MenuItem>
        )}
        <MenuItem onClick={(e) => action(e, "enable")}>Mark as Active</MenuItem>
        <MenuItem onClick={(e) => action(e, "disable")}>Mark as Inactive</MenuItem>
        {row.bannedUser && <MenuItem onClick={(e) => action(e, "unlock")}>Unlock user</MenuItem>}
      </Menu>
    </div>
  );
};

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
    view,
  } = props;
  const navigate = useNavigate();

  const onPageChange = (event, newPage) => {
    handlePageChange(newPage);
  };

  const onRowsPerPageChange = (event) => {
    handleRowsPerPageChange(parseInt(event.target.value, 10));
    handlePageChange(0);
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
                style={{
                  minWidth: column.minWidth,
                  backgroundColor: "#1976d2",
                  color: "#fff",
                }}
              >
                {column.label}
              </StyledTableCell>
            ))}
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              return (
                <TableRow
                  // style={{ cursor: isProvider ? "pointer" : "default" }}
                  hover
                  tabIndex={-1}
                  key={index}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    if (column.id == "Action") {
                      const user_id = localStorage.getItem("user_id");
                      if (props.isProvider) {
                        return (
                          <TableCell key={column.id} align={"left"}>
                            <ThreeDotsMenu
                              view={view}
                              row={row}
                              isProvider={isProvider}
                              getAdmins={getAdmins}
                              getProviders={getProviders}
                            />
                          </TableCell>
                        );
                      } else {
                        if (user_id === row._id) {
                          return <></>;
                        } else {
                          return (
                            <TableCell key={column.id} align={"left"}>
                              <ThreeDotsMenu
                                view={view}
                                row={row}
                                isProvider={isProvider}
                                getAdmins={getAdmins}
                                getProviders={getProviders}
                              />
                            </TableCell>
                          );
                        }
                      }
                    } else if (column.id == "formatted_status") {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Stack direction="row" spacing={2}>
                            <span>{value}</span>
                            {row.bannedUser && <LockOutlined sx={{ color: "red" }} />}
                          </Stack>
                        </TableCell>
                      );
                    } else if (column.id == "providerName") {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {row?.organization?.name}
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
