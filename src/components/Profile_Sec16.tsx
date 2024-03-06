import { Box, Button, Container } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { styles } from "../pages/Styles/ProfilePage";
const Profile_Sec16 = () => {
  return (
    <Container>
      <Box sx={styles.profile_sec16_container}>
        
     <Box sx={styles.profile_sec16_container_top_button_icom_div}>
     <Button sx={styles.profile_sec16_container_top_icon}>Show all Resourses</Button>
     <EditIcon sx={styles.profile_sec16_container_top_button}  />
     </Box>
        <Box sx={styles.profile_sec14_title}>Activity</Box>
        <Box sx={styles.profile_sec16_title_div}>
            <Box sx={styles.profile_sec16_title}>You haven’t posted yet</Box>
            <Box sx={styles.profile_sec16_sub_title}>Posts you share will be displayed here.</Box>
        </Box>
        <Button sx={styles.profile_sec13_button}>Show all</Button>
      </Box>
     
    </Container>
  );
};

export default Profile_Sec16;
