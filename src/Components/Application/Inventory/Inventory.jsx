import { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import InventoryTable from "../Inventory/InventoryTable";
import Button from "../../Shared/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { getCall } from "../../../Api/axios";
import useCancellablePromise from "../../../Api/cancelRequest";
import { isObjEmpty } from "../../../utils/validations";
import cogoToast from "cogo-toast";

const columns = [
  { id: "productName", label: "Name", minWidth: 100 },
  {
    id: "productCategory",
    label: "Category",
    minWidth: 120,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "purchasePrice",
    label: "Purchase price",
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
      const res = await cancellablePromise(getCall(`/api/v1/products`));
      setProducts(res.data);
    } catch (error) {
      cogoToast.error("Something went wrong!");
    }
  };

  const getOrgDetails = async (org_id) => {
    const url = `/api/v1/organizations/${org_id}/storeDetails`;
    const res = await getCall(url);
    return res;
  };

  const getUser = async (id) => {
    const url = `/api/v1/users/${id}`;
    const res = await getCall(url);
    return res[0];
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    getUser(user_id).then((u) => {
      console.log(u.role.name);
      // Organization Admin, Super Admin
      if (u.isSystemGeneratedPassword) navigate("/initial-steps");
      else {
        if (u.role.name == "Organization Admin") {
          getOrgDetails(u.organization).then((org) => {
            console.log("organization", org.storeDetails == {});
            if (isObjEmpty(org.storeDetails)) navigate("/initial-steps");
          });
        }
      }
    });
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8">
        <div className="mb-4 flex flex-row justify-between items-center">
          <label className="font-semibold text-2xl">Inventory</label>
          <div className="flex">
            <div style={{ marginRight: 15 }}>
              <Button
                variant="contained"
                icon={<AddIcon />}
                title="Bulk upload"
                onClick={() => navigate("/application/bulk-upload")}
              />
            </div>
            <Button
              variant="contained"
              icon={<AddIcon />}
              className=""
              title="ADD PRODUCT"
              onClick={() => navigate("/application/add-products")}
            />
          </div>
        </div>
        <InventoryTable columns={columns} data={products} />
      </div>
    </>
  );
}
