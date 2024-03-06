import { Box, Typography } from "@mui/material";
import joinFooterStyles from "./joinnowFooterStyles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function JoinnowFooter() {
  return (
    <Box sx={joinFooterStyles.body}>
      <Box sx={joinFooterStyles.subcon}>
        <Box sx={joinFooterStyles.eachcon}>
          <Box sx={joinFooterStyles.iconcon}>
            <Typography sx={joinFooterStyles.iocntext}>
              Linked<Typography component="span">in</Typography>
            </Typography>
            <Typography sx={joinFooterStyles.year}>@ 2024</Typography>
          </Box>
          <Typography sx={joinFooterStyles.eachtext}>About</Typography>
        </Box>
        <Box sx={joinFooterStyles.eachcon}>
          <Typography sx={joinFooterStyles.eachtext}>Accessibilty</Typography>
          <Typography sx={joinFooterStyles.eachtext}>User Agreement</Typography>
        </Box>
        <Box sx={joinFooterStyles.eachcon}>
          <Typography sx={joinFooterStyles.eachtext}>Privacy Policy</Typography>
          <Typography sx={joinFooterStyles.eachtext}>Cookie Policy</Typography>
        </Box>
        <Box sx={joinFooterStyles.eachcon}>
          <Typography sx={joinFooterStyles.eachtext}>Copyright</Typography>
          <Typography sx={joinFooterStyles.eachtext}>Brand Policy</Typography>
        </Box>
        <Box sx={joinFooterStyles.eachcon}>
          <Typography sx={joinFooterStyles.eachtext}>Guest Controls</Typography>
          <Typography sx={joinFooterStyles.eachtext}>
            Commuinity Guidlines
          </Typography>
        </Box>
        <Box sx={joinFooterStyles.eachcon}>
          <Typography sx={joinFooterStyles.eachtext1}>
            Languages <KeyboardArrowDownIcon />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
