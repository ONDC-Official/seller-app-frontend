import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Shared/Button";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { Add, Delete } from "@mui/icons-material";

const addedProducts = [
  { id: "P1", position: 1, name: "Product A" },
  { id: "P2", position: 2, name: "Product B" },
  { id: "P3", position: 3, name: "Product C" },
  { id: "P4", position: 4, name: "Product D" },
];

const allProducts = [
  { id: "P5", position: 1, name: "Product E" },
  { id: "P6", position: 2, name: "Product F" },
  { id: "P7", position: 3, name: "Product G" },
  { id: "P8", position: 4, name: "Product H" },
  { id: "P8", position: 1, name: "Product I" },
  { id: "P10", position: 2, name: "Product J" },
  { id: "P11", position: 3, name: "Product K" },
  { id: "P12", position: 4, name: "Product L" },
];

const MenuProducts = () => {
  const theme = useTheme();
  const params = useParams();

  const [products, setProducts] = useState(addedProducts);

  const handleRemoveProduct = (item) => {
    const filteredProducts = products.filter((p) => p.id !== item.id);
    setProducts(filteredProducts);
  };

  const ProductItem = SortableElement(({ item }) => (
    <div>
      <div
        className="flex items-center justify-between py-2 px-8 mb-2 border-2 border-[#1876d1a1] rounded-xl cursor-pointer bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <p>{item.name}</p>
        <div onClick={() => handleRemoveProduct(item)}>
          <Button title="Remove" icon={<Delete />} />
        </div>
      </div>
    </div>
  ));

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

    setProducts((items) => {
      const reorderedItems = [...items];
      const movedItem = reorderedItems.splice(oldIndex, 1)[0];
      reorderedItems.splice(newIndex, 0, movedItem);

      // Update the position attribute based on the new index
      reorderedItems.forEach((item, index) => {
        item.position = index + 1;
      });

      return reorderedItems;
    });
  };

  const sortedProductItems = products.sort((a, b) => a.position - b.position);

  return (
    <div className="container mx-auto my-8">
      <div className="mb-4 flex flex-row justify-between items-center">
        <label style={{ color: theme.palette.primary.main }} className="text-2xl font-semibold">
          {params.menu}: &nbsp;Menu Products
        </label>
        <Button title="Add Products" variant="contained" icon={<Add />} onClick={() => {}} />
      </div>

      <div>
        <ProductList items={sortedProductItems} onSortEnd={onSortEnd} />
      </div>
    </div>
  );
};

export default MenuProducts;
