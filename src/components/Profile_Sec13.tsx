import { Box, Button, Container } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import { styles } from "../pages/Styles/ProfilePage";

const Profile_Sec13 = () => {
  return (
    <Container>
      <Box sx={styles.profile_sec13_container}>
        <Box sx={styles.profile_sec12_text_div}>
          <Box sx={styles.profile_sec12_heading}>Analytics</Box>
          <Box sx={styles.profile_sec12_subheading}>
            <GroupIcon /> <Box>Private to you</Box>
          </Box>
        </Box>
        <Box sx={styles.profile_sec13_middle_div}>
          <Box sx={styles.profile_sec13_subheading}>
            <VisibilityIcon />
            <Box sx={styles.profile_sec13_para1}>
              <Box sx={styles.profile_sec13_profile_text}>27 profile views</Box>
              <Box> Discover who's viewed your profile.</Box>
            </Box>
          </Box>

          <Box sx={styles.profile_sec13_subheading}>
            <SearchIcon />
            <Box sx={styles.profile_sec13_para1}>
              <Box sx={styles.profile_sec13_profile_text}>
                14 search appearances
              </Box>
              <Box>See how often you appear in search results.</Box>
            </Box>
          </Box>
        </Box>
        <Button sx={styles.profile_sec13_button}>Show all analytics</Button>
      </Box>
    </Container>
  );
};

export default Profile_Sec13;
