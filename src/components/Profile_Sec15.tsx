import { Box, Button, Container } from "@mui/material";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import GroupIcon from "@mui/icons-material/Group";
import { styles } from "../pages/Styles/ProfilePage";
const Profile_Sec15 = () => {
  return (
    <Container>
      <Box sx={styles.profile_sec13_container}>
        <Box sx={styles.profile_sec12_text_div}>
          <Box sx={styles.profile_sec12_heading}>Resourse</Box>
          <Box sx={styles.profile_sec12_subheading}>
            <GroupIcon /> <Box>Private to you</Box>
          </Box>
        </Box>
        <Box sx={styles.profile_sec15_middle_div}>
          <Box sx={styles.profile_sec13_subheading}>
            <OnlinePredictionIcon />
            <Box sx={styles.profile_sec13_para1}>
              <Box sx={styles.profile_sec13_profile_text}>Create Mode</Box>
              <Box>
                Get discovered, showcase content on your profile, and get access
                to creator tools
              </Box>
            </Box>
          </Box>

          <Box sx={styles.profile_sec13_subheading}>
            <GroupIcon />
            <Box sx={styles.profile_sec13_para1}>
              <Box sx={styles.profile_sec13_profile_text}>My Network</Box>
              <Box>network See and manage your connections and interests.</Box>
            </Box>
          </Box>
        </Box>
        <Button sx={styles.profile_sec13_button}>Show all Resourses</Button>
      </Box>
    </Container>
  );
};

export default Profile_Sec15;
