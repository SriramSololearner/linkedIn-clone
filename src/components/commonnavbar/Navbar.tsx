import React from "react";
import "../App.css";
import { Box, Container, Menu, MenuItem, Stack } from "@mui/material";
import { navbarStyles } from "./NavbarStyles";
import { NavLink as NavLinkBase } from "react-router-dom";
import icon from "../Assets/icon.svg";
import bussiness from "../Assets/bussines.svg";
import { styled, alpha } from "@mui/material/styles";
import {
Home,
PeopleAlt,
BusinessCenter,
EmailRounded,
NotificationsRounded,
AccountCircleRounded,
Chat,
} from "@mui/icons-material";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

type Anchor = "top" | "left" | "bottom" | "right";

interface Istate {
activeTab: string;
}

export const Navbar = () => {
return (
<Box sx={navbarStyles.root}>
<SearchAppBar />
</Box>
);
};

const Search = styled("div")(({ theme }) => ({
position: "relative",
borderRadius: theme.shape.borderRadius,
backgroundColor: alpha(theme.palette.common.black, 0.15),
"&:hover": {
backgroundColor: alpha(theme.palette.common.black, 0.25),
},
marginLeft: 0,
width: "100%",
[theme.breakpoints.up("sm")]: {
marginLeft: theme.spacing(-2.8),
marginRight: theme.spacing(5),
width: "auto",
},
[theme.breakpoints.only("xs")]: {
marginLeft: theme.spacing(1),
width: "auto",
},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
padding: theme.spacing(0, 2),
height: "100%",
position: "absolute",
pointerEvents: "none",
display: "flex",
alignItems: "center",
zIndex: "10",
color: "black",
justifyContent: "center",
[theme.breakpoints.only("md")]: {
display: "none",
},
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: "black",
width: "100%",
[theme.breakpoints.only("xs")]: {
minWidth: "5ch",
},
[theme.breakpoints.only("md")]: {
display: "none",
},
[theme.breakpoints.up("lg")]: {
minWidth: "45ch",
},

background: "#ffffff",
"& .MuiInputBase-input": {
padding: theme.spacing(1, 1, 1, 0),
color: "black",
background: "#edf3f8",
// vertical padding + font size from searchIcon
paddingLeft: `calc(1em + ${theme.spacing(4)})`,
transition: theme.transitions.create("width"),
[theme.breakpoints.up("md")]: {
display: "flex",
width: "25ch",
"&:focus": {
width: "35ch",
outline: "2px solid black",
borderRadius: "5px",
},
},

[theme.breakpoints.only("sm")]: {
width: "10ch",
"&:focus": {
width: "20ch",
outline: "2px solid black",
borderRadius: "5px",
},
},
[theme.breakpoints.only("xs")]: {
width: "10ch",
"&:focus": {
width: "14ch",
outline: "2px solid black",
borderRadius: "5px",
},
},
},
}));

export function SearchAppBar() {
return (
<Box sx={{ flexGrow: 1 }}>
<AppBar position="static" sx={navbarStyles.root}>
<Toolbar sx={navbarStyles.toolBar}>
<Container sx={{ display: "flex" }}>
<Stack direction={"row"} alignItems={"center"}>
<IconButton
size="large"
edge="start"
color="inherit"
aria-label="open drawer"
sx={{ mr: 2 }}
>
<Box component={"img"} src={icon} sx={navbarStyles.logo} />
<AccountCircleRounded sx={navbarStyles.profileMbIcon} />
</IconButton>
<Search>
<SearchIconWrapper>
<SearchIcon />
</SearchIconWrapper>
<StyledInputBase
placeholder="Search…"
inputProps={{ "aria-label": "search" }}
/>
</Search>
</Stack>
<Stack
direction={"row"}
alignItems={"center"}
sx={navbarStyles.iconsContainer}
>
<NavLinkBase to={"/"} className={"Link"}>
<Stack
direction={"column"}
alignItems={"center"}
sx={navbarStyles.linkinnerContainer}
>
<Home sx={navbarStyles.homeIcon} />{" "}
<Typography sx={navbarStyles.linkinnerContainerText}>
Home
</Typography>{" "}
</Stack>{" "}
</NavLinkBase>
<NavLinkBase to={"/People"} className={"Link"}>
<Stack
direction={"column"}
alignItems={"center"}
sx={navbarStyles.linkinnerContainer}
>
<PeopleAlt sx={{ ...navbarStyles.homeIcon }} />
<Typography sx={navbarStyles.linkinnerContainerText}>
My Network
</Typography>
</Stack>
</NavLinkBase>
<NavLinkBase to={"/Jobs"} className={"Link"}>
<Stack
direction={"column"}
alignItems={"center"}
sx={navbarStyles.linkinnerContainer}
>
<BusinessCenter sx={navbarStyles.homeIcon} />
<Typography sx={navbarStyles.linkinnerContainerText}>
Jobs
</Typography>
</Stack>
</NavLinkBase>
<NavLinkBase to={"/Message"} className={"Link"}>
<Stack
direction={"column"}
alignItems={"center"}
sx={navbarStyles.linkinnerContainer}
>
<EmailRounded sx={navbarStyles.homeIcon} />
<Typography sx={navbarStyles.linkinnerContainerText}>
Messaging
</Typography>
</Stack>
</NavLinkBase>
<NavLinkBase to={"/Notify"} className={"Link"}>
<Stack
direction={"column"}
alignItems={"center"}
sx={navbarStyles.linkinnerContainer}
>
<NotificationsRounded sx={navbarStyles.homeIcon} />
<Typography sx={navbarStyles.linkinnerContainerText}>
Notififcations
</Typography>
</Stack>
</NavLinkBase>
<PositionedMenu />
<SwipeableTemporaryDrawer />
</Stack>

<Stack
direction={"row"}
alignItems={"center"}
sx={navbarStyles.mbIconsContainer}
>
<Chat sx={navbarStyles.chatIcon} />
</Stack>
</Container>
</Toolbar>
</AppBar>
</Box>
);
}

