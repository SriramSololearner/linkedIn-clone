import { Box, Button, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { styles } from "../pages/Styles/ProfilePage";
import { Users } from "./Friends";

const Profile_Sec23 = () => {
  return (
    <Container>
      <Box sx={styles.profile_right_sec23_div}>
        <Box sx={styles.profile_right_sec23_friend_name}>
          People also viewed
        </Box>
        {Users.map((item) => (
          <Box sx={styles.profile_right_sec23_friends_div} key={item.id}>
            <Box
              component="img"
              src={item.image}
              sx={styles.profile_right_sec23_friend_img}
            />
            <Box sx={styles.profile_right_sec23_friends}>
              <Box sx={styles.profile_right_sec23_friend_name}>{item.name}</Box>
              <Box sx={styles.profile_right_sec23_friend_role}>
                {item.jobtitle}
              </Box>
              <Box>
                <Button
                  sx={styles.profile_right_sec23_friend_text}
                  endIcon={<SendIcon />}
                >
                  {item.text}
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Profile_Sec23;
