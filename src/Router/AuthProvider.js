import { createContext, useContext, useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCall } from "./../Api/axios.js";
import { isObjEmpty } from "./../utils/validations";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const getUser = async (id) => {
    const url = `/api/v1/users/${id}`;
    const res = await getCall(url);
    return res[0];
  };

  const getOrgDetails = async (org_id) => {
    const url = `/api/v1/organizations/${org_id}/storeDetails`;
    const res = await getCall(url);
    return res;
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    getUser(user_id).then((u) => {
      // roles - Organization Admin, Super Admin
      setUser(u);
      if (u.isSystemGeneratedPassword) navigate("/initial-steps");
      else {
        if (u?.role?.name == "Organization Admin") {
          getOrgDetails(u?.organization).then((org) => {
            let category = org?.storeDetails?.category;
            if (!category) navigate(`/application/store-details/${u.organization}`);
          });
        }
      }
    });
  }, [])

  // call this function when you want to authenticate the user

  const value = useMemo(
    () => ({
      user,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