export function PositionedMenu() {
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);
const handleClick = (event: React.MouseEvent<HTMLElement>) => {
setAnchorEl(event.currentTarget);
};
const handleClose = () => {
setAnchorEl(null);
};

return (
<Box>
<Stack
direction={"column"}
alignItems={"center"}
sx={navbarStyles.linkinnerContainer}
onClick={handleClick}
>
<AccountCircleRounded sx={navbarStyles.homeIcon} />
<Typography
id="demo-positioned-button"
aria-controls={open ? "demo-positioned-menu" : undefined}
aria-haspopup="true"
aria-expanded={open ? "true" : undefined}
sx={{ ...navbarStyles.linkinnerContainerText, color: "grey" }}
>
Me
</Typography>
</Stack>

<Menu
id="demo-positioned-menu"
aria-labelledby="demo-positioned-button"
anchorEl={anchorEl}
open={open}
onClose={handleClose}
anchorOrigin={{
vertical: "bottom",
horizontal: "center",
}}
transformOrigin={{
vertical: "top",
horizontal: "center",
}}
sx={{ mx: "0px", my: "0px", px: "20px" }}
>
<MenuItem onClick={handleClose}> View Profile</MenuItem>
<List>
{["Acccount", "Manage"].map((text, index) => (
<ListItem key={text} disablePadding>
<ListItemButton>
<ListItemText primary={text} />
</ListItemButton>
</ListItem>
))}
</List>
<Divider />
<MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>
</Box>
);
}

export function SwipeableTemporaryDrawer() {
const [state, setState] = React.useState({
top: false,
left: false,
bottom: false,
right: false,
});

const toggleDrawer =
(anchor: Anchor, open: boolean) =>
(event: React.KeyboardEvent | React.MouseEvent) => {
if (
event &&
event.type === "keydown" &&
((event as React.KeyboardEvent).key === "Tab" ||
(event as React.KeyboardEvent).key === "Shift")
) {
return;
}
setState({ ...state, [anchor]: open });
};

const list = (anchor: Anchor) => (
<Box>
<List>
{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
<ListItem key={text} disablePadding>
<ListItemButton>
<ListItemIcon>
{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
</ListItemIcon>
<ListItemText primary={text} />
</ListItemButton>
</ListItem>
))}
</List>
<Divider />
<List>
{["All mail", "Trash", "Spam"].map((text, index) => (
<ListItem key={text} disablePadding>
<ListItemButton>
<ListItemIcon>
{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
</ListItemIcon>
<ListItemText primary={text} />
</ListItemButton>
</ListItem>
))}
</List>
</Box>
);

return (
<div>
{(["right"] as const).map((anchor) => (
<React.Fragment key={anchor}>
<Typography onClick={toggleDrawer(anchor, true)}>
<Stack
direction={"column"}
alignItems={"center"}
sx={navbarStyles.linkinnerContainer}
>
<Box
component={"img"}
src={bussiness}
sx={{ ...navbarStyles.homeIcon, mt: "5px" }}
/>
<Typography
sx={{
...navbarStyles.linkinnerContainerText,
color: "grey",
width: "12ch",
}}
>
For Bussiness
</Typography>
</Stack>
</Typography>
<SwipeableDrawer
anchor={anchor}
open={state[anchor]}
onClose={toggleDrawer(anchor, false)}
onOpen={toggleDrawer(anchor, true)}
>
{list(anchor)}
</SwipeableDrawer>
</React.Fragment>
))}
</div>
);
}
