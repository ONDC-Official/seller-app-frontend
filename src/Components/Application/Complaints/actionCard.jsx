import React, { useState } from "react";
import CrossIcon from "../../Shared/svg/cross-icon";
import Button from "../../Shared/Button";
import styles from "../../../Styles/actionCard.module.scss"
import { postCall } from "../../../Api/axios";
import CustomRadioButton from "./CustomRadioButton";
import cogoToast from "cogo-toast";
import ErrorMessage from "../../Shared/ErrorMessage";
import { ONDC_COLORS } from "../../Shared/Colors";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "#1c75bc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1c75bc",
    },
  },
});

export default function CustomerActionCard({
  supportActionDetails,
  onClose,
  onSuccess,
  user
}) {

  // CONSTANTS
  const ACTION_TYPES = {
    replaceIssue: "REPLACE_ISSUE",
    refundIssue: "REFUND_ISSUE",
    cascadeIssue: "CASCADE_ISSUE",
    noAction: "NO_ACTION",
    cancelIssue: "CANCEL_ISSUE",
  };

  // STATES
  const [inlineError, setInlineError] = useState({
    remarks_error: "",
    refund_amount: ""
  });
  const [loading, setLoading] = useState(false);
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [refundAmount, setRefundAmount] = useState("");

  const [selectedCancelType, setSelectedCancelType] = useState(ACTION_TYPES.noAction);

  // use this function to check the user entered remarks
  function checkRemarks() {
    if (shortDescription === "") {
      setInlineError((error) => ({
        ...error,
        remarks_error: "Please enter short description",
      }));
      return false;
    }
    return true;
  }

  // use this function to check the refund amount
  function checkRefund() {
    if (refundAmount === "") {
      setInlineError((error) => ({
        ...error,
        refund_amount: "Please enter refund amount",
      }));
      return false;
    }
    return true;
  }

  async function onSubmit() {
    if (selectedCancelType === ACTION_TYPES.refundIssue && !checkRefund() && !checkRemarks()) {
      return;
    }
    if (!checkRemarks()) {
      return;
    }
    setLoading(true);
    const { context } = supportActionDetails;

    function getAction() {
      switch (selectedCancelType) {
        case ACTION_TYPES.replaceIssue: return "REPLACEMENT"
        case ACTION_TYPES.refundIssue: return "REFUND"
        case ACTION_TYPES.noAction: return "NO-ACTION"
        case ACTION_TYPES.cascadeIssue: return "CASCADED"
        case ACTION_TYPES.cancelIssue: return "CANCEL"
        default:
          break;
      }
    }

    const body = {
      "transaction_id": context.transaction_id,
      "respondent_action": selectedCancelType === ACTION_TYPES.cascadeIssue ? "CASCADED" : "RESOLVED",
      "action_triggered" : getAction(),
      "short_desc": shortDescription,
      "long_desc": longDescription,
      "updated_by": {
        "org": {
          "name": user?.organization
        },
        "contact": {
          "phone": user?.mobile,
          "email": user?.email
        },
        "person": {
          "name": user?.name
        }
      }
    }
    if(selectedCancelType === ACTION_TYPES.refundIssue){
      body.refund_amount = refundAmount
    }
    postCall(`/api/client/issue_response`, body)
      .then((resp) => {
        setLoading(false)
        if (resp.message?.ack?.status === "ACK") {
          onSuccess(context.transaction_id)
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

  return (
    <div className={styles.overlay}>
      <div className={styles.popup_card}>
        <div className={`${styles.card_header} display: flex`} style={{justifyContent: 'space-between'}}>
          <p className={styles.card_header_title}>Take Action</p>
          <div className="ms-auto">
            <CrossIcon
              width="20"
              height="20"
              color={ONDC_COLORS.SECONDARYCOLOR}
              style={{ cursor: "pointer" }}
              onClick={onClose}
            />
          </div>
        </div>

        <div className={`${styles.card_header}`}>
          <div className="display: flex">
            <CustomRadioButton
              disabled={loading}
              checked={selectedCancelType === ACTION_TYPES.noAction}
              onClick={() => {
                setSelectedCancelType(ACTION_TYPES.noAction);
                setInlineError((inlineError) => ({
                  ...inlineError,
                  remarks_error: "",
                  refund_amount: ""
                }));
              }}
            >
              <div className="px-3">
                <p className={styles.address_name_and_phone}>
                  No Action
                </p>
              </div>
            </CustomRadioButton>

            <CustomRadioButton
              disabled={loading}
              checked={selectedCancelType === ACTION_TYPES.cancelIssue}
              onClick={() => {
                setSelectedCancelType(ACTION_TYPES.cancelIssue);
                setInlineError((inlineError) => ({
                  ...inlineError,
                  remarks_error: "",
                  refund_amount: ""
                }));
              }}
            >
              <div className="px-3">
                <p className={styles.address_name_and_phone}>
                  Cancel
                </p>
              </div>
            </CustomRadioButton>

            <CustomRadioButton
              disabled={loading}
              checked={selectedCancelType === ACTION_TYPES.replaceIssue}
              onClick={() => {
                setSelectedCancelType(ACTION_TYPES.replaceIssue);
                setInlineError((inlineError) => ({
                  ...inlineError,
                  remarks_error: "",
                  refund_amount: ""
                }));
              }}
            >
              <div className="px-3">
                <p className={styles.address_name_and_phone}>Replace</p>
              </div>
            </CustomRadioButton>
            <CustomRadioButton
              disabled={loading}
              checked={selectedCancelType === ACTION_TYPES.refundIssue}
              onClick={() => {
                setSelectedCancelType(ACTION_TYPES.refundIssue);
                setInlineError((inlineError) => ({
                  ...inlineError,
                  remarks_error: "",
                  refund_amount: ""
                }));
              }}
            >
              <div className="px-3">
                <p className={styles.address_name_and_phone}>
                  Refund
                </p>
              </div>
            </CustomRadioButton>

          </div>
          <CustomRadioButton
            disabled={loading}
            checked={selectedCancelType === ACTION_TYPES.cascadeIssue}
            onClick={() => {
              setSelectedCancelType(ACTION_TYPES.cascadeIssue);
              setInlineError((inlineError) => ({
                ...inlineError,
                remarks_error: "",
                refund_amount: ""
              }));
            }}
          >
            <div className="px-3">
              <p className={styles.address_name_and_phone}>
                Cascade
              </p>
            </div>
          </CustomRadioButton>

        </div>



        <div className={styles.card_body}>

          <div className="py-1 flex flex-col">
            <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Short Description
              <span className="text-[#FF0000]"> *</span>
            </label>
            <CssTextField
              type={"input"}
              className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              required={true}
              size="small"
              autoComplete="off"
              placeholder={"Short description"}
              value={shortDescription}
              onChange={(e) =>
                setShortDescription(e.target.value)
              }
              inputProps={{
                maxLength: 50
              }}
            />
            {inlineError.remarks_error && (
              <ErrorMessage>{inlineError.remarks_error}</ErrorMessage>
            )}
            <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Long Description
            </label>
            <CssTextField
              type={"input"}
              className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Long description"}
              value={longDescription}
              onChange={(e) =>
                setLongDescription(e.target.value)
              }
            />
          </div>

          {selectedCancelType === ACTION_TYPES.refundIssue &&
            <div>
              <label className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
                Refund Amount
                <span className="text-[#FF0000]"> *</span>
              </label>
              <CssTextField
                type={"number"}
                className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
                required={true}
                size="small"
                autoComplete="off"
                placeholder={"Refund Amount"}
                value={refundAmount}
                onChange={(e) =>
                  setRefundAmount(e.target.value)
                }
                inputProps={{
                  maxLength: 6
                }}
              />
              {inlineError.refund_amount && (
                <ErrorMessage>{inlineError.refund_amount}</ErrorMessage>
              )}
            </div>
          }

        </div>

        <div
          className={`${styles.card_footer}`}
        >
          <Button
            type="button"
            disabled={loading}
            title="Cancel"
            className="text-black"
            onClick={() => onClose()}
          />
          <Button
            disabled={loading}
            type="button"
            title="Submit"
            variant="contained"
            className="!ml-5"
            onClick={() =>  onSubmit()}
          />
        </div>
      </div>
    </div>
  );
}
