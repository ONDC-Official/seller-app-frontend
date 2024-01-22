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
import { useNavigate, Link } from "react-router-dom";
import { getCall, postCall, putCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";
import Tooltip from "@material-ui/core/Tooltip";
import { FormControlLabel, IconButton, InputAdornment, Modal, Radio, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

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
    setShowCustomizationModal,
    getProducts,
    fetchCustomizationItem,
    customizationGroups = [],
  } = props;

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [initialGroup, setInitialGroup] = useState(null);

  const updateInitialCustomizationGroup = async () => {
    try {
      const url = `/api/v1/products/${selectedRow._id}`;
      const data = { commonDetails: { customizationGroupId: initialGroup } };
      const res = await putCall(url, data);
      setSelectedRow(null);
      setInitialGroup(null);
      setShowModal(false);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

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
        <Menu id="card-actions-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          {/* <Link
            to="/application/add-products"
            state={{
              productId: row._id,
              productCategory: row.productCategory,
              productSubCategory: row.productSubcategory1,
            }}
          > */}
          <MenuItem
            onClick={() => {
              if (row.type == "customization") {
                fetchCustomizationItem(row._id);
                setShowCustomizationModal(true);
              } else {
                navigate("/application/add-products", {
                  state: {
                    productId: row._id,
                    productCategory: row.productCategory,
                    productSubCategory: row.productSubcategory1,
                  },
                });
              }
            }}
          >
            Edit
          </MenuItem>
          {/* </Link> */}
          <MenuItem onClick={() => handlePublishState(row?._id, row?.published)}>
            {row?.published ? "Unpublish" : "Publish"}
          </MenuItem>
          {row.type != "customization" && (
            <MenuItem
              onClick={() => {
                setSelectedRow(row);
                setShowModal(true);
              }}
            >
              Choose Initial Group
            </MenuItem>
          )}
        </Menu>
      </Fragment>
    );
  };

  const renderCellContent = (column, value) => {
    if (typeof value == "boolean") {
      return (
        <div>
          <span className="ml-2">{value === false || value === null ? "No" : "Yes"}</span>
        </div>
      );
    } else {
      return column.format ? column.format(value) : value;
    }
  };

  const renderCustomizationGroups = () => {
    const filteredProducts = customizationGroups.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredProducts.map((customizationItem) => (
      <div key={customizationItem._id}>
        <div
          className="flex items-center justify-between w-[550px] py px-2 mb-2 border border-[#1876d1a1] rounded-xl cursor-pointer bg-white"
          onClick={() => setInitialGroup(customizationItem._id)}
        >
          <p className="ml-2">
            {customizationItem.name} {customizationItem.description && ` - ( ${customizationItem.description} ) `}
          </p>

          <FormControlLabel
            value={false}
            control={
              <Radio
                size="small"
                checked={initialGroup === customizationItem._id}
                onClick={() => {
                  setInitialGroup(customizationItem._id);
                }}
              />
            }
          />
        </div>
      </div>
    ));
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
                    const value = row[column.id] === undefined ? " - " : row[column.id];
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
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "24px 40px",
            borderRadius: 20,
          }}
        >
          <p className="font-semibold text-xl mb-6" style={{ marginBottom: 20 }}>
            Choose Initial Customization Group
          </p>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search Customizations..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ marginBottom: 20, width: 550 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton sx={{ marginLeft: -1 }}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div className="min-h-[250px] max-h-[400px] overflow-y-auto pr-4">{renderCustomizationGroups()}</div>
          <div className="flex mt-4 items-center justify-end mr-4">
            <Button
              sx={{ marginRight: 2 }}
              onClick={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={updateInitialCustomizationGroup}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </Paper>
  );
}
