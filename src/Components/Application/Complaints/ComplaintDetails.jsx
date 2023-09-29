import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Divider,
  Menu,
  MenuItem
} from "@mui/material";
import moment from "moment";
import { getCall, postCall } from "../../../Api/axios";
import { convertDateInStandardFormat } from "../../../utils/formatting/date";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ISSUE_TYPES } from "../../../Constants/issue-types";
import cogoToast from "cogo-toast";
import CustomerActionCard from "./actionCard";

const ComplaintDetails = () => {
  const [complaint, setComplaint] = useState();
  const [user, setUser] = useState();
  const [issueActions, setIssueActions] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [supportActionDetails, setSupportActionDetails] = useState();
  const [toggleActionModal, setToggleActionModal] = useState(false);
  const issue = complaint?.message?.issue
  const [isCascaded, setIsCascaded] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [isResolved, setIsResolved] = useState(false)
  const [isEscalate, setEscalate] = useState(false)

  const [expanded, setExpanded] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const AllCategory = ISSUE_TYPES.map((item) => {
    return item.subCategory.map((subcategoryItem) => {
      return {
        ...subcategoryItem,
        category: item.value,
      };
    });
  }).flat();

  const getComplaint = async () => {
    const url = `/api/client/getissue/${params?.id}`;
    getCall(url).then((resp) => {
      if (resp.success) {
        const issue_actions = resp.issue.message?.issue?.issue_actions
        setComplaint(resp.issue);
        mergeRespondantArrays(issue_actions)
      }
    });
  };

  useEffect(() => {
    if (params.id) getComplaint();
  }, [params]);

  const getUser = async (id) => {
    const url = `/api/v1/users/${id}`;
    const res = await getCall(url);
    setUser(res[0]);
    return res[0];
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    getUser(user_id);
  }, []);

  const mergeRespondantArrays = (actions) => {
    let resActions = actions.respondent_actions,
      comActions = actions.complainant_actions.map(item => { return ({ ...item, respondent_action: item.complainant_action }) }),
      mergedarray = [...comActions, ...resActions]

    mergedarray.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));
    setIssueActions(mergedarray)

    const isProcessed = mergedarray?.some(x => x.respondent_action === "PROCESSING")
    const isCascaded = (mergedarray[mergedarray?.length - 2]?.respondent_action === "CASCADED" || mergedarray[mergedarray?.length - 1]?.respondent_action === "CASCADED")
    const isEscalate = mergedarray[mergedarray?.length - 1]?.respondent_action === "ESCALATE"
    const isResolved = mergedarray[mergedarray?.length - 1]?.respondent_action === "RESOLVED"
    setProcessed(isProcessed)
    setIsCascaded(isCascaded)
    setIsResolved(isResolved)
    setEscalate(isEscalate)
  }

  const cardClass = `border-2 border-gray-200 rounded-lg p-2 bg-slate-50`;

  const renderActionButtons = () => {
    function handleMenuClick() {
      setSupportActionDetails(complaint)
      handleClose()
      setToggleActionModal(true)
    }

    const handleClick = (e) => {
      console.log(e);
      setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleAction = () => {
      setLoading(true)
      const body = {
        "transaction_id": complaint.context.transaction_id,
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
          if (resp.message?.ack?.status === "ACK") {
            cogoToast.success("Action taken successfully");
            setProcessed(true)
            getComplaint()
          } else {
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

      if (processed || loading) {
        return true
      }
      if (isCascaded) {
        return true
      }

      return false
    }

    function checkResolveDisable() {
      if (expanded === supportActionDetails?.context.transaction_id) {
        return true
      }

      if (isCascaded && !isEscalate) {
        return true
      }

      if (isEscalate && !isResolved && !isCascaded) {
        return false
      }

      if (isResolved) {
        return true
      }

      if (!processed && !isEscalate) {
        return true
      }
      return false
    }

    return (
      <div style={{ display: 'flex', direction: 'row', gap: '8px' }}>
        {(user?.role?.name !== "Super Admin") &&
          <Button
            variant="contained"
            className="!capitalize"
            onClick={(e) => handleClick(e)}
            disabled={issue.status === "CLOSED"}
          >
            Action
          </Button>
        }
        <Menu
          id="card-actions-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            disabled={checkProcessDisable()}
            onClick={() => {
              handleAction()
            }}
          >
            Process
          </MenuItem>
          <MenuItem
            disabled={checkResolveDisable()}
            onClick={() => handleMenuClick()}>
            Resolve
          </MenuItem>
        </Menu>
        <Button
          className="!capitalize"
          variant="contained"
          onClick={() => navigate(`/application/orders/${issue?.order_details?.orderDetailsId}`)}
        >
          Order Detail
        </Button>
      </div>
    );
  };

  return (
    <div className="container mx-auto my-8">
      {toggleActionModal && (
        <CustomerActionCard
          user={user}
          supportActionDetails={supportActionDetails}
          onClose={() => setToggleActionModal(false)}
          onSuccess={(id) => {
            cogoToast.success("Action taken successfully");
            setToggleActionModal(false);
            setExpanded(id)
            getComplaint()
          }}
        />
      )}
      <BackNavigationButton onClick={() => navigate("/application/complaints")} />
      <div className="flex flex-col">
        <div className={`${cardClass} my-4 p-4`}>
          <div className="flex justify-between">
            <p className="text-lg font-semibold mb-2">Complaints Summary</p>
            {issue && renderActionButtons()}
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Issue Id</p>
            <p className="text-base font-normal">{issue?.id}</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Issue Type</p>
            <p className="text-base font-normal">{issue?.issue_type}</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Product Names</p>
            <p className="text-base font-normal" style={{ maxWidth: '50%' }}>{issue?.order_details.items.map(x => x.product_name).toString()}</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Created On</p>
            <p className="text-base font-normal">{convertDateInStandardFormat(issue?.created_at)}</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Modified On</p>
            <p className="text-base font-normal">{convertDateInStandardFormat(issue?.updated_at)}</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Category</p>
            <p className="text-base font-normal">{issue?.category}</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Issue Subcategory</p>
            <p className="text-base font-normal">{AllCategory.find(x => x.enums === issue?.sub_category)?.value}</p>
          </div>
          <div className="flex justify-between mt-3 mb-3">
            <p className="text-base font-normal">Complaint Status</p>
            <p className="text-base font-normal">{issue?.status}</p>
          </div>


          <Divider orientation="horizontal" />

          <p className="text-base font-semibold mt-3">Short Description</p>
          <p className="text-md font-normal">{issue?.description?.short_desc}</p>
          <p className="text-base font-semibold mt-3">Long Description</p>
          <p className="text-base font-normal mb-3">{issue?.description?.long_desc}</p>
          {issue?.description?.images.length > 0 &&
            <div className="flex space-between mb-3">
              {
                issue?.description?.images?.map((image) => {
                  return (
                    <div className="container mr-4" style={{ height: "10%", width: "5%" }}>
                      <a href={image} rel="noreferrer" target="_blank">
                        <img src={image} />
                      </a>
                    </div>
                  );
                })
              } </div>
          }

          <Divider orientation="horizontal" />


          {/* RESOLUTION  */}
          {issue?.resolution && (
            <div>
              <p className="text-base font-semibold mt-3">
                Resolution
              </p>

              <div className="flex justify-between pt-3">
                <div style={{ width: "80%" }}>
                  <p
                    className="text-md font-normal"
                  >
                    {issue?.resolution?.short_desc}
                  </p>
                  {issue?.resolution?.long_desc &&
                    <p
                      className="text-md font-normal"
                    >
                      {issue?.resolution?.long_desc}
                    </p>
                  }
                  {issue?.resolution?.refund_amount &&
                    <p
                      className="text-md font-normal"
                    >
                      Refund Amount: {issue?.resolution?.refund_amount}
                    </p>
                  }
                </div>
                <div className="ms-auto">
                  <p
                    className="text-base font-semibold mt-3"
                  >
                    Action: {issue?.resolution?.action_triggered || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>



        <div className={`${cardClass} my-4 p-4`}>
          <div className="flex h-full">
            <p className="text-lg font-semibold mb-2"> Actions Taken</p>

          </div>
          {issueActions.length > 0 && OppositeContentTimeline(issueActions)}

        </div>
        <div className="flex justify-between">
          <div className="w-full">
            <div className={`${cardClass} my-4 p-4`}>
              <p className="text-lg font-semibold mb-2">Customer Details</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold">Name : &nbsp;</p>
                <p className="text-sm font-medium">
                  {issue?.complainant_info?.person?.name}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold">Mobile : &nbsp;</p>
                <p className="text-sm font-medium">
                  +91 {issue?.complainant_info?.contact?.phone}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold">Email : &nbsp;</p>
                <p className="text-sm font-medium">
                  {issue?.complainant_info?.contact?.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function OppositeContentTimeline(data) {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {data.length > 0 && data.map((x, i) => {
        return (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color={i + 1 < data.length ? "grey" : "info"} />
              {i + 1 < data.length && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex items-center">
                <p className="text-base font-semibold mr-2">{x.respondent_action}:</p>
                <p className="text-md font-normal"> {x.short_desc}</p>
              </div>
              <div className="flex items-center">
                <p className="text-base font-semibold mr-2">Updated by:</p>
                <p className="text-md font-normal">{`${x.updated_by?.person?.name}, ${x.updated_by?.org.name.split('::')[0]}`}</p>
              </div>
              <div className="flex items-center">
                <p className="text-base font-semibold mr-2">Updated at:</p>
                <p className="text-md font-normal">{`${moment(x.updated_at).format(
                  "MMMM Do, YYYY hh:mm a"
                )}`}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  );
}

export default ComplaintDetails;
