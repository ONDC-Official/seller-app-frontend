import React, { useEffect, useState } from "react";
import { Button, Checkbox, IconButton, InputAdornment, Modal, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const AddMenuProduct = (props) => {
  const { showModal, handleCloseModal, addedProducts, allProducts, setAddedProducts } = props;

  const [searchInput, setSearchInput] = useState("");
  const [notAddedProducts, setNotAddedProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = (productId) => {
    setSelectedProducts((prevSelected) => {
      const isProductSelected = prevSelected.some((product) => product.id === productId);
      if (isProductSelected) {
        return prevSelected.filter((product) => product.id !== productId);
      } else {
        const productToAdd = allProducts.find((product) => product.id === productId);
        return [...prevSelected, productToAdd];
      }
    });
  };

  const renderProducts = () => {
    const filteredProducts = notAddedProducts.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return filteredProducts.map((product) => (
      <div key={product.id}>
        <div className="flex items-center justify-between w-[550px] py px-2 mb-2 border border-[#1876d1a1] rounded-xl cursor-pointer bg-white">
          <p className="ml-2">{product.name}</p>
          <Checkbox
            checked={selectedProducts.some((selectedProduct) => selectedProduct.id === product.id)}
            onChange={() => handleProductSelect(product.id)}
          />
        </div>
      </div>
    ));
  };

  const handleAddProducts = () => {
    let updatedSelectedProducts = selectedProducts.map((item, index) => ({
      ...item,
      seq: addedProducts.length + index + 1,
    }));
    setAddedProducts([...addedProducts, ...updatedSelectedProducts]);
    handleCloseModal();
    setSelectedProducts([]);
  };

  useEffect(() => {
    if (addedProducts.length === 0) {
      setNotAddedProducts(allProducts);
    } else {
      const notAddedProducts = allProducts.filter((item) => !addedProducts.some((p) => p.id === item.id));
      setNotAddedProducts(notAddedProducts);
    }
  }, [showModal]);

  return (
    <Modal open={showModal} onClose={handleCloseModal}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          padding: "24px 40px",
          borderRadius: 20,
        }}
      >
        <p className="font-semibold text-xl mb-6" style={{ marginBottom: 20 }}>
          Add products
        </p>

        <TextField
          size="small"
          variant="outlined"
          placeholder="Search products..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={{ marginBottom: 20, width: 550 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton sx={{ marginLeft: -1 }}>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <div className="min-h-[400px] max-h-[400px] overflow-y-auto pr-4">{renderProducts()}</div>

        <div className="flex mt-4 items-center justify-end">
          <Button variant="contained" sx={{ marginRight: 1 }} onClick={handleAddProducts}>
            Add
          </Button>
          <Button
            onClick={() => {
              handleCloseModal();
              setSelectedProducts([]);
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddMenuProduct;
