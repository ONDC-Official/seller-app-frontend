import React from "react";
import BackNavigationButton from "../../Shared/BackNavigationButton";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";

const MenuDetails = () => {
  const theme = useTheme();
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-8">
      <div className="mb-4">
        <BackNavigationButton
          onClick={() => {
            navigate(`/application/menu-category/${params.category}`);
          }}
        />
      </div>
      <div className="mb-4 flex flex-row justify-between items-center">
        <label style={{ color: theme.palette.primary.main }} className="text-2xl font-semibold">
          {params.menu} &nbsp;
        </label>
      </div>
    </div>
  );
};

export default MenuDetails;
