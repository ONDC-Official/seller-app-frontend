import React, { Fragment, useState, useEffect } from 'react'
import { postCall } from '../../../Api/axios';
import cogoToast from 'cogo-toast';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

const ThreeDotsMenu = ({row, user, handleMenuClick, expanded}) => {
    const issue = row?.message.issue
    const context = row?.context
    const [anchorEl, setAnchorEl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [processed, setProcessed] = useState(false);
  const [isCascaded, setIsCascaded] = useState(false);
  
    const [isResolved, setIsResolved] = useState(false)
  const [isEscalate, setEscalate] = useState(false)
    useEffect(() => {
        mergeRespondantArrays(issue?.issue_actions)
    }, [])
    

    const mergeRespondantArrays = (actions) => {
        let resActions = actions.respondent_actions,
          comActions = actions.complainant_actions.map(item => { return ({ ...item, respondent_action: item.complainant_action }) }),
          mergedarray = [...comActions, ...resActions]
    
        mergedarray.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));
        const isProcessed = mergedarray?.some(x=> x.respondent_action === "PROCESSING")
        const isCascaded = (mergedarray[mergedarray.length - 2]?.respondent_action === "CASCADED" || mergedarray[mergedarray.length - 1]?.respondent_action === "CASCADED")
        const isEscalate = mergedarray[mergedarray.length - 1]?.respondent_action === "ESCALATE" 
        const isResolved = mergedarray[mergedarray.length - 1]?.respondent_action === "RESOLVED"
        setProcessed(isProcessed)
        setIsCascaded(isCascaded)
        setIsResolved(isResolved)
        setEscalate(isEscalate)
      }

      const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
      };
  
      const handleClose = () => {
        setAnchorEl(null);
      };
  
     const handleAction=()=> {
      setLoading(true)
      const body = {
        "transaction_id": context.transaction_id,
        "respondent_action": "PROCESSING",
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
          setProcessed(true)
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
      if(processed || loading){
        return true
      }
      if(isCascaded){
        return true
      }
  
      return  false
    }
  
    function checkResolveDisable(){
  if(expanded === context.transaction_id){
    return true
  }

  if(isCascaded && !isEscalate){
    return true
  }

  if(isEscalate && !isResolved && !isCascaded){
    return false
  }
   
  if(isResolved){
    return true
  }

  if(!processed && !isEscalate){
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
              onClick={() => {handleAction()
             }}
            >
              Process
            </MenuItem>
            <MenuItem
            disabled={checkResolveDisable()}
              
              onClick={() => onResolve()}>
              Resolve
            </MenuItem>
            </>
            }
          </Menu>
        </Fragment>
      );
    };

export default ThreeDotsMenu
