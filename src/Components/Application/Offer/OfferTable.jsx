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
import { useNavigate } from "react-router-dom";
import { convertDateInStandardFormat } from "../../../utils/formatting/date.js";
import Tooltip from "@material-ui/core/Tooltip";
import { deleteCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";

const StyledTableCell = styled(TableCell)({
    "&.MuiTableCell-root": {
        fontWeight: "bold",
    },
});

export default function OfferTable(props) {
    const {
        page,
        rowsPerPage,
        dataUpdate,
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
    const ThreeDotsMenu = (props) => {
        const [anchorEl, setAnchorEl] = useState(null);

        const handleClick = (e) => {
            e.stopPropagation()
            setAnchorEl(e.currentTarget);
        };

        const handleClose = (e) => {
            e.stopPropagation()
            setAnchorEl(null);
        };

        const { row } = props;


        return (
            <Fragment>
                <Tooltip title="Action">
                    <Button onClick={handleClick}>
                        <MoreVertIcon />
                    </Button>
                </Tooltip>
                <Menu id="card-actions-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={(e) => handleDeleteOffer(e, row?._id)}>
                        Delete
                    </MenuItem>
                </Menu>
            </Fragment>
        );
    };
    const handleDeleteOffer = async (e, offerId) => {
        try {
            e.stopPropagation()
            const response = await deleteCall(`/api/v1/offers/${offerId}`);
            if (response) {
                cogoToast.success("Offer Deleted Succesfully");
                dataUpdate()
                navigate('/application/offers');
            }
        } catch (error) {
            cogoToast.error(error.response.data.error);
        }
    }
    const renderColumn = (row, column) => {
        const value = row[column.id];

        switch (column.id) {
            case "offerId":
                return (
                    <>
                        <span>{row.offerId}</span>
                    </>
                );

            case "type":
                return (
                    <div>
                        <span className="mr-2">{value}</span>
                    </div>
                );
            case "validFrom":
                return (
                    <>
                        <span>{convertDateInStandardFormat(row.valid.from)}</span>
                    </>
                );
            case "validTo":
                return (
                    <>
                        <span>{convertDateInStandardFormat(row.valid.to)}</span>
                    </>
                );
            case "autoApply":
                return (
                    <div>
                        <span className="mr-2">{value ? "yes" : "no"}</span>
                    </div>
                );
            case "createdAt":
                return (
                    <>
                        <span>{convertDateInStandardFormat(value)}</span>
                    </>
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
                                <TableRow
                                    style={{ cursor: "pointer" }}
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={index}
                                    onClick={() => {
                                        navigate(`/application/edit/offer/${row?._id}`);
                                    }}
                                >
                                    {props.columns.map((column, idx) => {
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {renderColumn(row, column)}
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
