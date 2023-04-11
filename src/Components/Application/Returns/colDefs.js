import { convertDateInStandardFormat } from "../../../utils/formatting/date";

const columnDefs = [
    {
        id: "orderId",
        label: "Order Id",
        minWidth: 120,
        align: "center",
    },
    {
        id: "item",
        label: "Product Name",
        minWidth: 120,
        format: (value) => value.productName,
        align: "center",
    },
    {
        id: "qty",
        label: "Quantity",
        minWidth: 120,
        align: "center",
    },
    {
      id: "state",
      label: "Status",
      minWidth: 120,
      align: "center",
    },
    {
      id: "createdAt",
      label: "Created On",
      minWidth: 180,
      format: (value) => convertDateInStandardFormat(value),
      align: "center",
    },
    {
      id: "reason",
      label: "Reason",
      minWidth: 250,
      align: "center",
    },
];

export default columnDefs
