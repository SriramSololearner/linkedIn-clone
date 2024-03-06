import { Box,Container } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { styles } from "../pages/Styles/ProfilePage";
const Profile_Sec21 = () => {
  return (
    <Container>
      
        <Box sx={styles.profile_right_sec1_div}>
            <Box sx={styles.profile_right_sec1_top_div}>
                <Box sx={styles.profile_right_sec1_top_text_div}>
                    <Box sx={styles.profile_right_sec1_top_text}>Profile language</Box>
                    <Box sx={styles.profile_right_sec1_top_sub_text}>English</Box>
                </Box>
                <EditIcon sx={styles.profile_right_sec21_bottom_icon} />

            </Box>
            <Box sx={styles.profile_right_sec1_top_div2}>
                <Box sx={styles.profile_right_sec1_top_text_div}>
                    <Box sx={styles.profile_right_sec1_top_text}>Public Profile Url</Box>
                    <Box sx={styles.profile_right_sec1_top_sub_text}>www.linkedin.com/in/vamsi-kommanapalli-85b935145</Box>
                </Box>
                <EditIcon  sx={styles.profile_right_sec21_bottom_icon} />

            </Box>
         
          </Box>
        
    </Container>
  );
};

export default Profile_Sec21;


