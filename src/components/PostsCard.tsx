import { Box, Button, ListItemText, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import { SlLike } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { homeStyles } from "../pages/Styles/homeStyles";

interface IProps {
  user: {
    id: number;
    name: string;
    followers: string;
    image: string;
    text: string;
  };
}
const PostsCard = ({ user }: IProps) => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      gap={1}
      sx={homeStyles.posts.container}
    >
      <Stack
        direction={"row"}
        width={"95%"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <Box
          component={"img"}
          src={`https://source.unsplash.com/sig=${Math.floor(
            Math.random() * 100
          )}`}
          sx={homeStyles.posts.postPropfile}
        />
        <ListItemText
          primary={user.name}
          secondary={`${user.followers || 142} followers`}
        />
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <MoreHorizIcon />
          <CloseIcon />
        </Stack>
      </Stack>
      <Typography sx={homeStyles.posts.description}>{user.text}</Typography>
      <Box component={"img"} src={user.image} width="100%" maxHeight="500px" />
      <Stack
        direction={"row"}
        gap={1}
        width={"95%"}
        justifyContent={"space-between"}
      >
        <Button startIcon={<SlLike />} fullWidth sx={homeStyles.posts.btns}>
          like
        </Button>
        <Button
          startIcon={<BiMessageRoundedDetail />}
          fullWidth
          sx={homeStyles.posts.btns}
        >
          comment
        </Button>
        <Button startIcon={<BiRepost />} fullWidth sx={homeStyles.posts.btns}>
          repost
        </Button>
        <Button startIcon={<IoIosSend />} fullWidth sx={homeStyles.posts.btns}>
          send
        </Button>
      </Stack>
    </Stack>
  );
};

export default PostsCard;
