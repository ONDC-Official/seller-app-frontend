import React from "react";
// import styles from "../../../styles/auth/auth.module.scss";
import logo from "../../../Assets/Images/logo.png";

export default function AuthActionCard(props) {
  const { action_form, navigation_link } = props;
  return (
    <div className="mx-auto !p-5 h-screen min-vh-100 overflow-auto bg-[#f0f0f0]">
      <div className="h-full flex fex-row items-center justify-center">
        <div className="h-3/4 w-full md:w-2/4 bg-white px-2.5 py-2.5 rounded-md shadow-xl">
          <div
            style={{ height: "20%" }}
            className="flex fex-row items-center justify-center"
          >
            <img src={logo} alt="logo" style={{ height: "50px" }} />
          </div>
          <div
            style={{ height: "70%" }}
            className="overflow-auto flex justify-center"
          >
            {action_form}
          </div>
          <div
            style={{ height: "10%" }}
            className="flex fex-row items-center justify-center"
          >
            {navigation_link}
          </div>
        </div>
      </div>
    </div>
  );
}
