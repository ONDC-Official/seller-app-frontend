import React, { useEffect, useState } from "react";
import {
  Button,
  MenuItem,
  Modal,
  Select
} from "@mui/material";
import { getCall, postCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";
import { FULFILLMENT_STATUS } from "./order-fulfilment-status";

const UpdateOrderStatus = (props) => {
  const { showModal, handleCloseModal, data, setloading, loading, setOrder, order } = props;
  const [highlightedOptions, setHighlightedOptions] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const updateStatus = () => {
    if (!selectedStatus.fulfillmentStatus) {
      // Show validation error message
      cogoToast.error("Please select a status before updating.");
      return;
    }
    postCall(`/api/v1/orders/${order?.orderId}/fulfillment/status`, {
      fulfillmentId: data?.id,
      fulfillmentType: "Delivery",
      newState: selectedStatus.fulfillmentStatus
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
    handleCloseModal();
  };

  useEffect(() => {
    if (data) {
      const currentSeq = FULFILLMENT_STATUS.find(
        (status) => status.fulfillmentStatus === data.state.descriptor.code
      )?.seq;

      if (currentSeq) {
        const options = FULFILLMENT_STATUS.filter(
          (status) => status.seq > currentSeq
        );
        setHighlightedOptions(options);
      }
    }
  }, [data]);

  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => {
          handleCloseModal();
        }}
        width={100}
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

          <div>
            <div className="mt-5">
              <b>{data?.title}</b>
            </div>
            <div className="flex justify-between mt-5">
              <div style={{ width: 300 }} className="mr-10">
                <div className="mt-3 mb-3 font-semibold">Fulfillment Id:</div>
                {data?.id}
              </div>
              <div style={{ width: 300 }}>
                <div className="mt-3 mb-3 font-semibold ">Current Status:</div>
                {data?.state.descriptor.code}
              </div>
              <div style={{ width: 300 }}>
                <div className="mt-3 mb-3 font-semibold ">Status:</div>
                <Select
                  style={{ width: 300 }}
                  value={selectedStatus.fulfillmentStatus}
                  onChange={(event) => setSelectedStatus(event.target.value)} // Update selectedStatus on change
                >
                  {FULFILLMENT_STATUS.map((status) => (
                    <MenuItem
                      key={status.fulfillmentStatus}
                      value={status}
                      disabled={!highlightedOptions.includes(status)}
                    >
                      {status.fulfillmentStatus}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>

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
