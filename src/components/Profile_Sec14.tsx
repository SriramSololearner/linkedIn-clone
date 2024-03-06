import { Box, Container} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { styles } from "../pages/Styles/ProfilePage";

const Profile_Sec14 = () => {
  return (
    <Container>
      <Box sx={styles.profile_sec14_container}>
        <EditIcon sx={styles.profile_sec14_edit_icon} />
        <Box sx={styles.profile_sec14_title}>About</Box>
        <Box sx={styles.profile_sec14_sub_title}>
          After my graduation of B. Tech in the year of 2021, I was joined
          INKPROG in the year of sept-2022, I complete Full-Stack training in 4
          months and Now I was working on a real time project in my training
          period.
        </Box>
      </Box>
    </Container>
  );
};

export default Profile_Sec14;
