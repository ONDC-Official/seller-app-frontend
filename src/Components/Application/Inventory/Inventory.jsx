import { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import InventoryTable from "../Inventory/InventoryTable";
import Button from "../../Shared/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { getCall } from "../../../Api/axios";
import useCancellablePromise from "../../../Api/cancelRequest";
import Cookies from "js-cookie";
import { AddCookie } from "../../../utils/cookies";
import { isObjEmpty } from "../../../utils/validations";

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
    id: "availableQty",
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
        item.attributes.id = item.id;
        products.push(item.attributes);
      });
      setProducts(products);
    } catch (error) {
      // console.log(error);
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
      if (u.isSystemGeneratedPassword) navigate("/initial-steps");
      else {
        getOrgDetails(u.organization).then((org) => {
          console.log("organization", org.storeDetails == {});
          if (isObjEmpty(org.storeDetails)) navigate("/initial-steps");
        });
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
                // onClick={() => navigate("/application/add-products")}
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
