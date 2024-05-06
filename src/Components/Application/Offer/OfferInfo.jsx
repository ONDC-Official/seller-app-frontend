import { useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import { styled } from "@mui/material/styles";
import { Button, FormControl, MenuItem, Modal, Autocomplete, Select, TextField, Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RenderInput from "../../../utils/RenderInput";
import { getCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";
import moment from "moment";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "#1c75bc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1c75bc",
    },
  },
  "& .MuiInputBase-input": {
    fontSize: "14px",
  },
});
const OfferInfo = ({ formData, onFormUpdate, offerInfoFormErrors, setOfferType, offerType, isEdit }) => {
  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...formData,
  });

  const [products, setProducts] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (Object.keys(formValues).length === 0 && isEdit) {
      setFormValues(formData)
    }
    onFormUpdate(formValues)
    setSelectedOptions(formValues?.items ?? [])
  }, [formValues, isEdit]);

  useEffect(() => {
    setErrors(offerInfoFormErrors);
  }, [offerInfoFormErrors]);

  const image = {
    id: "images",
    title: "Images (Select minimum 3 files with maximum size of 2Mb for each file)",
    type: "upload",
    multiple: true,
    file_type: "offer_image",
    fontColor: "#000000",
    required: false,
  }

  const renderDatePicker = (key) => {
    return (
      <div style={{ marginLeft: "10px" }}>
        <DatePicker
          format="DD/MM/YYYY"
          views={["year", "month", "day"]}
          label={key}
          value={formValues[key] ? moment(formValues[key]) : null} // Convert to moment object if not null
          onChange={(date) =>
            setFormValues({
              ...formValues,
              [key]: date ? date.toDate() : null // Convert moment object to JavaScript Date object
            })
          }
          slots={{
            TextField: (params) => (
              <TextField
                {...params}
                error={false}
                helperText=""
              />
            ),
          }}
        />
      </div>
    );
  };

  const searchProducts = async (event) => {
    try {
      const inputValue = event.target.value;
      const allProductsURL = `/api/v1/products?name=${encodeURIComponent(inputValue)}`;
      let products_res = await getCall(allProductsURL);
      let all_products = products_res.data.map((product) => {
        return { id: product._id, name: product.productName };
      });

      // Extract ids of already selected products if formValues and items are defined
      const selectedProductIds = formValues?.items?.map((item) => item.id) || [];

      // Filter out the selected products from the search results
      const filteredProducts = all_products.filter((product) => !selectedProductIds.includes(product.id));

      setProducts(filteredProducts);
    } catch (error) {
      cogoToast.error(error.message);
    }
  }

  const handleSelect = (event, value) => {
    setSelectedOptions(value);
    setFormValues({ ...formValues, items: value.map(item => ({ id: item.id, name: item.name })) });
  };

  return (
    <div>
      <div className="py-1 flex flex-col">
        <label
          className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
        >
          Offer Type:
        </label>
        <FormControl>
          <Select
            size="small"
            disabled={isEdit}
            displayEmpty
            value={formValues.type ?? offerType}
            className="w-full"
            onChange={(e) => {
              setOfferType(e.target.value); // Update the offerType state
            }}
            renderValue={(value) => {
              if (!value) {
                return <p>Select Offer Type</p>;
              }
              return value;
            }}
          >
            <MenuItem value="discount">discont</MenuItem>
            <MenuItem value="buyXgetY">buyXgetY</MenuItem>
            <MenuItem value="freebie">freebie</MenuItem>
          </Select>
        </FormControl>
      </div>
      <>
        <label
          className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
        >
          Offer id:
        </label>
        <CssTextField
          required
          type="input"
          className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
          size="small"
          autoComplete="off"
          placeholder={"Enter Offer Id"}
          error={!!errors.offerId}
          value={formValues.offerId}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              offerId: e.target.value
            })
          }
        />
      </>
      <div className="py-1 flex flex-col">
        <label
          className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
        >
          Description:
        </label>
        <CssTextField
          required
          type={"input"}
          className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
          size="small"
          autoComplete="off"
          placeholder={"Enter Description"}
          error={!!errors.description}
          helperText={errors.description}
          value={formValues.description}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              description: e.target.value
            })
          }
        />
      </div>
      <div className="py-1 flex flex-col">
        <label
          className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
        >
          Auto Apply:
        </label>
        <RadioGroup
          className="w-full h-full px-2.5 text-[#606161] bg-transparent !border-black"
          value={formValues.autoApply}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              autoApply: e.target.value
            })
          }
        >
          <div
          >
            <FormControlLabel
              key={true}
              value={true}
              control={<Radio size="small" />}
              label={<div className="text-sm font-medium text-[#606161]">Yes</div>}
            />
            <FormControlLabel
              key={false}
              value={false}
              control={<Radio size="small" />}
              label={<div className="text-sm font-medium text-[#606161]">No</div>}
            />
          </div>
        </RadioGroup>
      </div>
      <div className="py-1 flex flex-col">
        <label
          className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
        >
          Additive:
        </label>
        <RadioGroup
          className="w-full h-full px-2.5  text-[#606161] bg-transparent !border-black"
          value={formValues.additve}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              additive: e.target.value
            })
          }
        >
          <div
          >
            <FormControlLabel
              key={true}
              value={true}
              control={<Radio size="small" />}
              label={<div className="text-sm font-medium text-[#606161]">Yes</div>}
            />
            <FormControlLabel
              key={false}
              value={false}
              control={<Radio size="small" />}
              label={<div className="text-sm font-medium text-[#606161]">No</div>}
            />
          </div>
        </RadioGroup>
      </div>
      <div className="py-1 flex flex-col">
        <label
          className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
        >
          Validity:
        </label>
        <div style={{ marginBottom: "7px", display: "flex" }} className="py-2.5">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {renderDatePicker("validFrom")}
            {renderDatePicker("validTo")}
          </LocalizationProvider>
        </div>
      </div>
      <RenderInput
        item={{
          ...image,
          error: errors?.[image?.id] ? true : false,
          helperText: errors?.[image.id] || "",
        }}
        state={formValues}
        stateHandler={setFormValues}
        key={image?.id}
      />
      <div className="py-1 flex flex-col">
        <label
          className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
        >
          Items:
        </label>
        <FormControl>
          <Autocomplete
            multiple
            options={products}
            size="small"
            getOptionLabel={(option) => option.name}
            value={selectedOptions}
            onChange={handleSelect}
            filterOptions={(options, { inputValue }) => {
              const selectedValues = selectedOptions.map((selectedOption) => selectedOption.id);
              return products.filter((option) => !selectedValues.includes(option.id));
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search Products"
                variant="outlined"
                onChange={searchProducts}
                error={false}
              />
            )}
          />
        </FormControl>
      </div>
    </div>
  )
}

export default OfferInfo;
