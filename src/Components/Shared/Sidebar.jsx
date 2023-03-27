import * as React from "react";
import {
  Box,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Stack,
  Typography,
} from '@mui/material';
import logo from "../../Assets/Images/logo.png";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../utils/cookies";
import { getCall, postCall } from "../../Api/axios";

export default function Sidebar(props) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState();
  const [state, setState] = React.useState({
    left: false,
  });

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const getUser = async (id) => {
    const url = `/api/v1/users/${id}`;
    const res = await getCall(url);
    setUser(res[0]);
    return res[0];
  };

  React.useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    getUser(user_id);
  }, []);

  React.useEffect(() => {
    if (props.open) {
      setState({ left: true });
    } else {
      setState({ left: false });
    }
  }, [props.open, props.setOpen]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    props.setOpen(false);
  };

  async function logout() {
    await postCall(`/api/v1/auth/logout`);
    deleteAllCookies();
    localStorage.clear();
    navigate("/");
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <Stack direction="row" alignItems="center" style={{ padding: '8px 16px' }}>
        <img src={logo} alt="logo" style={{ height: "45px" }} />
        <Typography>SELLER APP</Typography>
      </Stack>
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Dashboard" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List component="div" disablePadding>
            {user?.role?.name == "Organization Admin" && (
              <div>
                <NavLink
                  to="/application/inventory"
                  className="no-underline text-black"
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Inventory" />
                  </ListItemButton>
                </NavLink>
                <NavLink
                  to={{
                    pathname: `/application/store-details/${user?.organization}`,
                  }}
                  className="no-underline text-black"
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Store Details" />
                  </ListItemButton>
                </NavLink>
              </div>
            )}
            <NavLink
              to="/application/orders"
              className="no-underline	text-black"
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Orders" />
              </ListItemButton>
            </NavLink>
            {user?.role?.name == "Super Admin" && (
              <NavLink
                to="/application/user-listings"
                className="no-underline	text-black"
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="User Listings" />
                </ListItemButton>
              </NavLink>
            )}
          </List>
        </Collapse>
      </List>
      <List
        style={{ position: "absolute", bottom: "0" }}
        className="w-full flex-row"
      >
        <ListItem key="Log Out" disablePadding>
          <ListItemButton onClick={() => logout()}>
            <LogoutIcon />
            <ListItemText primary="Log Out" className="mx-4" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="left">
        <SwipeableDrawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
        <Outlet />
      </React.Fragment>
    </div>
  );
}
