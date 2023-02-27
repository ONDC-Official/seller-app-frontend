import React, { useState } from "react";
import Navbar from "../../Shared/Navbar";
import UserTable from "./UserTable";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const UserListings = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const superAdminCols = [
    {
      id: "name",
      label: "Name",
    },
    {
      id: "email",
      label: "Email",
    },
    {
      id: "mobile",
      label: "Mobile",
    },
    {
      id: "status",
      label: "Status",
    },
    {
      id: "Action",
      label: "Action",
    },
  ];

  const superAdminData = [
    {
      name: "Rohaan",
      email: "rohaan@dataorc.in",
      mobile: "8997575712",
      status: "active",
    },
    {
      name: "Rohaan",
      email: "rohaan@dataorc.in",
      mobile: "8997575712",
      status: "active",
    },
  ];

  const providerCols = [
    {
      id: "email",
      label: "Email",
    },
    {
      id: "mobile",
      label: "Mobile",
    },
    {
      id: "legal_name_of_provider",
      label: "Legal name of provider",
    },
    {
      id: "provider_admin_name",
      label: "Provider Admin name",
    },
    {
      id: "status",
      label: "Status",
    },
    {
      id: "Action",
      label: "Action",
    },
  ];

  const providerData = [
    {
      email: "rohaan@dataorc.in",
      mobile: "8997575712",
      legal_name_of_provider: "Abhinandan",
      provider_admin_name: "Abhinandan",
      status: "active",
    },
    {
      email: "rohaan@dataorc.in",
      mobile: "8997575712",
      legal_name_of_provider: "Abhinandan",
      provider_admin_name: "Abhinandan",
      status: "inactive",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="container mx-auto my-8">
        <div className="mb-4 flex flex-row justify-between items-center">
          <label className="font-semibold text-2xl">User Listings</label>
        </div>

        <div className="flex flex-row justify-between items-center">
          <Tabs
            style={{ marginBottom: 30 }}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Super Admins" />
            <Tab label="Providers" />
          </Tabs>
          <Button
            sx={{ height: 30, textTransform: "none" }}
            size="small"
            variant="contained"
            color="primary"
            onClick={""}
          >
            <Link to={value == 0 ? "/invite-admin" : "/invite-provider"}>
              Invite {value == 0 ? "Admin" : "Provider"}
            </Link>
          </Button>
        </div>

        <UserTable
          columns={value == 0 ? superAdminCols : providerCols}
          data={value == 0 ? superAdminData : providerData}
          isProvider={value == 0 ? false : true}
        />
      </div>
    </div>
  );
};

export default UserListings;
