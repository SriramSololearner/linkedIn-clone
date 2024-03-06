import { Box, Button, Container } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { styles } from "../pages/Styles/ProfilePage";
import { RequestUsers } from "./Friends";

const Profile_Sec24 = () => {
  return (
    <Container>
      <Box sx={styles.profile_right_sec23_div}>
        <Box sx={styles.profile_right_sec23_friend_name}>
          People You May Know
        </Box>
        {RequestUsers.map((item) => (
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
                  startIcon={<PersonAddAlt1Icon />}
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

export default Profile_Sec24;
