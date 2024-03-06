import { Box, Container, IconButton, InputBase, Paper } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styles } from "../pages/Styles/ProfilePage";

const Footer = () => {
  return (
    <Container sx={styles.footer_parent}>
      <Box sx={styles.footer_inner_div}>
        <Box sx={styles.footer_part1_div}>
          <Box sx={styles.footer_link}>About</Box>
          <Box sx={styles.footer_link}>Community Guidelines</Box>
          <Box sx={styles.footer_link}>Privacy & Terms</Box>
          <Box sx={styles.footer_link}>Sales Solutions</Box>
          <Box sx={styles.footer_link}>Safety Center</Box>
        </Box>

        <Box sx={styles.footer_part1_div}>
          <Box sx={styles.footer_link}>Accessibility</Box>
          <Box sx={styles.footer_link}>Carrers</Box>
          <Box sx={styles.footer_link}>Ad Choices</Box>
          <Box sx={styles.footer_link}>Mobiles</Box>
        </Box>

        <Box sx={styles.footer_part1_div}>
          <Box sx={styles.footer_link}>Talent Solutions</Box>
          <Box sx={styles.footer_link}>Marketing Solutions</Box>
          <Box sx={styles.footer_link}>Advertising</Box>
          <Box sx={styles.footer_link}>small Business</Box>
        </Box>

        <Box sx={styles.input_icons_text_div}>
          <Box sx={styles.footer_icon_text_parent}>
            <Box sx={styles.footer_icons_text_div}>
              <Box>
                <QuestionMarkIcon sx={styles.footer_icons} />
              </Box>
              <Box sx={styles.footer_links_div}>
                <Box sx={styles.footer_link_text}>Questions ?</Box>
                <Box sx={styles.footer_link_subtext}>
                  Visit our Help Center.
                </Box>
              </Box>
            </Box>
            <Box sx={styles.footer_icons_text_div}>
              <Box>
                <SettingsIcon sx={styles.footer_icons} />
              </Box>
              <Box sx={styles.footer_links_div}>
                <Box sx={styles.footer_link_text}>
                  Manage your account and privacy
                </Box>
                <Box sx={styles.footer_link_subtext}>Go to your Settings.</Box>
              </Box>
            </Box>
            <Box sx={styles.footer_icons_text_div}>
              <Box>
                <SecurityIcon sx={styles.footer_icons} />
              </Box>
              <Box sx={styles.footer_links_div}>
                <Box sx={styles.footer_link_text}>
                  Recommendation transparency
                </Box>
                <Box sx={styles.footer_link_subtext}>
                  Learn more about Recommended Content.
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={styles.footer_input_div}>
            <Box sx={styles.footer_input_text}>Select Language</Box>
            <Paper component="form" sx={styles.footer_form_paper}>
              <InputBase
                sx={styles.footer_inputbase}
                placeholder="English(english)"
                inputProps={{ "aria-label": "search google maps" }}
              />

              <IconButton
                color="primary"
                sx={styles.footer_input_icon}
                aria-label="directions"
              >
                <ArrowDropDownIcon />
              </IconButton>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default Footer;
