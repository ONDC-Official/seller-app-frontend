import React, { useEffect, useRef, useState } from "react";
import MyButton from "../../Shared/Button";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { Add, Delete, Save, Search } from "@mui/icons-material";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Modal,
  Radio,
  TextField,
  Button,
} from "@mui/material";
import { getCall } from "../../../Api/axios";

const CustomizationGroupItems = (props) => {
  const {
    seq,
    allItems,
    addedItems,
    setAddedItems,
    defaultCustomization,
    setDefaultCustomization,
    customizationGroups,
    setCustomizationGroups,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [reordering, setReordering] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [notAddedCustomizations, setNotAddedCustomizations] = useState([]);
  const [selectedCustomizations, setSelectedCustomizations] = useState([]);

  const handleCustomizationSelect = (customizationId) => {
    setSelectedCustomizations((prevSelected) => {
      const isCustomizationSelected = prevSelected.some((customization) => customization._id === customizationId);
      if (isCustomizationSelected) {
        return prevSelected.filter((customization) => customization._id !== customizationId);
      } else {
        const productToAdd = allItems.find((customization) => customization._id === customizationId);
        return [...prevSelected, productToAdd];
      }
    });
  };

  const handleRemoveCustomizationItem = (item) => {
    const id = item.customizationId ? item.customizationId : item._id;
    console.log(id);
    const filteredProducts = addedItems.filter((p) => {
      if (p.customizationId) {
        return p.customizationId !== id;
      } else {
        return p._id !== id;
      }
    });

    setAddedItems(filteredProducts);
  };

  const addCustomizationItemToGroup = async () => {
    setAddedItems([...addedItems, ...selectedCustomizations]);
    setShowModal(false);
  };

  const handleAutocompleteChange = (item, selectedOptions) => {
    const currentItemId = item._id;

    const updatedAddedItems = addedItems.map((addedItem) => {
      if (addedItem._id === currentItemId) {
        return {
          ...addedItem,
          nextGroupId: selectedOptions,
        };
      }
      return addedItem;
    });

    console.log({ updatedAddedItems });

    setAddedItems(updatedAddedItems);
  };

  const Item = ({ item }) => {
    const id = item.customizationId ? item.customizationId : item._id;
    const value = addedItems.find((ai) => ai._id === id)?.nextGroupId || [];

    return (
      <div key={item._id}>
        <div
          style={{ borderStyle: reordering ? "dashed" : "solid" }}
          className="flex items-center justify-between py-[12px] px-8 mb-2 border border-[#1876d1a1] rounded-xl bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center">
            <div className="mr-8">
              <FormControlLabel
                value={false}
                control={
                  <Radio
                    size="small"
                    checked={defaultCustomization === id}
                    onClick={() => {
                      setDefaultCustomization(id);
                    }}
                  />
                }
              />
            </div>
            <p>{item.productName}</p>
          </div>
          <div className="flex items-center">
            <div className="mr-4"></div>
            <FormControl>
              <Autocomplete
                multiple
                filterSelectedOptions
                size="small"
                options={customizationGroups}
                getOptionLabel={(option) => {
                  return `${option.key} - (${option.description})`;
                }}
                value={value}
                filterOptions={(options, { inputValue }) => {
                  const selectedValues = value.map((selectedOption) => selectedOption.key);
                  return options.filter((option) => !selectedValues.includes(option.key));
                }}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(item, newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder={"Next group"} style={{ minWidth: 300 }} variant={"outlined"} />
                )}
              />
            </FormControl>
            <div className="ml-4" onClick={() => handleRemoveCustomizationItem(item)}>
              <MyButton title="Remove" icon={<Delete />} disabled={reordering} />
            </div>
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
      product.productName.toLowerCase().includes(searchInput.toLowerCase())
    );

    return filteredProducts.map((customizationItem) => (
      <div key={customizationItem._id}>
        <div className="flex items-center justify-between w-[550px] py px-2 mb-2 border border-[#1876d1a1] rounded-xl cursor-pointer bg-white">
          <p className="ml-2">{customizationItem.productName}</p>
          <Checkbox
            checked={selectedCustomizations.some((selectedProduct) => selectedProduct._id === customizationItem._id)}
            onChange={() => handleCustomizationSelect(customizationItem._id)}
          />
        </div>
      </div>
    ));
  };

  useEffect(() => {
    if (addedItems.length === 0) {
      setNotAddedCustomizations(allItems);
    } else {
      const notAddedCustomizations = allItems.filter(
        (item) => !addedItems.some((p) => p.customizationId === item._id || p._id === item._id)
      );
      setNotAddedCustomizations(notAddedCustomizations);
    }
    setSelectedCustomizations([]);
  }, [showModal]);

  return (
    <div className="container mx-auto my-8">
      <div className="mb-4 flex flex-row justify-between items-center">
        <div className="flex justify-end w-full">
          <div className="mr-2">
            {/* <MyButton
              sx={{ width: 200 }}
              title={!reordering ? "Change Sequence" : "Finish"}
              variant="contained"
              onClick={() => setReordering((prevState) => !prevState)}
              disabled={addedItems.length === 0}
            /> */}
          </div>
          <div className="mr-2">
            <MyButton
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
            <>
              <div>
                <div
                  style={{ borderStyle: reordering ? "dashed" : "solid" }}
                  className="flex items-center justify-between  mb-2  bg-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center ml-3">
                    <div className="mr-2 text-lg font-semibold">Default</div>
                    <p className="ml-5 text-lg font-semibold">Customization Name</p>
                  </div>
                  <div className="flex items-center justify-between" style={{ width: 280 }}>
                    <p className="text-lg font-semibold" style={{ marginLeft: -160 }}>
                      Next group
                    </p>
                    <p className="text-lg font-semibold mr-12">Action</p>
                  </div>
                </div>
              </div>

              {addedItems.map((item, index) => (
                <Item key={index} item={item} />
              ))}
            </>
          ) : (
            <div>
              <div className="flex items-center justify-between py-3 px-4 mb-2 border border-[#1876d1a1] rounded-lg bg-white">
                <p>No customization items are added in this group.</p>
              </div>
            </div>
          )}
        </div>
      )}

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
          <div className="flex mt-4 items-center justify-end mr-4">
            <Button variant="contained" sx={{ marginRight: 2 }} onClick={addCustomizationItemToGroup}>
              Add
            </Button>
            <Button
              onClick={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomizationGroupItems;
