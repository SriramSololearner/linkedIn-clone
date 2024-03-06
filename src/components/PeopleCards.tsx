import { Box, Button, Paper, Typography } from "@mui/material";
import { network } from "../pages/Styles/networkPageStyles";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../App/Store";
import { folowingPeopleRed, removingPeopleRed } from "../features/Slider";

const PeopleCards = () => {
  const { popularPeopleList } = useSelector((state: RootState) => state.Slider);
  const dispatch = useDispatch();

  const onClickFollow = (id: number) => {
    dispatch(folowingPeopleRed(id));
  };

  const onClickRemove = (id: number) => {
    dispatch(removingPeopleRed(id));
  };
  return (
    <Box sx={network.cardsCont.mainCont}>
      <Box sx={network.cardsCont.pendingCont}>
        <Typography>No Pending Invitations</Typography>
        <Typography>Manage</Typography>
      </Box>
      <Box sx={network.cardsCont.cardsCont}>
        <Box sx={network.cardsCont.titleCont}>
          <Typography>Popular people to follow across LinkedIn</Typography>
          <Typography>See all</Typography>
        </Box>
        <Box sx={network.cardsCont.peoplesList}>
          {popularPeopleList.map((person) => (
            <Paper
              key={person.id}
              sx={network.cardsCont.peoplesPaper}
              elevation={0}
            >
              <Box sx={network.cardsCont.peopleImagesCont}>
                <Box sx={network.cardsCont.peopleBgImgCont}>
                  <Box
                    component={"img"}
                    src={person.bgImgUrl}
                    sx={network.cardsCont.peopleBgImg}
                  />
                </Box>
                <Box sx={network.cardsCont.peopleProfileImgCont}>
                  <Box
                    component={"img"}
                    src={person.profileImgUrl}
                    sx={network.cardsCont.peopleProfileImg}
                  />
                </Box>
                <CloseRoundedIcon
                  sx={network.cardsCont.closeIcon}
                  onClick={() => onClickRemove(person.id)}
                />
              </Box>
              <Box sx={network.cardsCont.personDetailsCont}>
                <Box>
                  <Typography sx={network.cardsCont.personName}>
                    {person.name}
                  </Typography>
                  <Typography sx={network.cardsCont.personDesignation}>
                    {person.designation}
                  </Typography>
                  <Typography sx={network.cardsCont.personTalks}>
                    {person.talks}
                  </Typography>
                </Box>
                <Box sx={network.cardsCont.personBtnCont}>
                  <Typography sx={network.cardsCont.personFollowers}>
                    {person.followers} followers
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={
                      person.followed
                        ? network.cardsCont.followedBtn
                        : network.cardsCont.followBtn
                    }
                    onClick={() => onClickFollow(person.id)}
                  >
                    {person.followed ? "Following" : "Follow"}
                  </Button>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PeopleCards;
