import { Typography, Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { advImg, networkFooter } from "../data/Data";
import { network } from "../pages/Styles/networkPageStyles";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import company from "../Assets/linkedin.svg";
import { useState } from "react";

const Network = () => {
  const [showNetwork, setShowNetwork] = useState<boolean>(true);

  const showNetworkData = () => {
    setShowNetwork(!showNetwork);
  };
  return (
    <Box sx={network.manageCont.mainCont}>
      <Box sx={network.manageCont.manageCont}>
        <Typography sx={network.manageCont.manageText}>
          Manage my network
        </Typography>
        <Box sx={network.manageCont.fieldCont}>
          <PeopleAltIcon sx={network.manageCont.icons} />
          <Typography sx={network.manageCont.text}>Connections</Typography>
        </Box>
        <Box
          sx={
            showNetwork
              ? network.manageCont.displayNetwork
              : network.manageCont.hideDisplayNetwork
          }
        >
          <Box sx={network.manageCont.fieldCont}>
            <PersonIcon sx={network.manageCont.icons} />
            <Typography sx={network.manageCont.text}>
              Following & Followers
            </Typography>
          </Box>
          <Box sx={network.manageCont.fieldCont}>
            <GroupsIcon sx={network.manageCont.icons} />
            <Typography sx={network.manageCont.text}>Groups</Typography>
          </Box>
          <Box sx={network.manageCont.fieldCont}>
            <CalendarMonthIcon sx={network.manageCont.icons} />
            <Typography sx={network.manageCont.text}>Events</Typography>
          </Box>
          <Box sx={network.manageCont.fieldCont}>
            <ArticleOutlinedIcon sx={network.manageCont.icons} />
            <Typography sx={network.manageCont.text}>Pages</Typography>
          </Box>
          <Box sx={network.manageCont.fieldCont}>
            <NewspaperOutlinedIcon sx={network.manageCont.icons} />
            <Typography sx={network.manageCont.text}>Newsletters</Typography>
          </Box>
          <Box sx={network.manageCont.fieldCont}>
            <TagOutlinedIcon sx={network.manageCont.icons} />
            <Typography sx={network.manageCont.text}>Hashtag</Typography>
          </Box>
        </Box>
        <Button
          variant="outlined"
          sx={network.manageCont.showMoreBtn}
          endIcon={
            showNetwork ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )
          }
          onClick={showNetworkData}
        >
          Show less
        </Button>
      </Box>
      <Divider sx={network.manageCont.divider} />
      <Box sx={network.manageCont.advImgCont}>
        <Box component={"img"} src={advImg} sx={network.manageCont.advImg} />
      </Box>
      <Box sx={network.manageCont.footerCont}>
        <Box sx={network.manageCont.footerList}>
          {networkFooter.map((string, index) => (
            <Typography key={index} sx={network.manageCont.footerText}>
              {string}
            </Typography>
          ))}
        </Box>
        <Box sx={network.manageCont.copyrightCont}>
          <Box
            component={"img"}
            src={company}
            sx={network.manageCont.footerImg}
          />
          <Typography sx={network.manageCont.copyrightText}>
            LinkedIn Corporation © 2024
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Network;
