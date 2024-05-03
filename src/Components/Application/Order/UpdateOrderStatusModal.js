import React, { useEffect, useState } from "react";
import {
  Button,
  MenuItem,
  Modal,
  Select
} from "@mui/material";
import { getCall, postCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";
import { DELIVERY_FULFILLMENT_STATUS, RTO_FULFILLMENT_STATUS } from "./order-fulfillment-status";
import { RTO_REASONS } from "./rto-reasons";

const FulfillmentRow = ({ data, type, highlightedOptions, selectedStatus, setSelectedStatus, setSelectedReason, selectedReason, updateStatus }) => (
  <div>
    {data && (
      <div>
        <div className="flex justify-between mt-5">
          <div style={{ width: 300 }} className="mr-10">
            {data.id}
          </div>
          <div style={{ width: 300 }}>
            {data.state?.descriptor?.code} {/* Added additional check */}
          </div>
          <div style={{ width: 300 }}>
            <Select
              style={{ width: 300 }}
              onChange={(event) => setSelectedStatus(event.target.value)}
            >
              {(type === 'delivery' ? DELIVERY_FULFILLMENT_STATUS : RTO_FULFILLMENT_STATUS).map((status) => (
                <MenuItem
                  key={status.fulfillmentStatus}
                  value={status}
                  disabled={!highlightedOptions.includes(status) ||
                    data.state?.descriptor?.code === 'Cancelled' ||
                    data.state?.descriptor?.code === 'RTO-Delivered' ||
                    data.state?.descriptor?.code === 'RTO-Disposed'
                  }
                >
                  {status.fulfillmentStatus}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="flex w-full justify-end">
          {selectedStatus?.fulfillmentStatus === "RTO-Initiated" && (
            <div style={{ width: 300 }}>
              <div className="mt-3 mb-3 font-semibold ">Reason:</div>
              <Select
                style={{ width: 300 }}
                onChange={(event) => setSelectedReason(event.target.value)}
              >
                {RTO_REASONS.map((status) => (
                  <MenuItem
                    key={status.key}
                    value={status.key}
                  >
                    {status.value}
                  </MenuItem>
                ))}
              </Select>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);


const UpdateOrderStatus = (props) => {
  const { showModal, handleCloseModal, rtoData, deliveryData, setloading, loading, setOrder, order } = props;
  const [highlightedOptions, setHighlightedOptions] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const updateStatus = () => {
    if (!selectedStatus.fulfillmentStatus) {
      // Show validation error message
      cogoToast.error("Please select a status before updating.");
      return;
    }
    // Validate both the main status and the additional reason
    if (selectedStatus.fulfillmentStatus === "RTO-Initiated" && !selectedReason) {
      cogoToast.error("Please select a reason to Initiate the RTO.");
      return;
    }
    postCall(`/api/v1/orders/${order?.orderId}/fulfillment/status`, {
      fulfillmentId: (selectedStatus.fulfillmentType === 'Delivery' || selectedStatus.fulfillmentStatus === 'RTO-Initiated') ? deliveryData?.id : rtoData?.id,
      fulfillmentType: selectedStatus.fulfillmentType,
      newState: selectedStatus.fulfillmentStatus,
      reasonId: selectedReason
    })
      .then((resp) => {
        let orderData = JSON.parse(JSON.stringify(order));
        orderData.state = selectedStatus.orderStatus;
        setOrder(orderData);
        cogoToast.success("Order Status Successfully Updated!");
        setloading({ ...loading, update_order_loading: false });
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
        setloading({ ...loading, update_order_loading: false });
        cogoToast.error(error.response.data.error);
      });
    setSelectedStatus("");
    setSelectedReason("");
    handleCloseModal();
  };

  useEffect(() => {
    if (deliveryData) {
      const currentSeq = DELIVERY_FULFILLMENT_STATUS.find(
        (status) => status.fulfillmentStatus === deliveryData?.state?.descriptor.code
      )?.seq;

      if (currentSeq) {
        const options = DELIVERY_FULFILLMENT_STATUS.filter(
          (status) => status.seq > currentSeq
        );
        setHighlightedOptions(options);
      }
    }
  }, [deliveryData]);

  useEffect(() => {
    if (rtoData) {
      const currentSeq = RTO_FULFILLMENT_STATUS.find(
        (status) => status.fulfillmentStatus === rtoData?.state?.descriptor.code
      )?.seq;

      if (currentSeq) {
        const options = RTO_FULFILLMENT_STATUS.filter(
          (status) => status.seq > currentSeq
        );
        setHighlightedOptions(options);
      }
    }
  }, [rtoData]);

  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => {
          handleCloseModal();
        }}
        width={100}
        BackdropProps={{
          onClick: () => {
            setSelectedStatus("");
            setSelectedReason("");
            handleCloseModal();
          }
        }}
      >
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
          <p className="font-semibold text-xl" style={{ marginBottom: 10 }}>
            Update Status
          </p>
          <div className="flex justify-between mt-5">
            <div style={{ width: 300 }} className="mr-10">
              <div className="mt-3 mb-3 font-semibold">Fulfillment Id:</div>
            </div>
            <div style={{ width: 300 }}>
              <div className="mt-3 mb-3 font-semibold ">Current Status:</div>
            </div>
            <div style={{ width: 300 }}>
              <div className="mt-3 mb-3 font-semibold ">Status:</div>
            </div>
          </div>
          {deliveryData &&
            <FulfillmentRow
              data={deliveryData}
              type="delivery"
              highlightedOptions={highlightedOptions}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              setSelectedReason={setSelectedReason}
              selectedReason={selectedReason}
              updateStatus={updateStatus}
            />
          }
          {rtoData && Object.keys(rtoData).length > 0 && (
            <FulfillmentRow
              data={rtoData}
              type="rto"
              highlightedOptions={highlightedOptions}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              setSelectedReason={setSelectedReason}
              selectedReason={selectedReason}
              updateStatus={updateStatus}
            />
          )}
          <div className="flex justify-end mt-4">
            <Button
              variant="outlined"
              color="primary"
              onClick={updateStatus}
            >Update Status
            </Button>
            <Button
              sx={{ marginLeft: 2 }}
              color="primary"
              onClick={() => {
                setSelectedStatus("");
                setSelectedReason("");
                handleCloseModal();
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateOrderStatus;
