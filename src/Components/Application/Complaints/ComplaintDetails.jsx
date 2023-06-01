import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Divider
} from "@mui/material";
import moment from "moment";
import { getCall } from "../../../Api/axios";
import { convertDateInStandardFormat } from "../../../utils/formatting/date";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const ComplaintDetails = () => {
  const [complaint, setComplaint] = useState();
  const [issueActions, setIssueActions] = React.useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const issue = complaint?.message?.issue
  const getComplaint = async () => {
    const url = `/api/client/getissue/${params?.id}`;
    getCall(url).then((resp) => {
      if (resp.success) {
        setComplaint(resp.issue);
        mergeRespondantArrays(resp.issue.message?.issue?.issue_actions)
      }
    });
  };

  useEffect(() => {
    if (params.id) getComplaint();
  }, [params]);


  const mergeRespondantArrays = (actions) => {
    let resActions = actions.respondent_actions,
      comActions = actions.complainant_actions.map(item => { return ({ ...item, respondent_action: item.complainant_action }) }),
      mergedarray = [...comActions, ...resActions]

    mergedarray.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));
    setIssueActions(mergedarray)
  }
  const cardClass = `border-2 border-gray-200 rounded-lg p-2 bg-slate-50`;


  return (
    <div className="container mx-auto my-8">
      <BackNavigationButton onClick={() => navigate("/application/complaints")} />
      <div className="flex flex-col">
        <div className={`${cardClass} my-4 p-4`}>
          <div className="flex justify-between">
            <p className="text-lg font-semibold mb-2">Complaints Summary</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Complaint ID</p>
            <p className="text-base font-normal">{issue?.id}</p>
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
            <p className="text-base font-normal">Subcategory</p>
            <p className="text-base font-normal">{issue?.sub_category}</p>
          </div>
          <div className="flex justify-between mt-3 mb-3">
            <p className="text-base font-normal">Complaint Status</p>
            <p className="text-base font-normal">{issue?.status}</p>
          </div>


          <Divider orientation="horizontal" />

          <p className="text-base font-semibold mt-3">Short description</p>
          <p className="text-md font-normal">{issue?.description?.short_desc}</p>
          <p className="text-base font-semibold mt-3">Long description</p>
          <p className="text-base font-normal">{issue?.description?.long_desc}</p>
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
                <p className="text-md font-normal"> {x.remarks}</p>
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
