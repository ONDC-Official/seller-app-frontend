import React from "react";
import { useTheme } from "@mui/material/styles";
import { PRODUCT_CATEGORY } from "../../../utils/constants";
import { Link } from "react-router-dom";

const MenuCategory = () => {
  const theme = useTheme();
  return (
    <div className="container mx-auto my-8">
      <div className="mb-4 flex flex-row justify-between items-center">
        <label style={{ color: theme.palette.primary.main }} className="font-semibold text-2xl">
          Available Categories:
        </label>
      </div>
      <div className="flex flex-wrap">
        {Object.entries(PRODUCT_CATEGORY).map(([key]) => (
          <Link to={`/application/menu-category/${key}`}>
            <MenuItem name={key} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const MenuItem = (props) => {
  const { name } = props;
  return (
    <div className="flex items-center justify-center cursor-pointer mr-4 mb-4 border-2 border-[#1876d1a1] rounded-2xl w-56 h-28 bg-[#ffffff] hover:bg-[#1876D1] text-black hover:text-white duration-300">
      <p className="text-base font-semibold text-center">{name}</p>
    </div>
  );
};

export default MenuCategory;
