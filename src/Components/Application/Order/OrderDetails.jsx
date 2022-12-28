import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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

const OrderDetails = () => {
  const params = useParams();
  const { state } = useLocation();
  const { order } = state;

  const cardClass = `border-2 border-gray-200 rounded-lg p-2 bg-slate-50`;

  return (
    <div className="flex flex-col h-screen w-screen py-2 px-8">
      <div className={`${cardClass} my-4 p-4`}>
        <div className="flex justify-between">
          <p className="text-lg font-semibold mb-2">Order Summary</p>
          <span className="bg-slate-100	p-2 rounded-lg	">
            <p className="text-sm font-medium text-amber-400">On the way</p>
          </span>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-lg font-medium">Order ID</p>
          <p className="text-md font-normal">{order.order_id}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-lg font-medium">Order Status</p>
          <p className="text-md font-normal">{order.state}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-lg font-medium">Order Created</p>
          <p className="text-md font-normal">
            {moment(order.createdAt).format("MM-DD-YYYY")}
          </p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-lg font-medium">Payment Method</p>
          <p className="text-md font-normal">{order.payment.type}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-lg font-medium">Buyer name</p>
          <p className="text-md font-normal">John</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-lg font-medium">Order time</p>
          <p className="text-md font-normal">
            {moment(order.createdAt).format("hh:mm a")}
          </p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-lg font-medium">Subtotal</p>
          <p className="text-md font-normal">₹ {order.payment.paid_amount}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-lg font-medium">Delivery Fee</p>
          <p className="text-md font-normal">₹ 750</p>
        </div>
      </div>
      <div className={`${cardClass}`}>
        <OrderItemsSummaryCard orderItems={order.order_items.data} />
      </div>
      <div className={`${cardClass} my-4 p-4`}>
        <div className="flex h-full">
          <div className="flex-1 mr-8">
            <p className="text-xl font-semibold mb-2">Delivery Details</p>
            <div className="flex justify-between my-3">
              <p className="text-lg font-medium">Address line</p>
              <p className="text-sm font-normal">
                {order.delivery_info.location.address.building}
              </p>
            </div>
            <div className="flex justify-between my-3">
              <p className="text-lg font-medium">Flat Building Name</p>
              <p className="text-sm font-normal">
                {order.delivery_info.location.address.building}
              </p>
            </div>
            <div className="flex justify-between my-3">
              <p className="text-lg font-medium">Street Name</p>
              <p className="text-sm font-normal">
                {order.delivery_info.location.address.street}
              </p>
            </div>
            <div className="flex justify-between my-3">
              <p className="text-lg font-medium">PostalCode</p>
              <p className="text-sm font-normal">
                {order.delivery_info.location.address.area_code}
              </p>
            </div>
          </div>
          <Divider orientation="vertical" />
          <div className="flex-1 ml-8">
            <p className="text-xl font-semibold mb-2">Billing Details</p>
            <div className="flex justify-between my-3">
              <p className="text-lg font-medium">Address line</p>
              <p className="text-sm font-normal">
                {order.billing.address.building}
              </p>
            </div>
            <div className="flex justify-between my-3">
              <p className="text-lg font-medium">Flat Building Name</p>
              <p className="text-sm font-normal">
                {order.billing.address.building}
              </p>
            </div>
            <div className="flex justify-between my-3">
              <p className="text-lg font-medium">Street Name</p>
              <p className="text-sm font-normal">
                {order.billing.address.street}
              </p>
            </div>
            <div className="flex justify-between my-3">
              <p className="text-lg font-medium">PostalCode</p>
              <p className="text-sm font-normal">
                {order.billing.address.area_code}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-3/5 mr-6">
          <div className={`${cardClass} my-4 p-4`}>
            <p className="text-lg font-semibold mb-2">Customer Details</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold">Name : &nbsp;</p>
              <p className="text-sm font-medium">{order.delivery_info.name}</p>
            </div>
            <div className="flex items-center">
              <p className="text-lg font-semibold">Mobile : &nbsp;</p>
              <p className="text-sm font-medium">
                +91 {order.delivery_info.phone}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-lg font-semibold">Email : &nbsp;</p>
              <p className="text-sm font-medium">{order.delivery_info.email}</p>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <div className={`${cardClass} my-4 p-4`}>
            <div className="flex justify-between items-center	">
              <p className="text-md font-semibold">Total</p>
              <p className="text-sm font-medium">₹1950</p>
            </div>
            <div className="flex justify-between items-center	">
              <p className="text-md font-semibold">Total Base Price</p>
              <p className="text-sm font-medium">₹150</p>
            </div>
            <div className="flex justify-between items-center	">
              <p className="text-md font-semibold">Total Taxes</p>
              <p className="text-sm font-medium">₹190</p>
            </div>
            <div className="flex justify-between items-center	">
              <p className="text-md font-semibold">Total Delivery fee</p>
              <p className="text-sm font-medium">₹50</p>
            </div>
            <div className="flex justify-between items-center	">
              <p className="text-md font-semibold">Total Order fee</p>
              <p className="text-sm font-medium">₹10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderItemsSummaryCard = (props) => {
  const { orderItems } = props;
  const [open, setOpen] = React.useState(false);

  let order_items = [];
  props.orderItems.map((item) => {
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
              {order_items.map((order_item) => {
                let product = order_item.product.data.attributes;
                return (
                  <ExpandableTableRow
                    sx={{ "& > *": { borderBottom: "unset" } }}
                    key={order_item.order_id}
                    expandComponent={
                      <TableCell colSpan="5">
                        Product's additional information
                      </TableCell>
                    }
                  >
                    {cols.map((col) => {
                      return (
                        <TableCell align={col.align}>
                          {col.id == "url name" ? (
                            <div className="flex items-center">
                              <img
                                //   src={row[col.id.split(" ")[0]]}
                                style={{
                                  height: 45,
                                  width: 45,
                                  marginRight: 20,
                                }}
                              />
                              {/* <span>{row[col.id.split(" ")[1]]}</span> */}
                            </div>
                          ) : col.id === "price" ? (
                            <div>{product.price}</div>
                          ) : col.id === "totalPrice" ? (
                            <div>{product.price * order_item["qty"]}</div>
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
