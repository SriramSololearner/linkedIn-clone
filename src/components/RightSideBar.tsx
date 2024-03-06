import {
  Box,
  Button,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { homeStyles } from "../pages/Styles/homeStyles";
import { networkFooter } from "../utils/data";
import company from "../Assets/company.svg";
const RightSideBar = () => {
  return (
    <Stack direction={"column"} gap={1} width={"100%"}>
      <Stack direction={"column"} sx={homeStyles.rightSideBar.container}>
        <Typography sx={homeStyles.sideBar.fontWeights}>
          Linkedin News
        </Typography>
        <ListItem>
          <ListItemText
            sx={homeStyles.rightSideBar.listItem}
            primary="India's GCC potential soars"
            secondary="2d ago • 156 readers"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            sx={homeStyles.rightSideBar.listItem}
            primary="M&A deals on growth path"
            secondary="1d ago • 185 readers"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            sx={homeStyles.rightSideBar.listItem}
            primary="Travel firms on green path"
            secondary="3d ago • 1,147 readers"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            sx={homeStyles.rightSideBar.listItem}
            primary="India's GCC potential soars"
            secondary="3d ago • 925 readers"
          />
        </ListItem>
      </Stack>
      <Stack
        direction={"column"}
        alignItems={"center"}
        sx={homeStyles.sideBar.container}
      >
        <Stack
          direction={"column"}
          gap={1}
          alignItems={"center"}
          width="90%"
          m={2}
        >
          <Typography
            sx={homeStyles.sideBar.combiFont}
            color={"secondary"}
            textAlign={"center"}
          >
            Help create a more connected and joyful world with us.
          </Typography>
          <Box
            component={"img"}
            src={company}
            sx={homeStyles.rightSideBar.img}
          />
          <Typography
            textAlign={"center"}
            width={"90%"}
            sx={homeStyles.sideBar.combiFont}
          >
            Sri, you might like to follow SoftBank Group Corp.
          </Typography>
          <Button variant="outlined" sx={homeStyles.rightSideBar.btn}>
            follow
          </Button>
        </Stack>
      </Stack>
      <Box sx={homeStyles.footerCont}>
        <Box sx={homeStyles.footerList}>
          {networkFooter.map((string, index) => (
            <Typography key={index} sx={homeStyles.footerText}>
              {string}
            </Typography>
          ))}
        </Box>
        <Box sx={homeStyles.copyrightCont}>
          <Box component={"img"} src={""} sx={homeStyles.footerImg} />
          <Typography sx={homeStyles.copyrightText}>
            LinkedIn Corporation © 2024
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default RightSideBar;
