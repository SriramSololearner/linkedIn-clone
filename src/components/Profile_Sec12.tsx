import { Box, Container, LinearProgress } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { styles } from "../pages/Styles/ProfilePage";

const Profile_Sec12 = () => {

  return (
    <Container>
        <Box sx={styles.profile_sec12_container}>
          <Box sx={styles.profile_sec12_text_div}>
            <Box sx={styles.profile_sec12_heading}>Suggested for you</Box>
            <Box sx={styles.profile_sec12_subheading}><VisibilityIcon /> <Box>Private to you</Box></Box>
          </Box>
          <Box sx={styles.profile_sec12_level_div}>
            <Box sx={styles.profile_sec12_level_title}>Intermediate</Box>
            <LinearProgress variant="buffer" value={80}  />
            <Box>Complete 1 step to achieve </Box>
          </Box>
          
        </Box>
       
    </Container>
  );
};

export default Profile_Sec12;


