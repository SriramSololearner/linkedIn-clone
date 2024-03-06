import { Box, Button, Container } from "@mui/material";
import { styles } from "../pages/Styles/ProfilePage";
const Profile_Sec22 = () => {
  return (
    <Container>
      <Box sx={styles.profile_right_sec22_div}>
        <Box sx={styles.profile_right_sec22_img_div}>
          <Box
            component="img"
            src={require("../Assets/user.png")}
            sx={styles.profile_right_sec22_img1}
          />
          <Box
            component="img"
            src={require("../Assets/jobs.png")}
            sx={styles.profile_right_sec22_img2}
          />
        </Box>
        <Box>See remote jobs posted in the last 24 hours</Box>
        <Box>
          <Button sx={styles.profile_right_sec22_button}>See Jobs</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile_Sec22;
