import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Shared/Button";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { Add, Delete, Edit, Save } from "@mui/icons-material";
import AddMenuProduct from "./AddMenuProduct";
import { IconButton, InputAdornment, TextField } from "@mui/material";

const products = [
  { id: "P1", name: "Product A" },
  { id: "P2", name: "Product B" },
  { id: "P3", name: "Product C" },
  { id: "P4", name: "Product D" },
];

const _allProducts = [
  { id: "P1", name: "Product A" },
  { id: "P2", name: "Product B" },
  { id: "P3", name: "Product C" },
  { id: "P4", name: "Product D" },
  { id: "P5", name: "Product E" },
  { id: "P6", name: "Product F" },
  { id: "P7", name: "Product G" },
  { id: "P8", name: "Product H" },
  { id: "P9", name: "Product I" },
  { id: "P10", name: "Product J" },
  { id: "P11", name: "Product K" },
  { id: "P12", name: "Product L" },
  { id: "P13", name: "Product M" },
  { id: "P14", name: "Product N" },
  { id: "P15", name: "Product O" },
  { id: "P16", name: "Product P" },
];

const MenuProducts = () => {
  const params = useParams();

  const [reordering, setReordering] = useState(false);
  const [addedProducts, setAddedProducts] = useState(products);
  const [allProducts, setAllProducts] = useState([..._allProducts]);
  const [showModal, setShowModal] = useState(false);
  const [menuDetails, setMenuDetails] = useState({
    name: params.menu || "",
  });

  const handleRemoveProduct = (item) => {
    const filteredProducts = addedProducts.filter((p) => p.id !== item.id);
    setAddedProducts(filteredProducts);
  };

  const Product = ({ item }) => {
    return (
      <div>
        <div
          className="flex items-center justify-between py-2 px-8 mb-2 border-2 border-[#1876d1a1] rounded-xl bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <p>{item.name}</p>
          <div onClick={() => handleRemoveProduct(item)}>
            <Button title="Remove" icon={<Delete />} />
          </div>
        </div>
      </div>
    );
  };

  const ProductItem = SortableElement(({ item }) => <Product item={item} />);

  const ProductList = SortableContainer(({ items }) => {
    return (
      <div>
        {items.map((item, index) => (
          <ProductItem key={`item-${index}`} index={index} item={item} />
        ))}
      </div>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex === newIndex) return;

    setAddedProducts((items) => {
      const reorderedItems = [...items];
      const movedItem = reorderedItems.splice(oldIndex, 1)[0];
      reorderedItems.splice(newIndex, 0, movedItem);
      return reorderedItems;
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="mb-4 flex flex-row justify-between items-center">
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search products..."
          value={menuDetails.name}
          onChange={(e) => setMenuDetails({ ...menuDetails, name: e.target.value })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton sx={{ marginLeft: -1 }}>
                  <Edit size="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className="flex">
          <div className="mr-2">
            <Button
              sx={{ width: 200 }}
              title={!reordering ? "Reorder products" : "Save order"}
              variant="contained"
              onClick={() => setReordering((prevState) => !prevState)}
            />
          </div>
          <div className="mr-2">
            <Button title="Add Products" variant="contained" icon={<Add />} onClick={() => setShowModal(true)} />
          </div>
          <div>
            <Button title="Save Changes" variant="contained" icon={<Save />} />
          </div>
        </div>
      </div>

      {reordering ? (
        <ProductList items={addedProducts} onSortEnd={onSortEnd} />
      ) : (
        <div>
          {addedProducts.map((item) => (
            <Product item={item} />
          ))}
        </div>
      )}

      <AddMenuProduct
        showModal={showModal}
        handleCloseModal={() => setShowModal(false)}
        addedProducts={addedProducts}
        setAddedProducts={setAddedProducts}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />
    </div>
  );
};

export default MenuProducts;
