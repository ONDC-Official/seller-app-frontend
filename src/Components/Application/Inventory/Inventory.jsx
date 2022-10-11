import Navbar from "../../Shared/Navbar";
import InventoryTable from "../Inventory/InventoryTable";
import Button from "../../Shared/Button";
import { InventoryData } from "../../../Constants/InventoryData";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: "Name", label: "Name", minWidth: 100 },
  {
    id: "Category",
    label: "Category",
    minWidth: 120,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "SKUCode",
    label: "SKU Code",
    minWidth: 100,
    //  format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Quantity",
    label: "Quantity",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Price_per_quantity",
    label: "Price per quantity",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "cancellable",
    label: "Cancellable",
    minWidth: 100,
  },
  {
    id: "returnable",
    label: "Returnable",
    minWidth: 100,
  },
];

export default function Inventory() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8">
        <div className="mb-4 flex flex-row justify-between items-center">
          <label className="font-semibold text-2xl">Inventory</label>
          <Button
            variant="contained"
            icon={<AddIcon />}
            className=""
            title="ADD PRODUCT"
            onClick={() => navigate("/application/add-products")}
          />
        </div>
        <InventoryTable columns={columns} data={InventoryData} />
      </div>
    </>
  );
}
