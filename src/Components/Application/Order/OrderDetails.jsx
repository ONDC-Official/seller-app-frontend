import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import moment from "moment";
import useCancellablePromise from "../../../Api/cancelRequest";
import { getCall } from "../../../Api/axios";
import MoreVert from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { getFulfillmentData, getFullAddress } from "./../../../utils/orders.js";

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const { cancellablePromise } = useCancellablePromise();
  const params = useParams();

  const getOrder = async () => {
    const url = `/api/orders/${params?.id}`;
    const res = await cancellablePromise(getCall(url));
    setOrder(res.data.attributes);
  };

  useEffect(() => {
    if (params.id) getOrder();
  }, [params]);

  const cardClass = `border-2 border-gray-200 rounded-lg p-2 bg-slate-50`;

  const total_order_price = order?.quote?.price?.value;
  const price_breakup = order?.quote?.breakup;
  const delivery_charges = 0;
  const total_base_cost = 0;
  if (price_breakup) {
    const delivery_charges_object = price_breakup?.filter(b => b?.type["@ondc/org/title_type"] == "delivery");

    if (delivery_charges_object && delivery_charges_object?.length > 0) {
      delivery_charges = delivery_charges_object[0]?.price?.value;
    }

    const order_items = price_breakup?.filter(b => b?.type["@ondc/org/title_type"] == "item");
    if (order_items && order_items?.length > 0) {
      order_items?.forEach(o => {
        total_base_cost += o?.price?.value;
      })
    }
  }

  const fulfillments = order?.fulfillments;
  let delivery_info = {};
  if (fulfillments) {
    delivery_info = getFulfillmentData(fulfillments, "Delivery");
  }

  return (
    <div className="flex flex-col h-screen w-screen py-2 px-8">
      <div className={`${cardClass} my-4 p-4`}>
        <div className="flex justify-between">
          <p className="text-lg font-semibold mb-2">Order Summary</p>
          {/* <span className="bg-slate-100 p-2 rounded-lg">
            <p className="text-sm font-normal text-amber-400">On the way</p>
          </span> */}
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-base font-normal">Order ID</p>
          <p className="text-base font-normal">{order?.order_id}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-base font-normal">Created On</p>
          <p className="text-base font-normal">
            {moment(order?.createdAt).format("MM-DD-YYYY")}{" "}
            {moment(order?.createdAt).format("hh:mm a")}
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
          <p className="text-base font-normal">{total_base_cost}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-base font-normal">Total Taxes</p>
          <p className="text-base font-normal">-</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-base font-normal">Total Delivery Fee</p>
          <p className="text-base font-normal">{delivery_charges}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-base font-normal">Total Order Fee</p>
          <p className="text-base font-normal">{total_order_price}</p>
        </div>
      </div>
      <div className={`${cardClass}`}>
        <OrderItemsSummaryCard orderItems={order?.order_items?.data} />
      </div>
      <div className={`${cardClass} my-4 p-4`}>
        <div className="flex h-full">
          <div className="flex-1 mr-8">
            <p className="text-lg font-semibold mb-2">Delivery Address</p>
            <div className="flex flex-col justify-between my-3">
              <p className="text-lg font-medium">
                {" "}
                {delivery_info?.end?.location?.name}{", "}
                {delivery_info?.end?.location?.door}{", "}
                {delivery_info?.end?.location?.building}{", "}
                {delivery_info?.end?.location?.street}{", "}
                {delivery_info?.end?.location?.city}{", "}
              </p>
              <p>{delivery_info?.end?.location?.state}</p>
              <p>{delivery_info?.end?.location?.area_code}</p>
            </div>
          </div>
          <Divider orientation="vertical" />
          <div className="flex-1 ml-8">
            <p className="text-lg font-semibold mb-2">Billing Address</p>
            <div className="flex flex-col justify-between my-3">
              <p className="text-lg font-medium">
                {" "}
                {order?.billing?.address?.name}{", "}
                {order?.billing?.address?.door}{", "}
                {order?.billing?.address?.building}{", "}
                {order?.billing?.address?.street}{", "}
                {order?.billing?.address?.city}
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
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Name : &nbsp;</p>
              <p className="text-sm font-medium">
                {delivery_info?.end?.person?.name}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Mobile : &nbsp;</p>
              <p className="text-sm font-medium">
                +91 {delivery_info?.end?.contact?.phone}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Email : &nbsp;</p>
              <p className="text-sm font-medium">
                {delivery_info?.end?.contact?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderItemsSummaryCard = (props) => {
  const [open, setOpen] = React.useState(false);

  let order_items = [];
  props?.orderItems?.map((item) => {
    order_items.push(item.attributes);
  });

  const cols = [
    { id: "url name", align: "left", minWidth: 50, label: "Items Summary" },
    { id: "qty", align: "center", minWidth: "auto", label: "Qty" },
    { id: "price", align: "center", minWidth: "50", label: "Price" },
    {
      id: "status",
      align: "center",
      minWidth: "50",
      label: "Fulfilment status",
    },
    { id: "totalPrice", align: "right", minWidth: "50", label: "Total Price" },
    { id: "action", align: "right", minWidth: "50", label: "Actions" },
  ];

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

    return (
      <>
        <Button onClick={(e) => handleClick(e)}>
          <MoreVert />
        </Button>
        <Menu
          id="card-actions-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem style={{ padding: 6 }} onClick={() => {}}>
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
        <TableRow {...otherProps} sx={{ "& > *": { borderBottom: "unset" } }}>
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
                let product = order_item.product.data.attributes;
                return (
                  <ExpandableTableRow
                    sx={{ "& > *": { borderBottom: "unset" } }}
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
                                  {product.name}
                                </span>
                                <span style={{ fontSize: 14 }}>
                                  {product.SKUCode}
                                </span>
                              </div>
                            </div>
                          ) : col.id === "price" ? (
                            <div>₹ {product.price.toLocaleString()}</div>
                          ) : col.id === "action" ? (
                            <div style={{ cursor: "pointer" }}>
                              <ThreeDotsMenu row={order_item} />
                            </div>
                          ) : col.id === "totalPrice" ? (
                            <div>
                              ₹{" "}
                              {(
                                product.price * order_item["qty"]
                              ).toLocaleString()}
                            </div>
                          ) : (
                            <span>{order_item[col.id]}</span>
                          )}
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
