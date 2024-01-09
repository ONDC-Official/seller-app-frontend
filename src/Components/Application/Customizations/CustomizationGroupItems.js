import React, { useRef, useState } from "react";
import Button from "../../Shared/Button";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { Add, Delete, Save } from "@mui/icons-material";

const CustomizationGroupItems = (props) => {
  const { allItems, addedItems, setAddedItems } = props;

  const [showModal, setShowModal] = useState(false);
  const [reordering, setReordering] = useState(false);

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
    </div>
  );
};

export default CustomizationGroupItems;
