import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { convertDateInStandardFormat } from "../../../utils/formatting/date.js";
import CustomerActionCard from "./actionCard.jsx";
import cogoToast from "cogo-toast";
import { ISSUE_TYPES } from "../../../Constants/issue-types.js";
import ThreeDotsMenu from "./actionMenu.jsx";

const StyledTableCell = styled(TableCell)({
  "&.MuiTableCell-root": {
    fontWeight: "bold",
  },
});

export default function ComplaintTable(props) {
  const {
    page,
    rowsPerPage,
    totalRecords,
    handlePageChange,
    handleRowsPerPageChange,
  } = props;
  const navigate = useNavigate();
  const [toggleActionModal, setToggleActionModal] = useState(false);
  const [supportActionDetails, setSupportActionDetails] = useState();
  const [expanded, setExpanded] = useState(null);

  const AllCategory = ISSUE_TYPES.map((item) => {
    return item.subCategory.map((subcategoryItem) => {
      return {
        ...subcategoryItem,
        category: item.value,
      };
    });
  }).flat();

  const onPageChange = (event, newPage) => {
    handlePageChange(newPage);
  };

  const onRowsPerPageChange = (event) => {
    handleRowsPerPageChange(parseInt(event.target.value, 10));
    handlePageChange(0);
  };

 

  const renderColumn = (row, column) => {
    const issue = row.message.issue;
    const value = issue[column.id];
    const short_description = issue.description.short_desc;

    function handleMenuClick() {
      setSupportActionDetails(row);
      setToggleActionModal(true);
    }

    switch (column.id) {
      case "issueId":
        return (
          <>
            <span>{issue.id}</span>
          </>
        );
      case "created_at":
        return (
          <>
            <span>{convertDateInStandardFormat(value)}</span>
          </>
        );
      case "updated_at":
        return (
          <>
            <span>{convertDateInStandardFormat(value)}</span>
          </>
        );
      case "status":
        return (
          <div>
            <span className="mr-2">{value}</span>
          </div>
        );
      case "provider_name":
        return (
          <div>
            <span>{issue.order_details.provider_name}</span>
            <br />
          </div>
        );
      case "category":
        return (
          <div>
            <span>{value}</span>
            <br />
          </div>
        );
      case "sub_category":
        return (
          <div>
            <span>{AllCategory.find((x) => x.enums === value)?.value}</span>
            <br />
          </div>
        );
      case "short_description":
        return (
          <div>
            <span>{short_description}</span>
            <br />
          </div>
        );
      case "action":
        return <ThreeDotsMenu row={row} user={props.user} expanded={expanded} handleMenuClick={()=>handleMenuClick()}/>;
      default:
        break;
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {toggleActionModal && (
        <CustomerActionCard
          user={props.user}
          supportActionDetails={supportActionDetails}
          onClose={() => setToggleActionModal(false)}
          onSuccess={(id) => {
            cogoToast.success("Action taken successfully");
            setToggleActionModal(false);
            props.onSuccess();
            setExpanded(id)
          }}
        />
      )}
      <TableContainer>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {props.columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: 'rgb(25, 118, 210)', color: '#FFF' }}
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
                >
                  {props.columns.map((column, idx) => {
                    return (
                      <TableCell
                        onClick={() => {
                          column.id !== "action" &&
                            navigate(
                              `/application/complaints/${row.message.issue?.id}`
                            );
                        }}
                        key={column.id}
                        align={column.align}
                      >
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
