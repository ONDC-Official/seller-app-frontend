import React, { useEffect, useState } from "react";
import cogoToast from "cogo-toast";
import UserTable from "./UserTable";
import { Button, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import { getCall } from "../../../Api/axios";

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
    id: "formatted_status",
    label: "Status",
  },
  {
    id: "Action",
    label: "Action",
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
    id: "name",
    label: "Legal name of provider",
  },
  {
    id: "formatted_status",
    label: "Status",
  },
  {
    id: "Action",
    label: "Action",
    align: "left",
  },
];

const UserListings = () => {
  const [value, setValue] = useState(0);
  const [providers, setProviders] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getAdmins = async () => {
    const url = `/api/v1/users?limit=${rowsPerPage}&offset=${page}&role=Super Admin`;
    try {
      const res = await getCall(url);
      let data = res.data;
      data.forEach((d) => {
        d["formatted_status"] = d?.enabled ? "Active" : "Inactive";
      });
      setAdmins(data);
      setTotalRecords(res.count);
    } catch (error) {
      cogoToast.error(error.response.data.error);
    }
  };

  const getProviders = async () => {
    const url = `/api/v1/users?limit=${rowsPerPage}&offset=${page}&role=Organization Admin`;
    try {
      const res = await getCall(url);
      let data = res.data;
      data.forEach((d) => {
        d["formatted_status"] = d?.enabled ? "Active" : "Inactive";
      });
      setProviders(data);
      setTotalRecords(res.count);
    } catch (error) {
      cogoToast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    if (value == 0) getAdmins();
    else getProviders();
  }, [value, page, rowsPerPage]);

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
          value={value}
          columns={value == 0 ? superAdminCols : providerCols}
          data={value == 0 ? admins : providers}
          isProvider={value == 0 ? false : true}
          getAdmins={getAdmins}
          getProviders={getProviders}
          totalRecords={totalRecords}
          page={page}
          rowsPerPage={rowsPerPage}
          handlePageChange={(val) => setPage(val)}
          handleRowsPerPageChange={(val) => setRowsPerPage(val)}
        />
      </div>
    </div>
  );
};

export default UserListings;
