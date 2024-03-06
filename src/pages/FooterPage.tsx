import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { navBar } from "../components/NavbarStyles";
import { Box } from "@mui/material";
import {
  BusinessCenter,
  Home,
  NotificationsRounded,
  PeopleAlt,
} from "@mui/icons-material";

export default function FooterPage() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={navBar.bottomNavigation}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Network" icon={<PeopleAlt />} />
        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsRounded />}
        />
        <BottomNavigationAction label="Jobs" icon={<BusinessCenter />} />
      </BottomNavigation>
    </Box>
  );
}
