import { useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import { getCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";
import { FormControl, MenuItem, Autocomplete, Select, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

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
const OfferBenefit = ({ formData, onFormUpdate, offerBenefitFormErrors, offerType }) => {
  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...formData,
  });
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const [valueType, setValueType] = useState(formValues?.valueType);

console.log(formValues)
  useEffect(() => {
    onFormUpdate(formValues);
  }, [formValues]);

  useEffect(() => {
    setErrors(offerBenefitFormErrors);
  }, []);

  useEffect(() => {
    setErrors(offerBenefitFormErrors);
  }, [offerBenefitFormErrors]);


  const searchProducts = async (event) => {
    try {
      const inputValue = event.target.value;
      console.log(inputValue);
      const allProductsURL = `/api/v1/products?name=${encodeURIComponent(inputValue)}`;
      let products_res = await getCall(allProductsURL);
      let all_products = products_res.data.map((product) => {
        return { id: product._id, name: product.productName };
      });

      setProducts(all_products);
    } catch (error) {
      cogoToast.error(error.response.data.error);
    }
  }

  const handleSelect = (event, value) => {
    setSelectedOption(value);
    setFormValues({ ...formValues, item: value });
    // setFormValues({ ...formValues, item: value.map(item => ({ id: item.id, name: item.name })) });

  };

  return (
    <div>
      {offerType === 'discount' &&
        <>
          <div className="py-1 flex flex-col">
            <label
              className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
            >
              Value Type:
            </label>
            <FormControl>
              <Select
                size="small"
                displayEmpty
                value={formValues?.valueType ?? valueType}
                className="w-full"
                onChange={(e) => {
                  setValueType(e.target.value);
                  setFormValues({
                    ...formValues,
                    valueType: e.target.value
                  })
                }}
                renderValue={(value) => {
                  if (!value) {
                    return <p>Select Value Type</p>;
                  }
                  return value;
                }}
              >
                <MenuItem value="percentage">pecentage</MenuItem>
                <MenuItem value="amount">amount</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="py-1 flex flex-col">
            <label
              className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
            >
              Value:
            </label>
            <CssTextField
              required
              type="number"
              className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Value"}
              error={!!errors.value}
              helperText={errors.value}
              value={formValues.value}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  value: e.target.value
                })
              }
            />
          </div>
          {valueType === 'percentage' &&
            <div className="py-1 flex flex-col">
              <label
                className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
              >
                Value Cap:
              </label>
              <CssTextField
                required
                type="number"
                className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
                size="small"
                autoComplete="off"
                placeholder={"Enter Value Cap"}
                error={!!errors.valueCap}
                helperText={errors.valueCap}
                value={formValues.valueCap}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    valueCap: e.target.value
                  })
                }
              />
            </div>
          }
        </>
      }
      {
        (offerType === 'buyXgetY' || offerType === 'freebie') &&
        <>
          <div className="py-1 flex flex-col">
            <label
              className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
            >
              Get Item Count:
            </label>
            <CssTextField
              required
              type="number"
              className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Get Item Count"}
              error={!!errors.itemCount}
              helperText={errors.itemCount}
              value={formValues.itemCount}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  itemCount: e.target.value
                })
              }
            />
          </div>
          <div className="py-1 flex flex-col">
            <label
              className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
            >
              Item:
            </label>
            <FormControl>
              <Autocomplete
                options={products}
                size="small"
                getOptionLabel={(option) => option.name}
                value={formValues?.item ?? selectedOption}
                onChange={handleSelect}
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
        </>
      }
      {
        offerType === 'freebie' &&
        <div className="py-1 flex flex-col">
          <label
            className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
          >
            Item Value:
          </label>
          <CssTextField
            required
            type="number"
            className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
            size="small"
            autoComplete="off"
            placeholder={"Enter Item Value"}
            error={!!errors.itemValue}
            helperText={errors.itemValue}
            value={formValues.itemValue}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                itemValue: e.target.value
              })
            }
          />
        </div>
      }
      <hr className="border-spacing-5" />
    </div >
  );
};

export default OfferBenefit;
