import { useEffect, useState } from "react";
import InventoryTable from "../Inventory/InventoryTable";
import Button from "../../Shared/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { getCall, postCall, putCall } from "../../../Api/axios";
import useCancellablePromise from "../../../Api/cancelRequest";
import { isObjEmpty } from "../../../utils/validations";
import { FILTER_OPTIONS, PRODUCT_CATEGORY } from "../../../utils/constants";
import { useTheme } from "@mui/material/styles";
import FilterComponent from "../../Shared/FilterComponent";
import AddCustomization from "../Product/AddCustomization";

const fieldsToDelete = [
  "_id",
  "type",
  "timing",
  "organization",
  "images",
  "createdBy",
  "published",
  "createdAt",
  "updatedAt",
  "__v",
];

export default function Inventory() {
  const filterFields = [
    {
      id: "name",
      title: "",
      placeholder: "Search by Product Name",
      type: "input",
      variant: "standard",
    },
    {
      id: "category",
      title: "",
      placeholder: "Please Select Product Category",
      options: Object.entries(FILTER_OPTIONS).map(([key, value]) => {
        return { key: value, value: key };
      }),
      type: "select",
      variant: "standard",
      disableClearable: true,
    },
    {
      id: "stock",
      title: "Out of Stock",
      placeholder: "Please Select Product Category",
      type: "switch",
      containerClasses: "flex items-center",
      styles: {
        marginLeft: 2,
      },
    },
  ];

  const columns = [
    { id: "productName", label: "Product Name", minWidth: 100 },
    {
      id: "type",
      label: "Type",
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
      id: "MRP",
      label: "Purchase Price",
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
      id: "customizationGroupId",
      label: "Customization",
      format: (value) => {
        for (let i = 0; i < customizationGroups.length; i++) {
          if (customizationGroups[i]._id === value) {
            console.log("customizationGroupId", customizationGroups[i]);
            if (customizationGroups[i].description) {
              return `${customizationGroups[i].name} ( ${customizationGroups[i].description} )`;
            } else {
              return `${customizationGroups[i].name}`;
            }
          }
        }
        return "-";
      },
    },
    {
      id: "published",
      label: "Published",
    },
  ];
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const navigate = useNavigate();
  const { cancellablePromise } = useCancellablePromise();
  const [products, setProducts] = useState([]);

  const [filters, setFilters] = useState({
    name: "",
    category: "",
    stock: false,
  });

  const [customizationGroups, setCustomizationGroups] = useState([]);

  const [showCustomizationModal, setShowCustomizationModal] = useState(false);
  const [customizationId, setCustomizationId] = useState(null);
  const [newCustomizationData, setNewCustomizationData] = useState({
    productName: "",
    MRP: 0,
    UOM: "",
    UOMValue: "",
    quantity: "",
    maxAllowedQty: "",
    vegNonVeg: "veg",
  });

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

  const fetchCustomizationGroups = async () => {
    const url = `/api/v1/customizationGroups?limit=10&offset=0`;

    try {
      const res = await getCall(url);
      setCustomizationGroups(res.data);
      return res.data;
    } catch (error) {
      console.log("Error fetching customziation groups:", error);
    }
  };

  const fetchCustomizationItem = async (id) => {
    setCustomizationId(id);
    try {
      const url = `/api/v1/product/customization/${id}`;
      const res = await getCall(url);
      setNewCustomizationData(res);
    } catch (error) {
      console.log("Error fetching customization item: ", error);
    }
  };

  const handleAddCustomization = async () => {
    try {
      const url = `/api/v1/product/customization`;

      const res = await postCall(url, newCustomizationData);
      console.log("handleAddCustomization: ", res);
      setNewCustomizationData({ MRP: 0 });
      setShowCustomizationModal(false);
      getProducts();
    } catch (error) {}
  };

  const handleUpdateCustomization = async () => {
    try {
      const url = `/api/v1/product/customization/${customizationId}`;
      fieldsToDelete.forEach((field) => {
        if (newCustomizationData.hasOwnProperty(field)) {
          delete newCustomizationData[field];
        }
      });
      const res = await putCall(url, newCustomizationData);
      setNewCustomizationData({ MRP: 0 });
      setCustomizationId(null);
      setShowCustomizationModal(false);
      getProducts();
    } catch (error) {}
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
    fetchCustomizationGroups();
  }, []);

  useEffect(() => {
    getProducts();
    console.log({ newCustomizationData });
  }, [page, rowsPerPage]);

  const handleRefresh = (data) => {
    getProducts();
  };

  const onReset = () => {
    setFilters({ name: "", category: null, stock: false });
    getProducts();
  };

  const onFilter = async () => {
    const filterParams = [];
    if (filters.name.trim() !== "") {
      filterParams.push(`name=${encodeURIComponent(filters.name)}`);
    }

    if (filters.category != undefined && filters.category !== "") {
      filterParams.push(`type=${encodeURIComponent(filters.category)}`);
    }

    if (!filters.stock) {
      filterParams.push(`stock=inStock`);
    } else {
      filterParams.push(`stock=outOfStock`);
    }

    const queryString = filterParams.join("&");
    const url = `/api/v1/products?${queryString}`;

    const res = await cancellablePromise(getCall(url));
    setProducts(res.data);
    setTotalRecords(res.count);
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="mb-4 flex flex-row justify-between items-center">
          <label style={{ color: theme.palette.primary.main }} className="font-semibold text-2xl">
            Inventory
          </label>
          <div className="flex">
            <div style={{ marginRight: 15 }}>
              <Button
                variant="contained"
                icon={<AddIcon />}
                title="Bulk upload"
                onClick={() => navigate("/application/bulk-upload")}
              />
            </div>
            <div style={{ marginRight: 15 }}>
              <Button
                variant="contained"
                icon={<AddIcon />}
                className=""
                title="ADD PRODUCT"
                onClick={() => navigate("/application/add-products")}
              />
            </div>
            <Button
              variant="contained"
              icon={<AddIcon />}
              title="Add Customization"
              onClick={() => setShowCustomizationModal(true)}
            />
          </div>
        </div>
        <FilterComponent
          fields={filterFields}
          state={filters}
          stateHandler={setFilters}
          onReset={onReset}
          onFilter={onFilter}
        />
        <InventoryTable
          columns={columns}
          data={products}
          onRefresh={handleRefresh}
          totalRecords={totalRecords}
          page={page}
          rowsPerPage={rowsPerPage}
          customizationGroups={customizationGroups}
          setShowCustomizationModal={setShowCustomizationModal}
          getProducts={getProducts}
          fetchCustomizationItem={fetchCustomizationItem}
          handlePageChange={(val) => setPage(val)}
          handleRowsPerPageChange={(val) => setRowsPerPage(val)}
        />

        <AddCustomization
          mode={!customizationId ? "add" : "edit"}
          showModal={showCustomizationModal}
          handleCloseModal={() => {
            setNewCustomizationData({
              productName: "",
              MRP: 0,
              UOM: "",
              UOMValue: "",
              quantity: "",
              maxAllowedQty: "",
            });
            setShowCustomizationModal(false);
            setCustomizationId(null);
          }}
          newCustomizationData={newCustomizationData}
          setNewCustomizationData={setNewCustomizationData}
          handleAddCustomization={() => {
            if (customizationId) handleUpdateCustomization();
            else handleAddCustomization();
          }}
        />
      </div>
    </>
  );
}
