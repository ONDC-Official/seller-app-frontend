import { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import InventoryTable from "../Inventory/InventoryTable";
import Button from "../../Shared/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { getCall } from "../../../Api/axios";
import useCancellablePromise from "../../../Api/cancelRequest";
import { isObjEmpty } from "../../../utils/validations";
import { PRODUCT_CATEGORY } from '../../../utils/constants'

const columns = [
  { id: "productName", label: "Name", minWidth: 100 },
  {
    id: "productCategory",
    label: "Category",
    minWidth: 120,
    format: (value) => PRODUCT_CATEGORY[value] || value,
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
  {
    id: "published",
    label: "Published",
  },
];

export default function Inventory() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const navigate = useNavigate();
  const { cancellablePromise } = useCancellablePromise();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await cancellablePromise(getCall(`/api/v1/products?limit=${rowsPerPage}&offset=${page}`));
      setProducts(res.data);
      setTotalRecords(res.count);
    } catch (error) {
      // cogoToast.error("Something went wrong!");
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
      // roles - Organization Admin, Super Admin
      if (u.isSystemGeneratedPassword) navigate("/initial-steps");
      else {
        if (u.role.name == "Organization Admin") {
          getOrgDetails(u.organization).then((org) => {
            if (isObjEmpty(org.storeDetails)) navigate("/initial-steps");
          });
        } else navigate("/application/user-listings");
      }
    });
  }, []);

  useEffect(() => {
    getProducts();
  }, [page, rowsPerPage]);

  const handleRefresh = (data) => {
    getProducts();
  };

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
        <InventoryTable
          columns={columns}
          data={products}
          onRefresh={handleRefresh}
          totalRecords={totalRecords}
          page={page}
          rowsPerPage={rowsPerPage}
          handlePageChange={(val) => setPage(val)}
          handleRowsPerPageChange={(val) => setRowsPerPage(val)}
        />
      </div>
    </>
  );
}
