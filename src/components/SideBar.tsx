import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { homeStyles } from "../pages/Styles/homeStyles";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../App/Store";
import { uploadUrl } from "../features/Slider";

const SideBar = () => {
  const { profileUrl } = useSelector((state: RootState) => state.Slider);
  const dispatch = useDispatch();
  const handlerUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const url: File = (event.target.files as FileList)[0];
    dispatch(url && uploadUrl(URL.createObjectURL(url)));
  };
  return (
    <>
      <Stack
        direction={"column"}
        alignItems={"center"}
        gap={1.5}
        sx={homeStyles.sideBar.container}
      >
        <Box sx={homeStyles.sideBar.headerImg}>
          <Box component={"label"} htmlFor="image">
            <Box
              component={"img"}
              src={
                profileUrl ||
                "data:image/jpeg;base64,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"
              }
              sx={homeStyles.sideBar.profile}
            />
          </Box>

          <Box
            component={"input"}
            onChange={handlerUpload}
            type="file"
            id="image"
            sx={homeStyles.sideBar.uploadBtn}
          />
        </Box>

        <Typography sx={homeStyles.sideBar.fontWeights}>
          welcome Sriram
        </Typography>
        <Typography
          width={"80%"}
          textAlign={"center"}
          sx={homeStyles.sideBar.smallFonts}
        >
          Hyderabad/Graduation (2021) /good at Full stack web-dev
        </Typography>
        <Divider sx={homeStyles.sideBar.divider} />
        <Stack direction={"column"} width={"90%"}>
          <Typography sx={homeStyles.sideBar.secondaryText}>
            Connections
          </Typography>
          <Typography
            sx={{
              ...homeStyles.sideBar.smallFonts,
              ...homeStyles.sideBar.fontWeights,
            }}
          >
            Grow your network
          </Typography>
        </Stack>
        <Divider sx={homeStyles.sideBar.divider} />

        <Stack direction={"column"} width={"90%"}>
          <Typography sx={homeStyles.sideBar.smallFonts} color={"secondary"}>
            Strengthen your profile with an AI writing assistant
          </Typography>
          <Typography
            sx={{
              ...homeStyles.sideBar.smallFonts,
              ...homeStyles.sideBar.fontWeights,
            }}
          >
            Try Premium for free
          </Typography>
        </Stack>
        <Divider sx={homeStyles.sideBar.divider} />
        <Stack direction={"row"} alignItems={"center"} gap={1} width={"90%"}>
          <BookmarkIcon color="secondary" />

          <Typography sx={homeStyles.sideBar.fontWeights}>My items</Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"column"}
        alignItems={"center"}
        gap={1.5}
        sx={homeStyles.sideBar.container}
      >
        <Stack direction={"column"} width={"90%"}>
          <Typography sx={homeStyles.sideBar.smallFonts} color={"secondary"}>
            Strengthen your profile with an AI writing assistant
          </Typography>
          <Typography
            sx={{
              ...homeStyles.sideBar.smallFonts,
              ...homeStyles.sideBar.fontWeights,
            }}
          >
            Try Premium for free
          </Typography>
        </Stack>
        <Divider sx={homeStyles.sideBar.divider} />
        <Stack direction={"column"} width={"90%"}>
          <Typography sx={homeStyles.sideBar.secondaryText}>
            Connections
          </Typography>
          <Typography
            sx={{
              ...homeStyles.sideBar.smallFonts,
              ...homeStyles.sideBar.fontWeights,
            }}
          >
            Grow your network
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default SideBar;
