import Navbar from "../../Shared/Navbar";
import InventoryTable from "../Inventory/InventoryTable";
import Button from "../../Shared/Button";
import { InventoryData } from "../../../Constants/InventoryData";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from 'react-router-dom';

const columns = [
  { id: "Product_id", label: "Product Id", minWidth: 170 },
  { id: "Name", label: "Name", minWidth: 100 },
  {
    id: "Description",
    label: "Description",
    minWidth: 250,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Price_per_quantity",
    label: "Price per quantity",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Available_Quantity",
    label: "Available Quantity",
    minWidth: 100,
  },
];

export default function Inventory() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-[5rem] my-4">
        <div className="mb-4 flex flex-row justify-between items-center">
          <label className="font-semibold text-2xl">Inventory</label>
          <Button
            variant="contained"
            icon={<AddIcon />}
            className=""
            title="ADD PRODUCT"
            onClick={() => navigate('/add-product')}
          />
        </div>
        <InventoryTable columns={columns} data={InventoryData} />
      </div>
    </>
  );
}
