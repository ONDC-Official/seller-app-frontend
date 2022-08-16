import { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "../../Shared/Button";
import {useNavigate} from 'react-router-dom';
import MultiSelect from "../../Shared/MultiSelect";

export default function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    'name': '',
    'price': '',
    'quantity': '',
    'description': '',
    'location': '',
    'category': [],
    'addons': '',
  });

  const handleAddProduct = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setProduct({ ...product, [name]:value })
  }

  useEffect(() =>{
    console.log(product)
  }, [product])

  return (
    <>
      <Navbar />
      <div className="p-4">
        <Button className="mr-2 !text-black" icon={<ArrowBackIcon />} title="BACK" onClick={() => navigate('/inventory')}/>
      </div>
      <div className="container mx-auto px-4 mb-4 md:mt-4 md:w-4/5 lg:w-3/5 place-content-center max-w-[1240px]">
        <div className="border-solid border-2 w-12/12 m-auto p-2 md:p-7 !h-full">
          <label className="ml-2 md:mb-4 md:mt-3 mt-2 font-semibold text-xl">
            Add Product
          </label>
          <div className="mt-2 sm:flex sm:flex-row">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1},
              }}
              noValidate
              autoComplete="off"
              className="sm:w-2/4 md:w-1/2 p-2 pt-0"
            >
              <TextField
                id="outlined-basic"
                label="Product Name"
                variant="outlined"
                className="!w-full !mx-0"
                name='name'
                value={product.name || ''}
                onChange={handleAddProduct}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Product Price"
                variant="outlined"
                className="!w-full !mx-0"
                name='price'
                value={product.price || ''}
                onChange={handleAddProduct}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Product Quantity"
                variant="outlined"
                className="!w-full !mx-0"
                name='quantity'
                value={product.quantity || ''}
                onChange={handleAddProduct}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Product Description"
                variant="outlined"
                minRows={4}
                multiline={true}
                className="!w-full !h-28 !mx-0"
                name='description'
                value={product.description || ''}
                onChange={handleAddProduct}
              />
            </Box>
            <div className="border-r-2 w-1 px-4"></div>
            <div className="sm:w-2/4 md:w-1/2 p-2 pt-3 sm:py-2 sm:pl-10">
              <TextField
                id="outlined-basic"
                label="Product Location"
                variant="outlined"
                className="!w-full !mx-0 "
                name='location'
                value={product.location || ''}
                onChange={handleAddProduct}
              />
              <MultiSelect  />
              <label>Addons</label>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Returnable"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Cancelable"
                />
              </FormGroup>
            </div>
          </div>
          <div className="flex flex-row justify-center py-2 sm:pt-5 md:!mt-10">
            <Button title="CANCEL" className="text-black" />
            <Button title="ADD PRODUCT" variant="contained" className="!ml-5" />
          </div>
        </div>
      </div>
    </>
  );
}
