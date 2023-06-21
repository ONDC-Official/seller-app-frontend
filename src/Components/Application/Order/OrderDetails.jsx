import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  MenuItem,
  Button,
  Menu,
  CircularProgress,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import moment from "moment";
import useCancellablePromise from "../../../Api/cancelRequest";
import { getCall, postCall } from "../../../Api/axios";
import MoreVert from "@mui/icons-material/MoreVert";
import {
  getFulfillmentData,
  getShortAddress,
} from "./../../../utils/orders.js";
import cogoToast from "cogo-toast";
import { convertDateInStandardFormat } from "../../../utils/formatting/date";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import { Tooltip } from "@material-ui/core";

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const [user, setUser] = React.useState();
  const { cancellablePromise } = useCancellablePromise();
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setloading] = useState({
    accept_order_loading: false,
    cancel_order_loading: false,
  });

  const getOrder = async () => {
    const url = `/api/v1/orders/${params?.id}`;
    getCall(url).then((resp) => {
      console.log(resp);
      setOrder(resp);
    });
  };

  useEffect(() => {
    if (params.id) getOrder();
  }, [params]);

  const getUser = async (id) => {
    const url = `/api/v1/users/${id}`;
    const res = await getCall(url);
    setUser(res[0]);
    return res[0];
  };

  React.useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    getUser(user_id);
  }, []);

  const cardClass = `border-2 border-gray-200 rounded-lg p-2 bg-slate-50`;

  const total_order_price = order?.quote?.price?.value || 0;
  const price_breakup = order?.quote?.breakup;
  let delivery_charges = 0;
  let total_base_cost = 0;
  if (price_breakup) {
    const delivery_charges_object = price_breakup?.filter(
      (b) => b["@ondc/org/title_type"] == "delivery"
    );

    if (delivery_charges_object && delivery_charges_object?.length > 0) {
      delivery_charges = delivery_charges_object[0]?.price?.value;
    }

    const order_items = price_breakup?.filter(
      (b) => b["@ondc/org/title_type"] == "item"
    );
    if (order_items && order_items?.length > 0) {
      order_items?.forEach((o) => {
        total_base_cost += parseFloat(o?.price?.value);
      });
    }
  }

  const fulfillments = order?.fulfillments;
  let delivery_info = {};
  if (fulfillments) {
    delivery_info = getFulfillmentData(fulfillments, "Delivery");
  }

  const handleCompleteOrderCancel = (order_id) => {
    setloading({ ...loading, cancel_order_loading: true });
    postCall(`/api/v1/orders/${order_id}/cancel`, {
      cancellation_reason_id: "004",
    })
      .then((resp) => {
        cogoToast.success("Order cancelled successfully!");
        setInterval(function () {
          // getOrder();
          let orderData = JSON.parse(JSON.stringify(order));
          orderData.state = resp.state;
          setOrder(orderData);
          setloading({ ...loading, cancel_order_loading: false });
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        cogoToast.error(error.response.data.error);
        setInterval(function () {
          setloading({ ...loading, cancel_order_loading: false });
        }, 3000);
      });
  };

  const handleCompleteOrderAccept = (order_id) => {
    setloading({ ...loading, accept_order_loading: true });
    const url = `/api/v1/orders/${order_id}/status`;
    postCall(url, {
      status: "Accepted",
    })
      .then((resp) => {
        cogoToast.success("Order accepted successfully!");

        setInterval(function () {
          // getOrder();
          let orderData = JSON.parse(JSON.stringify(order));
          orderData.state = resp.state;
          setOrder(orderData);
          setloading({ ...loading, accept_order_loading: false });
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        cogoToast.error(error.response.data.error);
        setInterval(function () {
          setloading({ ...loading, accept_order_loading: false });
        }, 3000);
      });
  };

  const renderOrderStatus = (order_details) => {
    if (
      order_details?.state == "Created" &&
      user?.role?.name !== "Super Admin"
    ) {
      return (
        <div style={{ display: "flex", direction: "row", gap: "8px" }}>
          <Button
            className="!capitalize"
            variant="contained"
            onClick={() => handleCompleteOrderAccept(order_details?._id)}
            disabled={
              loading.accept_order_loading || loading.cancel_order_loading
            }
          >
            {loading.accept_order_loading ? (
              <>
                Accept Order&nbsp;&nbsp;
                <CircularProgress size={18} sx={{ color: "white" }} />
              </>
            ) : (
              <span>Accept Order</span>
            )}
          </Button>
          <Button
            variant="contained"
            className="!capitalize"
            onClick={() => handleCompleteOrderCancel(order_details?._id)}
            disabled={
              loading.cancel_order_loading || loading.accept_order_loading
            }
          >
            {loading.cancel_order_loading ? (
              <>
                Cancel Order&nbsp;&nbsp;
                <CircularProgress size={18} sx={{ color: "white" }} />
              </>
            ) : (
              <span>Cancel Order</span>
            )}
          </Button>
        </div>
      );
    } else {
      return (
        <span className="bg-slate-100 p-2 rounded-lg">
          <p className="text-sm font-normal text-amber-400">
            {order_details?.state}
          </p>
        </span>
      );
    }
  };

  return (
    <div className="container mx-auto my-8">
      <BackNavigationButton onClick={() => navigate("/application/orders")} />
      <div className="flex flex-col">
        <div className={`${cardClass} my-4 p-4`}>
          <div className="flex justify-between">
            <p className="text-lg font-semibold mb-2">Order Summary</p>
            {renderOrderStatus(order)}
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Order ID</p>
            <p className="text-base font-normal">{order?.orderId}</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Created On</p>
            <p className="text-base font-normal">
              {convertDateInStandardFormat(order?.createdAt)}
            </p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Modified On</p>
            <p className="text-base font-normal">
              {convertDateInStandardFormat(order?.updatedAt)}
            </p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Order Status</p>
            <p className="text-base font-normal">{order?.state}</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Payment Method</p>
            <p className="text-base font-normal">{order?.payment.type}</p>
          </div>
          <div className="flex justify-between mt-3 mb-3">
            <p className="text-base font-normal">Buyer name</p>
            <p className="text-md font-normal">{order?.billing?.name}</p>
          </div>
          <Divider orientation="horizontal" />
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Total Base Price</p>
            <p className="text-base font-normal">
              {parseFloat(total_base_cost).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Total Taxes</p>
            <p className="text-base font-normal">-</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Total Delivery Fee</p>
            <p className="text-base font-normal">
              {parseFloat(delivery_charges).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-base font-normal">Total Price</p>
            <p className="text-base font-normal">
              {total_order_price
                ? parseFloat(total_order_price).toFixed(2)
                : "-"}
            </p>
          </div>
        </div>
        <div className={`${cardClass}`}>
          <OrderItemsSummaryCard
            getOrder={getOrder}
            isSuperAdmin={user?.role?.name === "Super Admin" || false}
            orderItems={order?.items}
            order={order}
          />
        </div>
        <div className={`${cardClass} my-4 p-4`}>
          <div className="flex h-full">
            <div className="flex-1 mr-8">
              <p className="text-lg font-semibold mb-2">Delivery Address</p>
              <div className="flex flex-col justify-between my-3">
                <p className="text-lg font-medium">
                  {getShortAddress(delivery_info?.end?.location?.address)}
                </p>
                <p>{delivery_info?.end?.location?.address?.state}</p>
                <p>{delivery_info?.end?.location?.address?.area_code}</p>
              </div>
            </div>
            <Divider orientation="vertical" />
            <div className="flex-1 ml-8">
              <p className="text-lg font-semibold mb-2">Billing Address</p>
              <div className="flex flex-col justify-between my-3">
                <p className="text-lg font-medium">
                  {getShortAddress(order?.billing?.address)}
                </p>
                <p>{order?.billing?.address?.state}</p>
                <p>{order?.billing?.address?.area_code}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full">
            <div className={`${cardClass} my-4 p-4`}>
              <p className="text-lg font-semibold mb-2">Customer Details</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold">Name : &nbsp;</p>
                <p className="text-sm font-medium">
                  {delivery_info?.end?.person?.name}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold">Mobile Number : &nbsp;</p>
                <p className="text-sm font-medium">
                  +91 {delivery_info?.end?.contact?.phone}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold">Email : &nbsp;</p>
                <p className="text-sm font-medium">
                  {delivery_info?.end?.contact?.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const isOrderCancellable = (order_state) => {
  return order_state != "Completed" || order_state != "Cancelled";
};

const OrderItemsSummaryCard = (props) => {
  const [open, setOpen] = React.useState(false);

  let order_items = [];
  props?.orderItems?.map((item) => {
    order_items.push(item);
  });

  let cols = [
    { id: "url name", align: "left", minWidth: 50, label: "Items Summary" },
    { id: "quantity", align: "center", minWidth: "auto", label: "Qty" },
    { id: "price", align: "center", minWidth: "50", label: "Price" },
    {
      id: "state",
      align: "center",
      minWidth: "50",
      label: "Fulfillment Status",
    },
    { id: "totalPrice", align: "right", minWidth: "50", label: "Total Amount" },
  ];

  if (!props.isSuperAdmin) {
    cols.push({
      id: "action",
      align: "right",
      minWidth: "50",
      label: "Actions",
    });
  } else {
  }

  const rows = [
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPfYkxijCVG7bPceYtABArFY-boMcr12-Fw&usqp=CAU",
      name: "Google Pixel",
      qty: 1,
      price: 10000,
      totalPrice: 10000,
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPfYkxijCVG7bPceYtABArFY-boMcr12-Fw&usqp=CAU",
      name: "Google Pixel 2",
      qty: 2,
      price: 10000,
      totalPrice: 20000,
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPfYkxijCVG7bPceYtABArFY-boMcr12-Fw&usqp=CAU",
      name: "Samsung",
      qty: 1,
      price: 5000,
      totalPrice: 5000,
    },
  ];

  const ThreeDotsMenu = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    function handleMenuClick(data) {
      console.log(data);
    }

    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const { data } = props;

    const handlePartialOrderCancel = (order_id, order_item_id) => {
      postCall(`/api/v1/orders/${order_id}/item/cancel`, [
        { cancellation_reason_id: "004", id: order_item_id },
      ])
        .then((resp) => {
          cogoToast.success("Product cancelled successfully!");
          props.getOrder();
          handleClose();
        })
        .catch((error) => {
          console.log(error);
          cogoToast.error(error.response.data.error);
        });
    };

    return (
      <>
        <Tooltip title="Action">
          <Button onClick={(e) => handleClick(e)}>
            <MoreVert />
          </Button>
        </Tooltip>
        <Menu
          id="card-actions-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            style={{ padding: 6 }}
            onClick={() =>
              handlePartialOrderCancel(props?.order_id, props?.row?.id)
            }
          >
            Cancel Order
          </MenuItem>
        </Menu>
      </>
    );
  };

  const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
      <>
        <TableRow
          {...otherProps}
          sx={{ "& > *": { borderBottom: "1px solid #E0E0E0" } }}
        >
          <TableCell padding="checkbox">
            <IconButton onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          {children}
        </TableRow>
        {isExpanded && (
          <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell padding="checkbox" />
            {expandComponent}
          </TableRow>
        )}
      </>
    );
  };

  return (
    <div>
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell></TableCell>
                {cols.map((col) => (
                  <TableCell
                    key={col.id}
                    align={col.align}
                    style={{
                      minWidth: col.minWidth,
                      fontWeight: 600,
                      fontSize: 16,
                    }}
                  >
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {order_items?.map((order_item) => {
                let product = order_item?.details;
                return (
                  <ExpandableTableRow
                    sx={{ "& > *": { borderBottom: "1px solid #e0e0e0" } }}
                    key={order_item.order_id}
                    expandComponent={
                      <TableCell colSpan="7">
                        Product's additional information
                      </TableCell>
                    }
                  >
                    {cols.map((col) => {
                      return (
                        <TableCell align={col.align}>
                          {col.id == "url name" ? (
                            <div className="flex items-center">
                              {/* <img
                                //   src={row[col.id.split(" ")[0]]}
                                style={{
                                  height: 45,
                                  width: 45,
                                  marginRight: 20,
                                }}
                              /> */}
                              {/* <span>{row[col.id.split(" ")[1]]}</span> */}
                              <div className="flex flex-col">
                                <span style={{ fontWeight: 600 }}>
                                  {product?.productName}
                                </span>
                                <span style={{ fontSize: 14 }}>
                                  {product?.HSNCode}
                                </span>
                              </div>
                            </div>
                          ) : col.id === "state" ? (
                            <div>{order_item?.state}</div>
                          ) : col.id === "price" ? (
                            <div>
                              ₹ {product?.MRP?.toFixed(2).toLocaleString()}
                            </div>
                          ) : col.id === "action" ? (
                            <div style={{ cursor: "pointer" }}>
                              {isOrderCancellable(props?.order?.state) &&
                              order_item?.state !== "Cancelled" ? (
                                <ThreeDotsMenu
                                  order_id={props?.order?._id}
                                  row={order_item}
                                  getOrder={props.getOrder}
                                />
                              ) : (
                                // props?.order?.state
                                <></>
                              )}
                            </div>
                          ) : col.id === "totalPrice" ? (
                            <div>
                              ₹{" "}
                              {(product?.MRP * order_item?.quantity?.count)
                                .toFixed(2)
                                .toLocaleString()}
                            </div>
                          ) : col.id === "quantity" ? (
                            <span>{order_item[col.id]?.count}</span>
                          ) : null}
                        </TableCell>
                      );
                    })}
                  </ExpandableTableRow>
                );
              })}

              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={6}
                >
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                      <Typography variant="h6" gutterBottom component="div">
                        History
                      </Typography>
                      <Table size="small" aria-label="purchases">
                        <TableHead>
                          <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Total price ($)</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((historyRow) => (
                            <TableRow key={historyRow.date}>
                              <TableCell component="th" scope="row">
                                {historyRow.date}
                              </TableCell>
                              <TableCell>{historyRow.customerId}</TableCell>
                              <TableCell align="right">
                                {historyRow.amount}
                              </TableCell>
                              <TableCell align="right">100</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default OrderDetails;
