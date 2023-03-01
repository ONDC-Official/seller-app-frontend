import React from "react";
import MyButton from "../../Shared/Button";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "../../Shared/Navbar";

const BulkUpload = () => {
  const navigate = useNavigate();
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
              Choose an excel file.
            </label>
            <input
              className="ml-2"
              id="contained-button-file"
              style={{ opacity: "none" }}
              accept=".csv"
              type="file"
              onChange={(e) => console.log(e.target.files[0])}
              //   key={item?.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkUpload;
