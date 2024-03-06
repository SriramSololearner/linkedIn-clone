import { InboxOutlined, Mail, Search } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Styles } from "./Styles/JobsPage";
import { Navbar } from "../components/Navbar";

const JobsPage = () => {
  return (
    <Box sx={Styles.root}>
      <Navbar />
      <Container maxWidth="lg" sx={Styles.root}>
        <Grid container spacing={{ xs: 0, sm: 1, lg: 2 }} width={"100%"}>
          <Grid item xs={12} md={4} lg={4}>
            <List sx={Styles.listStyles}>
              {[
                "My jobs",
                "Preferences",
                "Skill Assessments",
                "Interview prep",
                "Resume Builder",
                "Job seeker guidance",
                "Application settings",
              ].map((text, index) => (
                <ListItem key={text}>
                  <Stack direction={"row"}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxOutlined /> : <Mail />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </Stack>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box sx={Styles.jobSearchContainer}>
              <Typography>Suggested job searches</Typography>
              <Stack
                direction={"row"}
                gap={2}
                alignItems={"center"}
                flexWrap={"wrap"}
              >
                {[
                  "marketing manager",
                  "hr",
                  "legal",
                  "sales",
                  "amazon",
                  "google",
                  "analyst",
                ].map((text, ind) => (
                  <Box sx={Styles.jobSearchContainerItem}>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      sx={Styles.container}
                    >
                      <Search
                        sx={{ ...Styles.colorStyle, ...Styles.iconStyles }}
                      />{" "}
                      <Box sx={Styles.colorStyle}>{text}</Box>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JobsPage;
