import React, { useRef, useState } from "react";
import Button from "../../Shared/Button";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { Add, Delete, Save, Search } from "@mui/icons-material";
import { Checkbox, IconButton, InputAdornment, Modal, TextField } from "@mui/material";

const CustomizationGroupItems = (props) => {
  const { allItems, addedItems, setAddedItems } = props;

  const [showModal, setShowModal] = useState(false);
  const [reordering, setReordering] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [notAddedCustomizations, setNotAddedCustomizations] = useState([]);
  const [selectedCustomizations, setSelectedCustomizations] = useState([]);

  const handleProductSelect = (productId) => {
    setSelectedCustomizations((prevSelected) => {
      const isProductSelected = prevSelected.some((product) => product.id === productId);
      if (isProductSelected) {
        return prevSelected.filter((product) => product.id !== productId);
      } else {
        const productToAdd = allItems.find((product) => product.id === productId);
        return [...prevSelected, productToAdd];
      }
    });
  };

  const handleRemoveProduct = (item) => {
    const filteredProducts = addedItems.filter((p) => p.id !== item.id);
    setAddedItems(filteredProducts);
  };

  const Item = ({ item }) => {
    return (
      <div>
        <div
          style={{ borderStyle: reordering ? "dashed" : "solid" }}
          className="flex items-center justify-between py-[4px] px-8 mb-2 border border-[#1876d1a1] rounded-xl bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <p>{item.name}</p>
          <div onClick={() => handleRemoveProduct(item)}>
            <Button title="Remove" icon={<Delete />} disabled={reordering} />
          </div>
        </div>
      </div>
    );
  };

  const CustomizationItem = SortableElement(({ item }) => <Item item={item} />);

  const ItemList = SortableContainer(({ items }) => {
    return (
      <div>
        {items.map((item, index) => (
          <CustomizationItem key={`item-${index}`} index={index} item={item} />
        ))}
      </div>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex === newIndex) return;

    setAddedItems((items) => {
      const reorderedItems = [...items];
      const movedItem = reorderedItems.splice(oldIndex, 1)[0];
      reorderedItems.splice(newIndex, 0, movedItem);
      return reorderedItems;
    });
  };

  const renderCustomizationItems = () => {
    const filteredProducts = notAddedCustomizations.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    //  return filteredProducts.map((product) => (
    return allItems.map((product) => (
      <div key={product.id}>
        <div className="flex items-center justify-between w-[550px] py px-2 mb-2 border border-[#1876d1a1] rounded-xl cursor-pointer bg-white">
          <p className="ml-2">{product.name}</p>
          <Checkbox
            checked={selectedCustomizations.some((selectedProduct) => selectedProduct.id === product.id)}
            onChange={() => handleProductSelect(product.id)}
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto my-8">
      <div className="mb-4 flex flex-row justify-between items-center">
        <div className="flex justify-end w-full">
          {/* <div className="mr-2">
            <Button
              sx={{ width: 200 }}
              title={!reordering ? "Change Sequence" : "Finish"}
              variant="contained"
              onClick={() => setReordering((prevState) => !prevState)}
              disabled={addedItems.length === 0}
            />
          </div> */}
          <div className="mr-2">
            <Button
              title="Add Customization Item"
              variant="contained"
              icon={<Add />}
              disabled={reordering}
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
      </div>

      {reordering ? (
        <ItemList items={addedItems} onSortEnd={onSortEnd} />
      ) : (
        <div>
          {addedItems.length > 0 ? (
            addedItems.map((item) => <Item item={item} />)
          ) : (
            <div>
              <div className="flex items-center justify-between py-3 px-4 mb-2 border border-[#1876d1a1] rounded-lg bg-white">
                <p>No customization items are added in this group.</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* <AddMenuProduct
        showModal={showModal}
        handleCloseModal={() => setShowModal(false)}
        addedProducts={addedProducts}
        allProducts={allProducts}
        setAddedProducts={setAddedProducts}
      /> */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
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
            Add customization items
          </p>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search Customizations..."
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

          <div className="min-h-[400px] max-h-[400px] overflow-y-auto pr-4">{renderCustomizationItems()}</div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomizationGroupItems;
