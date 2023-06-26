import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Paid from "@mui/icons-material/Paid";
import { useState } from "react";
import styled from "@emotion/styled";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.palette.shape.borderRadius,
  width: "40%",
}));

const LogoWrap = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
});
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  "&:hover": { cursor: "pointer" },
}));
// avatar hover
const AvatarHover = styled(Avatar)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.navHover.backgroundColor,
  },
}));
// icon hover
const IconHover = styled(Badge)(({ theme }) => ({
  padding: 10,
  borderRadius: "50%",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.navHover.backgroundColor,
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClose = () => {
    setOpen(!open);
  };
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <LogoWrap>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            MUI
          </Typography>
          <Paid
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          />
        </LogoWrap>

        {/* search field */}
        <Search>
          <InputBase placeholder="Search..." fullWidth={true} />
        </Search>

        {/* icon field */}
        <Icons>
          {/* mail */}
          <IconHover badgeContent={4} color="error" variant="dot">
            <MailIcon />
          </IconHover>

          {/* notifications */}
          <IconHover badgeContent={4} color="error" variant="dot">
            <NotificationsIcon />
          </IconHover>

          {/* avatar */}
          <AvatarHover
            sx={{ width: "30px", height: "30px" }}
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={(e) => setOpen(!open)}
          />
        </Icons>
        {/* moble avatar */}
        <UserBox onClick={(e) => setOpen(!open)}>
          <AvatarHover
            sx={{ width: "30px", height: "30px", userSelect: "none" }}
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography>Ho Viet</Typography>
        </UserBox>

        {/* avatar click */}
        <Menu
          open={open}
          plac
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          onClose={handleMenuClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
        </Menu>
      </StyledToolBar>
    </AppBar>
  );
};

export default NavBar;
