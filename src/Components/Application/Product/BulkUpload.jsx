import React, { useState } from "react";
import MyButton from "../../Shared/Button";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "../../Shared/Navbar";
import { getCall, postCall } from "../../../Api/axios.js";
import { Link, Button, CircularProgress } from "@mui/material";
import cogoToast from "cogo-toast";

const BulkUpload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [loading, setLoading] = useState(false)

  const uploadSelectedFile = () => {
    if (selectedFile) {
      setLoading(true)
      const formData = new FormData();
      formData.append("xlsx", selectedFile);
      postCall("api/v1/products/upload/bulk", formData)
        .then(resp => {
          cogoToast.success("Product added successfully!");
        }).catch(error => {
          console.log(error);
          cogoToast.error(error.response.data.error);
        }).finally(() => setLoading(false));
    } else {
      alert("Please select the file to upload");
    }
  }

  return (
    <div>
      <Navbar />

      <div className="p-4">
        <MyButton
          icon={<ArrowBackIcon />}
          className="mr-2 !text-black"
          title="BACK"
          onClick={() => navigate("/application/inventory")}
        />
      </div>
      <div className="container px-4 mx-auto mb-4 md:w-4/5 lg:w-full place-content-center max-w-[1240px]">
        <div className="w-full !h-full">
          <label className="ml-2 md:mb-4 md:mt-3 mt-2 font-semibold text-xl">
            Bulk Upload
          </label>
          <div className="mt-6 flex flex-col">
            <label className="ml-2 md:mb-4 md:mt-3 mt-2 font text-xm">
              Please select an excel file. To download sample template, click <Link href={`${process.env.REACT_APP_SELLER_BACKEND_URL}/api/v1/products/upload/bulk/template`} target="_blank" style={{}}>here</Link>
            </label>
            <input
              className="ml-2"
              id="contained-button-file"
              style={{ opacity: "none" }}
              accept=".xlsx"
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              //   key={item?.id}
            />
          </div>
          <div className="mt-6 flex flex-col-1">
            <Button variant="contained" color="primary" onClick={uploadSelectedFile}>
              {loading ? <>Upload&nbsp;&nbsp;<CircularProgress size={24} sx={{ color: 'white' }} /></>: <span>Upload</span>}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkUpload;
