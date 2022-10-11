import { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import MyButton from "../../Shared/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import useCancellablePromise from "../../../Api/cancelRequest";
import { postCall } from "../../../Api/axios";
import cogoToast from "cogo-toast";

export default function AddProduct() {
  const navigate = useNavigate();
  const { cancellablePromise } = useCancellablePromise();

  const [product, setProduct] = useState({
    name: "Product B",
    description: "Description for product B",
    price: 1000,
    availableQty: 12,
    location: ["pune"],
    category: "Wellness",
    isReturnable: false,
    isCancelable: false,
    isAvailableOnCOD: false,
    longDescription: "Long Description for Product B",
  });
  //   const [product, setProduct] = useState({
  //     name: "",
  //     shortDescription: "",
  //     longDescription: "",
  //     price: "",
  //     thumbnail: "",
  //     images: [],
  //     category: [],
  //     quantity: "",
  //     SKUCode: "",
  //     isReturnable: false,
  //     isCancelable: false,
  //   });

  const [thumbnail, setThumbnail] = useState();
  const [productImages, setProductImages] = useState([]);
  const [previewProductImages, setPreviewProductImages] = useState([]);

  const handleAddProduct = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct({ ...product, [name]: value });
  };

  const handleThumbnail = (e) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setThumbnail(objectUrl);
  };

  const handleProductImages = (e) => {
    setProductImages([...productImages, e.target.files[0].name]);
    setPreviewProductImages([...previewProductImages, e.target.files[0]]);
  };

  const removeProductImage = (img) => {
    setProductImages(productImages.filter((item) => item != img.name));
    setPreviewProductImages(
      previewProductImages.filter((item) => item.name != img.name)
    );
  };

  const addProduct = async () => {
    try {
      const data = await cancellablePromise(postCall(`/api/product`, product));
      console.log(data);
      cogoToast.success("Product added successfully!");
    } catch (error) {
      cogoToast.success("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4">
        <MyButton
          className="mr-2 !text-black"
          icon={<ArrowBackIcon />}
          title="BACK"
          onClick={() => navigate("/application/inventory")}
        />
      </div>
      <div className="container px-4 mx-auto mb-4 md:w-4/5 lg:w-full place-content-center max-w-[1240px]">
        <div className="w-full !h-full">
          <label className="ml-2 md:mb-4 md:mt-3 mt-2 font-semibold text-xl">
            Add Product
          </label>
          <div className="mt-2">
            <div className="w-full flex my-5">
              <TextField
                id="outlined-basic"
                label="Product Name"
                variant="outlined"
                className="!w-full !mr-10 max-w-xl"
                name="name"
                value={product.name || ""}
                onChange={handleAddProduct}
              />
              <TextField
                id="outlined-basic"
                label="Product Category"
                variant="outlined"
                className="!w-full !mx-0 max-w-xl"
                name="category"
                value={product.category || ""}
                onChange={handleAddProduct}
              />
            </div>
            <div className="w-full flex my-5">
              <TextField
                id="outlined-basic"
                label="Product Quantity"
                variant="outlined"
                className="!w-full !mr-10 max-w-xl"
                name="quantity"
                value={product.quantity || ""}
                onChange={handleAddProduct}
              />
              <TextField
                id="outlined-basic"
                label="Product Price"
                variant="outlined"
                className="!w-full !mx-0 max-w-xl"
                name="price"
                value={product.price || ""}
                onChange={handleAddProduct}
              />
            </div>
            <div className="w-full sm:flex my-5">
              <TextField
                id="outlined-basic"
                label="SKU Code"
                variant="outlined"
                className="!w-full !mr-10 max-w-xl"
                name="SKUCode"
                value={product.SKUCode || ""}
                onChange={handleAddProduct}
              />
              <div className="sm:w-2/4 md:w-1/2 p-2 pt-3 flex items-center">
                <label className="mr-5">Addons:</label>
                <FormGroup>
                  <div className="flex">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Returnable"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Cancelable"
                    />
                  </div>
                </FormGroup>
              </div>
            </div>
            <div className="w-full my-5">
              <TextField
                id="outlined-basic"
                label="Short description"
                variant="outlined"
                className="!w-full !mx-0"
                name="shortDescription"
                value={product.shortDescription || ""}
                onChange={handleAddProduct}
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Long description"
                variant="outlined"
                minRows={2}
                multiline={true}
                className="!w-full !mx-0"
                name="longDescription"
                value={product.longDescription || ""}
                onChange={handleAddProduct}
              />
            </div>
            <div className="p-2">
              <label className="mr-8">Product Thumbnail</label>
              <Button variant="contained" component="label" size="small">
                upload thumbnail
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleThumbnail}
                />
              </Button>
              {thumbnail && (
                <img
                  className="w-3/12 border-4 mt-5 border-black"
                  src={thumbnail}
                />
              )}
            </div>
            <div className="p-2">
              <label className="mr-14">Product Images</label>
              <Button variant="contained" component="label" size="small">
                upload images
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={handleProductImages}
                />
              </Button>
              <div className="flex flex-row">
                {productImages.length > 0 &&
                  previewProductImages.map((p) => {
                    return (
                      <div className="previewContainer">
                        <DeleteIcon onClick={() => removeProductImage(p)} />
                        <img src={URL.createObjectURL(p)} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center py-2 sm:pt-5 md:!mt-10">
            <MyButton title="CANCEL" className="text-black" />
            <MyButton
              onClick={() => addProduct()}
              title="ADD PRODUCT"
              variant="contained"
              className="!ml-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
