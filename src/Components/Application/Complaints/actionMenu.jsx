import React, { Fragment, useState } from 'react'
import { postCall } from '../../../Api/axios';
import cogoToast from 'cogo-toast';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

const ThreeDotsMenu = ({row, user, handleMenuClick, expanded}) => {
    const issue = row?.message.issue
    const context = row?.context
    const resActions = issue?.issue_actions?.respondent_actions
    const compActions = issue?.issue_actions?.complainant_actions
    const isEscalate = compActions[compActions?.length - 1]?.complainant_action === "ESCALATE"
    const isCascaded = resActions[resActions?.length - 1]?.respondent_action === "CASCADED"
    const isResolved = resActions[resActions?.length - 1]?.respondent_action === "RESOLVED"
    const isProcessed = resActions.some(x=> x.respondent_action === "PROCESSING")
    const [anchorEl, setAnchorEl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(isProcessed);
    const [cascaded, setCascaded] = useState(isCascaded)
   
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
      if(isResolved){
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

     function onResolve() {
        handleClose()
         handleMenuClick()
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
              onClick={() => {handleAction("PROCESSING")
             }}
            >
              Process
            </MenuItem>
            <MenuItem
            disabled={checkResolveDisable()}
              
              onClick={() => onResolve()}>
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

export default ThreeDotsMenu
