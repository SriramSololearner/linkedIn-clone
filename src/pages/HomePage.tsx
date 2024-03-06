import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  Modal,
  Stack,
  Typography,
} from "@mui/material";

import PostsCard from "../components/PostsCard";
import SideBar from "../components/SideBar";
import { homeStyles } from "../pages/Styles/homeStyles";
import RightSideBar from "../components/RightSideBar";
import profile from "../Assets/download.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../App/Store";
import { useState } from "react";
import { addPost } from "../features/Slider";
import { Navbar } from "../components/Navbar";

import {
  CalendarMonth,
  MmsSharp,
  FormatIndentDecrease,
  PhotoSizeSelectActual,
} from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

interface Istate {
  open: boolean;
  inputData: string;
}

const Home = () => {
  const { profileUrl, userData } = useSelector(
    (state: RootState) => state.Slider
  );
  const [inputData, setInputData] = useState<Istate["inputData"]>("");
  const dispatch = useDispatch();
  const [open, setOpen] = useState<Istate["open"]>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlerPost = () => {
    if (inputData !== "") {
      dispatch(addPost(inputData));
    } else {
      alert("add something");
    }
    setInputData("");
    handleClose();
  };
  return (
    <Box sx={homeStyles.main}>
      <Navbar />
      <Container maxWidth={"lg"} sx={{ mt: "30px" }}>
        <Grid container spacing={{ xs: 0, sm: 1, lg: 2 }} width={"100%"}>
          <Grid item xs={12} md={2.6}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={6.2}>
            <Stack direction={"column"} gap={1} width={"100%"}>
              <Stack
                direction={"column"}
                alignItems={"center"}
                gap={1}
                sx={homeStyles.postheader}
              >
                <Stack direction={"row"} width={"100%"}>
                  <Box
                    component={"img"}
                    src={profileUrl || profile}
                    sx={homeStyles.postheader.img}
                  />
                  <Box
                    component={"input"}
                    placeholder="Start a post"
                    onClick={handleOpen}
                    sx={homeStyles.postheader.input}
                  />
                </Stack>
                <Stack
                  direction={"row"}
                  gap={1}
                  width={"90%"}
                  justifyContent={"space-between"}
                >
                  <Button
                    startIcon={<PhotoSizeSelectActual />}
                    sx={{
                      ...homeStyles.postheader.btn1,
                      "& .MuiButton-startIcon>*:nth-of-type(1)": {
                        color: "#378fe9",
                      },
                    }}
                  >
                    Media
                  </Button>
                  <Button
                    startIcon={<CalendarMonth />}
                    sx={{
                      ...homeStyles.postheader.btn1,
                      "& .MuiButton-startIcon>*:nth-of-type(1)": {
                        color: "#e06847",
                        border: "1px solid red",
                      },
                    }}
                  >
                    Events
                  </Button>
                  <Button
                    startIcon={<FormatIndentDecrease />}
                    sx={{
                      ...homeStyles.postheader.btn1,
                      "& .MuiButton-startIcon>*:nth-of-type(1)": {
                        color: "#e06847",
                      },
                    }}
                  >
                    Write Article
                  </Button>
                </Stack>
              </Stack>
              {userData.map((user) => (
                <PostsCard user={user} key={user.id} />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={3.2} display={{ xs: "none", md: "block" }}>
            <RightSideBar />
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box>
              <Stack>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Sriram
                </Typography>
              </Stack>
              <InputBase
                multiline
                placeholder="what do you want to talk about"
                fullWidth
                onChange={(evt) => setInputData(evt.target.value)}
              />
            </Box>

            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack
                direction={"row"}
                gap={2}
                color={"grey"}
                alignItems={"center"}
              >
                <CalendarMonth />
                <MmsSharp />
              </Stack>
              <Button
                variant="outlined"
                onClick={handlerPost}
                sx={homeStyles.posts.postBtn}
              >
                Post
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default Home;
