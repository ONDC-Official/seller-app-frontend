import { useEffect } from "react";
import useForm from "../../../hooks/useForm";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

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
const OfferQualifier = ({ formData, onFormUpdate, offerQualifierFormErrors, offerType }) => {
  const { formValues, setFormValues, errors, setErrors } = useForm({
    ...formData,
  });
  console.log(formValues)
  useEffect(() => {
    onFormUpdate(formValues);
  }, [formValues]);

  useEffect(() => {
    setErrors(offerQualifierFormErrors);
  }, []);

  useEffect(() => {
    setErrors(offerQualifierFormErrors);
  }, [offerQualifierFormErrors]);
  console.log(offerType)

  return (
    <div>
      {(offerType === 'discount' || offerType === 'freebie') &&
        <div className="py-1 flex flex-col">
          <label
            className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
          >
            Min Value:
          </label>
          <CssTextField
            required
            type="number"
            className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
            size="small"
            autoComplete="off"
            placeholder={"Enter Min Value"}
            error={!!errors.minValue}
            helperText={errors.minValue}
            value={formValues.minValue}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                minValue: e.target.value
              })
            }
          />
        </div>
      }
      {(offerType === 'buyXgetY') &&
        <div className="py-1 flex flex-col">
          <label
            className="text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block"
          >
            Buy Item Count:
          </label>
          <CssTextField
            required
            type="number"
            className="w-full h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
            size="small"
            autoComplete="off"
            placeholder={"Enter Buy Item Count"}
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
      }
    </div>
  )
};

export default OfferQualifier;
