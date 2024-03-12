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
import useStyles from "./style";
import CancelOrderModal from "./cancelOrderModal.jsx";
import UpdateOrderStatus from "./UpdateOrderStatusModal.js";

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const [user, setUser] = React.useState();
  const [organizationId, setOrganizationId] = React.useState();
  const [orgOnNetwork, setOrgOnNetwork] = React.useState(true);
  const [fulfillmentData, setFulfillmentData] = React.useState();
  const [isUpdateOrderModalOpen, setIsUpdateOrderModalOpen] = React.useState();
  const { cancellablePromise } = useCancellablePromise();
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setloading] = useState({
    accept_order_loading: false,
    cancel_order_loading: false,
    update_order_loading: false
  });

  const getOrder = async () => {
    const url = `/api/v1/orders/${params?.id}`;
    getCall(url).then((resp) => {
      setOrder(resp);
      setOrganizationId(resp.organization)
    });
  };

  const getOrgDetails = async () => {
    const orgUrl = `/api/v1/organizations/${order.organization}`;
    const res = await getCall(orgUrl);
    const onLogistic = res.providerDetail.storeDetails?.onNetworkLogistics ?? true;
    setOrgOnNetwork(onLogistic);
  };

  useEffect(() => {
    if (organizationId) {
      getOrgDetails();
    }
  }, [organizationId]);

  useEffect(() => {
    if (params.id) {
      getOrder();
    }
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

  const handleCloseStatusModal = () => {
    setIsUpdateOrderModalOpen(false)
    setloading({ ...loading, update_order_loading: false });

  }

  const handleCompleteOrderCancel = (order_uuid) => {
    setloading({ ...loading, cancel_order_loading: true });
    postCall(`/api/v1/orders/${order_uuid}/cancel`, {
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

  const handleCompleteOrderUpdate = (order_details) => {
    setloading({ ...loading, update_order_loading: true });
    const fulfillments = order_details?.fulfillments;
    let delivery_info = {};
    if (fulfillments) {
      delivery_info = getFulfillmentData(fulfillments, "Delivery");
    }
    setFulfillmentData(delivery_info); // Set fulfillment data
    setIsUpdateOrderModalOpen(true);
  };

  const handleCompleteOrderAccept = (order_uuid) => {
    setloading({ ...loading, accept_order_loading: true });
    const url = `/api/v1/orders/${order_uuid}/status`;
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
      order_details?.state === "Created" &&
      user?.role?.name !== "Super Admin"
    ) {
      return (
        <div style={{ display: "flex", direction: "row", gap: "8px" }}>
          {orgOnNetwork ? (
            <Button
              className="!capitalize"
              variant="contained"
              onClick={() => handleCompleteOrderAccept(order_details?._id)}
              disabled={
                loading.accept_order_loading ||
                loading.cancel_order_loading ||
                loading.update_order_loading
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
          ) : (
            <Button
              className="!capitalize"
              variant="contained"
              onClick={() => handleCompleteOrderUpdate(order_details)}
              disabled={
                loading.accept_order_loading ||
                loading.cancel_order_loading ||
                loading.update_order_loading
              }
            >
              {loading.update_order_loading ? (
                <>
                  Update Status&nbsp;&nbsp;
                  <CircularProgress size={18} sx={{ color: "white" }} />
                </>
              ) : (
                <span>Update Status</span>
              )}
            </Button>
          )}
          <Button
            variant="contained"
            className="!capitalize"
            onClick={() => handleCompleteOrderCancel(order_details?._id)}
            disabled={
              loading.cancel_order_loading ||
              loading.accept_order_loading ||
              loading.update_order_loading
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
          <UpdateOrderStatus
            showModal={isUpdateOrderModalOpen}
            handleCloseModal={() => handleCloseStatusModal()}
            data={fulfillmentData}
            setloading={setloading}
            loading={loading}
            setOrder={setOrder}
            order={order}
          />
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", direction: "row", gap: "8px" }}>
          <span className="bg-slate-100 p-2 rounded-lg">
            <p className="text-sm font-normal text-amber-400">
              {order_details?.state}
            </p>
          </span>
          {!orgOnNetwork && (
            <div>
              <Button
                className="!capitalize"
                variant="contained"
                onClick={() => handleCompleteOrderUpdate(order_details)}
                disabled={
                  loading.accept_order_loading ||
                  loading.cancel_order_loading ||
                  loading.update_order_loading
                }
              >
                {loading.update_order_loading ? (
                  <>
                    Update Status&nbsp;&nbsp;
                    <CircularProgress size={18} sx={{ color: "white" }} />
                  </>
                ) : (
                  <span>Update Status</span>
                )}
              </Button>
              <UpdateOrderStatus
                showModal={isUpdateOrderModalOpen}
                handleCloseModal={() => handleCloseStatusModal()}
                data={fulfillmentData}
                setloading={setloading}
                loading={loading}
                setOrder={setOrder}
                order={order}
              />
            </div>
          )}
        </div>
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

const isItemCustomization = (tags) => {
  let isCustomization = false;
  tags?.forEach((tag) => {
    if (tag.code === "type") {
      tag.list.forEach((listOption) => {
        if (listOption.code === "type" && listOption.value == "customization") {
          isCustomization = true;
          return true;
        }
      });
    }
  });
  return isCustomization;
};

const parseQuoteToGetItems = (orderDetails) => {
  let uuid = 0;
  const provided_by = orderDetails?.provider?.descriptor?.name;
  const breakup = orderDetails?.quote?.breakup;
  const all_items = breakup?.map((break_up_item) => {
    const items = orderDetails.items;
    const itemIndex = items.findIndex(
      (one) => one.id === break_up_item["@ondc/org/item_id"]
    );
    const item = itemIndex > -1 ? items[itemIndex] : null;
    let itemQuantity = item ? item?.quantity?.count : 0;
    let quantity = break_up_item["@ondc/org/item_quantity"]
      ? break_up_item["@ondc/org/item_quantity"]["count"]
      : 0;
    let textClass = "";
    let quantityMessage = "";
    if (quantity === 0) {
      if (break_up_item["@ondc/org/title_type"] === "item") {
        textClass = "text-error";
        quantityMessage = "Out of stock";

        if (itemIndex > -1) {
          items.splice(itemIndex, 1);
        }
      }
    } else if (quantity !== itemQuantity) {
      textClass =
        break_up_item["@ondc/org/title_type"] === "item" ? "text-amber" : "";
      quantityMessage = `Quantity: ${quantity}/${itemQuantity}`;
      if (item) {
        item.quantity.count = quantity;
      }
    } else {
      quantityMessage = `Quantity: ${quantity}`;
    }
    uuid = uuid + 1;
    return {
      id: break_up_item["@ondc/org/item_id"],
      title: break_up_item?.title,
      title_type: break_up_item["@ondc/org/title_type"],
      isCustomization: isItemCustomization(break_up_item?.item?.tags),
      isDelivery: break_up_item["@ondc/org/title_type"] === "delivery",
      parent_item_id: break_up_item?.item?.parent_item_id,
      price: Number(break_up_item.price?.value)?.toFixed(2),
      itemQuantity,
      quantity,
      provided_by,
      textClass,
      quantityMessage,
      uuid: uuid,
    };
  });
  let items = {};
  let delivery = {};
  all_items?.forEach((item) => {
    // for type item
    if (item.title_type === "item" && !item.isCustomization) {
      let key = item.parent_item_id || item.id;
      let price = {
        title: item.quantity + " * Base Price",
        value: item.price,
      };
      let prev_item_data = items[key];
      let addition_item_data = {
        title: item.title,
        id: item.id,
        quantity: item.quantity,
        price: price,
        totalPrice: item.quantity * item.price,
      };
      items[key] = { ...prev_item_data, ...addition_item_data };
    }
    if (item.title_type === "tax" && !item.isCustomization) {
      let key = item.parent_item_id || item.id;
      items[key] = items[key] || {};
      items[key]["tax"] = {
        title: item.title,
        value: item.price,
      };
    }
    if (item.title_type === "discount" && !item.isCustomization) {
      let key = item.parent_item_id || item.id;
      items[key] = items[key] || {};
      items[key]["discount"] = {
        title: item.title,
        value: item.price,
      };
    }

    //for customizations
    if (item.title_type === "item" && item.isCustomization) {
      let key = item.parent_item_id;
      items[key]["customizations"] = items[key]["customizations"] || {};
      let existing_data = items[key]["customizations"][item.id] || {};
      let customisation_details = {
        title: item.title,
        price: {
          title: item.quantity + " * Base Price",
          value: item.price,
        },
        quantityMessage: item.quantityMessage,
        textClass: item.textClass,
        quantity: item.quantity,
        cartQuantity: item.cartQuantity,
        totalPrice: item.quantity * item.price,
      };

      items[key]["customizations"][item.id] = {
        ...existing_data,
        ...customisation_details,
      };
    }
    if (item.title_type === "tax" && item.isCustomization) {
      let key = item.parent_item_id;
      items[key]["customizations"] = items[key]["customizations"] || {};
      items[key]["customizations"][item.id] =
        items[key]["customizations"][item.id] || {};
      items[key]["customizations"][item.id]["tax"] = {
        title: item.title,
        value: item.price,
      };
    }
    if (item.title_type === "discount" && item.isCustomization) {
      let key = item.parent_item_id;
      items[key]["customizations"] = items[key]["customizations"] || {};
      items[key]["customizations"][item.id] =
        items[key]["customizations"][item.id] || {};
      items[key]["customizations"][item.id]["discount"] = {
        title: item.title,
        value: item.price,
      };
    }
    //for delivery
    if (item.title_type === "delivery") {
      delivery["delivery"] = {
        title: item.title,
        value: item.price,
      };
    }
    if (item.title_type === "discount_f") {
      delivery["discount"] = {
        title: item.title,
        value: item.price,
      };
    }
    if (item.title_type === "tax_f") {
      delivery["tax"] = {
        title: item.title,
        value: item.price,
      };
    }
    if (item.title_type === "packing") {
      delivery["packing"] = {
        title: item.title,
        value: item.price,
      };
    }
    if (item.title_type === "discount") {
      if (item.isCustomization) {
        let id = item.parent_item_id;
      } else {
        let id = item.id;
        items[id]["discount"] = {
          title: item.title,
          value: item.price,
        };
      }
    }
    if (item.title_type === "misc") {
      delivery["misc"] = {
        title: item.title,
        value: item.price,
      };
    }
  });
  return items;
};

const OrderItemsSummaryCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const [itemToCancel, setItemToCancel] = React.useState(null);
  const [order, setOrder] = React.useState(props?.order);
  const classes = useStyles();

  let order_items = [];
  props?.orderItems?.map((item) => {
    order_items.push(item);
  });

  order_items = Object.values(parseQuoteToGetItems(order));

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

  useEffect(() => {
    setOrder(props?.order)
  }, [props?.order])

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

    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const { data } = props;

    const handlePartialOrderCancel = (data) => {
      setItemToCancel(data)
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
            onClick={() => {
              handlePartialOrderCancel({order_id: props.order_id, item: props.row})
             }
            }
          >
            Cancel Order
          </MenuItem>
        </Menu>
      </>
    );
  };

  const renderItem = (item) => {
    return cols.map((col) => {
      return (
        <TableCell align={col.align}>
          {col.id == "url name" ? (
            <div className="flex items-center">
              <div className="flex flex-col">
                <span style={{ fontWeight: 600 }}>{item?.title}</span>
              </div>
            </div>
          ) : col.id === "state" ? (
            <div>{item?.state}</div>
          ) : col.id === "price" ? (
            <div>₹ {item?.price?.value}</div>
          ) : col.id === "action" ? (
            <div style={{ cursor: "pointer" }}>
              {isOrderCancellable(order?.state) &&
              item?.state !== "Cancelled" ? (
                <ThreeDotsMenu
                  order_uuid={order?._id}
                  order_id={order?.orderId}
                  row={item}
                  getOrder={props.getOrder}
                />
              ) : (
                // props?.order?.state
                <></>
              )}
            </div>
          ) : col.id === "totalPrice" ? (
            <div>₹ {item.totalPrice}</div>
          ) : col.id === "quantity" ? (
            <span>{item?.quantity}</span>
          ) : null}
        </TableCell>
      );
    });
  };

  const renderItemDetails = (quote, qIndex, isCustomization) => {
    return (
      <div>
        <div
          className={classes.summaryQuoteItemContainer}
          key={`quote-${qIndex}-price`}
        >
          <Typography
            variant="body1"
            className={
              isCustomization
                ? classes.summaryCustomizationPriceLabel
                : classes.summaryItemPriceLabel
            }
          >
            {quote?.price?.title}
          </Typography>
          <Typography
            variant="body1"
            className={
              isCustomization
                ? classes.summaryCustomizationPriceValue
                : classes.summaryItemPriceValue
            }
          >
            {`₹${quote?.price?.value}`}
          </Typography>
        </div>
        {quote?.tax && (
          <div
            className={classes.summaryQuoteItemContainer}
            key={`quote-${qIndex}-tax`}
          >
            <Typography
              variant="body1"
              className={
                isCustomization
                  ? classes.summaryCustomizationTaxLabel
                  : classes.summaryItemTaxLabel
              }
            >
              {quote?.tax.title}
            </Typography>
            <Typography
              variant="body1"
              className={
                isCustomization
                  ? classes.summaryCustomizationPriceValue
                  : classes.summaryItemPriceValue
              }
            >
              {`₹${quote?.tax.value}`}
            </Typography>
          </div>
        )}
        {quote?.discount && (
          <div
            className={classes.summaryQuoteItemContainer}
            key={`quote-${qIndex}-discount`}
          >
            <Typography
              variant="body1"
              className={
                isCustomization
                  ? classes.summaryCustomizationDiscountLabel
                  : classes.summaryItemDiscountLabel
              }
            >
              {quote?.discount.title}
            </Typography>
            <Typography
              variant="body1"
              className={classes.summaryItemPriceValue}
            >
              {`₹${quote?.discount.value}`}
            </Typography>
          </div>
        )}
      </div>
    );
  };

  const renderItemAllDetails = (quote, qIndex) => {
    return (
      <div key={`quote-${qIndex}`}>
        <div
          className={classes.summaryQuoteItemContainer}
          key={`quote-${qIndex}-title`}
        >
          <Typography
            variant="body1"
            className={`${classes.summaryItemLabel} ${quote.textClass}`}
          >
            {/* {quote?.title} */}
            <p className={`${classes.ordered_from} ${quote.textClass}`}>
              {quote.quantityMessage}
            </p>
          </Typography>
        </div>
        {renderItemDetails(quote)}
        {quote?.customizations && (
          <div key={`quote-${qIndex}-customizations`}>
            <div
              className={classes.summaryQuoteItemContainer}
              key={`quote-${qIndex}-customizations`}
            >
              <Typography
                variant="body1"
                className={classes.summaryItemPriceLabel}
              >
                Customizations
              </Typography>
            </div>
            {Object.values(quote?.customizations).map(
              (customization, cIndex) => (
                <div>
                  <div
                    className={classes.summaryQuoteItemContainer}
                    key={`quote-${qIndex}-customizations-${cIndex}`}
                  >
                    <Typography
                      variant="body1"
                      className={classes.summaryCustomizationLabel}
                    >
                      {customization.title}
                    </Typography>
                  </div>
                  {renderItemDetails(customization, cIndex, true)}
                </div>
              )
            )}
          </div>
        )}
      </div>
    );
  };

  const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
      <>
        <TableRow {...otherProps}>
          <TableCell padding="checkbox">
            <IconButton onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          {children}
        </TableRow>
        {isExpanded && (
          <TableRow>
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
              <TableRow>
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
              {order_items?.map((item) => {
                let product = item?.details;
                return (
                  <ExpandableTableRow
                    sx={{ "& > *": { borderBottom: "1px solid red" } }}
                    key={item.order_id}
                    expandComponent={
                      <TableCell colSpan="4">
                        {renderItemAllDetails(item)}
                      </TableCell>

                    }
                  >
                    {renderItem(item)}
                  </ExpandableTableRow>
                );
              })}

              <TableRow>
                <TableCell
                  sx={{ borderBottom: "unset" }}
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={7}
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
      <CancelOrderModal
        showModal={itemToCancel ? true : false}
        setOrder={setOrder}
        handleCloseModal={() => setItemToCancel(null)}
        data={itemToCancel} />
    </div>
  );
};

export default OrderDetails;
