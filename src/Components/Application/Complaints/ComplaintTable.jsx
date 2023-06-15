import { useState, Fragment, useContext } from "react";
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
import CustomerActionCard from "./actionCard.jsx";
import cogoToast from "cogo-toast";
import { postCall } from "../../../Api/axios.js";
import { ISSUE_TYPES } from "../../../Constants/issue-types.js";

const StyledTableCell = styled(TableCell)({
  "&.MuiTableCell-root": {
    fontWeight: 'bold'
  },
});

export default function ComplaintTable(props) {
  const { page, rowsPerPage, totalRecords, handlePageChange, handleRowsPerPageChange, data } = props
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
    handleRowsPerPageChange(parseInt(event.target.value, 10))
    handlePageChange(0)
  };

  const ThreeDotsMenu = ({row}) => {
  const issue = row.message.issue
  const context = row.context
  const user = props.user
  const resActions = issue?.issue_actions?.respondent_actions
  const compActions = issue?.issue_actions?.complainant_actions
  const isEscalate = compActions[compActions.length - 1]?.complainant_action === "ESCALATE"
  const isCascaded = resActions[resActions.length - 1]?.respondent_action === "CASCADED"
  const isProcessed = resActions[resActions.length - 1]?.respondent_action === "PROCESSING"
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(isProcessed);
  const [cascaded, setCascaded] = useState(isCascaded)
 

    function handleMenuClick() {
      setSupportActionDetails(row)
      handleClose()
      setToggleActionModal(true)
    }

    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

   const handleAction=(action)=> {
    setLoading(true)
    const body = {
      "transaction_id": context.transaction_id,
      "respondent_action": action,
      "short_desc": "We are investigating your concern.",
      "updated_by": {
        "org": {
          "name": user.organization
        },
        "contact": {
          "phone": user.mobile,
          "email": user.email
        },
        "person": {
          "name": user.name
        }
      }
    }
    postCall(`/api/client/issue_response`, body)
      .then((resp) => {
        setLoading(false)
        if(resp.message?.ack?.status === "ACK") {
        cogoToast.success("Action taken successfully");
        action === "PROCESSING" ? setResolved(true) : setCascaded(true)
        }else{
          cogoToast.error(resp.message);
        }
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
        cogoToast.error(error.response.data.error);
      });
   }

  function checkProcessDisable() {
    if(resolved || loading){
      return true
    }
    if(cascaded){
      return true
    }

    return  false
  }

   function checkResolveDisable(){
    if(expanded === context.transaction_id){
      return true
    }
    if(!resolved && !isEscalate){
      return true
    }
  
    if(cascaded){
      return true
    }

    return false
   }

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
          {
          issue.status === "CLOSED" ?
          <MenuItem disabled
          >
          No Action Required
        </MenuItem>
        :
        <>
          <MenuItem
            disabled={checkProcessDisable()}
            onClick={() => {
              handleAction("PROCESSING")
           }}
          >
            Process
          </MenuItem>
          <MenuItem
          disabled={checkResolveDisable()}
          onClick={() => handleMenuClick()}>
            Resolve
          </MenuItem>
          {/* <MenuItem
          disabled={cascaded}
          onClick={() => handleAction("CASCADED")}>
            Cascade
          </MenuItem> */}
          </>
          }
        </Menu>
      </Fragment>
    );
  };

  const renderColumn = (row, column) => {
    const issue = row.message.issue
    const value = issue[column.id];
    const short_description = issue.description.short_desc;
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
          ); case "sub_category":
          return (
            <div>
              <span>{AllCategory.find(x => x.enums === value)?.value}</span>
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
          return (
            <ThreeDotsMenu row={row} />
          );
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
                        setExpanded(id)
                        //props.onSuccess()
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
                  style={{ minWidth: column.minWidth }}
                  className="font-medium"
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .map((row, index) => {
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
                        onClick={() => { column.id !== "action" &&
                      navigate(`/application/complaints/${row.message.issue?.id}`);
                    }}
                        key={column.id} align={column.align}>
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
