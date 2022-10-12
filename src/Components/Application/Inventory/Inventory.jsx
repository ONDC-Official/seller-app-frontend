import { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import InventoryTable from "../Inventory/InventoryTable";
import Button from "../../Shared/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { getCall } from "../../../Api/axios";
import useCancellablePromise from "../../../Api/cancelRequest";

const columns = [
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "category",
    label: "Category",
    minWidth: 120,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "SKUCode",
    label: "SKU Code",
    minWidth: 100,
  },
  {
    id: "Quantity",
    label: "Quantity",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price per quantity",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "isCancellable",
    label: "Cancellable",
    boolean: true,
    minWidth: 100,
  },
  {
    id: "isReturnable",
    label: "Returnable",
    boolean: true,
    minWidth: 100,
  },
];

export default function Inventory() {
  const navigate = useNavigate();
  const { cancellablePromise } = useCancellablePromise();

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await cancellablePromise(getCall(`/api/product`));
      let products = [];
      res.data.map((item) => {
        products.push(item.attributes);
      });
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
        <InventoryTable columns={columns} data={products} />
      </div>
    </>
  );
}
