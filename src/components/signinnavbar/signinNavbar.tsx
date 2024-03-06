import signinstyles from "./signinNavabarStyles";
import { Box, Container, Grid, Typography } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkIcon from "@mui/icons-material/Work";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import YouTubeIcon from "@mui/icons-material/YouTube";
import globalstyles from "../../global";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
export default function SigninNavbar() {
  const navigate = useNavigate();
  return (
    <Box sx={signinstyles.body}>
      <Box sx={signinstyles.iconcon.between}>
        <Typography sx={signinstyles.logo}>
          Linked<Typography component="span">in</Typography>
        </Typography>
        <Box sx={{ ...globalstyles.spacebetween, ...signinstyles.naviconcon }}>
          <Box sx={globalstyles.generalcolumn}>
            <NewspaperIcon sx={signinstyles.icons} />
            <Typography sx={signinstyles.iconstext}>Articles</Typography>
          </Box>
          <Box sx={globalstyles.generalcolumn}>
            <PeopleAltIcon sx={signinstyles.icons} />
            <Typography sx={signinstyles.iconstext}>People</Typography>
          </Box>
          <Box sx={globalstyles.generalcolumn}>
            <YouTubeIcon sx={signinstyles.icons} />
            <Typography sx={signinstyles.iconstext}>Learning</Typography>
          </Box>
          <Box sx={globalstyles.generalcolumn}>
            <WorkIcon sx={signinstyles.icons} />
            <Typography sx={signinstyles.iconstext}>Jobs</Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={signinstyles.divider} />
        </Box>
        <Box sx={{ ...globalstyles.spacebetween, ...signinstyles.signincon }}>
          <Typography
            sx={{ ...signinstyles.join, ...signinstyles.joinNow }}
            onClick={() => navigate("/joinnow")}
          >
            Join now
          </Typography>
          <Typography sx={signinstyles.signinbtn}>Sign in</Typography>
        </Box>
      </Box>
    </Box>
  );
}
