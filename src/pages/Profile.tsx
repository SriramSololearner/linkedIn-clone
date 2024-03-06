import { Box, Container, Grid } from "@mui/material";
import Footer from "../components/Footer";
import ProfileSec11 from "../components/Profile_Sec11";
import ProfileSec12 from "../components/Profile_Sec12";
import ProfileSec13 from "../components/Profile_Sec13";
import ProfileSec14 from "../components/Profile_Sec14";
import { styles } from "../pages/Styles/ProfilePage";
import ProfileSec15 from "../components/Profile_Sec15";
import ProfileSec16 from "../components/Profile_Sec16";
import ProfileSec21 from "../components/profile_Sec21";
import ProfileSec22 from "../components/Profile_Sec22";
import ProfileSec23 from "../components/Profile_Sec23";
import ProfileSec24 from "../components/Profile_Sec24";
import { Navbar } from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Box sx={styles.background_linked_profile}>
        <Container>
          <Grid container sx={styles.profile_grid_div}>
            <Grid md={8} sm={12} xs={12} sx={styles.profile_main_grid_left}>
              <ProfileSec11 />
              <ProfileSec12 />
              <ProfileSec13 />
              <ProfileSec15 />
              <ProfileSec14 />
              <ProfileSec16 />
            </Grid>
            <Grid md={4} sm={12} xs={12} sx={styles.profile_main_grid_left}>
              <ProfileSec21 />
              <ProfileSec22 />
              <ProfileSec23 />
              <ProfileSec24 />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Profile;
